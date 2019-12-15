let express = require('express');
let routes = require('./routes');


let pug = require("pug");

let app = express();


app.set('view engine','pug')


app.use('/',routes);


app.get('/',function(req,res){
    res.render('index');
})

app.listen(3000,function(){
    console.log('Listening on port 3000!')
})
