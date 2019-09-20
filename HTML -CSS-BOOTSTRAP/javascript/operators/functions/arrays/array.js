//foreach looping
var hobbies=['singing','coding','dancing'];
hobbies.forEach(function(value,index){
    console.log("hobbies="+value);
})

console.log("=============================");
hobbies.forEach((value,index)=>{
    console.log("hobbies="+value);
});
console.log("==================================");
hobbies.push('bike rididng','travelling');
console.log("hobbies after push="+hobbies);
console.log("==================================");
hobbies.pop();
console.log("hobbies after pop="+hobbies);
console.log("===========================");
hobbies.unshift('cooking','walking');
console.log("hobbies after unshift="+hobbies);
console.log("=======================");
hobbies.shift();
console.log("hobbies after shift="+hobbies);
console.log("=============================================");
var hashobbies=hobbies.includes('cooking');
console.log(hashobbies);
console.log("======================================");
hobbies.splice(2,0,'reading','writing');
console.log(hobbies);
console.log("====================================");
var hobbies1=hobbies.slice(0,1);
console.log(hobbies);
console.log(hobbies1);
console.log("==================================");
var joinhobbies=hobbies.join('-');
console.log(joinhobbies);
console.log("=======================================");
var  indexhobbies=hobbies.indexOf('dancing')
console.log(indexhobbies);
console.log("=======================================");



var numbers=[10,20,30,40];
var newnumbers=numbers.map((val,index)=>{
    val=val+10;
    return val;
});
console.log("old array="+numbers);
console.log("=======================");
console.log("new array="+newnumbers);

var items=[{
    item='pen',
    price=50,
     
},
{
    item='laptop',
    price=55000,
},
{
    item='bag',
    price=500
}];
var mapitems=items.map((val)=>{
    val.price=val.price+10;
    return val;

});
console.log(mapitems);
console.log("=============================");
var filteritems=items.filter((val)=>{
    return val.price>100 && val.item.length>3;
});
console.log(filteritems);


