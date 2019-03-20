# Jafflix - It's Jaff's sample React App

A sample responsive PWA ([Progressive Web App](https://youtu.be/m-sCdS0sQO8)) that aims to excercise some capability with:

1. **JavaScript** (JS / ECMAScript, v. 2018) - A highlevel interpreted weakly typed programming language, that is built into all browsers.

2. Hypertext Markup Language (**HTML**, v. 5.2) is the standard markup language for creating web pages and web applications.

3. Cascading Style Sheets (**CSS** v. 3) is a style sheet language used for describing the presentation of a document written in a markup language like HTML

4. **React** (v. 16.x) - A declarative component-based JavaScript library for building Web Applications with powerful responsive web interfaces

5. **Node.js** (v. 10.14.1) is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser

6. **npm** (npm-scripts, v ) - npm (short for Node.js package manager) is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry. The registry is accessed via the client, and the available packages can be browsed and searched via the npm website.

7. **nodemon** (v. 1.18.10) - a utility that eases managing server code changes, and re-starts.

8. **npm-run-all** (v. 1.1.5) - a Command Line Interface (CLI) that allows npm-scripts to be run in parallel or sequentially: provides `npm-run-all`, `run-s`, and `run-p` - to run npm-scripts', in parallel or sequentially.

9. **Express.js** (v. 4.16.4), or simply Express, is a web application framework for Node.js designed for building web applications and APIs.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run start` or `npm start`

To run build then start backend/server.

Changed as part of task #23 though not explicitly stated as required.

### `npm run start-backend`

Runs nodemon to start (only) the backend/server - i.e. src/backend/App.js

### `npm run start-dev`

Runs frontend, and nodemon to start the backend/server - i.e. src/backend/App.js in parallel.

### `npm run start-frontend` 

Runs the app frontend (only) in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will 'HOT'-reload if you make edits (and save them).<br>

You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm test` or `npm run test`

Launches the test runner in the interactive watch mode.<br>

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Common Code Control Commands

### `git remote -v`
->  displays the URLs that Git has stored for the shortname to be used when reading and writing to that remote.

### `git status`
->  displays the state of the working directory and the staging area. It lets you see which changes have been staged, which haven't, and which files aren't being tracked by Git.

### `git stash`
->  to record the current state of the working directory and the index, but want to go back to a clean working directory. The command saves your local modifications away and reverts the working directory to match the HEAD commit.

### `git add <pathspec>`
-> Stage all changes in <pathspec> for the next commit. Fileglobs (e.g. *.c) can be given to add all matching files.

### `git diff`
-> Show unstaged changes between your index and working directory.

### `git diff HEAD`
-> Show difference between working directory and last commit.

### `git commit -m "<message>"`
-> Commit the staged snapshot, but instead of launching a text editor, use <message> as the commit message.

### `git push origin master`
-> changes will be persisted on your GitHub account

### `git push heroku master` 
-> changes will be published
You can trigger both commands from Visual Studio (`... -> Push To...`) 

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).