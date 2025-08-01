import { useState } from "react";

const getHabits = (key) => {
  const stored = localStorage.getItem(key);
  return stored ? JSON.parse(stored) : [];
};

export const useHabitsStorage = (storagekey) => {
     const[data,setData]=useState(()=>getHabits(storagekey));

  function setDatas(newHabits) {
    setData(newHabits);
    localStorage.setItem(storagekey, JSON.stringify(newHabits));
  }
  return [data, setDatas];
};