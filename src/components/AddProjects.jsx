import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Button from "./Button";

export default function AddProjects() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <div className="left-0 flex gap-2 md:w-[80%]">
        <Button text="Cancel" isWhite={true} />
        <Button text="Save" isWhite={false} />
      </div>
      <div className="w-full md:w-[80%]">
        <form action="" className="">
          <div className="flex flex-col">
            <label htmlFor="title" className="pt-5">
              Title
            </label>
            <input
              className="rounded-sm border-2 border-transparent border-b-stone-500 bg-stone-300 px-3 py-1 outline-none"
              type="text"
              id="title"
              name="title"
              placeholder="Enter a title"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="description" className="pt-5">
              Description
            </label>
            <textarea
              className="rounded-sm border-2 border-transparent border-b-stone-500 bg-stone-300 px-3 py-1 outline-none"
              type="textarea"
              id="description"
              name="description"
              placeholder="Write a description"
            />
          </div>
          {/* <div className="flex flex-col">
            <label htmlFor="projectName" className="pt-5">
              Description
            </label>
            <input
              className="rounded-sm border-2 border-transparent border-b-stone-500 bg-stone-300 px-3 py-1 outline-none"
              type="date"
              id="projectName"
              name="projectName"
            />
          </div> */}
          <div className="mt-5 w-full rounded-sm border-2 border-transparent border-b-stone-500 bg-stone-300 px-3 py-1">
            <DatePicker
              selected={startDate}
              dateFormat="dd/MM/yyyy"
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </form>
      </div>
    </>
  );
}
