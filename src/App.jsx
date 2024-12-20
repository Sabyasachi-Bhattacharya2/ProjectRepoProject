import ProjectsSidebar from "./Component/ProjectsSidebar.jsx";
import NewProject from "./Component/NewProject.jsx";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar/>
        <NewProject/>
    </main>
  );
}

export default App;
