import React from "react";

const SideItem = ({ icon, name }) => {
  return (
    <div className="flex items-start p-3 pl-0 gap-2 hover:bg-blue-700/80 rounded-md cursor-pointer transition">
      {icon}
      <h1 className="text-2xl">{name}</h1>
    </div>
  );
};

export default SideItem;
