const carPlateRoute = require('./routes/carPlates');
const config = require('config');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/index');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(
    {
        credentials: true,
        origin: true,
        'Access-Control-Allow-Origin': '*'
    }
));
app.use('/', router);
app.use('/api/plates', carPlateRoute);

const PORT = process.env.PORT || config.get('port');
const db = config.get('db');

mongoose.set('useCreateIndex', true);
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => {
        console.log('Successfully connected to databse!');
    });

app.listen(PORT, console.log(`Server is runing on port ${PORT}`));