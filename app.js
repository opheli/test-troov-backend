const express = require('express');

const hostname = '0.0.0.0';
const port =  8000;

const server = express();

const cors = require('cors');
server.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

server.listen(port, hostname, () => {
    console.info('server started on port : ' + port)
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/apinode',
{ useNewUrlParser: true, useUnifiedTopology: true },
() => console.info('Connected to MongoDB'),
);

const bodyParser = require('body-parser');
server.use(bodyParser.urlencoded());
server.use(bodyParser.json());


const userRoute = require('./routes/userRoute');
userRoute(server);


const objectRoute = require('./routes/objectRoute');
objectRoute(server);
