/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import Input from "./Input";

const NewProject = ({ onAdd, onCancel }) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  const [errorMessage, setErrorMessage] = useState(null);
  const [isInvalid, setIsInvalid] = useState(false);

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDate = dueDateRef.current.value;

    const invalid = enteredTitle === "" || enteredDescription === "" || !enteredDate;

    if (invalid) {
      setIsInvalid(true);
      setErrorMessage("Please enter the required information");
    } else {
      setIsInvalid(false);
      setErrorMessage(null);
      console.log("Adding project:", { title: enteredTitle, description: enteredDescription, dueDate: enteredDate });
      onAdd({
        title: enteredTitle,
        description: enteredDescription,
        dueDate: enteredDate,
      });
    }
 
  }

  return (
    <div className="w-[35rem] m-16">
      <menu className="flex items-center justify-end gap-4 text-lg">
        <li>
          <button
            onClick={onCancel}
            className="text-stone-500 shadow-sm rounded-lg hover:text-stone-800"
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className={`${
              isInvalid ? "bg-gray-700" : "bg-stone-800"
            } text-stone-100 px-4 shadow-md rounded-lg hover:bg-stone-400`}
          >
            Save
          </button>
        </li>
      </menu>

      <div className="flex flex-col gap-y-5">
        <Input type="text" ref={titleRef} title="Title" isValid={isInvalid} />
        <Input ref={descriptionRef} title="Description" istextarea isValid={isInvalid} />
        <Input type="date" ref={dueDateRef} title="Due Date"  isValid={isInvalid}/>
        {isInvalid && <h1 className="text-red-500 text-md p-3 mt-3">{errorMessage}</h1>}
      </div>
    </div>
  );
};

export default NewProject;