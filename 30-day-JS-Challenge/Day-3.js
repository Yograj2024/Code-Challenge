/*  Activity 1:- if-else statement */
// Task 1: check no is posi+,nega- or 0
let no=prompt("enter the number !");
if(no>0){
    console.log("number is positive ");
}else if (no<0) {
    console.log("number is negative ");
} else {
    console.log("number is 0");
};

// Task 2: aligible for vote or not
let age=prompt("enter your age !");
if (age>=18) {
    console.log("you are aligible for vote");
} else {
    console.log("you are not aligible for vote");
};

// Task 3: Nested if-else 
let day=parseInt(prompt("enter the no 1-7 ")); //Input from the prompt is taken in string form and the switch expects a int value so parseInt are used to change into int.
switch (day) {
    case 1:alert("the value of your no is 'SUNDAY' ")
        break;
    case 2:alert("the value of your no is 'MONDAY' ")
        break;
    case 3:alert("the value of your no is 'TUESDAY' ")
        break;
    case 4:alert("the value of your no is 'WEDNESDAY' ")
        break;
    case 5:alert("the value of your no is 'THURSDAY' ")
        break;
    case 6:alert("the value of your no is 'FRIDAY' ")
        break;
    case 7:alert("the value of your no is 'SATURDAY' ")
        break;
    default:alert("your number is not between 1-7 ")
        break;
};

// Task 5:
let score=parseInt(prompt("enter your scored mark "));
switch (true) {
    case (score<33):alert("you are fail GRADE-F ")
        break;
    case (score>=33 && score<40):alert("you are pass GRADE-D ")
        break;
    case (score>=40 && score<60):alert("you are pass GRADE-C ")
        break;
    case (score>=60 && score<80):alert("you are pass GRADE-B ")
        break;
    case (score>=80 && score<=100):alert("you are pass GRADE-A ")
        break;
    default:alert("you score is invalid..! ")
        break;
};


