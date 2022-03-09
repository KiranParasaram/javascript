console.log("welcome");

 var ar=[1.2,.8,1245877457896542,"string",'charecter'];
 let char=["christopher noolen",{no:45,char:"good"},[1,2.145,'gravity']]
 console.log(ar);
 console.log(char);

 console.log(ar.length);

 console.log(ar[2]);
 console.log(char[1]);


// let arr=['a','e','i','o','u'];

console.log("before push",arr);
arr.push('f')       //add elements from backside 
console.log("after push",arr);

console.log("before pop",arr);
arr.pop();   //removes elements from back
console.log("after pop",arr);

console.log("before shift",arr);
arr.shift();       //removes elements from front
console.log("after shift",arr);

console.log("before unshift",arr);
arr.unshift(5);     //add elements fron front
console.log("after unshift",arr);


// using loop approach
var arra=[1,2,3,4,5,6];
for(var i=0;i<arra.length;i++){
    console.log(i, arra[i]*2);
}


//using map function
let userA=arra.map(a=>a*2);
console.log(userA);


//slice
var arry=[5,4,9,2,5,3];
 var user=arry.slice(1,3);
 console.log(user);
var useradd=arr.slice(-5,-1);
console.log(useradd);





//some & every return only true or false
var arr=[1,2,3,4,5,6,7,8,9,10];
var user1=arr.some(a=> a%3==-1);   //some 
var user2=arr.some(n=>n*3==0);
var user5=arr.some(n=>n>10);

var user3=arr.every(a=>a%3==0);    //every
var user4=arr.every(n=>n*3==3);
console.log(user1,user2,user3,user4,user5);


// const a= (a,b)=>{
//     return a*b;
// }
//  console.log(a(5,6));


//map and filter
var arr=[4000,5000,1000,7000,3000.12547897455,1200];

var sec=arr.filter(a=>a%2==0);  //filtering
var sec=arr.filter(n => n>3000);
console.log(sec);

var sec2=sec.map(n=>n+1);     //maping
console.log(sec2);

var add=arr.filter(g=>g%2==0).map(h=>h+1);  //combination of filtering and maping
console.log(add);

var add2=arr.map(n => n+1).filter(a => a%2!=0);
console.log(add2);


//REDUCE
var arr=[4000,5000,1000,7000,3000.12547897455];//find sum
var arr=[2,3,4,5,6]
const total=arr.reduce((mul,n) => mul=mul*n,1);
console.log(total);


//FOR IN
var arr=["money heist",'breaking bad','got'];
for(var a in arr){
    console.log(a);
}

//FOR OF
for(var c of arr){
    console.log(c);
}

//JOIN    
console.log(ary.join(""));


//ACCESS OF CHARCTERS
var x=['g','q','a','k',9,9,9];
var y="hii i am a good Prepbytes";

console.log(x[1]);               //gives the element in that particular index
console.log(y.charAt(10));

console.log(x.indexOf(9));    //gives the first index vale
console.log(x.lastIndexOf(9));
console.log(y.lastIndexOf('p')); //gives the last index value




//FOR EACH 
var arr=[1000,200,5400,6000,9000];
  console.log(arr);

  // mapp:map function creats new array
  var mapp = arr.map(n=>n*2);
  console.log("after mapping",mapp); 

// foreach:foreach function updates and modofies the same array
  arr.forEach(e =>console.log(e+2));     //using foreach
    
   

  //SORT
  var a=new Array(9,8,7,6,5,4,3,2,1,0,11,1111,111);

  var newa=a.sort();
  console.log(newa);