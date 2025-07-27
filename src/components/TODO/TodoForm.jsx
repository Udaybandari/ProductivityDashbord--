import React, { useState } from "react";

const TodoForm = ({tasks,setTasks}) => {
  const [value,setValue]=useState("");

  const newtask={
    id:Date.now(),
    text:value,
    completed:false,
  } 
  console.log(tasks);
  return (
    <div className="flex  h-55 items-center justify-center mr-40   ">
      <div className="flex items-center  justify-center  relative   ">
        <input className="border-1 dark:border-0  ml-0 text-3xl max-md:py-2 max-md:px-2 max-md:w-85 py-4 px-3 font-semibold font-sans w-99 rounded-2xl focus:outline-none "
        type="text"
        value={value} 
        onChange={(e)=>setValue(e.target.value)}
        placeholder="Enter a task... "
        onKeyDown={(e)=>{
          if(e.key==="Enter")
          {
            setValue(e.target.value);
            setTasks((prev)=>[...prev,newtask]),setValue("")
          }
        }}
        
        />
        <button className=" absolute right-0 bg-blue-900  text-2xl max-md:text-[20px] max-md:p-2 font-semibold p-4 py-5    bg-blue rounded-2xl text-white cursor-pointer" onClick={()=>{setTasks((prev)=>[...prev,newtask]),setValue("")}}>Add</button>
           
    </div>
         
    </div>
  )
};

export default TodoForm;