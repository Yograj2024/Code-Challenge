// Day 6: Array

// Activity 1: Array creation and access
// Task 1:-create an array
const myArray=["Akashay",9,"Pawan",30,4];
console.log(myArray);

// Task 2:-access first and last element
console.log(`First element is -> ${myArray[0]}\nSecond element is -> ${myArray[4]}`);


// Activity 2:Array methods(basic)
// Task 3:push method....
myArray.push(345);
console.log(myArray);

// Task 4:pop method...
myArray.pop();
console.log(myArray);

// Task 5:shifr method....
myArray.shift();
console.log(myArray);

// Task 6:unshift.....
myArray.unshift(235);
console.log(myArray);


// Activity 3:Array methods(Intermediate)
// Task 7:map method....
const newArray=myArray.map((element)=>{
    if(typeof(element)=='number'){
        return element*2;
    }else{
        return element;
    }
});
console.log("this is new array ",newArray);

const array=[9,"yogi",4,"modi",2];
const array2=array.map(ele=>{
    if(typeof(ele)=='number'){
        return ele*2;
    }else{
        return ele;
    };
});
console.log(array2);

// Task 8:filter method....
const num_arry=myArray.filter(ele=>{
    if(typeof(ele)=='number'){
        return ele*ele;
    };
});
const str_arry=myArray.filter((ele)=>{
    if(typeof(ele)=='string'){
        return ele;
    };
});
console.log("filter array ->",num_arry);
console.log("string array ->",str_arry);

// Task 9: reduce method.....
/*  In JavaScript, the reduce method is used to reduce an array to a single value based on the
 elements of the array. It executes a callback function on each element of the array and 
 returns a single value that results from the reduction. 
*/

let sumOfarray=num_arry.reduce((accumulator, currentValue)=>{
    return accumulator+currentValue;
});
console.log(`sum of arrey int = ${sumOfarray}`);


// Activity 4:Array Iteration
// Task 10: 
for(let i=0; i<myArray.length; i++){
    console.log(`your array element is = ${myArray[i]}`);
}

// Task 11: use for each....
myArray.forEach(element => {
    console.log(`for each ${element}`);
});

/* 
call back 
myArray.forEach((element)=>{
    console.log(element);
});
 */


// Activity 5: Multi-dimensional Array
// "I'll learn it, then come back and finish it."
// Task 12:


// Task 13:

