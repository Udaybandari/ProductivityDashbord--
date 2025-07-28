import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx"

import Dashboard from "./components/Pages/Dashboard.jsx";
import Tasks from "./components/Pages/Tasks.jsx";
import Habits from "./components/Pages/Habits.jsx";
import Pomodoro from "./components/Pages/Pomodoro.jsx";
import Settings from "./components/Pages/Settings.jsx";
const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
    <Sidebar/>
     <div className="flex flex-col flex-1 pt-20">
    
    
       <div className="pt-5 px-6 overflow-y-auto dark:bg-gray-950 dark:text-white">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/habits" element={<Habits />} />
              <Route path="/pomodoro" element={<Pomodoro />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
     </div>
    </div>
    </Router>
  )
};

export default App;
