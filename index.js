var http = require ('http');
var hInfo = require ('./Hotels_module');
var msg="" //Saves messages
http.createServer(function(req,res) {
var hotel1= new hInfo("Radisson",0,"hostel"); //create new hotel
msg+=hotel1.data.message;
msg+=hotel1.addStar();
var hotel2= new hInfo("Sheraton",3,"hotel");
msg+=hotel2.data.message;
msg+=hotel1.removeStar();
msg+=hotel2.addStar();
console.log(msg);
 res.writeHead(200);
 res.end("Success\n"+msg);
 msg="";

 }).listen(8080);
    console.log("listening");
    
       
       
        
   



    