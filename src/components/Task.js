import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { TodoItemsContext } from "../store/todo-item-store";

export default function Task({
  task
}) {
  const{handleComplete,completed,handleDelete}=useContext(TodoItemsContext)
  return (
    <div
      className={`w-screen lg:w-[900px] rounded-md ${
        completed.includes(task) ? "bg-blue-500 py-2" : null
      } md:px-4 px-1 flex-wrap sm:border-none border border-black sm:gap-x-5 flex md:justify-center justify-between items-center mt-5 transition-all duration-200`}
    >
      <p
        className="md:px-2
         py-2 sm:text-xl font-bold w-[150px] sm:w-[60%]"
      >
        <button
          onClick={() => handleComplete(task)}
          className={` h-[14px] w-[14px] ${
            completed.includes(task) ? "bg-black" : null
          } border-black border-2 rounded-full mr-2`}
        ></button>
        <span>{task.name}</span>
      </p>
      <p className="px-2 py-2 sm:text-xl font-bold md:min-w-[20%]">
        {task.date}
      </p>
      <button
        onClick={() => handleDelete(task)}
        className="bg-red-500 md:block hidden hover:bg-red-700 transition-all duration-200 w-[75px] py-2 rounded-md font-bold text-[18px]"
      >
        Delete
      </button>
      <button
        onClick={() => handleDelete(task)}
        className="bg-red-500 md:hidden hover:bg-red-700 transition-all duration-200 h-[20px] w-[20px] flex justify-center items-center  md:h-[30px] md:w-[30px] rounded-full font-bold text-[18px]"
      >
        {<FontAwesomeIcon icon={faXmark} />}
      </button>
    </div>
  );
}
