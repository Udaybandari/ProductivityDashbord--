import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const Timer = ({ hours = 0, minutes = 0, seconds = 0 }) => {
  const [elapsed, setElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);


  // Restore from localStorage on mount
  useEffect(() => {
    const savedElapsed = Number(localStorage.getItem("elapsed")) || 0;
    const wasRunning = localStorage.getItem("isRunning") === "true";
    const lastUpdated = Number(localStorage.getItem("lastUpdated"));

    if (wasRunning && lastUpdated) {
      const now = Date.now();
      const secondsPassed = Math.floor((now - lastUpdated) / 1000);
      const updatedElapsed = Math.max(savedElapsed - secondsPassed, 0);
      setElapsed(updatedElapsed);

      if (updatedElapsed > 0) {
        setIsRunning(true);
      }
    } else if (savedElapsed) {
      setElapsed(savedElapsed);
    } else {
      const total = hours * 3600 + minutes * 60 + seconds;
      setElapsed(total);
    }
  }, []);

  // Ticking logic
  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setElapsed((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setIsRunning(false);
            localStorage.removeItem("elapsed");
            localStorage.removeItem("lastUpdated");
            localStorage.removeItem("isRunning");
            return 0;
          }

          const newElapsed = prev - 1;
          localStorage.setItem("elapsed", String(newElapsed));
          localStorage.setItem("lastUpdated", String(Date.now()));
          localStorage.setItem("isRunning", "true");

          return newElapsed;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isRunning]);

  // Format time
  const formatTime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <div className="flex justify-center top-18 gap-8 items-center absolute right-78">
      <div className="flex gap-8">
        <button
          onClick={() => setIsRunning(true)}
          className="bg-blue-600 px-5 h-11 text-white rounded-md cursor-pointer"
          disabled={isRunning}
        >
          Start
        </button>
        <button
          onClick={() => setIsRunning(false)}
          className="bg-red-600 px-5 h-11 text-white rounded-md cursor-pointer"
          disabled={!isRunning}
        >
          Stop
        </button>
        <p
          className={clsx(
            "text-xl font-semibold",
            elapsed < 200 ? "text-red-700" : "text-green-900"
          )}
        >
          {formatTime(elapsed)}
        </p>
      </div>
    </div>
  );
};

export default Timer;
