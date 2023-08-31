import React from "react";
import Animal from "react-animals";

const EachComment = ({ name, comment, time }) => {
  return (
    <div class="flex items-center justify-center my-4">
      <div class="bg-white border-l-2 border-t-2 border-solid border-indigo-200 border-le max-w-xl rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500 mx-4">
        <div class="mt-4">
          <p class="mt-4 text-md text-gray-600">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happines.
          </p>
          <div class="flex justify-between items-center">
            <div class="mt-4 flex items-center space-x-4 py-6">
              <div class="">
                <Animal dance size={"2rem"} />
              </div>
              <div class="text-sm font-semibold">
                John Lucas • <span class="font-normal"> 5 minutes ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachComment;
