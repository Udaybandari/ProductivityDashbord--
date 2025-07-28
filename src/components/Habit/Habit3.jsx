import React from "react";

const Habit3 = ({dummy,setDummy}) => {
  return <div>
   {dummy && (
  <div className="mt-6 p-4 border rounded-md  ">
    <h2 className="text-4xl font-bold ">customize Habit</h2>
    <div className="flex m-5">
        <span className="text-4xl">{dummy.icon}</span>
        <h2 className="text-3xl">{dummy.name}</h2>
    </div>
   <div className="flex flex-col items-center justify-center">
     <label >Frequency:</label>
    <select onChange={(e) => setDummy({ ...dummy, frequency: e.target.value })}>
        <option value="">Select</option>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
    </select>
   </div>
    {
dummy.type === "timer" ? (
  <div className="flex gap-2">
    <input
      type="number"
      placeholder="Hours"
      onChange={(e) =>
        setDummy({ ...dummy, hours: parseInt(e.target.value || 0) })
      }
    />
    <input
      type="number"
      placeholder="Minutes"
      onChange={(e) =>
        setDummy({ ...dummy, minutes: parseInt(e.target.value || 0) })
      }
    />
    <input
      type="number"
      placeholder="Seconds"
      onChange={(e) =>
        setDummy({ ...dummy, seconds: parseInt(e.target.value || 0) })
      }
    />
  </div>
) : (
  <input
    type="number"
    placeholder="Enter time"
    onChange={(e) =>
      setDummy({ ...dummy, time: parseInt(e.target.value || 0) })
    }
  />
)

}

    
    <button className="cursor-pointer">Add habit</button>

  </div>
)}


  </div>
  
};

export default Habit3;
