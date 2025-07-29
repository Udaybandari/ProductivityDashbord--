import React from "react";
import { useTheme } from "../../context/ThemeContext";
const Habit3 = ({dummy, setDummy}) => {
  const {habits,setHabits}=useTheme();
const handlehabit = () => {
  const { frequency, type } = dummy;

  if (!frequency) {
    alert("Please select a frequency.");
    return;
  }

  setHabits(prev => {
    const updated = [...prev, dummy];
    localStorage.setItem("habits", JSON.stringify(updated));
    return updated;
  });

  console.log("Habit added:", dummy);
  setDummy(null);
};
console.log(habits)

  return (
    <div>
      {dummy && (
        <div className="mt-6 p-4 custom-shadow bg-gray-100 rounded-md w-288 h-22 flex gap-16">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-sm uppercase text-gray-700">Customize Habit</h2>
            <div className="flex items-center">
              <span className="text-3xl">{dummy.icon}</span>
              <h2 className="text-3xl">{dummy.name}</h2>
            </div>
          </div>
          
          <div className="flex flex-col cursor-pointer items-center justify-center">
            <label className="text-[22px]">Frequency:</label>
            <select
              onChange={(e) => setDummy({ ...dummy, frequency: e.target.value })}
              className="ml-12 cursor-pointer"
            >
              <option value="">Select</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
            </select>
          </div>

          {dummy.type === "timer" ? (
            <div className="flex gap-6">
              <input
                className="focus:outline-none w-32 rounded-md"
                type="number"
                placeholder="Hours"
                onChange={(e) =>
                  setDummy({ ...dummy, hours: parseInt(e.target.value || 0) })
                }
              />
              <input
                className="focus:outline-none w-32"
                type="number"
                placeholder="Minutes"
                onChange={(e) =>
                  setDummy({ ...dummy, minutes: parseInt(e.target.value || 0) })
                }
              />
              <input
                className="focus:outline-none w-32"
                type="number"
                placeholder="Seconds"
                onChange={(e) =>
                  setDummy({ ...dummy, seconds: parseInt(e.target.value || 0) })
                }
              />
            </div>
          ) : (
            <input
              className="w-32 focus:outline-none"
              type="number"
              placeholder="Enter Litres..."
              onChange={(e) =>
                setDummy({ ...dummy, time: parseInt(e.target.value || 0) })
              }
            />
          )}

          <button onClick={handlehabit
          } className="cursor-pointer bg-blue-800 rounded-md text-white px-4 py-2 mt-4">
            Add Habit
          </button>
        </div>
      )}
    </div>
  );
};

export default Habit3;
