import React, { useState } from "react";

const Header = () => {
 
  return (
    <header className=" relative flex justify-center w-full h-30  ml-3  items-center max-md:flex-col max-md:h-18 ">
        <h1 className=" absolute  left-12  hover:text-amber-800 text-5xl max-md:text-4xl font-mono font-semibold ">Todo-List</h1>
       
    </header>
  )
};

export default Header;