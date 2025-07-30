import { useState } from "react";

// Step 1: Separate getter function
const getHabits = () => {
  const stored = localStorage.getItem("habits");
  return stored ? JSON.parse(stored) : [];
};

// Step 2: Hook to manage habits from localStorage
export const useHabitsStorage = () => {
  const [habits, setHabitsState] = useState(() => getHabits());

  function setHabits(newHabits) {
    setHabitsState(newHabits);
    localStorage.setItem("habits", JSON.stringify(newHabits));
  };

  return [habits, setHabits];
};
