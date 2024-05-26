var GUESTLIST = ["Emaan", "Moosa", "Mahnoor", "Wajiha"];
var GUEST_WHO_CANT_MAKE_IT = "Emaan";
var NEW_GUEST = "Daniya";
var INDEX_NUM = GUESTLIST.indexOf(GUEST_WHO_CANT_MAKE_IT);
if (INDEX_NUM != -1) {
    GUESTLIST[INDEX_NUM] = NEW_GUEST;
}
// console.log(`Good News! We found a bigger table`)
var NEW_GUEST_1 = "Hooriya";
GUESTLIST.unshift(NEW_GUEST_1);
var NEW_GUEST_2 = "Shiza";
var MIDPOINT = Math.floor(GUESTLIST.length / 2);
GUESTLIST.splice(MIDPOINT, 0, NEW_GUEST_2);
var NEW_GUEST_3 = "Sara";
GUESTLIST.push(NEW_GUEST_3);
// for (let GUEST of GUESTLIST) {
//     console.log(`Dear ${GUEST}, I would be delighted to have you join me for dinner tonight at my place. Your company would make the evening even more enjoyable.`)
// }
console.log("Previous Guestlist :".concat(GUESTLIST));
console.log("Unfortunately, the new dinner table won't arrive in time, so I'll only be able to invite two guests for dinner.");
while (GUESTLIST.length > 2) {
    var removeguest = GUESTLIST.pop();
    console.log("Sorry ".concat(removeguest, ", I hope you understand and can join us another time"));
}
for (var _i = 0, GUESTLIST_1 = GUESTLIST; _i < GUESTLIST_1.length; _i++) {
    var GUEST = GUESTLIST_1[_i];
    console.log("Dear ".concat(GUEST, ", I would be delighted to have you join me for dinner tonight at my place. Your company would make the evening even more enjoyable."));
}
GUESTLIST.pop();
GUESTLIST.pop();
console.log(GUESTLIST);
