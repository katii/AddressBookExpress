var mongoose = require('mongoose');

var url = "mongodb://localhost/addressBook";

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
    password:String,
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
            console.log("Error" + err);
        }
        else{
            console.log("New user added");
            console.log(req.body.username);
            console.log(req.body.password);
            console.log(req.body.email);
            res.render('index');
        }
    });
    
    /********/
    console.log("List users");
    User.find(function(err,data){
        if(err){
            res.render("Error" + err);
            //res.render("myerror",{});
        }
        else{
            console.log(data);
            //res.render('userlist',{users_data:data});
        }
    });
    /********/
}
    
exports.login = function(req,res){
    console.log("wuhuu");
    console.log(req.body.username);
    console.log(req.body.password);
    
    console.log("List users");
    User.find(function(err,data){
        if(err){
            res.render("Error" + err);
            //res.render("myerror",{});
        }
        else{
            console.log(data);

            for(i=0; i<data.length; i++){
                console.log("käyttäjät: " + data[i].name + data[i].password);
                
                if(data[i].name == req.body.username){
                    console.log("on sama" + data[i].name + " " + data[i].password );
                }
                else{
                    console.log("ei oo sama");
                    
                }
                
            }
 
            
            
            //res.render('userlist',{users_data:data});
        }
    });
    
/**
    User.find(function(err,data){
        if(err){
            console.log("not found");
        }
        else{
            console.log("yes found" + data );
            for(i=0; i<data.length; i++){
                console.log("juuseri: " + data.name + data.password);
                if(data[i].name == req.body.username){
                    console.log("on sama" + data[i].name + " " + data[i].password );
                }
                else{
                    console.log("ei oo sama");
                }
            }
            //res.render('loginview', data);
        }
    });
**/
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

/* malli.find({name:'markus'}, function(err,data) {
}); */