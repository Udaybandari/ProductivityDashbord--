import React, { useState } from "react";
import { habitTemplates } from "../constants";
import { useTheme } from "../../context/ThemeContext";
import Habit3 from "./Habit3";

const Habit2 = () => {
  const { showOptions, setShowOptions } = useTheme();
  const [dummy, setDummy] = useState(null);

  const handleHabitSelect = (habit) => {
    setDummy({ name: habit.name, icon: habit.icon, type: habit.type });
    setShowOptions(false);
  };

  return (
    <div>
      {showOptions && (
        <div className="grid grid-cols-3 items-center gap-5">
          {habitTemplates.map((habit) => (
            <div
              key={habit.name}
              className="w-77 h-22 flex border rounded-md cursor-pointer hover:bg-blue-100"
              onClick={() => handleHabitSelect(habit)}
            >
              <span className="text-5xl">{habit.icon}</span>
              <h1 className="text-4xl">{habit.name}</h1>
            </div>
          ))}
        </div>
      )}
      <Habit3 dummy={dummy} setDummy={setDummy} />
    </div>
  );
};

export default Habit2;
