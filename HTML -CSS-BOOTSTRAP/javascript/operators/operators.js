var num1=10;
var num2='10';
if(num1===num2){
    console.log("equal");
}
else{
    console.log("not equal");
}
var equals=(num1===num2)?'true':'false';
console.log(equals);
var value=(num1>10)?'greater':(num1===10)?'equals':'lesser';
console.log(value);

var myage=50;
console.log("type of myage="+typeof myage);
var myname='iqbal';
console.log("type of myname= "+typeof myname);
 var hobbies=['sing','play'];
console.log('type of hobbies='+typeof hobbies);
var isArray=Array.isArray(hobbies);
console.log(isArray);

var library=[
    {author:'bill gates',title:'road ahead',bookid:1234},
    {author:'steve',title:'roads',bookid:1254},
    {author:'iqbal',title:'rahead',bookid:1294}
    
];
for(var i=0;i<library.length;i++)
{
    //console.log(library[i]);
    console.log(library[i].author);
}

console.log("=================================");

for(var index in hobbies){
    console.log("Hobbiea="+hobbies[index]);
}console.log("=================================");

//var person={
  //  name="iqbal",
    //age=23
//};
//for(var i in person){
  //  console.log(person[i]);
//}

//var val=2;
//if(val===2){
  //  break;
    //console.log(val);

//}illegal breal stmt5

for(var value of hobbies){
    console.log("hobbies="+value);


}
hobbies[5]='skipping';
hobbies['name']='jumping';
for(var value of hobbies){
    console.log("hpbbies="+value);
}
