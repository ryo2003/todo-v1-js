const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

var items = [];

app.set('view engine', 'ejs');

var today = new Date();
var currentDay = today.getDay();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


var options = {
    weekday:"long",
    day:"numeric",
    month:"long"
}


var day = today.toLocaleDateString("en-US", options);

app.get("/",function(req,res){
    res.render('list',{kindOfDay:day, newListItem:items})
});

app.post("/", function(req,res){
    item = req.body.newItem;
    items.push(item);
    res.redirect("/");
})

app.listen(port,function(){
    console.log("server is running on port "+port)
});


