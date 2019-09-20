//named function
function getSum(num1,num2){   //we use before declaring  method
    var sum=num1+num2;
    return sum;
}
var sum=getSum(10,15);
console.log(sum);

//function expression           //we use only after declaring method
var sumData=function(number1,number2){
    var sum=number1+number2
    return sum;
}
var sumValue=sumData(5,25)
console.log(sumValue);

//anonymous function (no method name)
    (function(val1,val2){
        var sum=val1+val2;
        console.log(sum);

    }(10,20));

    //fat arrow function
    var getsumData=(val3,val4)=>{
    var sumval=val3+val4;
    return sumval;
    }
    var val=getsumData(12,15);
    console.log(val);

    //hoisting
    console.log(name1);
    var name1='gandhi';
    console.log(name1)

 function fnname(){
     console.log(name2);
     var name2='dinga';
 }
 fnname();

 function first(){
     
     console.log('first');
      
 }
 function second(){
     console.log('second');
 }
  
 first(second);

 //prime number

 function prime(n)
 {
     if(n==1){
         return false;
     }else if(n==2){
         return true;
     }else{
         for(var x=2;x<n;x++){
             if(n%x==0){
                 return false;
             }
         }
         return true;
     }
 }
 console.log(prime(7));