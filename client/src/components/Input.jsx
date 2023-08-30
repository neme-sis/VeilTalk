import React from "react";

export function BottomTextInput({ label, placeholder, value, onChange }) {
  return (
    <div className="w-full md:w-1/3">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor="name"
      >
        {label}
      </label>
      <input
        className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type={type}
        placeholder={placeholder}
        id="name"
        value={value}
        onChange={onChange}
      ></input>
      <p className="mt-1 text-xs text-gray-500">*This field is required</p>
    </div>
  );
}
