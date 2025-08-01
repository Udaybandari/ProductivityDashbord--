import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { MdOutlineTimer } from "react-icons/md";
import Timer from "./Timer";

const Habit4 = () => {
  const { habits, setHabits } = useTheme();

  const handleDelete = (habitToDelete) => {
    const updated = habits.filter((h) => h.name !== habitToDelete.name);
    setHabits(updated);
  };

  return (
    <div className="p-4  ">
      {habits.length === 0 ? (
        <p className="text-gray-500">No habits added yet.</p>
      ) : (
        <div className="flex flex-col gap-2   ">
          {habits.map((habit, index) => (
            <div
              key={index}
              className="bg-white relative custom-shadow  dark:border-1 dark:shadow-2xl dark:bg-gray-950 shadow-md  rounded-lg p-4  flex gap-45 w-full"
            >
             <div className="flex flex-col items-center justify-center gap-3">
               <div className="flex items-center gap-2 text-4xl">
                <span>{habit.icon}</span>
                <h2 className="font-semibold">{habit.name}</h2>
              </div>
             
              {habit.type === "timer" ? (
                habit.hours || habit.minutes || habit.seconds ? (
                  <div className="flex items-center gap-2 text-xl ">
                    <MdOutlineTimer className="" />
                    <span>
                      {habit.hours ? `${habit.hours} hour${habit.hours > 1 ? "s" : ""} ` : ""}
                      {habit.minutes ? `${habit.minutes} minute${habit.minutes > 1 ? "s" : ""} ` : ""}
                      {habit.seconds ? `${habit.seconds} second${habit.seconds > 1 ? "s" : ""}` : ""}
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2  text-3xl text-gray-400 italic">
                    <MdOutlineTimer className="text-3xl " />
                    <span>No time set</span>
                  </div>
                )
              ) : (
                <p className="text-sm text-gray-600">Target: {habit.time} L</p>
              )}
               <p className="text-sm ">
              <span className="capitalize ">{habit.frequency}</span>
              </p>
               <button
                onClick={() => handleDelete(habit)}
                className="bg-red-500 text-sm hover:bg-red-600 rounded-md text-white px-5 py-0 h-6 cursor-pointer"
              >
                Delete
              </button>
             </div>
             {
              habit.type=="timer"?(
              <Timer minutes={habit.minutes} hours={habit.hours} seconds={habit.seconds} />

              ):(null)
             }
               
            </div>
          ))}
        </div>
      )}
     
    </div>
  );
};

export default Habit4;
