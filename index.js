let name = "anbu";
let age = 24;
let interest = ["creating", "teaching"];
let address = {
    city: "chennai",
    state: "tn",
};

function greeting() {
    let msg = "My name is " + name + ", I love " + interest.join(" and ");
    console.log(msg);
}

let person = {
    name: "anbu",
    age: 24,
    interest: ["creating", "teaching"],
    address: {
        city: "chennai",
        state: "tn",
    },
};

greeting(); // Call the function to see the message
console.log(person.name);
function a(callback){
    setTimeout(()=>{
        console.log("hello");
        callback();
    },4000)};

function b(){
    console.log("hi")

}
a()
b()
//a(b)
 


function attendance(callback) {
    console.log("Taking attendance...");
    setTimeout(() => {
        console.log("Attendance taken.");
        callback(); // Call the next function (lunch)
    }, 4000); // delay of 1 second
}

function lunch(callback) {
    console.log("It's time for lunch...");
    setTimeout(() => {
        console.log("Lunch is over.");
        callback(); // Call the next function (going home)
    }, 4000); //delay of 2 seconds
}

function goingHome() {
    console.log("It's time to go home!");
}




attendance(() => {lunch(() => {goingHome();});});
*/


function attendance() {
    return new Promise((resolve) => {
        console.log("Taking attendance...");
        setTimeout(() => {
            console.log("Attendance taken.");
            resolve(); // Resolve the promise to indicate completion
        }, 1000); // Simulate a delay of 1 second
    });
}

function lunch() {
    return new Promise((resolve) => {
        console.log("It's time for lunch...");
        setTimeout(() => {
            console.log("Lunch is over.");
            resolve(); // Resolve the promise to indicate completion
        }, 2000); // Simulate a delay of 2 seconds
    });
}

function goingHome() {
    console.log("It's time to go home!");
}

// Start the process using Promises
attendance()
    .then(lunch) // Call lunch after attendance is resolved
    .then(goingHome) // Call goingHome after lunch is resolved
    .catch((error) => {
        console.error("An error occurred:", error);
    });
*/





function takeAttendance() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Attendance taken successfully! 🎉");
        }, 1000); // Simulate a delay of 1 second
    });
}

// Function to simulate having lunch
function haveLunch() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Lunch is over! 🍽️");
        }, 2000); // Simulate a delay of 2 seconds
    });
}

// Function to simulate going home
function goHome() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("It's time to go home! 🏠");
        }, 1000); // Simulate a delay of 1 second
    });
}

// Async function to manage the attendance process
async function startAttendanceProcess() {
    try {
        const attendanceResult = await takeAttendance();
        console.log(attendanceResult); // Log attendance result
        
        const lunchResult = await haveLunch();
        console.log(lunchResult); // Log lunch result
        
        const homeResult = await goHome();
        
        console.log(homeResult); // Log home result
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

// Start the attendance process
startAttendanceProcess();
