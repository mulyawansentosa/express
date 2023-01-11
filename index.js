const express = require('express');

const app = express();

app.get('/', function(req,res){
    res.send("Hello Mulyawan Sentosa dari Rangkasbitung");
});

app.listen(80);