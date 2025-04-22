import Button from "./Button";

export default function EditProject({ title, description, date }) {
  return (
    <>
      <div className="flex w-[80%] justify-between">
        <h2 className="pb-4 text-2xl font-bold text-stone-700">
          Learning React
        </h2>
        <Button text="Delete" isWhite="" hasStyleSet="" />
      </div>
      <div className="w-[80%]">
        <p className="pb-6 text-stone-400">Dec 29, 2024</p>
        <p className="pb-6">Description Text</p>
      </div>
      <hr className="h-[2px] w-[80%] border-none bg-stone-700/20" />
      <div className="w-[80%] pt-6">
        <h2 className="pb-6 text-2xl font-bold text-stone-700">Tasks</h2>
        <div className="flex gap-4 pb-6">
          <input
            type="text"
            className="w-3/5 rounded-sm border-2 border-transparent bg-stone-300 px-3 py-1"
          />
          <Button text="Add Task" isWhite={true} />
        </div>
        {/* <p>This project does not have any tasks yet.</p> */}
        <div className="flex justify-between bg-stone-100 p-2">
          <p className="">practice, practice, practice</p>
          <Button text="Delete" isWhite="" hasStyleSet="hover:text-red-500" />
        </div>
      </div>
    </>
  );
}
