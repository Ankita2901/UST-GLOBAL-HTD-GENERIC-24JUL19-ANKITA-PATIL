function Student(){
    this.name = 'John';
    this.gender = 'male';
    
}
Student.prototype.age = 21;
var student1 = new Student();
console.log(student1.name); 
console.log(student1.gender);

function Employee(){
    this.Id = '001';
    this.company = 'Testyantra';
    
}
Employee.prototype.Id = 21;
var student1 = new Employee();
console.log(student1.Id); 
console.log(student1.company);

function Bike(){
    this.name = 'Ninja H2R';
    
    
}
var student1 = new Bike();
console.log(student1.name); 

