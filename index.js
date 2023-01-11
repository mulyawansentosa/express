const express = require('express');

const app = express();

app.get('/', function(req,res){
    res.send("Hello Mulyawan Sentosa dari Rangkasbitung Lebak Banten");
});

app.listen(80);