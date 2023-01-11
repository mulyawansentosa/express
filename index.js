const express = require('express');

const app = express();

app.get('/', function(req,res){
    res.send("Hello Mulyawan Sentosa");
});

app.listen(80);