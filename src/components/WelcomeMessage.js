import React, { useContext } from "react";
import { TodoItemsContext } from "../store/todo-item-store";

export default function WelcomeMessage() {
  const{tasks}=useContext(TodoItemsContext)
  return (
    <div className="w-screen text-xl font-bold px-3 max-w-[720px] flex flex-col justify-center items-center mt-5">
      {tasks.length === 0 && (
        <div className="flex flex-col justify-center items-center">
          <p>No Task assigned</p>
          <p>Enjoy your day</p>
        </div>
      )}
    </div>
  );
}
