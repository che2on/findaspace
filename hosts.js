var express = require('express');
var app = express();

app
.use(express.vhost('findaspace.electionbooth.in', require('./main/server.js').app))
.listen(8080);
