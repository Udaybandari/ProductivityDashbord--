import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { MdOutlineTimer } from "react-icons/md";

const Habit4 = () => {
  const { habits, setHabits } = useTheme();

  const handleDelete = (habitToDelete) => {
    const updated = habits.filter(h => h.name !== habitToDelete.name);
    setHabits(updated);
    localStorage.setItem("habits", JSON.stringify(updated));
  };

  return (
    <div className="p-4">
      {habits.length === 0 ? (
        <p className="text-gray-500">No habits added yet.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {habits.map((habit, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 border flex flex-col gap-2"
            >
              <div className="flex items-center gap-2 text-2xl">
                <span>{habit.icon}</span>
                <h2 className="font-semibold">{habit.name}</h2>
              </div>

              <p className="text-sm text-gray-600">
                Frequency: <span className="capitalize">{habit.frequency}</span>
              </p>

           {habit.type === "timer" ? (
  (habit.hours || habit.minutes || habit.seconds) ? (
    <div className="flex items-center gap-2 text-sm text-gray-600">
      <MdOutlineTimer className="text-lg text-gray-500" />
      <span>
        {habit.hours ? `${habit.hours} ${habit.hours === 1 ? "hour" : "hours"} ` : ""}
        {habit.minutes ? `${habit.minutes} ${habit.minutes === 1 ? "minute" : "minutes"} ` : ""}
        {habit.seconds ? `${habit.seconds} ${habit.seconds === 1 ? "second" : "seconds"}` : ""}
      </span>
    </div>
  ) : (
    <div className="flex items-center gap-2 text-sm text-gray-400 italic">
      <MdOutlineTimer className="text-lg text-gray-400" />
      <span>No time set</span>
    </div>
  )
) : (
  <p className="text-sm text-gray-600">
    Target: {habit.time} L
  </p>
)}


              <button
                onClick={() => handleDelete(habit)}
                className="bg-red-500 hover:bg-red-600 rounded-md text-white px-3 py-1 w-fit cursor-pointer"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Habit4;
