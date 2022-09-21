
# React-Memories-Share


## Process/Installation


FRONT END/CLIENT

I first created two folders to handle the server side and client side. To make the react app client
folder, you first have to open the terminal in that folder. Once in, the command needed to install
is `npx create-react-app ./`. That command will create the app in the current directory. Next I,
created the server folder which did a `npm init -y` to get the package.json folder proper.

In the server folder, I had to install several packages to handle the parsing of data and requirements
to get a simple server running. To install the same packages, please do `npm install body-parser cors 
express mongoose nodemon`. After the installation, you have to go to the package.json and go under main,
and add this line of code `"type" : "module",` which allows for a simplier import system to be used.
Also we can remove the test scripts and add a start script for nodemon to fire the server.

For the client side, I will mainly be using Material-Ui to handle the design aspect of the application.
this will make designing easier to make and obtain. Other dependecies were installed such as 
`moment redux react-google-login axios jwt-decode`.

Every application needs a begining. I started out by creating some components which are `Form Posts Post`. The Post component will be used by the Posts components for reusability with the map function later. The form component is so we can try to post some data with the createPost function that I made in the backend. All the components have seperate styling which is making use of `material ui core styles`. This allows me to write the styles in a JavaScript file and just use dot notation with classes to call each style.

After creating the basic structure, I decided to set up some react-redux to help with dispatching calls later. I did this by first importing the required imports which are `Provider` from `react-redux`, `configureStore, applyMiddleware, compose` from, `redux`. What is reducers some might ask? A reducer is a function that accepts a state and action. depending on the action, we will do some logic like creating/deleting a post.

    ----Actions/Reducers/Thunk-----

In the actions folder, I must import the getPosts call from axios to retrieve the information from my server. This information will be sent to the reducer which will have an action/payload. Once this action gets dispatched, which we are doing with the useEffect found in App.js, it will immediately go to the post reducer in the reducer folder to handle the logic in fetchings all the posts. Added code in the getPosts to handle the logic and the type of dispatch. the code work similar to like this. The app.js is using a useEffect which means on change of dispatch, getPosts from actions which is making a call to 
fetch allPosts.

   -----Form Component-----
How will we change the value on the state field with the onChange?
We can use a certain syntax in the onChange attribute in the TextField. that syntax is
`onChange={(e) => setPostData({...postData, creator: e.target.value})}`. I had to spread the data because if I did the same method without, it wouldnt PERSIST the changes and constantly keep changing. After the fields are done , I have to create the functionality of the submit to dispatch action which contains a payload to the reducer. I have done everything so far properly and it does send to the back end.



BACK-END/SERVER 

In order to make sure my database connection is secure, I created a env file which is an enviromental variable. The environmental variable contains the information of my MONGODB connection which helps me store data later. Once the `env` file is created, I had to install a package into the server folder so the application can read from the `env` file properly. To install this package, the command is `npm install dotenv --save`. After installed, an import is required which is `import * as dotenv from 'dotenv` and then need to call it in the file as `dotenv.config();`.

After the initial setup with the databases is done, I created folders to handle routing and how to handle the succesful route(the logic). These folders called routes and controllers will do as explained before. In the controllers, I created a simple try and catch block to handle the errors of the logic of the `getPosts`. If it succeeds at this point, it will create an array on the endpoint. I have to make this function of getPosts async because it can take some time to find a specific message and dont want to hold up the rest of the application for searching. Next I added more information on the `createPost` function .This function behaves like an async function as well for productability. The `creatPost` function must have a req.body which is going to be data from the user. Currently a form hasn't been created yet from the front-end which will be done soon. This form will be applied to the schema to give it form to allow it to enter the database.



## Roadmap

- Additional browser support

- Add more integrations


## Installation