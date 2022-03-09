console.log("string");


//LENGTH
let names="all over about the round";
console.log(names.length);

//CONCATINATION
var sign="go slow";
var int=25;
var char='gavoge';

let concat =sign + " age " + int + "char " + char;
console.log(concat);
console.log(sign.concat(int));


//REVERSE STRING
 var name="I am kiran kumar";
  
 let splitstr=name.split("");
 console.log(splitstr);

 let reversearr=splitstr.reverse("");
 console.log(reversearr);

 let jointarr=reversearr.join("");
 console.log(jointarr);


 //eg:2
 var course="Full stack web development course";
  console.log(course);

//  let splitcourse=course.split(" ");    //method1
//  console.log(splitcourse);

//  let reversecourse=splitcourse.reverse("");
//  console.log(reversecourse);

//  let joincourse=reversecourse.join(" ");
//  console.log(joincourse);

 var reversecourses=course.split(" ").reverse("").join(" ");  //method2
 console.log(reversecourses);


 //REPLACE
 let file="kiran , mp and bala are friend bala";
 console.log(file);
 let newfile=file.replace("bala","pandu");
 console.log(newfile);

 console.log("renaming",file.replaceAll("bala","gandhi"));

//TRIM
var sign="     hjyre  "
console.log(sign.trim()); 


//Slice
var home="sigma rule of the world";
console.log(home);
console.log(home.substring(3));
console.log(home.substring(0,7));
console.log(home.slice(-13));




//SPLICE
var splicearr=["mango","jolabi","goa","sugar","candy","dunbel","jamun"]
console.log(splicearr);
console.log(splicearr.splice(3,1,"kiran","kumar"));






