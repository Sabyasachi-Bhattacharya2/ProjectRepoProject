import ProjectsSidebar from "./Component/ProjectsSidebar.jsx";
import NewProject from "./Component/NewProject.jsx";
import NoProjectsSelected from "./Component/NoProjectsSelected.jsx";
import {useState} from "react";
import SelectedProject from "./Component/SelectedProject.jsx";

function App() {
    const [projectState, setProjectState] = useState({
        selectedProject: undefined,
        projects: [],
        tasks: []
    });

    function handleAddTask(text) {
        setProjectState(prevState => {
            const taskId = Math.random();
            const newTask = {
                projectId: prevState.selectedProject,
                text: text,
                id: taskId,
            }

            return {
                ...prevState,
                tasks: [ newTask, ...prevState.tasks]
            }
        })
    }

    function handleDeleteTask(id) {
        setProjectState(prevState => {
            return{
                ...prevState,
                tasks:
                    prevState.tasks.filter((task) =>
                        task.id !== id)
            }
        })
    }

    function handleStartAddProject() {
        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProject: null,
            };
        });
    }

    function handleAddProject(projectData) {
        setProjectState(prevState => {
            const newProject = {
                ...projectData,
                id: Math.random()
            }
            return {
                ...prevState,
                selectedProject: undefined,
                projects: [...prevState.projects, newProject],
            }
        })
    }

    function handleCancelProject() {
        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProject: undefined
            }
        })
    }

    function handleSelectedProject(id) {
        setProjectState( prevState => {
                return {
                    ...prevState,
                    selectedProject: id,
                }
            }
        )
    }

    function handleDeleteProject() {
        setProjectState(prevState => {

            return {
                ...prevState,
                selectedProject: undefined,
                projects: prevState.projects.filter(p => p.id !== prevState.selectedProject)
            }
        })
    }

    const selectedProject = projectState.projects.find(
        project => project.id === projectState.selectedProject
    )
    let content =
        <SelectedProject
            project={selectedProject}
            onDelete={handleDeleteProject}
            onAddTask={handleAddTask}
            onDeleteTask={handleDeleteTask}
            tasks={projectState.tasks}
        />;
    if(projectState.selectedProject === undefined) {
        content = (<NoProjectsSelected onStartAddProject={handleStartAddProject}/>)
    } else if(projectState.selectedProject === null) {
        content = (<NewProject onAdd={handleAddProject} onCancelProject={handleCancelProject} />);
    } else {

    }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
          onStartAddProject={handleStartAddProject}
          projects={projectState.projects}
          onSelectProject={handleSelectedProject}
          selectedProjectId={projectState.selectedProject}
      />
        {content}
    </main>
  );
}

export default App;
