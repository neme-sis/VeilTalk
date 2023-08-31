import React from "react";
import EachComment from "./EachComment";

const Comments = () => {
  return (
    <div className=" w-full ">
      <h1 className="text-center text-indigo-400 text-[2rem] sm:text-[3rem] font-semibold drop-shadow-[0_35px_35px_#c7d2feaa]">
        Comments
      </h1>
      <div className="h-1 w-16 sm:w-[100px] bg-indigo-200 mx-auto"></div>
      {Array(10)
        .fill()
        .map((_, i) => (
          <EachComment key={i}/>
        ))}
    </div>
  );
};

export default Comments;
