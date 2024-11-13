/* eslint-disable react/prop-types */
import NewTask from "./NewTask";

const Tasks = ({ tasks, onAddTask, onDeleteTask }) => {
  return (
    <div>
      <h1 className="ml-10 p-3 text-2xl text-stone-950 font-bold">
        Project Task
      </h1>
      <NewTask onAddTask={onAddTask} />
      {tasks.length === 0 ? (
        <p className="text-lg text-pretty font-semibold p-4">
          No project task listed.
        </p>
      ) : (
        <ul className="text-lg text-pretty font-semibold ">
                      {tasks.map((task) => {
              console.log(task)
            return (
              <li key={task.id} className="p-4 flex justify-between ">
                <span className="text-stone-900 ">{task.text}</span>
                <button
                  onClick={() => onDeleteTask(task.id)}
                  className="text-xl hover:text-red-400"
                  aria-label={`Delete task: ${task.text}`}
                >
                  clear
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Tasks;
