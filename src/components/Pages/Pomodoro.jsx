import React, { useState, useEffect, useRef } from "react";

const MODES = {
  work: { label: "Work", duration: 25 * 60 },
  shortBreak: { label: "Short Break", duration: 5 * 60 },
  longBreak: { label: "Long Break", duration: 15 * 60 },
};

const Pomodoro = () => {
  const [mode, setMode] = useState("work");
  const [timeLeft, setTimeLeft] = useState(MODES[mode].duration);
  const [isRunning, setIsRunning] = useState(false);
  const [cycles, setCycles] = useState(0);
  const intervalRef = useRef(null);
   


  useEffect(() => {
  const saved = JSON.parse(localStorage.getItem("pomodoroState"));
  if (saved) {
    setMode(saved.mode || "work");
    setTimeLeft(saved.timeLeft || MODES["work"].duration);
    setIsRunning(false); // Don't auto-resume timer
    setCycles(saved.cycles || 0);
  }
}, []);
useEffect(() => {
  const stateToSave = {
    mode,
    timeLeft,
    cycles,
  };
  localStorage.setItem("pomodoroState", JSON.stringify(stateToSave));
}, [mode, timeLeft, cycles]);


  // When mode changes, reset the timer
  useEffect(() => {
    setTimeLeft(MODES[mode].duration);
    setIsRunning(false);
    clearInterval(intervalRef.current);
  }, [mode]);

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
      if (newCycles % 4 === 0) {
        setMode("longBreak");
      } else {
        setMode("shortBreak");
      }
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
    </div>
  );
};

export default Pomodoro;
