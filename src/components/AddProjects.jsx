export default function AddProjects() {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-pink-200 md:w-3/4">
      <div className="left-0 flex gap-2">
        <button>Cancel</button>
        <button>Save</button>
      </div>
      <div>
        <form action="" className="bg-pink-600 p-10">
          <div className="flex flex-col">
            <label htmlFor="projectName">Title</label>
            <input
              type="text"
              id="projectName"
              name="projectName"
              placeholder="Enter project name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="projectName">Description</label>
            <input
              type="text"
              id="projectName"
              name="projectName"
              placeholder="Enter project name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="projectName">Description</label>
            <input
              type="date"
              id="projectName"
              name="projectName"
              placeholder="Enter project name"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
