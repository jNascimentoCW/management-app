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
          <div className="flex flex-col">
            <label htmlFor="projectName" className="pt-5">
              Description
            </label>
            <input
              className="rounded-sm border-2 border-transparent border-b-stone-500 bg-stone-300 px-3 py-1 outline-none"
              type="date"
              id="projectName"
              name="projectName"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
