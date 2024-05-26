let GuestList: Array<string> = ["Emaan", "Moosa", "Mahnoor", "Wajiha"];

let guestwhocantmakeit : string = `Emaan`
console.log(`${guestwhocantmakeit} can't make it to dinner`)

//step2 replace the name of the guest who cant make it
let newGuest : string = `Daniya`
let indexnum : number = GuestList.indexOf(guestwhocantmakeit);

if(indexnum != -1)
{
    GuestList[indexnum]=newGuest
}

//Print a second set of names for dinner 
console.log(`Second set of invitations :`)
GuestList.forEach((guest : string) => 
{
    console.log(`Dear ${guest}, I would be delighted to have you join me for dinner tonight at my place. Your company would make the evening even more enjoyable.`);
})
