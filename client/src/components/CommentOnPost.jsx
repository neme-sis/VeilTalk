import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { postMessage } from "../actions/postMessage";
import OverlayLoader from "./OverlayLoader";
import { getUser } from "../actions/getUser";
import { AlertBanner } from "./AlertComponentDanger";

const CommentOnPost = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [showAlert, setShowAlert] = useState({
    show: false,
    msg: "Please give your name to create the link",
    type: "danger",
  });
  const userId = useParams().id;
  const navigateTo = useNavigate();
  const sendMessage = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await postMessage(userId, message);
    setLoading(false);
    if (res) {
      setMessage("");
      setShowAlert({
        show: true,
        msg: "Message sent successfully",
        type: "success",
      });
    } else
      setShowAlert({
        show: true,
        msg: "Something went wrong. Please try again later",
        type: "danger",
      });
  };

  const getOwnerOfLink = useCallback(async () => {
    if (!userId) return navigateTo("/error", { replace: true });
    if (userId === localStorage.getItem("user_id"))
      return navigateTo("/", { replace: true });
    const res = await getUser(userId);
    if (res) setUser(res);
    else navigateTo("/error", { replace: true });
  }, [userId]);

  let timeout = null;
  React.useEffect(() => {
    if (showAlert.show) {
      timeout = setTimeout(() => {
        setShowAlert({ ...showAlert, show: false });
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [showAlert.show]);

  const closeAlert = () => {
    setShowAlert({ ...showAlert, show: false });
    clearTimeout(timeout);
  };

  useEffect(() => {
    getOwnerOfLink();
  }, [userId]);

  if (!user) return <OverlayLoader />;

  return (
    <>
      {showAlert.show && (
        <AlertBanner
          msg={showAlert.msg}
          onClose={closeAlert}
          type={showAlert.type}
        />
      )}
      <div className="min-h-[calc(100vh-255px)] px-2 py-10 lg:px-0 flex justify-between items-center">
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
              Send a message to
              <span className="text-[#3b92ff]">{` ${user.user_name} `}</span>
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button
                  type="button"
                  className="rounded-md mt-6 bg-black px-3 py-2 text-base font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  onClick={(e) => {
                    if (loading) return console.log("loading");;
                    if (!message)
                      return setShowAlert({
                        show: true,
                        msg: "Please enter a message to send",
                        type: "danger",
                      });
                    sendMessage(e);
                  }}
                >
                  {loading ? (
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        class="w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span class="sr-only">Loading...</span>
                    </div>
                  ) : (
                    "Send Message"
                  )}
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
    </>
  );
};

export default CommentOnPost;
