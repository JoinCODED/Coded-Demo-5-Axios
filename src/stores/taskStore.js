import { makeAutoObservable } from "mobx";

class TaskStore {
  tasks = [];

  constructor() {
    makeAutoObservable(this);
  }

  createTask = (newTask) => {
    this.tasks.push(newTask);
  };

  deleteTask = (id) => {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  };
}

const taskStore = new TaskStore();
export default taskStore;
