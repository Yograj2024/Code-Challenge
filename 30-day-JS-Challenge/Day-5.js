/*    Activity 1: Function Declaration   */
// Task 1:- Write a function to check if a number is even or odd
let no=parseInt(prompt("enter the numner !"));
function check(no){
    if(no%2==0){
        console.log("number is even");
    }else{
        console.log("number is odd");
    }
};
check(no);


// Task 2:- 
function square(no){
    return `square of ${no} is = ${no*no}`;
};
square(no);


/*    Activity 2: Function Expression   */

// Task 3:- find maximum of two numbers...
let no1=parseInt(prompt("enter the first no. "));
let no2=parseInt(prompt("enter the second no. "));
function find_max(no1,no2){
    (no1>no2)?console.log(`no1-${no1}\nno2-${no2}\nno1 ${no1} is greater`):console.log(`no1-${no1}\nno2-${no2}\nno2 ${no2} is greater`);
}
find_max(no1,no2);

// Task 4:-
let str1=prompt("enter the first string... ");
let str2=prompt("enter the second string... ");
function concat_str(str1,str2){
    console.log(`${str1+" "+str2}`);
};
concat_str(str1,str2);


/*    Activity 3: Function Expression   */
// Task 5:- 
let n1=parseInt(prompt("enter the first no. "));
let n2=parseInt(prompt("enter the second no. "));
const sum=(n1,n2)=>{
    return n1+n2;
};
sum(n1,n2);

// Task 6:- 
let string=prompt("enter the string... ");
let char=prompt("Enter the letter you want to find... ");
// let string="yograj";
// let char="a";
let find;
for(let i=0; i<string.length; i++){
    if(string[i]==char){
        console.log(`your letter is find at index ${i} wich is -> ${string[i]}`);
        find=true;
    }else{
        if(i==string.length-1 && find!=true){
            console.log(`letter not found .... \nyour letter is ${char}\nThe string is ->${string}`);        }
    }
};


/*    Activity 4: Function Expression   */
// Task 7:- 
// Task 8:- 
/*    Activity 5: Function Expression   */
// Task 9:- 
// Task 10:- 

