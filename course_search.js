let express = require('express');

let routes = require('./routes');


let pug = require("pug");

let course_search = express();


course_search.set('view engine','pug')


course_search.use('/',routes);


course_search.get('/',function(req,res){
    res.render('index');
}
                 )

course_search.listen(3000,function(){
    console.log('OPERATING ON PORT 3000!!!!!!!!!!!!')
}
                    )
