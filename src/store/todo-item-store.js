import { createContext, useReducer } from "react";
export const TodoItemsContext=createContext({
    tasks: [],
    handleAdd: ()=>{},
    completed: [],
    handleComplete: ()=>{},
    handleDelete: ()=>{},
})

//reducer function is pure function so it will be declared seprately 
function todoItemsReducer(curentTask, action) {
    let newTask = curentTask;
    if (action.type === "NEW_ITEM") {
      newTask = [
        ...curentTask,
        { name: action.payload.taskName, date: action.payload.taskDate },
      ];
    } else if (action.type === "DELETE_ITEM") {
      newTask = curentTask.filter((t) => t !== action.payload.task);
    }
    return newTask;
  }
  function completeTaskReducer(currentCompletedTask, action) {
    let newCompletedTask = currentCompletedTask;
    if (action.type === "REMOVE_FROM_COMPLETED") {
      newCompletedTask = currentCompletedTask.filter(
        (task) => task !== action.payload.task
      );
    } else if (action.type === "ADD_TO_COMPLETED") {
      newCompletedTask = [...currentCompletedTask, action.payload.task];
    }
    return newCompletedTask;
  }

const TodoItemsContextProvider=({children})=>{
  const [tasks, dispatchTasks] = useReducer(todoItemsReducer, []);
  const [completed, dispatchCompleted] = useReducer(completeTaskReducer, []);
  function handleAdd(taskName, taskDate) {
    const newTask = {
      type: "NEW_ITEM",
      payload: {
        taskName,
        taskDate,
      },
    };
    dispatchTasks(newTask);
  }
  function handleDelete(task) {
    const deleteTask = {
      type: "DELETE_ITEM",
      payload: {
        task,
      },
    };
    dispatchTasks(deleteTask);
  }
  function handleComplete(task) {
    let newCompletedTask;
    if (completed.includes(task)) {
      newCompletedTask = {
        type: "REMOVE_FROM_COMPLETED",
        payload: {
          task,
        },
      };
    } else {
      newCompletedTask = {
        type: "ADD_TO_COMPLETED",
        payload: {
          task,
        },
      };
    }
    dispatchCompleted(newCompletedTask);
  }
  const value = {
    tasks: tasks,
    handleAdd: handleAdd,
    completed: completed,
    handleComplete: handleComplete,
    handleDelete: handleDelete,
  };

    return(
        <TodoItemsContext.Provider value={value}>
            {children}
        </TodoItemsContext.Provider>
    )
}
export default TodoItemsContextProvider;