var express = require('express');
var app = express();

app.get('/', (request, response) => {
	response.sendfile('index.html');
});

var port = 4000;
app.listen(port, () => {
	console.log('Server listening on port', port);
});