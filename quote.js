var express = require("express");
var request = require("request");
var app = express();


app.set("view engine", "ejs");

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Quote App has started");
});




app.get("/",function(req,res){
  
    request('https://api.chucknorris.io/jokes/random', function(error,response,body){
    if(!error && response.statusCode == 200)
    {
    var data =  JSON.parse(body);
       res.render("index", {data: data});
    } 
    else
    {
       console.log(error)
    }
});
});

