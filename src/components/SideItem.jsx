// src/components/SideItem.jsx
import React from "react";
import { Link } from "react-router-dom";

const SideItem = ({ icon, name, route }) => {
  return (
    <Link to={route}>
      <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-700 cursor-pointer transition-all">
        {icon}
        <span className="text-xl">{name}</span>
      </div>
    </Link>
  );
};

export default SideItem;
