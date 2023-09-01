import React from "react";
import { Lock } from "lucide-react";
import { AlertBanner } from "./AlertComponentDanger";
import { addUser } from "../actions/addUser";
import { useNavigate } from "react-router-dom";
import OverlayLoader from "./OverlayLoader";

export function TopDialog() {
  const [inputData, setInputData] = React.useState({ name: "", email: "" });
  const [showAlert, setShowAlert] = React.useState(false);
  const [isUploading, setIsUploading] = React.useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputData.name === "") return setShowAlert(true);
    setIsUploading(true);
    const createdUser = await addUser(inputData);
    console.log(createdUser);
    setIsUploading(false);
    if (createdUser) {
      navigate(`/user/${createdUser.user_id}/comments`, { replace: true });
    }
  };
  let timeout = null;
  React.useEffect(() => {
    if (showAlert) {
      timeout = setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [showAlert]);

  const closeAlert = () => {
    setShowAlert(false);
    clearTimeout(timeout);
  };

  if (isUploading) return <OverlayLoader />;
  return (
    <>
      {showAlert && (
        <AlertBanner
          msg="Please give your name to create the link"
          onClose={closeAlert}
        />
      )}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto w-full text-center md:max-w-2xl">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Create an
              <span className="text-[#3b92ff]">{" anonymous message "}</span>
              sending link 🐱‍👤
            </h2>

            <ul className="max-w-md space-y-1 mt-10 text-gray-500 list-disc dark:text-gray-400 mx-auto flex flex-col align-top justify-start px-4">
              <li className="text-left">
                Create a link that you can share with anyone.
              </li>
              <li className="text-left">
                When they click on the link, they will be able to send you an
                anonymous message.
              </li>
              <li className="text-left">
                Have fun and enjoy the anonymous messages from your friends.
              </li>
            </ul>
          </div>
          <div className="mx-auto mt-12 max-w-xl">
            <div className="flex flex-col items-center sm:flex-row sm:justify-center">
              <div className="flex w-full flex-col max-w-sm items-center space-y-5">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-base placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-[#12182f]"
                  type="email"
                  placeholder="Name*"
                  value={inputData.name}
                  onChange={(e) =>
                    setInputData({ ...inputData, name: e.target.value })
                  }
                />
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-base placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-[#12182f]"
                  type="email"
                  placeholder="Email (optional)"
                  value={inputData.email}
                  onChange={(e) =>
                    setInputData({ ...inputData, email: e.target.value })
                  }
                />
                <button
                  onClick={handleSubmit}
                  className="rounded-md bg-[#3b92ff] px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-[#3b92ff]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Create Link
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center px-8 sm:px-0">
            <Lock className="h-4 w-4 text-gray-600" />
            <span className="ml-2 text-sm text-gray-600">
              Your data is complely secured with us. We don&apos;t share with
              anyone.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
