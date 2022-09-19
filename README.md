
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

BACK-END/SERVER 

In order to make sure my database connection is secure, I created a env file which is an enviromental variable. The environmental variable contains the information of my MONGODB connection which helps me store data later. Once the `env` file is created, I had to install a package into the server folder so the application can read from the `env` file properly. To install this package, the command is `npm install dotenv --save`. After installed, an import is required which is `import * as dotenv from 'dotenv` and then need to call it in the file as `dotenv.config();`.

After the initial setup with the databases is done, I created folders to handle routing and how to handle the succesful route(the logic). These folders called routes and controllers will do as explained before. In the controllers, I created a simple try and catch block to handle the errors of the logic of the getPosts. If it succeeds at this point, it will create an array on the endpoint. I have to make this function of getPosts async because it can take some time to find a specific message and dont want to hold up the rest of the application for searching.



## Roadmap

- Additional browser support

- Add more integrations


## Installation