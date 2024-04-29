"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//DAY 10 CODING CHALLENGE.
//Question 1:Stages of life:Determine a person life stage with an if-else chain.
let age = 25;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age < 6) {
    console.log("The person is a toddler.");
}
else if (age < 20) {
    console.log("The person is a teenager.");
}
else if (age < 27) {
    console.log("The person is a younster.");
}
else if (age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
//Question 2:Favourite fruit:Create an array for your favourite fruits and check if certain fruit are included.
let favourite_fruits = ["apples", "bananas", "cherries"];
if (favourite_fruits.includes("bananas")) {
    console.log("You really like bananas.");
}
if (favourite_fruits.includes("apples")) {
    console.log("You really like apples.");
}
if (favourite_fruits.includes("cherries")) {
    console.log("You really like cherries.");
}
//Question 3:Hello admin:Greet user differently,especially 'admin'.
let usernames = ["admin", "Laiba", "Areeba", "Bisma", "Erum"];
usernames.forEach(username => {
    if (username === "admin") {
        console.log("Hello admin,would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});
