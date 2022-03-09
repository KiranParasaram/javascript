
//NORMAL FUNCTION
function add(){       //defining a function or declaring function
    console.log(4+8);
}
add();             //calling a function or invoking a function


//PARAMETER TYPE
sum("kiran"," kumar");
function sum( a , b){   // a and b are parameters
   console.log(a+b);

   
}
sum(12,12);            // 12 and 12 are arguments 
sum(2,8);


//RETURN TYPE
function type3(var1, var2){
  let  a = var1*var2;
    return (a);

    return var1+var2;   //another way of returning a value
   
}
   const newvalue = type3(20,20); //always use a variable to store the return type
  console.log(newvalue);  // then print that variable 

  console.log(type3(20,19));  // another method of printing and calling a RETURN TYPE FUNCTION


  //ARROW        
  const userfunction = () =>{
  
      console.log("arrow function");
  }
  userfunction ();


  let arrowfunction = (a,g) =>{    //eg:2
    return a << g;
  }
     console.log(arrowfunction(12,12) );


  //FUNCTION EXPRESSION
  const a=function (){

      return 1;
  }
    let fun=a();
    console.log(fun);
    console.log(a());


    let display = function(a,b){  //eg:2
       
      return a/b;
    }
     const show = display(258745,1254789);
    console.log(show);
    console.log(display(258745,1254789));


    //CALL BACK FUNCTION
   function ece (){          //this function is callback function (line 67 to lone 69)
     console.log("ECE BLOCK");
   }
   function cse(callback){
        console.log("CSE BLOCK");
        callback()
   }
   cse(ece);


    function a(signal){
      console.log("hello world");
      console.log(signal);
    }
    // a();     instead of using invoking (or) calling a function , we use another function for calling this function
    function b(callback){
      var signal="hii";
      console.log("listen");
      callback(signal)
    }
    b(a);  //here for PARAMETER CALLBACK we give FUNCTION A as ARGUMENT




// function greeting(name) {
//   console.log('Hello ' + name);
// }
//   // greeting("kiran");   *******instead of using invoking (or) calling a function , we use another function(line 10) . this is known as CALL BACK FUNCTION********

// function processUserInput(callbac) {
//   var name = "kiran";
//   callbac(name);
// }
//   processUserInput(greeting);


// function a(name){   //eg:2
// console.log("kiran",name);
// }
// function b(name2){
//   let name=28;
//   name2(name);
// }
// b(a);


// function sigma(g){  //eg:3
// console.log(g+1);
// }
// function gama(h){
//   let g=12;
//   h(g);
// }
// gama(sigma);