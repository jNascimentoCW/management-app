import AddProjects from "./components/AddProjects";
import EditProject from "./components/EditProject";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";

function App() {
  return (
    <div className="flex h-screen">
      <Navbar />
      <MainPage />
      {/* <AddProjects /> */}
      {/* <EditProject /> */}
    </div>
  );
}

export default App;
