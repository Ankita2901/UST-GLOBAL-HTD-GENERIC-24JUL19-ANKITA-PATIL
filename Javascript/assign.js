//Objects using new key word
function Student(){
    this.name = 'John';
    this.gender = 'male';
    
}
var student1 = new Student();
console.log(student1.name); 
console.log(student1.gender);



function Employee(){
    this.Id = '001';
         this.company = 'Testyantra';
     }
 var student1 = new Employee();
 console.log(student1.Id); 
 console.log(student1.company);



 function Bike(){
     this.name = 'Ninja H2R';
     }
 var student1 = new Bike();
 console.log(student1.name); 



 function Country(){
    this.name = 'India';
   }
var student1 = new Country();
console.log(student1.name); 



function Car(){
    this.name = 'Ferrari';
   }
var student1 = new Car();
console.log(student1.name); 
 

 console.log("===================");

 
 //Objects withot using new key word
 var person ={
     name : 'abc',
     age :23
 };
console.log(person.name);
var student ={
    name :'John'
};
console.log(student.name);
var bike ={
    name :'Ninja H2R'
};
console.log(bike.name);
var car ={
    name :'Ferrari'
};
console.log(car.name);
var sport ={
    name :'Cricket'
};
console.log(sport.name);

console.log("=========================================");


//Arrays using new key word
var bikes  = new Array('H2R','Hayabuza','BMW');
console.log(bikes);

var cars  = new Array('Ferrari','Laborgini','BMW');
console.log(cars);

var planets  = new Array('Mars','Venus','Mercury');
console.log(planets);

var countries  = new Array('India','USA','UK');
console.log(countries);

var sports  = new Array('Cricket','Chess','Golf');
console.log(sports);

console.log("=========================================");

//Arrays without using new key word
var bikes  = ['H2R','Hayabuza','BMW'];
console.log(bikes);

var cars  = ['Ferrari','Laborgini','BMW'];
console.log(cars);


var planets  = ['Mars','Venus','Mercury'];
console.log(planets);

var countries  = ['India','USA','UK'];
console.log(countries);

var sports  = ['Cricket','Chess','Golf'];
console.log(sports);
console.log(bikes[1]);

console.log("=================================================");

//Looping through the Arrays & printing values in the console 
for(var i=0; i<bikes.length;i++){
    console.log(bikes[i]);
}


for(var i=0; i<cars.length;i++){
    console.log(cars[i]);
}


for(var i=0; i<planets.length;i++){
    console.log(planets[i]);
}


for(var i=0; i<countries.length;i++){
    console.log(countries[i]);
}


for(var i=0; i<sports.length;i++){
    console.log(sports[i]);
}

console.log("=========================================");

//Function to find Factorial of a Number
function factorial(x){
    if(x==0){
        return 1;
    }
    return x * factorial(x-1);
}
console.log(factorial(5));


//Function to find Fibonacci Series
var fibonacci_series = function(n){
    if(n==1){
        return [0,1];
    }
    else{
        var s = fibonacci_series(n-1);
        s.push(s[s.length-1] + s[s.length - 2]);
        return s;
    }
};
console.log(fibonacci_series(8));

//Function to find Crcumference of A Circle
function circle(radius){
    this.radius = radius;
    this.area = function()
    {
        return Math.PI * this.radius *this.radius;
    };
    this.perimeter = function(){
    return 2*Math.PI*this.radius;
    };
}
var c = new circle(3);
console.log('Area =',c.area().toFixed(2));
console.log('perimeter =',c.perimeter().toFixed(2));

//Function to Add numbers in an given Array
var array = [1,2,3,4,5,6],
s = 0,
p = 1,
i;
for(i=0;i<array.length;i+=1){
    s += array[i];
    p *= array[i];
    console.log('Sum:'+s);
    console.log('Product ='+p);
}


//Function to find whether given number is prime or not
function test_prime(n){
    if(n==1){
        return false;
    }
    else if(n==2){
        return true;
    }
    else{
        for(var x=2;x<n;x++){
            if(n%x===0){
                return false;
            }
        }
        return true;
    }
}
console.log(test_prime(37));

