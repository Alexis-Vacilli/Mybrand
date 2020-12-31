# Mybrand

To get the node server running locally

Clone this repo: https://github.com/Alexis-Vacilli/Personal-brand.git
npm install to install all the required dependencies
npm run dev to start the local server
Dependencies

expressjs - The server for handling and routing HTTP requests
express-jwt - Middleware for validating JWTs for authentication
jsonwebtoken - For generating JWTs used by authentication
mongoose - For modeling and mapping MongoDB data to javascript
babeljs - Since we'll be writing all our JavaScript code using ES6, babeljs will help in converting our ES6 codes to ES5.
Application structure app.js - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the routes and models we'll be using in the application. config/ - This folder contains configuration for passport as well as a central location for configuration/environment variables. routes/ - This folder contains the route definitions for our API. models/ - This folder contains the schema definitions for our Mongoose models.