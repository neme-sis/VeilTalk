import React from "react";
import { AlertTriangle, X } from "lucide-react";

export function AlertBanner({ msg = "", onClose = () => {} }) {
  return (
    <div className="fixed z-[500] top-5 left-[50%] translate-x-[-50%] w-[100%] max-w-[800px]">
      <div className="rounded-md border-l-4 border-red-500 bg-red-100 p-4">
        <div className="flex items-center justify-between space-x-4">
          <div>
            <AlertTriangle className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <p className="text-base font-medium text-red-600">{msg}</p>
          </div>
          <div onClick={onClose}>
            <X className="h-6 w-6 cursor-pointer text-red-600" />
          </div>
        </div>
      </div>
    </div>
  );
}
