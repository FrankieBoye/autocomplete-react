### Star Wars

#### User Story:
As a user, I can search for people from the Star Wars movies using the open source Star Wars API

#### Description:
Using the open source Star Wars API (https://swapi.co) this is a small React application which uses an autocomplete search to search for 'People' from the Star Wars movies.



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
<br>
<br>
<br>
#### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### App update

This app should be using the Swapi API to provide the names of the Star Wars characters. Unfortunately I have been unable to implement this.

My approach was to first tackle the autocomplete aspect. Then the 'this.items' array should have been replaced by the API data.

I played around at length with the API and tried the componentDidMount method to access the data.

My next step would have been to delve deeper into code I have found online. I could also incorporate Axios.
