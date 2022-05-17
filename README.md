# ToDo List

## What is this demo?

A todo list app that lets you create/delete tasks and set a priority.

## What are the objectives?

- The students should learn how requests and responses work.
- The students should learn how to fetch/create/delete tasks from the backend.

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

### Backend:

1. Talk about requests: it has a URL and method.
2. Talk about responses: it has a code and content (sometimes).
3. Send a request that fetches all tasks from the browser and show them the response.
4. Inspect, Open the network and show them the response.

### Fetch:

1. Install Axios `npm install axios`
2. In your store, `import axios from "axios";`
3. Create a `fetchTasks` function.
4. Add a button in App.js that will call this function.
5. Make an axios get request to fetch all data.
6. Inspect and show them the network response.
7. Console log the response, and explain what's a promise.
8. Add await and async
9. Console log the response, and show them the data.
10. Save the tasks (res.data) into your tasks property.
11. Add a try catch, and explain it.
12. Call function in the store and remove button.

### Create:

1. Introduce Postman.
2. Show them how to make a get request.
3. Show them how to a post request and add a body.
4. In your store make a post request to the backend.
5. Look at the response ( we see ID) great backend stuff!
6. Explain that we still need to add the res.data to our array of data in the frontend to have responsive change

### Delete :

1. Show them how to delete with Postman.
2. In the store add the call to BE.
3. Look at the response
