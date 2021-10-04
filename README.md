# ToDo List


## What is this demo?

A todo list app that let you create/delete tasks and set a priority.

## What are the objectives?

The students should learn how to fetch/create/delete tasks from the backend.

## Backend

Link: https://react-demo-axios-be.herokuapp.com
<br/>
Endpoints:
<br/>
get '/tasks', getTasks
<br/>
post '/tasks', createTask
<br/>
delete 'tasks/:taskId', deleteTask

## Steps

### Fetch:
1. Install Axios `yarn add axios` 
2. in App.js `import axios from "axios"`
3. create a fetch tasks function 
4. call it in use effect 
5. add await and async
6. set tasks (response.data)
7. try catch

### Create:
9. go to create task form 
10. create state called task
11. add its value for the inputs and onchange
12. `event.preventDefault();`
13. in app fill createTask function
14. push new task to the array `setTasks([...tasks, newTask])`
15. look at the responce ( we see ID) great backend stuff!


### Delete :
1. in task Item pass id to the function u pass as a prope
2. create a temp array to filter out the delted task

## Instructor Notes

These are detailed notes written by various instructors. Feel free to use them or write your own.

- [Aziz's Notes](https://github.com/JoinCODED/DEMO-Template/blob/main/aziz.md)
