function sum(a,b){
    function addSum(){
        return a+b;
    }
    return addSum;
}
var addFunc=sum(10,20);
var total=addFunc();
console.log('Total',total);
console.log("================================");
console.log(window);
console.log(this);
console.log(this===window);

var name='iqbal';
console.log(window.name);
console.log(this.name);

var person={
    name:'zuhz',
    age:13,
    getName:function(){
        console.log('getName mathod'+this);
        console.log(window);
        getData();
        function getData(){
            console.log('get data method',this);
        }
        return this.name;
    }

}
 var heroName=person.getName();
 console.log('Name='+heroName)
 console.log("==============================");
 for(var i=0;i<5;i++){
     console.log(i);
 }

console.log('Value of i'+i);
for(let j=0;j<5;j++){
    console.log(j);
}
//console.log('Value of j'+j);
var hobbies=['dancing','singing','cricket'];
console.log('Hobbies'+hobbies);
var hobbies=['numismatics'];
console.log('Hobbies ' +hobbies);

let fruits=['orange','banana'];
console.log('fruits '+fruits);
 fruits=['mango'];//redeclaration is not possible in let
console.log('fruits '+fruits);
const items=['lipstick','deo','wallet'];
console.log('itema '+items);
items[0]=['bag','book'];
console.log(items);




