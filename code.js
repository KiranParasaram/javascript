

// "use strict"
// x=25
// console.log(x);


// let name=10+Number('string')
// console.log(name);
// console.log(typeof name);

// let name2=10 -'20'
// console.log(name2);
// console.log(typeof name2);

// let arr=[1,2]
// console.log(arr);
// arr.splice(0,arr.length)
// console.log(arr);

// let obj={
//     name:'kiran',
//     age:25
// }
// console.log(obj);

// let newobj=JSON.stringify(obj)
// console.log(newobj);

// const a=(name,age=20)=>{
//     console.log(name,age);
// }
// a('kumar')

let x=10;
let y=++x;
console.log(y);

// const a=3
// a=a+10
// console.log(a);

// var person={
//     age:25
// }

// console.log(person.age);
// console.log(person['age']);

// var m=0
// var z=0
//  while(m<3){
//      m++
//      z+=m
//      console.log(z);
//  }


//  function add(a,b){
//      return a+b
//  }

//  function h(a,addreference){
//      return addreference(a,20)
//  }

//  console.log(h(30,add))

function c(obj){
 return obj
}

var obj={
    name:'kiran',
    roll:21
}
 delete obj.roll;

console.log(c(obj));


function m(some){
    document.getElementById('demo').innerHTML=some;
}

function f(){
    m('hello');
}

function s(){
    m('goodbye');
}

f();
s();
