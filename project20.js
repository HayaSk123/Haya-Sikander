var user = {
    name: "Haya Sikander",
    age: "25",
    Proffession: "Student",
    city: "Karachi",
    hobbies: "Your Hobbies"
};
console.log("About Me");
for (var key in user) {
    console.log(key + ": " + user[key]);
}
