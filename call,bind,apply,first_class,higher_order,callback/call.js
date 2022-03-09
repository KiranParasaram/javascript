console.log("welcome");


//CALL BACK FUNCTION
function greeting(name) {
    console.log('Hello ' + name);
  }
    // greeting("kiran");   *******instead of using invoking (or) calling a function , we use another function(line 10) . this is known as CALL BACK FUNCTION********

  function processUserInput(callbac) {
    var name = "kiran";
    callbac(name);
  }
    processUserInput(greeting);


 //CALL & APPLY
 let student={
     name:"kiran",
     roll_no:428,
     designation:"student",
     location:"andhra"
      
 }
 let employee={
     name:"kiran",
     name:"hari",   //*****incase of 2(or)more keys having same key-name then at the time of log last value of key is considered because it is overwritten  the other values*****
     salary:40000,
     designation:"developer",
     location:"Noida"
 }

//creating a function which will be using above object /with out call, bind apply 
  function a(value){   //incase of normal function ,parameters are  required for calling an object
     console.log("with out using call,apply..",value.name+value.roll_no,value.locality);
     console.log("with out using call,apply..",value);
 }

   a(student,);  //invoking the above function and passing student-object 
   a(employee);


 // by using call,apply and bind 
   function Name(company,phone){  //incase of call,apply& bind parameters are not required for calling an object
    console.log("with using call,apply..",this);
    console.log("with using call,apply..",this.name,this.salary,this.designation+" "+this.location,company,phone);
   }
   
  Name.call(employee,"accenture",12458); //in case of call the arguments are passed individually
  
  Name.apply(employee,["accenture",12458]); //in case of apply arguments are to be passed inside an array 
  
  let newFunc = Name.bind(student);  // in case of bind object-argument is first given to an existing-function then it is equalised to a variable ,after that normal arguments are to be given to that newly created variable
  newFunc("IBM","ACCENTURE");


  //FIRST CLASS FUNCTION ->
    //first class functions are those functions 
    //1.which can be passed as an argument to a function 
    //2.which can be returned from a function
    //3.which can be assigned to a variable


  function classs(myFun){  //***1.function can be passed as an argument to another function (i:e,function ids) and / it is call back funtion and / it is also higher order function*****
      myFun()
      console.log("A");
  }

  function ids(){        
      console.log("B");
  }
  classs(ids);

  function display(){   //2.*****function can be returned from another function (i:e,line 73) and / it is higher order function also*****
      return function(){
          console.log("hello world");
      }
  }
 
  
   const show=function(){    // 3.*****function can be assigned to a variable*****
       console.log("hello world");
   }
   show();