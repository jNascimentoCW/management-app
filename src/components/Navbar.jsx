import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`${isOpen ? "absolute bg-black/85" : "absolute md:relative md:bg-black"} h-full w-60 self-start px-6 py-6 text-stone-200 md:h-[85%] md:w-1/4 md:self-end md:rounded-tr-4xl md:px-12 md:py-24`}
    >
      <div className="flex items-center justify-start">
        <div className="invisible absolute flex flex-col md:visible">
          <h2 className="py-6 text-xl font-bold uppercase">Your Projects</h2>
          <button className="cursor-pointer rounded-lg bg-stone-600 p-3 text-stone-400 hover:bg-stone-400 hover:text-stone-900">
            + Add Projects
          </button>
        </div>
        <button
          className="rounded-sm bg-black p-2 text-white focus:outline-none md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } mt-4 flex flex-col items-start justify-end`}
      >
        <h2 className="text-md py-4 font-bold uppercase">Your Projects</h2>
        <button className="cursor-pointer rounded-lg bg-stone-600 p-3 text-stone-400 hover:bg-stone-400 hover:text-stone-900">
          + Add Projects
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
