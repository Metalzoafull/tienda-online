const express = require('express');
const app = express();
const morgan = require('morgan');

const apiRouter = require('../routes/api')

//require('./db');

//seteo puerto
app.set('port', process.env.PORT || 3001);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended : false}));
app.use(express.json());

app.use('/api', apiRouter);

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});