
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




-----Post Component-----
The singular Post component would be created from cards that I will import from Material-Ui. Everything will be contained within a card which will have an image, title description, created from x and buttons to like/delete the card. This is purely front end so a lot of trial and error as well as some online help from JavaScript Mastery made it possible to be done.These buttons will have onClick functions later. For the tags, I had to create a map because the tags is an array of inputs which will get cycles through from when the user types it out.

-----Updating a Post with ID------
In order to update a post, we must keep track of this ID throughout the components. The best way is to establish the ID in the App.js so it can be passed to the child components at a later time. To do this, we will do a `useState` hook. I have to use the state and state setters in the components which will be used as props later.

-----Navbar------

I wanted to make the Navbar feature that I created early to be in its seperate component. I cut and pasted the code into a new folder style so it can be organized and clean. I added a little different styles which at first created some issues because I wasn't importing the styles correctly. The navbar will hold features for the JWT that will be created for authorization. For the title, I used a `component={Link}` to redirect the user to the homepage when we make a form for a login. Every Link needs to have a `to=''`. The navbar has been set up with conditional statements so that it looks a certain way if there is a user or no user at all. The information that will get displayed will come from localStorage to hold the name.


-----AUTH-----
The auth component is the form handling portion of the application. Using Material-Ui I created a functional form that has mutiple fields that will be set to localStorage at a later time. The form took a little while to get right with spacing and functions. I wanted users to have the option to check if their password is the same and not hidden which is easily down by using a onClick functions with an icon that checks the prevState and flips the state which then passes onto the application. I have made applications before and using the google sign in package became different. I had to wrap the whole component with `GoogleOAuthProvider` from `@react-oauth/google`. It is important to install this package to get it to run properly. TO make use of this information, the dispatch method I created earlier with AUTH will set the information into a 'profile' that can be found in localStorage. This allows the page to fetch the data and understand that a user is logged in.

In order for a user to log out, they have to press the button logout. The logout wasn't working at first because I didn't set up a onClick function. To create the log out is very simple because all that is needed is to remove the user. In order to remove the user, you have to set the localStorage to null which is done with `localStorage.clear();` I did this an a reducer to handle the logic elsewhere. The `useEffect` is mean to refresh the navbar when the variable `location` from react-router-dom changes. 



BACK-END/SERVER 

In order to make sure my database connection is secure, I created a env file which is an enviromental variable. The environmental variable contains the information of my MONGODB connection which helps me store data later. Once the `env` file is created, I had to install a package into the server folder so the application can read from the `env` file properly. To install this package, the command is `npm install dotenv --save`. After installed, an import is required which is `import * as dotenv from 'dotenv` and then need to call it in the file as `dotenv.config();`.

After the initial setup with the databases is done, I created folders to handle routing and how to handle the succesful route(the logic). These folders called routes and controllers will do as explained before. In the controllers, I created a simple try and catch block to handle the errors of the logic of the `getPosts`. If it succeeds at this point, it will create an array on the endpoint. I have to make this function of getPosts async because it can take some time to find a specific message and dont want to hold up the rest of the application for searching. Next I added more information on the `createPost` function .This function behaves like an async function as well for productability. The `creatPost` function must have a req.body which is going to be data from the user. Currently a form hasn't been created yet from the front-end which will be done soon. This form will be applied to the schema to give it form to allow it to enter the database.

After having a two of the CRUD operations already in place, I wanted to create an update function which would be `updatePost`. I would need to retrieve the ID from the mongoose database which I need to check if the ID is valid or in the database. TO do this I will use an if statement with a find method. If it is not there, it will return a status error with a message otherwise a new variable will be created with that PostMessage model. Then it will response be a json of that `updatedPost`;





## Roadmap

- Additional browser support

- Add more integrations


## Installation