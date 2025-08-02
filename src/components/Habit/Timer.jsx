import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const Timer = ({ hours = 0, minutes = 0, seconds = 0 }) => {
  const [elapsed, setElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);


  // Initialize elapsed time when inputs change


useEffect(() => {
  if (isRunning) {
    localStorage.setItem("elapsed", String(elapsed));
    localStorage.setItem("lastUpdated", String(Date.now()));
    localStorage.setItem("isRunning", "true");
  } else {
    localStorage.setItem("isRunning", "false");
  }
}, [elapsed, isRunning]);

  // Countdown timer logic
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setElapsed((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  // Time formatting (HH:MM:SS)
  const formatTime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };
  console.log(elapsed)

  return (
    <div className="flex justify-center top-18 gap-8 items-center absolute right-78">
      
      <div className=" flex  gap-8">
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
      <p className={clsx("text-xl font-semibold ",elapsed<200?"text-red-700":"text-green-900")}>{ formatTime(elapsed)}</p>
      </div>
    </div>
  );
};

export default Timer;
