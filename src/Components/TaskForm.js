import { useState } from "react";

// Stores
import taskStore from "../stores/taskStore";

function TaskForm() {
  const [task, setTask] = useState({ title: "", priority: "" });

  const handleChange = (e) => {
    //title       : "wash dishes"
    //priority    :  "high"
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleReset = () => setTask({ title: "", priority: "" });

  const handleSubmit = (e) => {
    e.preventDefault(); //stops page from refreshing
    taskStore.createTask(task);
    handleReset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="task-form">
        <input
          value={task.title}
          name="title"
          required
          placeholder="What do you need to do today?"
          onChange={handleChange}
        />
        <select
          name="priority"
          className="form-select"
          onChange={handleChange}
          value={task.priority}
        >
          <option>Priority</option>
          <option value="high">High</option>
          <option value="moderate">Moderate</option>
          <option value="low">Low</option>
        </select>

        <button type="submit">ADD</button>
      </form>
    </div>
  );
}

export default TaskForm;
