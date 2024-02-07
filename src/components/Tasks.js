import React, { useContext } from "react";
import Task from "./Task";
import { TodoItemsContext } from "../store/todo-item-store";

export default function Tasks() {

  const {tasks}=useContext(TodoItemsContext)
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.name}
          task={task}
        />
      ))}
    </div>
  );
}
