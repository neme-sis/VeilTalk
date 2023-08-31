import React from "react";
import HeroBackground from "./HeroBackground";

const OwnerDetailsHero = ({ userId }) => {
  const inputRef = React.useRef(null);
  const [isCopied, setIsCopied] = React.useState(false);

  let timeout = null;
  React.useEffect(() => {
    if (isCopied) {
      timeout = setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [isCopied]);

  return (
    <div className="relative w-full">
      <div className="relative isolate z-0 bg-white px-6 pt-14 lg:px-8">
        <div className="relative mx-auto max-w-2xl py-6 sm:py-24">
          <div className="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[10rem]">
            <HeroBackground />
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Enjoy the anonymous messages from your friends.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Don't forget to share your link with your friends. Remember, they
              can send you an anonymous message and it is a prank. So don't take
              it seriously.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-2">
              <input
                type="text"
                className="w-full rounded-md border-black border px-3 py-2 text-sm sm:text-base font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                readOnly
                ref={inputRef}
                value={`https://anonymous-message-sender.netlify.app/user/${userId}/friends/add-comment`}
              />
              <button
                onClick={() => {
                  inputRef.current.select();
                  window.navigator.clipboard.writeText(inputRef.current.value);
                  setIsCopied(true);
                }}
                className="w-[150px] rounded-md bg-[#3b92ff] px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-[#3b92ff]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                {isCopied ? "Copied" : "Copy Link"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerDetailsHero;
