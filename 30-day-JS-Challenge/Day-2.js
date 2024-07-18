/*  Activity 1: Arithmetic Operations  */
// Task 1: Add two numbers -
let a=39;
let b=48;
console.log(a+b);

// Task 2: subtract two number -
let a1=38;
let b1=89;
console.log(a1-b1);

// Task 3: multiply two numbers -
let a2=38;
let b2=89;
console.log(a2*b2);

// Task 4: Divide two numbers -
let a3=38;
let b3=89;
console.log(a3/b3);

// Task 5: Print remainder two numbers and log the result to the console 
let a4=49;
letb4=32;
console.log(a4%b4);


/*  Activity 2: Assignment Operation  */
//  Task 6: += operator
let n=98;
let n2=2;
console.log(n2+=n); // output :- 100

// Task 7: -= operator
let n1=98;
let n3=2;
console.log(n2-=n);  // output :- -96



/*  Activity 3: Assignment Operation  */
// Task 8: WAP to compare two no using <,>
let x=78;
let y=229;
if (x>y){
    console.log(`x is greater then y,${x-y} time `);
}else{
    console.log(`y is greater then x,${y-x} time`);
};

// Task 9: WAP to compare two no using >=,<=
let x1=783;
let y1=783;
if (x1>=y1){
    console.log(`x is greater then or equal y `);
}else{
    console.log(`y is less then or equal x `);
};

// Task 10: wap to compare two no using ==,=== 
let _n=10;
let _n1=10;
let _n2='10';

if (_n==_n1) { // check value not type
    console.log(`_n ${_n} type(${typeof(_n)}),_n1 ${_n1} type (${typeof(_n1)}) are equal`);
}; 

if (_n===_n2){ //  also check type 
    console.log(`_n ${_n} (${typeof(_n)}),_n2${_n2} type (${typeof(_n2)}) are equal`);   
}else{
    console.log(`_n ${_n} type(${typeof(_n)}) and _n2 '${_n2}' type(${typeof(_n2)}) are not equal Because both have different types`);
};


/* Logical Operators */
// Task 11: wap use the && oprator to combine two conditions
if (_n==_n1 && _n==_n2) {
    console.log(`_n,_n1,_n2 are equal acording to the value`);
};

if (_n===_n1 || _n===_n2) {
    console.log(`_n,_n1,_n2 are equal acording to the type`);
}else{

};










