## Weather Application

***

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It showcase a weather app, fetching data from the `https://openweathermap.org/` API service, displaying the current weather conditions of Australia’s major capital cities in responsive flexbox layout.
It displays the name of the city, current temperature and conditions,

## Code practises and NPM modules used

In this project, the main `npm` modules used are
* React 16.9+
* Typescript
* redux starter kit + react-redux
* Jest + React Testing Library
* axios
* styled-components
* react-bootstrap

## Pre-Requirements

This application uses OpenWeather API service. It requires to use (https://openweathermap.org/current), and needs an API key to be appended to each HTTP request. You can embed this key as a custom environment variable inside the following files:
* .env.local - This file is loaded for all environments except test environment. You can add your key there during development, testing purposes Add your API key inside the curly brackets REACT_APP_APPID={Your API KEY}
* .env - add your API key for build script inside this file or as part of your CI/CD build pipeline

<br> Your can read more on embedding custom environment variables here (https://create-react-app.dev/docs/adding-custom-environment-variables)

***

## Install

Close the project using the following command: 
```  
git clone https://github.com/alonfai/CodingTest
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run coverage`

Launches the Jest test runner in coverage mode. It has an integrated coverage reporter that works well with ES6 and requires no configuration.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.<br>
You can then deploy the app to your production environment and/or add this as part of your CI/CD pipeline 

