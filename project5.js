//storing a person's name in a variable and including white spaces
var PersonName = " \t Haya Sikander \n";
//printing the variable "PersonName"
console.log(" Name with white space: ".concat(PersonName));
//creating a new variable "stripName" to store the stripped name
var stripName = PersonName.trim();
//printing the variable "stripName"
console.log(" Name without white space: ".concat(stripName));
