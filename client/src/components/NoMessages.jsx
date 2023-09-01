import React from "react";

const NoMessages = () => {
  return (
    <div className="bg-white w-full flex justify-center">
      <div className="relative p-4 w-[min(100%,500px)] bg-white rounded-lg overflow-hidden shadow hover:shadow-md">
        <div className="flex flex-col">
          <div className="rounded w-full h-52 bg-gray-200 flex justify-center items-center">
            <h1 className="text-[1.5rem] font-bold text-indigo-300 text-center">
            😕 You don't have any comments yet
            </h1>
          </div>
          <div className="flex flex-col mt-5">
            <div className="w-full h-5 bg-gray-200 rounded"></div>
            <div className="mt-2 w-10/12 h-3 bg-gray-200 rounded"></div>
            <div className="mt-2 w-8/12 h-3 bg-gray-200 rounded"></div>
          </div>

          <div className="grid grid-cols-2 mt-5 gap-x-2 gap-y-1">
            <div className="mt-2 w-full h-3 bg-gray-200 rounded"></div>
            <div className="mt-2 w-full h-3 bg-gray-200 rounded"></div>
            <div className="mt-2 w-full h-3 bg-gray-200 rounded"></div>
            <div className="mt-2 w-full h-3 bg-gray-200 rounded"></div>
          </div>

          <div className="flex items-center mt-5">
            <div>
              <div className="rounded-full bg-gray-200 w-10 h-10"></div>
            </div>
            <div className="flex justify-between w-full ml-3">
              <div className="w-5/12 h-3 bg-gray-200 rounded"></div>
              <div className="w-2/12 h-3 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoMessages;
