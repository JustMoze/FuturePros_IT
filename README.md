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
