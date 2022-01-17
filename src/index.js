const express = require('express');
const app = express();
const morgan = require('morgan');

require('./db');

//seteo puerto
app.set('port', process.env.PORT || 3001);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended : false}));
app.use(express.json());

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});