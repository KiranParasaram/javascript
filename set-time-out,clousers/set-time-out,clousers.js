

//SET_TIME_OUT
// setTimeout(() => {
//     console.log("HELLO WORLD!!!");
// }, 2000);


// let arr=[1,2,3,4,5];
// for(let i=0;i<arr.length;i++){
  
//     setTimeout(()=>{
//        console.log(arr[i]);
//         },arr[i]*1000)

// }


//CLOUSERS  =>it is combination of inner function and LEXICAL ENVIRONMENT created by inner function 

function outer(){  
            // LEXICAL ENVIRONMENT is from (line 23 to line 28)
    var a=30;   //we are able to access this variable inside inner function because of CLOUSERS
                 
    function inner(){
        console.log(a);
    }
    inner();

}
outer();

function add(){

    setTimeout(()=>{     //******settimeout function is a asynchronues language so that it exicutes only after all synchronous js codes are exicuted******
        console.log("hey");
    },0)

    console.log("A");

}
add();

console.log("hello world");


