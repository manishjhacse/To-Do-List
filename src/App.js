import { useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import WelcomeMessage from "./components/WelcomeMessage";
function App() {
  const [completed, setCompleted] = useState([]);
  const [tasks, setTasks] = useState([]);
  function handleAdd(taskName, taskDate) {
    if (!taskName) {
      return;
    }
    let newTask = [...tasks, { name: taskName, date: taskDate }];
    setTasks(newTask);
  }
  function handleComplete(task) {
    if (completed.includes(task)) {
      let newCompleted = completed.filter((t) => t !== task);
      setCompleted(newCompleted);
    } else {
      let newCompleted = [...completed, task];
      setCompleted(newCompleted);
    }
  }
  function handleDelete(task) {
    let newtasks = tasks.filter((t) => t !== task);
    setTasks(newtasks);
  }

  return (
    <div className="min-h-screen w-screen flex flex-col justify-start items-center">
      <Heading />
      <AddTask handleAdd={handleAdd} />
      <WelcomeMessage tasks={tasks} />
      <Tasks
        tasks={tasks}
        handleComplete={handleComplete}
        completed={completed}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
