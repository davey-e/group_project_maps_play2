var express = require('express');
var app = express();
var path = require('path')

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(express.static('public'));

const port = process.env.PORT || 3000;


var server = app.listen(port, function () {
  var port = server.address().port;

  console.log('App listening at port:', port);
});