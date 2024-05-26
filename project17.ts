let locations : Array<string> =["Makkah","Madina","London","New York", "Switzerland"]
console.log("Original Array");
console.log(locations);
//printing the array in alphabetical order
console.log("Alphabetical Order")
let sortedlist = [...locations].sort();
console.log(sortedlist);
//showing that the array is still in its original form
console.log("showing that the array is still in its original order")
console.log(locations);
//printing the array in reverse alphabetical order
console.log("Reverse Alphabetical Order")
let reversedarray = [...locations].sort().reverse();
console.log(reversedarray);
//showing that the array is still in its original form
console.log("showing that the array is still in its original order")
console.log(locations);
//reversing the array
console.log("Reversed array")
locations.reverse()
console.log(locations);
//reversing the array to bring it back to its original form
console.log("Reversing the array back to its original form")
locations.reverse();
console.log(locations);
//changing the array's order to alphabetical order
console.log("Changing the array's order to alphabetical")
locations.sort()
console.log(locations)
//changing the array's order so that it is in reverse alphabetical order
console.log("Changing the order of the array so that it is in reverse alphabetical order ")
locations.reverse()
console.log(locations);


