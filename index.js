import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import webpack from 'webpack';


import users from './server/routes/users';
import auth from './server/routes/auth';

let app = express();

app.use(bodyParser.json());

app.use('/api/users', users);
app.use('/api/auth', auth);

app.use(express.static(__dirname + '/dist'))



app.listen(8080, () => console.log('Running on localhost:8080'));