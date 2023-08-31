import React from "react";
import { Link } from "react-router-dom";

const CommentOnPost = () => {
  return (
    <div className="min-h-[calc(100vh-255px)] px-2 py-10 lg:px-0 flex justify-between items-center ">
      <aside className="none sm:block">
        <img
          src="https://i.pinimg.com/originals/b0/1d/df/b01ddf257d18c8a9b41e0502161d580c.gif"
          alt=""
          className="max-w-[300px]"
        />
      </aside>
      <div className="flex flex-col justify-center items-center flex-1">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Send a message to{" "}
            <span className="text-[#3b92ff]">{" your friend "}</span>{" "}
            anonymously.
          </h2>
          <p className="mt-2 text-gray-600 text-center">
            It is an anonymous message, so your friend will not know who sent.
            But don't send any bad message to your friend. It is just a prank.
          </p>
        </div>
        <div className="mt-10 w-full md:w-1/2">
          <form className="flex justify-center">
            <div className=" w-full max-w-md flex flex-col items-center">
              <textarea
                className="w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                placeholder="Add a message..."
                rows={5}
                cols={50}
              ></textarea>
              <button
                type="button"
                className="rounded-md mt-6 bg-black px-3 py-2 text-base font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Send Message
              </button>
              <div className="mt-6 text-gray-600 text-center text-sm">
                Found it enjoyable?{" "}
                <Link
                  to={"/"}
                  className="text-[#3b92ff] hover:underline focus:outline-none focus:ring-1 focus:ring-[#3b92ff] focus:ring-offset-1 "
                >
                  Create your own link?
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <aside className="none sm:block">
        <img
          src="https://i.pinimg.com/originals/b0/1d/df/b01ddf257d18c8a9b41e0502161d580c.gif"
          alt=""
          className="max-w-[300px]"
        />
      </aside>
    </div>
  );
};

export default CommentOnPost;
