console.log("hello");

let mymap = new Map();
console.log(mymap);
let myset=new Set([1,"h",[1,2,5],{id:12,value:"kkhh"}]);
console.log(myset);


//SET FUNCTION ->adds the elements to map
let mymaps=new Map();
mymaps.set("name",1);
console.log(mymaps);

mymaps.set("key",[1,2,3,4,5,6]);
console.log(mymaps);

//GET ->returns value of the give key
 console.log("op of get",mymaps.get("name"));     //1st way of getting values by using GET FUNCTION grom keys

 let newk=mymaps.get("key");     //2nd way of getting values by using GET FUNCTION grom keys
 console.log(newk);

 
 //SIZE
 console.log(mymaps.size);

 //HAS ->checks wheateher given key is present or not and return boolean value
console.log(mymaps.has("name"));

//DELETE
mymaps.delete("name");
console.log(mymaps);

//CLEAR
mymaps.clear();
console.log(mymaps);
 