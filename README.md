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

1. Install Axios `yarn add axios` 
2. in App.js `import axios from "axios"`
3. create a fetch tasks function 
4. call it in use effect 
5. add await and async
6. set tasks (response.data)
7. try catch
8. create task function 
9. 
2- Create fetchTasks method in the taskStore and set it to action
<br/>
3- Wrap the method with a try catch block
<br/>
4- Do the same for deleteTask method
<br/>
5- The same for createTask method

## Instructor Notes

These are detailed notes written by various instructors. Feel free to use them or write your own.

- [Aziz's Notes](https://github.com/JoinCODED/DEMO-Template/blob/main/aziz.md)
