This is simple repo that explores how to set up a react based project.
Nothing fancy, nothing functional, just exploring how you can create a new project, install relevant packages and write a basic component using react.

To start of, this is not a great article for beginners. I am doing this just to learn it from scratch and improve my understanding of React and its ecosystem.

You should have git, node and npm installed on your system already.

### Steps followed
1. create a repository in github.
2. clone the repository to your system.
3. CD to your repo and initialise using command ```npm init```
4. fill in the information or go with defaults

### Setting up React
In order to work with react, you need to install a few npm packages
1. react - core package
2. react-dom - provides us methods to interact with the httml document and mount/load the react app

### Setting up webpack
Webpack is a tool to bundle our React code. Webpack utilizes plugins to convert our React code in to JS that browsers can understand
We use babel to let webpack do this. 
Installed the following packages as dev dependancies, meaning, they help in development phase and their code will not go to the final bundle.  
for webpack:  
```npm install webpack webpack-cli```  
for babel:  
```npm install @babel\core babel-loader @babel\preset-env @babel\preset-react```  


### i cannot make any changes directly to master
