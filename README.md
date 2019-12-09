This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
# Software Enineering Group 5

Website for FaceR
*   Logo
![GitHub Logo](/log.png)

## Getting Started
This repository serves as the website for FaceR - a company part of University of Florida's Hatchery program.
[Visit the page](http://group5e.herokuapp.com/)

After cloning run the commands: `npm install` from the root. After this you will run `npm run-script install-all` from the root. <br>From now on run this command anytime you want to install all modules again. This is a script defined in package.json.


## Deployment

The website is currently hosted on Heroku using a free dyno. Continuos integration tool is enabled, if the CI Script Testing passes,
 changes to master will automatically deploy. 

## Built With

* [MeanJS](http://meanjs.org/) - The web framework used
* [MongoDB](https://www.mongodb.com/) - Database Management System


## Versioning

V 1.0

## Authors

* **Ariel Barboza**
* **Sara Gaya**
* **Santiago Romero**
* **Zoe Seibert**
* **Hayden Menge**
* **Hannah McEachern**
* See also the list of [contributors](https://github.com/orgs/Software5E/people) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thank you to FaceR for being a great customer 
* and to all the faculty and staff of CISE @ UF
* etc
*   Logo
![GitHub Logo](/log.png)

## Development Instrctions


## File structure
#### `client` - Holds the client application
- #### `public` - This holds all of our static files
- #### `src`
    - #### `assets` - This folder holds assets such as images, docs, and fonts
    - #### `components` - This folder holds all of the different components that will make up our views
    - #### `views` - These represent a unique page on the website i.e. Home or About. These are still normal react components.
    - #### `App.js` - This is what renders all of our browser routes and different views
    - #### `index.js` - This is what renders the react app by rendering App.js, should not change
- #### `package.json` - Defines npm behaviors and packages for the client
#### `server` - Holds the server application
- #### `config` - This holds our configuration files, like mongoDB uri
- #### `controllers` - These hold all of the callback functions that each route will call
- #### `models` - This holds all of our data models
- #### `routes` - This holds all of our HTTP to URL path associations for each unique url
- #### `tests` - This holds all of our server tests that we have defined
- #### `server.js` - Defines npm behaviors and packages for the client
#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README
#### `.gitignore` - Tells git which files to ignore
#### `README` - This file!

## Available Scripts

In the project directory, you can run:

### `npm run-script dev`

Runs both the client app and the server app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.

### `npm run-script client`

Runs just the client app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.


### `npm run-script server`

Runs just the server in development mode.<br>


### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

If deploying to heroku this does not need to be run since it is handled by the heroku-postbuild script<br>

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn how to setup a local MongoDB instance for testing, check out how to [Connect to MongoDB](https://docs.mongodb.com/guides/server/drivers/).

To learn how to deploy a full-stack web app to heroku, check out [this great guide](https://daveceddia.com/deploy-react-express-app-heroku/).

To learn React, check out the [React documentation](https://reactjs.org/).

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
