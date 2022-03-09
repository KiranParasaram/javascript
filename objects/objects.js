console.log("hello world");


//1-> CREATING OBJECTS USING CURLY BRACES
const obj = {
    section:2,
    name : 'sharadh chandra',
    channel :'A',
    change :"locality"
}
console.log(obj);

 //Accessing a perticular value
console.log(obj.name);       //type1
console.log(obj["name"]);    //type2
console.log(obj.channel);


//METHOD
const employye={
    name:"kiran",
    id:001,
    salaray:"35k",
    designation:"frontend developer",
    functionInsideObj : function(){
   console.log(employye.name +" which has "+this.id + " got salary of "+this.salaray + " with " + this.designation+" role");
                       //inside the method  THIS keyword is used instead of object-name 
    }
}
employye.functionInsideObj();

console.log(employye);
console.log(employye.name ," which has ",this.id , " has "+this.salary , " with " , this.designation); 
                   // here THIS keyword is not applicable


//2 -> CREATING OBJECTS USING CONSTRUCTOR FUNC
const myObjConstru = new Object();
myObjConstru.name  = true, //******only boolean values are to be code without double-cotes(""),remaining all strings must be in double-cotes("")******
myObjConstru.id=2,
console.log(myObjConstru);


//RETRIVEING OF KEYS AND VALUES
var constr=Object.keys(myObjConstru);
console.log(constr);

var constr=Object.values(myObjConstru);
console.log(constr);



//SPREAD        //it helps to destructuring the object or array 
console.log({obj,employye});
let newobj = {...obj,...employye};
console.log("spread",newobj);

//eg2
let arr = [1,2,3,4,4,5];
let arr2 = ["a","e","i","o","u"];
console.log(arr,arr2);
console.log([...arr,...arr2]);


var arrobj={
    value:[1,2,8],
    name:"kiran",
    display : function(){
        console.log(this.value,this.name);
    }
}
arrobj.display();
console.log(arrobj.value[0]); 

// 3.CREATE -> creates new object with existing object only
let newname=Object.create(employye);
console.log(newname);