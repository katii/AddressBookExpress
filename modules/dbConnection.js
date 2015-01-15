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
            res.render('index');
        }
    });
    
    /********/
    console.log("List users");
    User.find(function(err,data){
        if(err){
            res.render("Error");
            //res.render("myerror",{});
        }
        else{
            console.log(data);
            //res.render('userlist',{users_data:data});
        }
    });
    /********/
}
    
exports.validateUserInfo = function(req,res){
    console.log("wuhuu");
    console.log(req.body);
    User.findByName(req.query.name, function(err,data){
        if(err){
            console.log("not found");
        }
        else{
            console.log("yes found" + data);
            //res.render('loginview', data);
        }
    });
}

exports.listusers = function(req,res){
    console.log("List users");
    User.find(function(err,data){
        if(err){
            res.render("Error");
            //res.render("myerror",{});
        }
        else{
            console.log(data);
            //res.render('userlist',{users_data:data});
        }
    });
}