var express = require('express');
var app = express();
var port = 80;
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

//view directory for templates
app.set('views', __dirname + '/views');
app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render('pages/index');
});

app.post('/',function(req,res){
    console.log(req.body);
});


app.listen(port,function(){
    console.log('Listening to port '+port);
});