var fruits=['apple','orange','mango','pineapple'];
console.log(fruits);

for(var i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

var todayDate=new Date();
console.log("today date="+todayDate);

//var Date=new Date(2019,7,24,5,34,15,2);
//console.log("date="+Date);t

//var date=new Date(0);
//console.log("date="+date);

//var date=new date('october 13,2014 11:13:00');
//console.log("date="+date); 

var Day=['sun','mon','tue','wed','thur','fri','sat'];
var a=(todayDate.getDay());
console.log(Day[a]);

var Month=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
var a=(todayDate.getMonth());
console.log(Month[a]);

console.log(Math.floor(4.5));
console.log(Math.random()*10);
console.log(Math.pow(2,3));
console.log(Math.round(11.35));
console.log(Math.ceil(4.9));

var name='rahul';
console.log(name);
var name1=name;
console.log(name1);
name1='iqbal';
console.log(name);
console.log(name1);

var person={
    name:'rahul'
}
console.log(person.name);
var person1=person;
console.log(person1.name);
person.name='zub';
console.log(person1.name);
console.log(person.name);
