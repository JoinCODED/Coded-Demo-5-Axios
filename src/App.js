import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import AddTaskForm from "./Components/AddTaskForm";
import TasksList from "./Components/TasksList";
import tasksData from "./tasksData";

function App() {
  const [tasks, setTasks] = useState(tasksData);

  const createTask = (newTask) => {
    const id = tasks[tasks.length - 1].id + 1;
    const nTask = { ...newTask, id: id };
    console.log(nTask);
    setTasks([...tasks, nTask]);
  };

  const deleteTask = (id) => {
    let tempTasks = tasks.filter((task) => task.id !== id);
    setTasks(tempTasks);
  };

  return (
    <>
      <div class="row">
        <AddTaskForm createTask={createTask} />
      </div>
      <TasksList tasks={tasks} deleteTask={deleteTask} />
    </>
  );
}

export default App;
