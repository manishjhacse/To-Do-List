import React, { useContext, useRef } from "react";
import { TodoItemsContext } from "../store/todo-item-store";

export default function AddTask() {
  const { handleAdd } = useContext(TodoItemsContext);
  const taskName = useRef();
  const taskDate = useRef();
  function onAdd(event) {
    event.preventDefault();
    handleAdd(taskName.current.value, taskDate.current.value);
    taskName.current.value = "";
    taskDate.current.value = "";
  }
  return (
    <form
      onSubmit={onAdd}
      className=" px-3 w-[80%] max-w-[900px] gap-5 flex justify-center items-center mt-5"
    >
      <input
        required
        ref={taskName}
        className="px-2 py-2 outline-none border border-black rounded-md w-[60%]"
        type="text"
        placeholder="Add Task"
      />
      <input
        ref={taskDate}
        min={new Date().toISOString().slice(0, 10)}
        className="px-2 py-2 outline-none border border-black rounded-md w-10 md:w-[20%]"
        type="date"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 transition-all duration-200 w-[75px] py-2 rounded-md font-bold text-[18px]"
      >
        Add
      </button>
    </form>
  );
}
