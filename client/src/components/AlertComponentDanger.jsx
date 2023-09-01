import React from "react";
import { AlertTriangle, X, CheckCircle } from "lucide-react";

export function AlertBanner({ msg = "", onClose = () => {}, type = "danger" }) {
  return (
    <div className="fixed z-[500] top-5 left-[50%] translate-x-[-50%] w-[100%] max-w-[800px]">
      <div
        className={`rounded-md border-l-4 ${
          type === "danger"
            ? "bg-red-100 border-red-500"
            : "bg-green-100 border-green-500"
        } p-4`}
      >
        <div className="flex items-center justify-between space-x-4">
          <div>
            {type === "danger" ? (
              <AlertTriangle className="h-6 w-6 text-red-600" />
            ) : (
              <CheckCircle className="h-6 w-6 text-green-600" />
            )}
          </div>
          <div>
            <p
              className={`text-base font-medium text-${
                type === "danger" ? "red" : "green"
              }-600`}
            >
              {msg}
            </p>
          </div>
          <div onClick={onClose}>
            <X
              className={`h-6 w-6 cursor-pointer text-${
                type === "danger" ? "red" : "green"
              }-600`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
