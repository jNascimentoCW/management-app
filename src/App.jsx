import AddProjects from "./components/AddProjects";
import EditProject from "./components/EditProject";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex h-screen">
      <Navbar />

      {/* <div className="flex w-full flex-col items-center justify-center text-center md:w-3/4">
        <img src="/logo.png" alt="logo-img" className="mx-auto w-16 pb-6" />
        <h1 className="pb-6 text-2xl font-extrabold text-stone-600">
          No Project Selected
        </h1>
        <p className="pb-6 text-stone-500">
          Select a project or get started with a new one
        </p>
        <button className="cursor-pointer rounded-lg bg-stone-600 p-3 text-stone-400 hover:bg-stone-400 hover:text-stone-900">
          Create new project
        </button>
      </div> */}
      <AddProjects />
      {/* <EditProject /> */}
    </div>
  );
}

export default App;
