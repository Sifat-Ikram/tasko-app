"use client";
import { useEffect, useState } from "react";
import WheelSpinner from "@/components/WheelSpinner";
import { useFetchTasks } from "@/hooks/useFetchTasks";

const WheelSpin = () => {
  const { tasks, isLoading, error } = useFetchTasks();

  const categories = [
    "All",
    "Art and Craft",
    "Nature",
    "Family",
    "Sport",
    "Friends",
    "Meditation",
  ];

  const [categoryFilter, setCategoryFilter] = useState(categories[0]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  // Filter tasks when tasks or category changes
  useEffect(() => {
    if (tasks.length > 0) {
      const filtered =
        categoryFilter === "All"
          ? tasks.map((task) => ({ id: task._id, title: task.title }))
          : tasks
              .filter((task) => task.category === categoryFilter)
              .map((task) => ({ id: task._id, title: task.title }));

      setFilteredTasks(filtered);
    }
  }, [tasks, categoryFilter]);

  return (
    <div className="min-h-screen px-4">
      <div className="flex flex-col sm:flex-row gap-10 items-center sm:justify-between">
        <h1 className="poppins text-2xl font-semibold text-black">
          Spin Wheel
        </h1>
        <div className="flex flex-col items-center sm:items-start gap-6">
          <h1 className="poppins text-base font-semibold text-black">
            Select Task Category
          </h1>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="border border-[#E1E1E1] rounded-md w-60 px-3 py-2 text-sm sm:text-base text-[#667085] font-medium"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* Loading State */}
      {isLoading ? (
        <div className="flex flex-col items-center mt-24">
          <div className="animate-spin h-12 w-12 border-4 border-teal-500 border-t-transparent rounded-full" />
          <p className="mt-4 text-gray-600 text-lg font-medium">
            Loading tasks...
          </p>
        </div>
      ) : error ? (
        <div className="text-center mt-24 text-red-500 font-semibold">
          Failed to load tasks. Please try again.
        </div>
      ) : filteredTasks.length === 0 ? (
        <div className="text-center mt-24 text-gray-500 font-semibold">
          No tasks found in this category.
        </div>
      ) : (
        <WheelSpinner filteredTasks={filteredTasks} />
      )}
    </div>
  );
};

export default WheelSpin;
