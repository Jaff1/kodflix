## JafFlix - It's Jaff's sapple React App

A sample responsive PWA ([Progressive Web App](https://youtu.be/m-sCdS0sQO8)) that aims to excercise some capability with:

1. . **JavaScript** (JS / ECMAScript, v. 2018) - A highlevel interpreted weakly typed programming language, that is built into all browsers.

2. Hypertext Markup Language (**HTML**, v. 5.2) is the standard markup language for creating web pages and web applications.

3. Cascading Style Sheets (**CSS** v. 3) is a style sheet language used for describing the presentation of a document written in a markup language like HTML

4. **React** (v. 16.x) - A declarative component-based JavaScript library for building Web Applications with powerful responsive web interfaces

5. **Node.js** (v. 10.14.1) is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser

6. **nodemon** (v. 1.18.10) - a utility that eases managing server code changes, and re-starts.

7. **npm** (npm-scripts, v ) - npm (short for Node.js package manager) is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry. The registry is accessed via the client, and the available packages can be browsed and searched via the npm website.

8. **npm-run-al**l (v. 1.1.5) - a Command Line Interface that allows npm-scripts to be run in parallel or sequentially.

9. **Express.js** (v. 4.16.4), or simply Express, is a web application framework for Node.js designed for building web applications and APIs.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will 'HOT'-reload if you make edits (and save them).<br>

You will also see any lint errors in the console.

### `npm run start-frontend`

To set up the development environment and starts a server, as well as hot module reloading

### `npm run start-backend`

To start front and backend server.

### `node src/backend/app.js`

starts the back-end (usedfull for dev, but superceeded by:

`npm start-backend` and
`npm start` which utilise nodemon to hot-reload the server on changes

### `npm run build`

Builds the app for production to the `build` folder.<br>

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `git push origin master`

 -> changes will be persisted on your GitHub account
### `git push heroku master` 

-> changes will be published
You can trigger both commands from Visual Studio (`... -> Push To...`) 

### `npm run run-backend`

Runs nodemon to start the backend server - i.e. src/backend/App.js

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).