// console.log("sets");

//arrays
let arr=new Array(1,1,2,4,4,8,4,5,4,5);
console.log(arr);

//SET
let setarr = new Set(arr);
let b= new Set("kiran kumar")
console.log(setarr,b);     

//line 13 converts set to an array by using spread operator    
let nwesets=[...setarr,...b];    //spread operator(i.e; ...)  do the de-structuring of the set , to array 
console.log("converted arrays op",nwesets);

//eg2  ->removes duplicate elements
let cover = new Set("rakesh khanna Arjun VVvikram");
console.log(cover);
// newcover=[...cover];
console.log([...cover]);


//ADD FUNCTION -> used to add the element to the set
let change = new Set();
change.add(4,2);
change.add("string");
change.add([1,2,4,]);
change.add({id:1,name:"kiran"});

let newone = new Set();
newone.add("kiran");
console.log(change,newone.add("12"));

//HAS -> checks wheather the element is present or not and returns boolean value
console.log(change.has(2),change.has('string'));
console.log(newone.has(12));

//SIZE
console.log(change.size);

//DELETE
change.delete("string");
console.log(change);

//CLEAR ->deletes all elements
newone.clear();
console.log(newone);

//QNS
// var a="abcadeecfb";
// let newa=a.split("");
// console.log(newa);


// let nstr=new Set(newa);
// console.log(nstr);

// let newstr=[...nstr];
// console.log(newstr);

// console.log(newstr.join(""));


//QNS
var a="abcadeecfb"





