import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';


import users from './routes/users';

let app = express();

app.use(express.static(__dirname + '/dist'))
app.use(bodyParser.json());

app.use('/api/users', users);


app.listen(8080, () => console.log('Running on localhost:8080'));