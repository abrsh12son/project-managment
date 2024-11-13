/* eslint-disable react/prop-types */
import { useRef, useState } from "react";

export default function NewTask({onAddTask}) {
  const [tasText, setTaskText] = useState("");
  const textRef = useRef();
  function handleTask() {
    if (textRef.current.value.trim() === "") {
      return;
    }
      setTaskText(textRef.current.value);
      onAddTask(tasText)
    textRef.current.focus();
    textRef.current.value = "";
  }
  return (
    <section>
      <div className="flex items-center gap-2 mt-5 rounded-lg">
        <input
          type="text"
          className=" border border-gray-400 rounded-lg p-1 w-[300px] focus:outline-none focus:ring-2 focus:ring-gray-300"
          placeholder="Enter tasks"
          ref={textRef}
        />
        <button
          onClick={handleTask}
          className="bg-stone-800 text-white px-4 py-1 rounded-lg hover:bg-gray-600 transition duration-200"
        >
          Add Task
        </button>
      </div>
    </section>
  );
}
