# ToDo List


## What is this demo?

A todo list app that let you create/delete tasks and set a priority.

## What are the objectives?

The students should learn how to:
- Fetch Tasks from the Backend
- Create Task in the Backend
- Delete Task from the Backend
- Update Task in the Backend [Challenge. Not in demo]

## Backend

Link: https://react-demo-axios-be.herokuapp.com

Endpoints:
<table>
  <tr>
    <td>Request</td>
    <td>URL</td>
    <td>Function</td>
  </tr>
  <tr>
    <td>get</td>
    <td>https://react-demo-axios-be.herokuapp.com/tasks</td>
    <td>fetchTasks</td>
  </tr>
  <tr>
    <td>post</td>
    <td>https://react-demo-axios-be.herokuapp.com/tasks</td>
    <td>createTask</td>
  </tr>
  <tr>
    <td>delete</td>
    <td>https://react-demo-axios-be.herokuapp.com/tasks/:taskId</td>
    <td>deleteTask</td>
  </tr>
</table>

## Steps

### Fetch:
1. In the terminal, install Axios using `npm install axios` 
2. In App.js `import axios from "axios"`
3. Inside the App component, create `fetchTasks` function
    
```
const fetchTasks = () => {}
```

5. Add try/catch blocks

```
const fetchTasks = async () => {
    try {}
    catch (error) {}
  }
```
6. Declare  `const response` and save the value of `axios.get("https://react-demo-axios-be.herokuapp.com/tasks")` inside it
7. Add the await and async keywords
8. [Recommended] log the response using `console.log(response.data)` to show the data coming in from the url.
9. Your code should look like:
```
const fetchTasks = async () => {
  try {
    const response = await axios.get("https://react-demo-axios-be.herokuapp.com/tasks");
    console.log(response.data)
  }
  catch (error) {
    console.log(error)
  }
}
```
8. Remove the `console.log(response.data)`
9. Set tasks state to `response.data` using `setTasks(response.data)`
```
const fetchTasks = async () => {
  try {
    const response = await axios.get("https://react-demo-axios-be.herokuapp.com/tasks");
    console.log(response.data)
    setTasks(response.data)
  }
  catch (error) {
    console.log(error)
  }
}
```

10. In App component, call `fetchTasks` in `useEffect ()`
```
useEffect(() => {
  fetchTasks()
}, [])
```

11. Open the website in the browser, the tasks should load in shortly after the page opens!

### Create:
1. In `App.js`, create `createTask` function
2. We will follow similar steps as fetching to write the function. The end result should be:

```
const createTask = async (newTask) => {
  try {
    const response = await axios.post("https://react-demo-axios-be.herokuapp.com/tasks", newTask);
    console.log(response)
  }
  catch (error) {
    console.log(error)
  }
  setTasks([...tasks, newTask])
};
```

3. Note `axios.post` takes an additional, 2nd, argument `newTask`. Note it is different than `axios.get`
4. Show `console.log(response)` results NOT response.data
5. Note how `console.log(response)` shows a level 200 message which means all is good
6. Note in some cases the server sends back the object in `response.data`. But is not a standard and depends on the backend programming
7. Open the website and try creating a new task! 

### Delete :
1. In `App.js`, create `deleteTask` function
2. We will follow similar steps as fetching & creating to write the function. The end result should be:
```
const deleteTask = async (id) => {
  try {
    const response = await axios.delete(`https://react-demo-axios-be.herokuapp.com/tasks/${id}`);
    console.log(response)
  }
  catch (error) {
    console.log(error)
  }
  let tempTasks = tasks.filter(task => task.id !== id)
  setTasks(tempTasks)
}
```
3. Make sure the `deleteTask` function is passed down `<TaskList />`. It should look like:
```
<TasksList tasks={tasks} setTasks={setTasks} deleteTask={deleteTask} />
```
4. Open the website and try to delete any of the tasks listed 

## Instructor Notes

These are detailed notes written by various instructors. Feel free to use them or write your own.

- [Aziz's Notes](https://github.com/JoinCODED/DEMO-Template/blob/main/aziz.md)
