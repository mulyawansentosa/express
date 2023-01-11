const express = require('express');

const app = express();

app.get('/', function(req,res){
    res.send("Hello Mulyawan");
});

app.listen(80);