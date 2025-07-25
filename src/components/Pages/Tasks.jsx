import React from "react";
import Header from "../TODO/Header";
import TodoForm from "../TODO/Todoform";
import { useState,useEffect } from "react";
import TodoItem from "../TODO/TodoItem";
const Tasks = () => {
  const [filter, setFilter] = useState("all");
    const [tasks,setTasks]=useState(()=>{
    const saved=localStorage.getItem("tasks");
    return saved?JSON.parse(saved):[];
  });
   useEffect(() => { localStorage.setItem("tasks", JSON.stringify(tasks)) }, [tasks])
  return(
    <div className=" ">
      <Header/>
      <TodoForm tasks={tasks} setTasks={setTasks}/>
      <TodoItem tasks={tasks} setTasks={setTasks} filter={filter}/>
       <div className="flex  gap-12 justify-center items-center">
  <button onClick={() => setFilter("all")} className={`text-[22px] w-22 font-semibold border-2 rounded-2xl cursor-pointer  ${filter=="all"?"bg-green-500 border-black":"bg-gray-100 text-black duration-200"}`}><span>🔘</span>All</button>
  <button onClick={() => setFilter("completed")} className={`text-[22px]  w-40 font-semibold border-2 rounded-2xl cursor-pointer  ${filter=="completed"?"bg-green-500 text-white border-black":"bg-white text-black"}`}><span>✅</span>Completed</button>
  <button onClick={() => setFilter("active")} className={`text-[22px] w-33 font-semibold border-2 rounded-2xl  cursor-pointer ${filter=="active"?"bg-blue-500 text-white border-black":"bg-gray-100 text-black"}`}><span>📌</span>Active</button>
</div>
    </div>
  )
};

export default Tasks;
