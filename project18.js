var GuestList = ["Emaan", "Moosa", "Mahnoor", "Wajiha"];
GuestList.forEach(function (guestname) {
    console.log("Dear ".concat(guestname, ", I would be delighted to have you join me for dinner tonight at my place. Your company would make the evening even more enjoyable."));
});
var numofpplinvited = GuestList.length;
console.log("Number of people invited are : ".concat(numofpplinvited));
