
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

require('./modules/mongoose-connection');

var x = require('./routes/x');


var port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('server/public'));

app.use('/x', x);


app.listen(port, function(){
    console.log('listening on port', port);  
});