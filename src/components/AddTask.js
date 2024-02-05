import React, { useState } from "react";

export default function AddTask({ handleAdd }) {
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");
  function onAdd() {
    handleAdd(taskName, taskDate);
    setTaskDate("");
    setTaskName("");
  }
  return (
    <div className=" px-3 w-[80%] max-w-[900px] gap-5 flex justify-center items-center mt-5">
      <input
        onChange={(e) => setTaskName(e.target.value)}
        value={taskName}
        className="px-2 py-2 outline-none border border-black rounded-md w-[60%]"
        type="text"
        placeholder="Add Task"
      />
      <input
        value={taskDate}
        onChange={(e) => setTaskDate(e.target.value)}
        min={new Date().toISOString().slice(0, 10)}
        className="px-2 py-2 outline-none border border-black rounded-md w-10 md:w-[20%]"
        type="date"
      />
      <button
        onClick={onAdd}
        className="bg-blue-500 hover:bg-blue-700 transition-all duration-200 w-[75px] py-2 rounded-md font-bold text-[18px]"
      >
        Add
      </button>
    </div>
  );
}
