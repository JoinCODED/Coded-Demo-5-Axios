// Components
import TaskForm from "./Components/TaskForm";
import TasksList from "./Components/TaskList";

// Styles
import "./App.css";

function App() {
  return (
    <>
      <div class="row">
        <TaskForm />
      </div>
      <TasksList />
    </>
  );
}

export default App;
