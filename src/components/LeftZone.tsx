import React from "react";
import { Card } from "../data/cards";

interface Props {
  handleDrop: (e: React.DragEvent<HTMLDivElement>, targetData: string) => void; // Function to handle drop event
  sourceData: Card[]; // Array of cards in source zone
  loadData: Card[]; // Array of cards in load zone
  pathData: Card[]; // Array of cards in path zone
  check: boolean; // Flag to indicate if validation is performed
}

const LeftZone: React.FC<Props> = ({
  handleDrop,
  sourceData,
  loadData,
  pathData,
  check,
}) => {
  return (
    <div className="flex-1 flex flex-col gap-5">
      {/* sourceData */}
      <div
        className="flex-1 shadow-md flex gap-5 justify-between p-5"
        onDragOver={(e) => e.preventDefault()} // Prevent default behavior of dragover event
        onDrop={(e) => handleDrop(e, "Source")} // Call handleDrop function with targetData as "Source" on drop event
      >
        <span className="flex-1 min-w-[156px] h-[165px] flex justify-center items-center">
          <button className="text-white bg-indigo-500 w-[108px] py-1 rounded-md">
            Source
          </button>
        </span>
        {[...Array(3)].map((_, index) => (
          <span
            key={index}
            className={`flex-1 flex flex-col justify-center items-center gap-5 shadow-md min-w-[156px] h-[165px] rounded-md ${
              // Apply border color based on validation check
              check &&
              (sourceData[index]?.zone === "Source"
                ? "border border-green-200 shadow-lg shadow-green-400"
                : "border border-red-200 shadow-lg shadow-red-400")
            }`}
          >
            <img
              src={sourceData[index]?.image}
              alt={sourceData[index]?.content}
              className="h-[50%]"
            />
            <p
              className={`${
                // Apply text color based on content presence
                sourceData[index]?.content ? "text-indigo-600" : "text-gray-500"
              }`}
            >
              {sourceData[index]?.content || "Drag Item"} {/* Display content or default text */}
            </p>
          </span>
        ))}
      </div>
      {/* loadData */}
      <div
        className="flex-1 shadow-md flex gap-5 justify-between p-5"
        onDragOver={(e) => e.preventDefault()} // Prevent default behavior of dragover event
        onDrop={(e) => handleDrop(e, "Load")} // Call handleDrop function with targetData as "Load" on drop event
      >
        <span className="flex-1 min-w-[156px] h-[165px] flex justify-center items-center">
          <button className="text-white bg-indigo-500 w-[108px] py-1 rounded-md">
            Load
          </button>
        </span>
        {[...Array(3)].map((_, index) => (
          <span
            key={index}
            className={`flex-1 flex flex-col justify-center items-center gap-5 shadow-md min-w-[156px] h-[165px] rounded-md ${
              // Apply border color based on validation check
              check &&
              (loadData[index]?.zone === "Load"
                ? "border border-green-200 shadow-lg shadow-green-400"
                : "border border-red-200 shadow-lg shadow-red-400")
            }`}
          >
            <img
              src={loadData[index]?.image}
              alt={loadData[index]?.content}
              className="h-[50%]"
            />
            <p
              className={`${
                // Apply text color based on content presence
                loadData[index]?.content ? "text-indigo-600" : "text-gray-500"
              }`}
            >
              {loadData[index]?.content || "Drag Item"} {/* Display content or default text */}
            </p>
          </span>
        ))}
      </div>
      {/* pathData */}
      <div
        className="flex-1 shadow-md flex gap-5 justify-between p-5"
        onDragOver={(e) => e.preventDefault()} // Prevent default behavior of dragover event
        onDrop={(e) => handleDrop(e, "Path")} // Call handleDrop function with targetData as "Path" on drop event
      >
        <span className="flex-1 min-w-[156px] h-[165px] flex justify-center items-center">
          <button className="text-white bg-indigo-500 w-[108px] py-1 rounded-md">
            Path
          </button>
        </span>
        {[...Array(3)].map((_, index) => (
          <span
            key={index}
            className={`flex-1 flex flex-col justify-center items-center gap-2 shadow-md min-w-[156px] h-[165px] rounded-md ${
              // Apply border color based on validation check
              check &&
              (pathData[index]?.zone === "Path"
                ? "border border-green-200 shadow-lg shadow-green-400"
                : "border border-red-200 shadow-lg shadow-red-400")
            }`}
          >
            <img
              src={pathData[index]?.image}
              alt={pathData[index]?.content}
              className="h-[50%]"
            />
            <p
              className={`${
                // Apply text color based on content presence
                pathData[index]?.content ? "text-indigo-600" : "text-gray-500"
              }`}
            >
              {pathData[index]?.content || "Drag Item"} {/* Display content or default text */}
            </p>
          </span>
        ))}
      </div>
    </div>
  );
};

export default LeftZone;
