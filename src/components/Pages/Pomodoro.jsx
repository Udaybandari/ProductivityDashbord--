// PomodoroTimer.jsx
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
  const intervalRef = useRef(null);

  useEffect(() => {
    setTimeLeft(MODES[mode].duration); // Reset timer when mode changes
  }, [mode]);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev === 1) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const formatTime = (seconds) =>
    `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(
      seconds % 60
    ).padStart(2, "0")}`;

  return (
    <div>
      <h2>{MODES[mode].label}</h2>
      <h1>{formatTime(timeLeft)}</h1>
      <button onClick={() => setIsRunning((r) => !r)}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={() => setIsRunning(false)}>Reset</button>
      <div>
        <button onClick={() => setMode("work")}>Work</button>
        <button onClick={() => setMode("shortBreak")}>Short Break</button>
        <button onClick={() => setMode("longBreak")}>Long Break</button>
      </div>
    </div>
  );
};

export default Pomodoro;
