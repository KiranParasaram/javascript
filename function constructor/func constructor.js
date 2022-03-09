console.log("function constructor");



//This is the 4th way of creating an object using FUNCTION CONSTRUCTOR
function Person(name,age,salary,designation){
  this.name=name,
  this.agee=age;
  this.salary=salary,

  this.designation=designation
}

let person1=new Person("kiran",23,"full stack web developer",40000)
let person2=new Person("phani",22,30000,"full stack")
let person3=new Person("bala",23,"28k","front end ")


console.log(person1);
console.log(person2);
console.log(person3);

person1.company="IBM"  //*****used to add other properties in the specific single object which is created using function cunstructor******
console.log(person1);

Person.prototype.company="lema labs" ;    

console.log(person2);


// let obj={};
// console.log(obj);

