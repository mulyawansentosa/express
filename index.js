const express = require('express');

const app = express();

app.get('/', function(req,res){
    res.send("Hello, this CICD is working from App Runner AWS New Codes Pushed");
});

app.listen(80);
