import React, { useCallback, useEffect, useState } from "react";
import EachComment from "./EachComment";
import NoMessages from "./NoMessages";
import { getComments } from "../actions/getComments";

const Comments = ({ userId }) => {
  const [messages, setMessages] = useState([]);
  
  const getAllMessagesForTheUser = useCallback(async () => {
    const resp = await getComments();
    setMessages(resp.comments);
  }, []);

  useEffect(() => {
    getAllMessagesForTheUser();
  }, [userId]);
  return (
    <div className=" w-full ">
      <h1 className="text-center text-indigo-400 text-[2rem] sm:text-[3rem] font-semibold drop-shadow-[0_35px_35px_#c7d2feaa]">
        📨 Comments
      </h1>
      <div className="h-1 w-16 sm:w-[100px] bg-indigo-200 mx-auto"></div>
      {messages.length > 0 ? (
        messages.map((message, i) => <EachComment key={i} {...message} />)
      ) : (
        <NoMessages />
      )}
    </div>
  );
};

export default Comments;
