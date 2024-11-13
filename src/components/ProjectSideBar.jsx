/* eslint-disable react/prop-types */
import Button from "./Button";

export default function ProjectSideBar({ onAddProject, projects ,viewDetail }) {
  return (
    <aside className="flex flex-col gap-3 w-[400px] p-8 bg-stone-950 text-white h-screen rounded-r-xl">
      <h1 className="text-3xl font-black first-letter:italic uppercase">
        Your Projects Here
      </h1>
      <div className="m-8">
        <Button className="px-3 py-1 text-xl hover:bg-stone-700" onClick={onAddProject}>
          + Add Project
        </Button>
      </div>
      <ul className="mt-3 flex flex-col gap-4 ml-6 w-full">
        {projects.length === 0 ? (
          <li className="text-stone-400">No projects available.</li>
        ) : (
          projects.map((project) => (
            <li key={project.id}>
              <button onClick={()=>viewDetail(project.id)}
                className="text-stone-200 rounded-sm w-full px-4 py-2 text-xl  mr-8 hover:bg-stone-900 hover:text-stone-400 shadow-lg text-left break-words"
              >
                
                {project.title}
              </button>
            </li>
          ))
        )}
      </ul>
    </aside>
  );
}