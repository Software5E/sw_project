# Software Enineering Group 5

Website for FaceR

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started
This repository aims to assist you in beginning work on a MERN stack application with a solid file structure as a foundation. To get started make a copy of this template repo for your project teams. 

Since this project will hold both the client application and the server application there will be node modules in two different places. First run `npm install` from the root. After this you will run `npm run-script install-all` from the root. From now on run this command anytime you want to install all modules again. This is a script we have defined in package.json .

## File structure
#### `client` - Holds the client application
- #### `public` - This holds all of our static files
- #### `src`
    - #### `assets` - This folder holds assets such as images, docs, and fonts
    - #### `components` - This folder holds all of the different components that will make up our views
    - #### `views` - These represent a unique page on the website i.e. Home or About.
    - #### `App.js` - This is what renders all of our browser routes and different views
    - #### `index.js` - This is what renders the react app by rendering App.js, should not change
- #### `package.json` - Defines npm behaviors and packages for the client
#### `server` - Holds the server application
#### `package.json` - Defines npm behaviors like the scripts defined in the next section
#### `.gitignore` - Tells git which files to ignore
#### `README` - This file!


## Available Scripts

In the project directory, you can run:

### `npm start`

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

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### Prerequisites

What things you need to install the software and how to install them

```
Latest Version of Node.js
Latest Version of Mocha
Latest Version of Postman

```

### Installing

A step by step series of examples that tell you how to get a development env running

Clone the repository:

```
git clone https://github.com/Software5E/sw_project.git
```

Install Pre-hooks

```
# Steps to install, from the root directory of your repo...
# 1. Copy the files `.githooks/pre-push` & `.githooks/stop.txt` into your repo at `.git/hooks/`
# 2. Set executable permissions, run `chmod +x .git/hooks/pre-push`
# 3. Or, use `rake hooks:pre_push` to install
```
Install NodeJS
```
https://nodejs.org/en/
```
More steps coming soon

```
In development, more steps coming  up
```

## Deployment

To deploy this system, we will use Heroku as our web server host, and AWS for our static files.

## Built With

* [MeanJS](http://meanjs.org/) - The web framework used
* [MongoDB](https://www.mongodb.com/) - Database Management System


## Contributing

## Versioning

## Authors

* **Ariel Barboza**
* **Sara Gaya**
* **Santiago Romero**
* **Zoe Seibert**
* **Hayden Menge**
* See also the list of [contributors](https://github.com/orgs/Software5E/people) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
