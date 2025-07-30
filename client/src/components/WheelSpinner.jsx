"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LuckyWheel } from "react-luck-draw";
import wheel from "../../public/wheel2.png";
import Image from "next/image";

export default function WheelSpinner({ filteredTasks }) {
  const router = useRouter();
  const wheelRef = useRef(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  // console.log(filteredTasks);

  // Define color palette
  const colors = [
    "#FF5733", // Bright Red-Orange
    "#FFC300", // Bright Yellow
    "#FF33FF", // Bright Pink
    "#33FF57", // Neon Green
    "#33FFF6", // Cyan
    "#FF6B6B", // Bright Coral
    "#FF8C00", // Bright Orange
    "#00FFFF", // Aqua
    "#FFD700", // Gold
    "#00FF00", // Lime
  ];

  const activeTasks = filteredTasks.slice(0, 10);

  // Build prizes exactly from activeTasks, same order
  const prizes = activeTasks.map((task, index) => ({
    id: index, // this is crucial so onEnd gives correct index
    fonts: [
      { text: `\u00A0\u00A0${task.title}\u00A0\u00A0`, fontSize: "14px" },
    ],
    background: colors[index % colors.length],
  }));

  const spin = () => {
    if (!activeTasks.length || isSpinning) return;

    const index = Math.floor(Math.random() * activeTasks.length);
    setIsSpinning(true);
    setSelectedIndex(null);

    // Wait for LuckyWheel to mount before calling play
    requestAnimationFrame(() => {
      if (wheelRef.current) {
        wheelRef.current.play();
        setTimeout(() => {
          wheelRef.current.stop(index);
        }, 3000);
      } else {
        console.warn("wheelRef is null on spin");
      }
    });
  };

  const handleGoToTask = () => {
    if (selectedIndex !== null) {
      const selectedTaskId = activeTasks[selectedIndex].id;
      console.log(selectedTaskId);

      router.push(`/dashboard/taskDetails/${selectedTaskId}`);
    }
  };

  useEffect(() => {
    console.log("wheelRef:", wheelRef.current);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center space-y-8">
      {/* Pointer */}
      <div>
        <div className="relative mt-2 flex justify-center">
          <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-t-[30px] border-l-transparent border-r-transparent border-t-green-600" />
        </div>

        <div className="relative w-[430px] aspect-square rounded-full bg-[#b91c1c] flex items-center justify-center mx-auto">
          {/* Dots around the wheel */}
          {Array.from({ length: prizes.length }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                top: "50%",
                left: "50%",
                transform: `rotate(${
                  (360 / prizes.length) * i
                }deg) translateX(203px) rotate(-${
                  (360 / prizes.length) * i
                }deg)`,
              }}
            />
          ))}

          {/* Center hub */}
          <div className="absolute w-6 h-6 bg-white rounded-full z-20" />

          {/* Wheel */}
          <LuckyWheel
            ref={wheelRef}
            width="380px"
            height="380px"
            blocks={[{ padding: "0px", background: "#f5f5f5" }]}
            prizes={prizes}
            buttons={[]}
            onEnd={(prize) => {
              setSelectedIndex(prize.id);
              setIsSpinning(false);
            }}
          />
        </div>
      </div>

      <div className="flex items-center justify-center space-x-10">
        {/* Spin Button */}
        <button
          onClick={spin}
          disabled={isSpinning}
          className={`px-6 py-[10px] flex items-center rounded-[8px] gap-[10px] transition text-white ${
            isSpinning
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-teal-500 hover:bg-teal-600"
          }`}
        >
          {isSpinning ? "Spinning..." : "Spin"}
          <Image src={wheel} alt="spin" width={21} height={23} className="" />
        </button>

        {/* Go to Task Button */}
        {selectedIndex !== null && activeTasks[selectedIndex] && (
          <button
            onClick={handleGoToTask}
            className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded transition"
          >
            Go to Task
          </button>
        )}
      </div>
    </div>
  );
}
