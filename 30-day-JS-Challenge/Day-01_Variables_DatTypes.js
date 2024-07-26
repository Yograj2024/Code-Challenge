// Task-1: Declare variable usin var.
var val1=394;
console.log("variable using var =",val1);

// Task-2: Declare variable usin let.
let val2=9383;
console.log("variable using let =",val2);

// Task-3: Declare variable usin const.
const U_R_a_man=true;
console.log("you are a man :",U_R_a_man);

// Task-4: Create variable of diffrent data types.
let no=297423;       // number
let name="rahul";   // string
let present=true;  // boolean

let student={
  name:"pankaj",
  age:21,
  address:"124 DakiyaGulabo,Uttrakhand",
  phone:2983756382,
  email:"pankaj34983@gmail.com",
  sub:["english","hindi","maths","physics","chemistry"]
};    // object

const subjects = ["Python","C++","Cyber Security","Java Script","GO","Rust"];  // Array

console.log("type of no :-",typeof(no));
console.log("type of name :-",typeof(name));
console.log("type of present :-",typeof(present));
console.log("type of student :-",typeof(student));
console.log("type of subjects :-",typeof(subjects));


// Task 5: Reassigning valuse of an variable
let v=49;
let naam="moha";
console.log(` before v val =${v}\n before name val=${naam}`);
v=98;
naam="praem"
console.log(` after v val =${v}\n after name val=${naam}`);


// Task 6: Try reassigning variable declare with const and observe the error
const myConstant = "Hi"
console.log("Value of myConstant:", myConstant);

// Since we cannot reassign a const variable, we'll demonstrate immutability
try {
    myConstant = "Hello" // This will throw an error
} catch (e) {
    console.log("Error when trying to reassign myConstant:", e.message)
}


