import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSideBar from "./components/ProjectSideBar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  // Adding project
  function handleAddProject(projectData) {
    setProjectState(prevProject => {
      const newProject = {
        ...projectData,
        id: Date.now(), // Use timestamp for unique ID
      };
      return {
        ...prevProject,
        selectedProjectId: undefined,
        projects: [...prevProject.projects, newProject],
      };
    });
  }

  // Adding project task
  function handleAddProjectTask(text) {
    setProjectState(prevState => {
      if (prevState.selectedProjectId === undefined) return prevState; // Prevent adding task if no project is selected
      const newProjectTask = {
        id: Date.now(), // Use timestamp for unique task ID
        text: text,
        projectId: prevState.selectedProjectId,
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newProjectTask],
      };
    });
  }

  // Deleting task
  function handleDeleteProjectTask(id) {
    setProjectState(prevTask => {
      return {
        ...prevTask,
        tasks: prevTask.tasks.filter(task => task.id !== id),
      };
    });
  }

  // Cancel
  function handleCancel() {
    setProjectState(prevProject => ({
      ...prevProject,
      selectedProjectId: undefined,
    }));
  }

  // Close selected project
  function handleClose() {
    setProjectState(prevProject => ({
      ...prevProject,
      selectedProjectId: undefined,
    }));
  }

  // View detail of project
  function viewDetailOfProject(id) {
    setProjectState(prevProject => ({
      ...prevProject,
      selectedProjectId: id,
    }));
  }

  // Start to add list of projects
  function handleStartAddProject() {
    setProjectState(prevProject => ({
      ...prevProject,
      selectedProjectId: null,
    }));
  }

  // Deleting project
  function handleDeleteProject() {
    setProjectState(prevProject => ({
      ...prevProject,
      selectedProjectId: undefined,
      projects: projectState.projects.filter(project => project.id !== projectState.selectedProjectId),
    }));
  }

  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId);

  let content = (
    <SelectedProject
      project={selectedProject}
      onClose={handleClose}
      onDelete={handleDeleteProject}
      onAddTask={handleAddProjectTask}
      onDeleteTask={handleDeleteProjectTask}
      tasks={projectState.tasks}
    />
  );

  if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddProject={handleStartAddProject} />;
  } else if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancel} />;
  }

  return (
    <main className="h-screen py-8 flex gap-3">
      <ProjectSideBar
        onAddProject={handleStartAddProject}
        projects={projectState.projects}
        viewDetail={viewDetailOfProject}
      />
      {content}
    </main>
  );
}

export default App;