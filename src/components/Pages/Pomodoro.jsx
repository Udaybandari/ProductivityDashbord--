import React, { useState, useEffect, useRef } from "react";

const MODES = {
  work: { label: "Work", duration: 25 * 60 },
  shortBreak: { label: "Short Break", duration: 5 * 60 },
  longBreak: { label: "Long Break", duration: 15 * 60 },
};

const Pomodoro = () => {
  const [mode, setMode] = useState("work");
  const [timeLeft, setTimeLeft] = useState(MODES["work"].duration);
  const [isRunning, setIsRunning] = useState(false);
  const [cycles, setCycles] = useState(0);
  const intervalRef = useRef(null);
  const hasLoadedRef = useRef(false);

  // ✅ Load saved state on mount
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("pomodoroState"));
    if (saved) {
      const { mode, timeLeft, cycles, lastUpdated, isRunning } = saved;

      const now = Date.now();
      let updatedTimeLeft = timeLeft;

      if (isRunning && lastUpdated) {
        const secondsPassed = Math.floor((now - lastUpdated) / 1000);
        updatedTimeLeft = Math.max(timeLeft - secondsPassed, 0);
      }

      setMode(mode || "work");
      setTimeLeft(updatedTimeLeft);
      setCycles(cycles || 0);
      setIsRunning(updatedTimeLeft > 0 && isRunning);
    }
    hasLoadedRef.current = true;
  }, []);

  // ✅ Save state to localStorage on change
  useEffect(() => {
    const stateToSave = {
      mode,
      timeLeft,
      cycles,
      isRunning,
      lastUpdated: Date.now(),
    };
    localStorage.setItem("pomodoroState", JSON.stringify(stateToSave));
  }, [mode, timeLeft, cycles, isRunning]);

  // ✅ Reset timer when manually switching mode
  useEffect(() => {
    if (hasLoadedRef.current) {
      clearInterval(intervalRef.current);
      setTimeLeft(MODES[mode].duration);
      setIsRunning(false);
    }
  }, [mode]);

  // ✅ Timer countdown
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            handleModeSwitch();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleModeSwitch = () => {
    if (mode === "work") {
      const newCycles = cycles + 1;
      setCycles(newCycles);
      setMode(newCycles % 4 === 0 ? "longBreak" : "shortBreak");
    } else {
      setMode("work");
    }
  };

  const formatTime = (seconds) =>
    `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(
      seconds % 60
    ).padStart(2, "0")}`;

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTimeLeft(MODES[mode].duration);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-2xl shadow-xl text-center space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">{MODES[mode].label}</h2>
      <div className="text-6xl font-mono text-gray-900">{formatTime(timeLeft)}</div>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => setIsRunning((prev) => !prev)}
          className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={resetTimer}
          className="px-4 py-2 bg-gray-300 text-black rounded-xl hover:bg-gray-400 transition"
        >
          Reset
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {Object.entries(MODES).map(([key, { label }]) => (
          <button
            key={key}
            onClick={() => setMode(key)}
            className={`px-3 py-1 rounded-lg border ${
              key === mode ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <p className="text-sm text-gray-500">Pomodoros completed: {cycles}</p>

      <button
        onClick={() => {
          localStorage.removeItem("pomodoroState");
          window.location.reload();
        }}
        className="text-xs text-red-500 underline mt-2"
      >
        Clear Saved Timer
      </button>
    </div>
  );
};

export default Pomodoro;
