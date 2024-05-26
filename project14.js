var GuestList = ["Emaan", "Moosa", "Mahnoor", "Wajiha"];
var guestwhocantmakeit = "Emaan";
console.log("".concat(guestwhocantmakeit, " can't make it to dinner"));
//step2 replace the name of the guest who cant make it
var newGuest = "Daniya";
var indexnum = GuestList.indexOf(guestwhocantmakeit);
if (indexnum != -1) {
    GuestList[indexnum] = newGuest;
}
//Print a second set of names for dinner 
console.log("Second set of invitations :");
GuestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", I would be delighted to have you join me for dinner tonight at my place. Your company would make the evening even more enjoyable."));
});
