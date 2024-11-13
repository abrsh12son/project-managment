/* eslint-disable react/prop-types */

import Tasks from "./Tasks";

const SelectedProject = (
  { project,
    onClose,
    onDelete,
    onAddTask,
    onDeleteTask,
    tasks,
  }
) => {
  return (
      <div className="flex flex-col gap-8 w-[700px] ml-12 mt-8  break-words">
          <h1 className="text-center text-3xl text-stone-900 fonr-bold p-3">Project overview</h1>
      <header className="flex ga-8 justify-between items-center mr-5">
              <h1 className="text-2xl  text stroke-neutral-700 font-bold ">{project.title}</h1>
        <div className="flex gap-3">
        <button 
          onClick={onClose}
                  
          className="text-3xl text-center items-center text-black  font-semibold  hover:text-stone-400 rounded-lg">
          X</button>
          <button
          onClick={onDelete}
                  
          className="bg-stone-600 w-fit mx-5  text-white px-4 shadow-sm hover:bg-stone-400 rounded-lg">
          Delete</button>
       </div>
      </header>
      <div className="text-xl font-semibold text-pretty whitespace-pre-wrap mr-5">{project.description} 


      </div>
      <div className="text-base font-medium flex flex-col gap-10">
        {project.dueDate}
        
        <h1>
    <hr className="border-t-2 border-gray-300 w-full mx-auto my-4 -ml-6" />
</h1>      </div>
      <main>
        <Tasks
          onAddTask={onAddTask}

          onDeleteTask={onDeleteTask}

          tasks={tasks}
        />
        
      </main>
    </div>
  );
};

export default SelectedProject;
