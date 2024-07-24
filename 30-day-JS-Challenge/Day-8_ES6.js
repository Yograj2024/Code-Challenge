
// Activity 1:- Template Literals.....
/* Template literals are a feature introduced in ECMAScript 2015 (ES6) that allow for easier string interpolation and multiline strings in JavaScript. They are denoted by backticks (``) instead of single quotes or double quotes. */

// Task 1:- create string using template literals....
let str="Yograj Singh";
let age=26;
console.log(`Hello ! I am ${str} I am ${age} year old`);

// Task 2:- create a multi-line string using template literals.....
const multi_line=`The stars above whispered secrets to the silent night.
In the heart of the forest, ancient trees whispered tales of old.
"On the horizon, a lone ship sailed into the sunset, carrying dreams and memories.`; 
console.log(multi_line);


// Activity 2:- Destructuring......
// Task 3:- array destructuring-
let array=[2,3,4,5,6,7,8,9,0,1];
let [num1,num2]=array;
console.log(`${num1},${num2}`);

// Task 4:- object destructuring-
let student={
    name:"Raju",
    _class:12,
    age:17,
    email:"Raj69@gmail.com",
    phone:4208754420
};
let {name_,_class,_age}=student;
console.log(`student name-${name_}\nstudent age-${_age}`);


// Activity 3:- spread and rest operator
// Task 5:-
let newarray=[...array,"one","two","three"];
console.log(newarray);

// Task 6:- rest operator 
let num3=[1,2,3,4,5,6,78,9,132,44];
function sum(...num33){   // rest operator
        return num33.reduce((a,b)=>{
            return a+b;
        });
};
sum(...num3); // spred operator


// Activity 4:- Default perameater......
// Task 7:-
function sum2(_default=1,no){
    return _default+no;
};
console.log(sum2(5,18));
console.log(sum2(5));


// Activity 5: Enhanced Object Literals ---
// Task 8:- enhanced object literals to create an object .....
let name2="Akshay";
let roll_no=34;
let mail="Ak420@gmail.com";
let phone=594739839;

let stu={
    name2,
    roll_no,
    mail,
    phone,
    self(){
        console.log(`My name is ${this.name2} and my email,contact is ${this.mail},${this.phone}`);
    }
};
console.log(stu);
stu.self();

// Task 9:-
// Variables to use for computed property names
const key1 = 'name';
const key2 = 'age';
let about=()=>{
    console.log("Hello JS user ...!");
};
// Create an object with computed property names
const obj = {
  [key1]: 'John Doe',
  [key2]: 30,
  about
};
console.log(obj);
 
