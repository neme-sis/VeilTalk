import React from "react";
import Animal from "react-animals";

function getTimeDifferenceDescription(date1, date2) {
  const timeDifference = Math.abs(date1 - date2); // Time difference in milliseconds

  const timeUnits = [
    { unit: "year", ms: 31536000000 }, // 1 year in milliseconds
    { unit: "day", ms: 86400000 }, // 1 day in milliseconds
    { unit: "hour", ms: 3600000 }, // 1 hour in milliseconds
    { unit: "minute", ms: 60000 }, // 1 minute in milliseconds
    { unit: "second", ms: 1000 }, // 1 second in milliseconds
  ];

  for (const unit of timeUnits) {
    if (timeDifference >= unit.ms) {
      const count = Math.floor(timeDifference / unit.ms);
      return `${count} ${unit.unit}${count > 1 ? "s" : ""} ago`;
    }
  }

  return "Just now";
}

const EachComment = ({ name, comment, timestamp }) => {
  const timeDifference = getTimeDifferenceDescription(
    new Date(),
    new Date(timestamp)
  );
  return (
    <div class="flex items-center justify-center my-4">
      <div class="bg-white border-l-2 border-t-2 border-solid border-indigo-200 border-le max-w-xl rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500 mx-4">
        <div class="mt-4">
          <p class="mt-4 text-md text-gray-600">{comment}</p>
          <div class="flex justify-between items-center">
            <div class="mt-4 flex items-center space-x-4 py-6">
              <div class="">
                <Animal dance size={"2rem"} />
              </div>
              <div class="text-sm font-semibold">
                {name} • <span class="font-normal"> {timeDifference}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachComment;
