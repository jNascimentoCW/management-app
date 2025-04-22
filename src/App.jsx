import AddProjects from "./components/AddProjects";
import EditProject from "./components/EditProject";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";

function App() {
  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="flex w-full flex-col items-center justify-center text-center md:w-3/4">
        <MainPage />
        {/* <AddProjects /> */}
        {/* <EditProject /> */}
      </div>
    </div>
  );
}

export default App;
