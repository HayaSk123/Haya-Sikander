let GuestList: Array<string> = ["Emaan", "Moosa", "Mahnoor", "Wajiha"];

GuestList.forEach((guestname) => {
    console.log(`Dear ${guestname}, I would be delighted to have you join me for dinner tonight at my place. Your company would make the evening even more enjoyable.`);
});
const numofpplinvited: number = GuestList.length;
console.log(`The total Number of people invited is ${numofpplinvited}`)

