const express = require('express');

const app = express();

app.get('/', function(req,res){
    res.send("Hello Mulyawan Sentosa dari Rangkasbitung Lebak Banten Running on Kubernetes.<br />Canggih Banget, <br />Hi Selina");
});

app.listen(80);