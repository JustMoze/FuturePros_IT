# FuturePros_IT 

### TECHNICAL TASK

Create a simple CRUD app to list, add, update, remove car number plates with their owner names.

# Backend setup

Make sure to follow all these steps exactly as explained below. Do not miss any steps or you won't be able to run this application.

### Install MongoDB

To run this project, you need to install the latest version of MongoDB Community Edition first.
#### Windows users 
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
#### macOS users 
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
#### Linux users 
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

Once you install MongoDB, make sure it's running.

### Install the Dependencies

Next, in the backend folder, install the dependencies:

    npm i

### Populate the Database

    node seed.js

### Start the Server

    node app.js

This will launch the Node server on port 3700. If that port is busy, you can set a different point in config/default.json.

Open up your browser and head over to:

http://localhost:3700/api/plates

You should see the list of car plates. That confirms that you have set up everything successfully.

# Frontend setup

Make sure to follow all these steps exactly as explained below.

### Setup Angular

To install Angular on your local system, you need to have Node.js and npm package manager. If you don't have it yet, click on the link below: 

https://nodejs.org/en/download/

#### Install the Angular CLI

	npm install -g @angular/cli

Angular CLI is used to create projects, generate application and library code, and perform a variety of ongoing development tasks.

### Clone this repository

Then, setup backend as it is shown above and after that go to FuturePros-IT directory and run command

	ng serve --open


