
# React-Memories-Share


## Process/Installation


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



## Roadmap

- Additional browser support

- Add more integrations


## Installation