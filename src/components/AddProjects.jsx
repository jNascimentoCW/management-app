import Button from "./Button";

export default function AddProjects() {
  return (
    <div className="flex w-full flex-col items-end justify-center px-15 md:w-4/5 md:items-center">
      <div className="left-0 flex gap-2 md:w-[80%]">
        <Button text="Cancel" isWhite={true} />
        <Button text="Save" isWhite={false} />
      </div>
      <div className="w-full md:w-[80%]">
        <form action="" className="">
          <div className="flex flex-col">
            <label htmlFor="projectName" className="pt-5">
              Title
            </label>
            <input
              className="rounded-sm border-2 border-transparent border-b-stone-500 bg-stone-300 px-3 py-1 outline-none"
              type="text"
              id="projectName"
              name="projectName"
              placeholder="Enter a title"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="projectName" className="pt-5">
              Description
            </label>
            <textarea
              className="rounded-sm border-2 border-transparent border-b-stone-500 bg-stone-300 px-3 py-1 outline-none"
              type="textarea"
              id="projectName"
              name="projectName"
              placeholder="Write a description"
            />
          </div>
          {/* Date picker from flowbite */}
          <div className="relative flex items-center pt-5">
            <div className="pointer-events-none absolute mx-4">
              <svg
                className="h-4 w-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <input
              id="datepicker-autohide"
              datepicker="true"
              datepicker-autohide="true"
              type="text"
              className="w-full rounded-sm border-2 border-transparent border-b-stone-500 bg-stone-300 px-9 py-1 outline-none"
              placeholder="Select date"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
