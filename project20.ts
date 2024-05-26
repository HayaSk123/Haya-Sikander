let user: { [key: string]: string } = {
    name: "Haya Sikander",
    age: "25",
    Proffession: "Student",
    city: "Karachi",
    hobbies: "Your Hobbies"
};

console.log("About Me");
console.log("")
for (let key in user) {
    console.log(key + ": " + user[key]);
}

