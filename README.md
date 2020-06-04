# FineCheeseApp
Frank's Fine Cheeses. Purveyors of the finest cheeses in the world. The Frank Cheese App gives the user the ability to have access to gourment cheeses in Los Angeles County. Upon loading the app the user is able to enter their zip code to discover what specials are available in their community. The user is able to search for any cheese in the Frank database according to Country or by Cheese Name. Once the user has selected all the desired cheeses they are then taken to the checkout screen. The checkout screen provides them with a list of all the cheeses in their basket and the quantity for each cheese. The cheeses on discount list the percent discount and have that calculated in their total listed at the bottom of the screen. 

# See Deployed Version
Frank Fine Cheese App: http://34.219.13.24/

## Project
This project is a full stack application. It has a database, server and a front end client. The data began as a csv file and then using javascript it was automatically converted into JSON and then transfered to a Mongo Database. The Server, API and Client are all built with JavaScript and Node. The API is scaled to call on find individual cheeses and specials as well as calling the entire database. The Front End framework utilizes React. Other technologies used are: Express, Styled-Components, Webpack, and Babel. To deploy the app it a Docker container was used and run on an AWS EC2 instance.

## Testing
This project was timeboxed and intended to be completed in about a day. Due to the time constraints, no testing was implemented. If it was implemented it would have utilized particularly Jest and Jasmine for the frontend unit and integration testing. For the API testing we would have incorporated Puppeteer. Although the TDD is the preferred method and this app did not utilize automated testing, there was continual manual testing checkiing for edge cases throughout the coding process.

## Structure
Thist app is a single page web application. The entry point on the client is in the client/src folder. The index.jsx file immediatly directs to the CheeseStore.jsx file. This is the main page for the app. Conditional rendering is utilized to direct the user to the different pages depeding on where they are in the process. The Components File has the reusable components that are broken down from Atoms (smallest) to Organisms(more complex). The src file also contains all the Assets and Fonts. The dist folder contains the bundle (which will be automatically placed there upon compile) and the index.html entrypoint. 

## To Download and Run App
* Copy Repo from GitHub and Clone to Local Machine
* In the root folder Run 'npm install' - this will install all the node modules to the app
* If you want to add the database to your local machine and you already have MongoDB installed on your machine, you can run 'npm run seed.' This will seed your database. The app is currently configured to call the database deployed on AWS. If you want to call your local machine, remove 'http://34.219.13.24:9000' from each of the AJAX calls in the client. There are three different axios calls in the CheeseStore.jsx file. 
* Then run 'npm run build' - this will compile the code and place it in a bundle file - if you don't want to run build you can change the location of the bundle in the html file to: https://frankcheese.s3-us-west-2.amazonaws.com/bundle.js
* Following the build run 'npm start' - this will start the server. You should be able to enter http://localhost:3001/ to see a working version of the app. 
