import React from "react";
import { BiSortUp } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { useTheme } from "../../context/ThemeContext";

const Habit1 = () => {
  const { showOptions, setShowOptions } = useTheme();
  return (
    <div className="flex gap-44 w-200">
      <h1 className="text-3xl font-bold">All Habits</h1>
      <div className="flex items-center justify-center gap-3 ml-33">
        <div className="relative">
          <button
            onClick={() => setShowOptions(true)}
            className="cursor-pointer text-[19px] p-2 px-4 pl-8 flex gap-2 bg-blue-700 border-2 rounded-xl text-white"
          >
            <FaPlus className="absolute top-4 left-2" />
            Add Habits
          </button>
        </div>
        <div className="relative h-12 flex justify-center items-center">
          <BiSortUp className="absolute top-3 text-xl left-0 rounded-2xl" />
          <button className="text-[19px] pl-8 rounded-md">Alphabetical</button>
        </div>
      </div>
    </div>
  );
};

export default Habit1;