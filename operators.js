
"use strict"
a=20;
a=10;
console.log(a ,b);

//arthematic

var a=6;
var b=9;
console.log(a+b);
console.log(a%b);
console.log(a/b);

//comparision
let x="1";
let y=10;

var doublequal = x==y;
var tripleequal = x===y;
console.log(doublequal);
console.log("===",tripleequal);

var notequal = x != y;
var notdoubleequal = x !== y;
console.log("!= ",notequal);
console.log("!== ",notdoubleequal);

let u=10;
let v=20;
console.log(u++);
u++;
console.log("increment",u);
console.log(++u);
console.log(u--);
console.log(--u);

console.log(v--);
console.log(v--);
console.log(--v);

let g=10;
let h=11;
console.log(g==h && g!=h);
console.log(g<h || g!=h);
console.log(!g);

//ternary
let ispresent = false;
let con = ispresent ?   "yes,he is in" : "OHH no,he  not" ;
console.log(con);

//bitwise and
var a=7;
var b=10;
let c = a==7 && b<10;
console.log("AND operator",c);
console.log(a | b);
console.log("XOR ",a ^ b);
console.log(~a);

var a=4;
var b=3;
console.log(a<<b);
console.log(a>>b);
console.log(a>>>b);
console.log(a,b);




