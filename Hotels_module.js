
var Hotel= function(name,stars,hotelType) {

var emiter =require ('events');

emytr = new emiter();
    this.data= {    //object init
        hotelName:name,
        starsAmount:stars,
        hotelType:hotelType,
        message:"Hotel "+name+" Object was created\n"
    };

    this.events= {

    StarAdd:"star added",
    StarDec:"star decreased",

}

emytr.on(this.events.StarAdd,function(info){  //StarAdd event emitter
    info.message+="Star increase event\n";
    info.message+="Hotel Name:"+info.hotelName+",stars after:"+info.starsAmount+",Hoteltype:"+info.hotelType+"\n";


});
emytr.on(this.events.StarDec,function(info){    //Star decrease event emitter
    info.message+="Star decrease event\n";    
    info.message+="Hotel Name:"+info.hotelName+",stars after:"+info.starsAmount+",Hoteltype:"+info.hotelType+"\n";
});


this.addStar = function () {
     this.data.message="";
     this.data.message+="Star increase request-"+this.data.hotelName+"\n";
     this.data.message+="Hotel Name:"+this.data.hotelName+",stars before:"+this.data.starsAmount+"\n";
    this.data.starsAmount++;
    emytr.emit(this.events.StarAdd,this.data);
    return  this.data.message;
    
};

this.removeStar = function () {
    this.data.message="";
    if(this.data.starsAmount>0)
    {
         this.data.message+="Star decrease request-"+this.data.hotelName+"\n";
         this.data.message+="Hotel Name:"+this.data.hotelName+",stars before:"+this.data.starsAmount+"\n";
        this.data.starsAmount--;
        emytr.emit(this.events.StarDec,this.data);
        
    }
    else
         this.data.message+="Stars amount for hotel "+this.data.hotelName+" is 0 and can't be decreased\n";

    return  this.data.message;
};

this.getAllData= function() {   //hotel details getter
     this.data.message="";
    var arrayLength=Object.keys(this.data).length;
    for(var i in this.data)
         this.data.message+=i+" is:"+this.data[i];
    return  this.data.message; 
};

};

module.exports= function(name,stars,hotelType)
{
    var newHotel=new Hotel(name,stars,hotelType);
    return newHotel;
};