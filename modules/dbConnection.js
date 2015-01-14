var mongoose = require('mongoose');

var url = "mongodb://localhost/courses";

// Check the connection
mongoose.connect(url, function(err,succ){
    if(err){
        console.log("Error in connection: " + err);
    }
    else{
        console.log("Connected to database" + url);
    }

});

var Schema = mongoose.Schema;

var users = new Schema({
    name:{type:String,index:{unique:true}},
    passwork:String,
    email:String
});

var User = mongoose.model("User", users);

exports.addUser = function(req,res){
    console.log("New user to be added");
    console.log(req.body);
    var temp = new User({
        name:req.body.username,
        password:req.body.password,
        email:req.body.email
    });
    
    temp.save(function(err){
        if(err){
            console.log("Error");
        }
        else{
            console.log("New user added");
        }
    });
}
    
                 