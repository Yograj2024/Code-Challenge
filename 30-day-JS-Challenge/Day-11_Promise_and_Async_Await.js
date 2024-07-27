// Activity 1:- Understanding Promises
// Task 1: Create Promises that resolves with a message after 2 sec
function mess(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('सफलता..! डेटा को सफलतापूर्वक प्राप्त कर लिया गया है।');
        }, 2000);
    });
};

function print_mess(){
    mess().then(sandesh=>{
        console.log(sandesh);
    });
};
print_mess();


// Task 2: Create a promise that reject with an message....
let proReject= new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("समस्या आ गई है! कृपया सुनिश्चित करें कि डेटा सही तरीके से प्रदान किया गया है। यदि आप निश्चित नहीं हैं, तो कृपया जानकारी की समीक्षा करें और पुनः प्रयास करें।");
    }, 2000);
});

proReject.then(sandesh=>{
    console.log(sandesh);
});



// Activity 2:- Promises Chaining
// Task 3:
let server=[{
    firstName: "Amit",
    lastName: "Sharma",
    age: 30,
    email: "amit.sharma@example.com",
    occupation: "Software Developer",
    address: {
        street: "123 Main St",
        city: "Delhi",
        postalCode: "110001"
    },
    hobbies: ["Reading", "Traveling", "Coding"]
},{
    employeeId: "E456789",
    name: "Ravi Patel",
    position: "Project Manager",
    department: "Engineering",
    salary: 85000,
    hireDate: "2020-03-15",
    contact: {
        phone: "+91-9876543210",
        email: "ravi.patel@company.com"
    },
    skills: ["Project Management", "Agile", "JavaScript", "Team Leadership"]
},{
    playerId: "P789012",
    name: "Arjun Singh",
    team: "Royal Challengers",
    position: "All-Rounder",
    matchesPlayed: 45,
    totalRuns: 1200,
    highestScore: 85,
    average: 30.4,
    contact: {
        phone: "+91-9998887777",
        email: "arjun.singh@sportsmail.com"
    },
    achievements: ["Best Player of the Year 2022", "Most Valuable Player 2021"]
}];

function fetchData(server,time,position){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let value=server[position];
            let result='';
            if(!server || !server[position]){ // Check if the request sent exists or not.
                reject("chek kar bhai mere ko kuchh nahi mila :(");
                return;
            };
             for(let i in value){
                   result+=`${i} : ${value[i]}\n`
                }
                resolve(result);
        },time);
    });
};

fetchData(server,2000,0).then(data=>{
    console.log(data);
    return fetchData(server,2000,1);
}).then(data=>{
    console.log(data);
    return fetchData(server,2000,2);
}).then(data=>{
    console.log(data);
    return fetchData(server,2000,3);
}).then(data=>{
    console.log(data);
}).catch(error=>{
    console.log(error);
});



// Activity 3:- Using Async/Await..
// Task 4:
 function pro(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("promises resolved")
        },5000);
    });
};

async function AsyncFun(){
    console.log("waiting for value....");
    let value=await pro();
    console.log("promise ke resolve ke bad me aaya :( \n mere bad promise ke value aayi  :) ");
    console.log(value);
};
AsyncFun();


// Task 5:
function pro2(){
    return new Promise((_, reject) => {
        setTimeout(()=>{
            reject(" Bhai tera kaam nahi hua :( ");
        },5000);
    });
};

async function RejectPromise(promise){
    console.log("Waitinggg.....");
    try {
         await promise;
        // console.log("bhai ye to try ka hai",+value);
    } catch (error) {
        console.log(` bhai me to catch se hu or ye rahi error ${error}`);
    }   
}

RejectPromise(pro2());



// Activity 4:- Fetch Data from API ....
// Task 6:

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((erroe)=>{
    console.log(erroe);
})

// Task 7:
async function task6(){
    try {
        console.log("wating......");
        let result= await fetch('https://api.github.com/users/hiteshchoudhary')
        let finalData= await result.json();
        console.log(finalData);
    } catch (error) {
        console.log(`kuchh to bat hai : ${error}`);
    };
};
task6();



// Activity 5:- Concurrent Promises.....
// Task 8: Promise.all() [method]
const promise1=new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("I am promise1");
    },2000)
});
const promise2=new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("I am promise2");
    },2000)
});
const promise3=new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("I am promise3");
    },2000)
});

Promise.all([promise1,promise2,promise3])// it return a array
.then((return_val)=>{
    return_val.forEach(val=>{
        console.log(val);
    })
})
.catch((error)=>console.log(error));


// Task 9: Promise.race() [method]
const peomise4=new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(" me 4");
    },3000);
});
const peomise5=new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(" me 5")
    },1000);
});
const peomise6=new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject(" me 6")
    },500);
});
const peomise7=new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(" me 7")
    },500);
});

Promise.race([peomise4,peomise5,peomise6,peomise7])
.then((result)=>console.log(result))
.catch((error)=>console.log(error))

