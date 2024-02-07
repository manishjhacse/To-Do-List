import "./App.css";
import Heading from "./components/Heading";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider from "./store/todo-item-store";


function App() {
 
  return (
    <TodoItemsContextProvider>
      <div className="min-h-screen w-screen flex flex-col justify-start items-center">
        <Heading />
        <AddTask />
        <WelcomeMessage />
        <Tasks />
      </div>
    </TodoItemsContextProvider>
  );
}

export default App;
