import React from "react";
import Task from "./Task";

export default function Tasks({
  tasks,
  handleComplete,
  completed,
  handleDelete,
}) {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.name}
          task={task}
          handleComplete={handleComplete}
          completed={completed}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}
