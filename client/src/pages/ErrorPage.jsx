import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex items-center justify-center px-2 md:px-0 min-h-screen bg-zinc-100">
      <div>
        <p className="text-lg font-semibold text-black">404 error</p>
        <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
          We can&apos;t find that page
        </h1>
        <p className="mt-4 text-gray-500">
          Sorry, the page you are looking for doesn&apos;t exist or has been
          moved.
        </p>
        <div className="mt-6 flex items-center space-x-3">
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-black px-3 py-2 text-lg font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <Link
              to={"/"}
              className="no-underline text-black flex justify-center items-center"
            >
              <ArrowLeft size={16} className="mr-2" />
              Go back
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
