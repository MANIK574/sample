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
