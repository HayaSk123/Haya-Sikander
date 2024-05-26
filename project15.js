var Guestllist = ["Emaan", "Moosa", "Mahnoor", "Wajiha"];
var guestWhoCantMakeIt = "Emaan";
console.log("".concat(guestWhoCantMakeIt, " can't make it to dinner"));
// Step 2: Replace the name of the guest who can't make it
var NewGuest = "Daniya";
var indexNum = Guestllist.indexOf(guestWhoCantMakeIt);
if (indexNum != -1) {
    Guestllist[indexNum] = NewGuest;
}
// Print a second set of names for dinner 
//console.log(`Second set of invitations :`)
//Guestllist.forEach((guest : string) => 
//{
//  console.log(`Dear ${guest}, I would be delighted to have you join me for dinner tonight at my place. Your company would make the evening even more enjoyable.`);
//})
//inform about the bigger table
console.log("Good News! We found a bigger table");
//addig a new guest to the beginning of the array
var newguest1 = "Hooriya";
Guestllist.unshift(newguest1);
//adding a new guest in the middle of the array
var newguest2 = "Shiza";
var midpoint = Math.floor(Guestllist.length / 2);
Guestllist.splice(midpoint, 0, newguest2);
// adding a new name to the end of the array
var newguest3 = "Sara";
Guestllist.push(newguest3);
//console.log(Guestllist);
//print a new set of invitations
for (var _i = 0, Guestllist_1 = Guestllist; _i < Guestllist_1.length; _i++) {
    var guest = Guestllist_1[_i];
    console.log("Dear ".concat(guest, ", I would be delighted to have you join me for dinner tonight at my place. Your company would make the evening even more enjoyable."));
}
