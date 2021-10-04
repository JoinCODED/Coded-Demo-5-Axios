

export default function TaskItem(props) {
  const task = props.task;
  return (
    <li>
      <p className="todo-text">
        {task.title}
        <span class="chip info">{task.priority}</span>
        <p
          className="remove"
          onClick={() => {
            //todo : delete a task
            props.deleteTask(task.id)
          }}
        >
          Delete
        </p>
      </p>
    </li>
  );
}
