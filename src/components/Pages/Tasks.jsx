import React from "react";
import Header from "../TODO/Header";
import Header1 from "./Header.jsx";
import TodoForm from "../TODO/Todoform";
import { useState,useEffect } from "react";
import TodoItem from "../TODO/TodoItem";

import { useTheme } from "../../context/ThemeContext.jsx";
const Tasks = () => {
 const {filter, setFilter}=useTheme();
    const [tasks,setTasks]=useState(()=>{
    const save=localStorage.getItem("tasks");
    return save?JSON.parse(save):[];
  });
   useEffect(() => { localStorage.setItem("tasks", JSON.stringify(tasks)) }, [tasks])
  return(
    <div className=" h-screen dark:text-white ">
     <Header1  right={<Header setFilter={setFilter} ></Header>}/>
      
      <TodoForm tasks={tasks} setTasks={setTasks}/>
      <TodoItem tasks={tasks} setTasks={setTasks} filter={filter}/>
      
    </div>
  )
};

export default Tasks;
