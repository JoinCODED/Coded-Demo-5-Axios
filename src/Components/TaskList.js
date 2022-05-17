import { observer } from "mobx-react";

// Components
import TaskItem from "./TaskItem";

// Store
import taskStore from "../stores/taskStore";

function TaskList() {
  const tasksList = taskStore.tasks.map((task) => (
    <TaskItem task={task} key={task.id} />
  ));

  return (
    <div class="row">
      <div class="col-md-12">
        <div class="main-todo-input-wrap">
          <div class="task-form  fl-wrap todo-listing">
            <ul id="list-items">
              {tasksList.length > 0 ? tasksList : "No tasks added yet"}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default observer(TaskList);
