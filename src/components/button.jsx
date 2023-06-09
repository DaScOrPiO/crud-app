import React from "react";

export default function Button({ text, click }) {
  return (
    <button onClick={click}
      className="z-0 rounded-md px-8 py-3 mt-5 text-2xl
    font-bold bg-black text-white hover:bg-gray-800 w-full"
    >
      {text}
    </button>
  );
}
