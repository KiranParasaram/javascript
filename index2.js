
document.getElementById("but").onclick=addfunc;

function addfunc(){

let a=document.getElementById("numb1").value;
let b=document.getElementById("numb2").value;
let c=parseInt(a)+parseInt(b);
document.getElementById("insertblock").innerHTML=c;

}


console.log('a')