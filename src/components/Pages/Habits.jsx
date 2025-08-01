import React from "react";
import Header from "./Header";
import Habit1 from "../Habit/Habit1";
import Habit2 from "../Habit/Habit2";
import Habit4 from "../Habit/Habit4";
import Timer from "../Habit/Timer";

const Habits = () => {


  return (
    <div>
      <Header  right={<Habit1></Habit1>}/>
      <Habit2/>
      <Habit4/>
 
    </div>
  )
};

export default Habits;
