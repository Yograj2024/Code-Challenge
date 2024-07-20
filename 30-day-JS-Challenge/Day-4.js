/*  Activity 1: For Loop */
// Task 1:- print no from 1 to 10 using loop
for (let i=1; i<=10; i++) {
    console.log(i);
};


// Task 2:- multiplication table of 5
let tb_no=parseInt(prompt("What number table is printed..?"));
for (let i=1; i<=10; i++) {
    console.log(`${tb_no}*${i}=${tb_no*i}`);
};


/*  Activity 1: While Loop */
// Task 3:- sum of 1-10
let no=1;
let sum=0;
while(no!=0 && no<=10){
     sum=sum+no;
    if(no==10){
        console.log(`sum is = ${sum}`);
        break;
    };
    no++;
};

// Task 4:- print 10-1 using while loop
let n=10;
while(n>1){
    console.log(n);
    n--;
};

// Task 5:- print 1-5 using do-while loop
let num=1;
do{
    console.log(num);
    num++;
}while(num<=5);



// Task 6:- factoriyal of a no...
let f=5;
let i=1;
let fa=1;
do{
    fa=fa*i;
    i++;
}while(i<=f);
console.log(`Factoriyal of your no = ${fa}`);

/*  Nested Loop  */
// Task 7:-
    for (let i = 1; i <=5; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '* ';
        }
        console.log(row);
    }


/*  Activity 5: Loop Control Statememt --- */
// Task 8:- skip no.5 using continue statement
for(let i=1; i<=10; i++){
    if(i==5){
        continue;
    };
    console.log(i);
};

// Task 9:- break statement-
for(let i=1; i<=10; i++){
    if(i==5){
        break;
    };
    console.log(i);
}; 
