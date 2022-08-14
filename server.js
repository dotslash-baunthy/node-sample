var express = require('express');
var app = express();

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    app.get('/', function (req, res) {
        res.send(`Example app listening at http://${host}:${port}"`);
    })

})