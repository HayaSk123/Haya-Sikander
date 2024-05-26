let Guestllist: Array<string> = ["Emaan", "Moosa", "Mahnoor", "Wajiha"];

let guestWhoCantMakeIt : string = `Emaan`
//console.log(`${guestWhoCantMakeIt} can't make it to dinner`)

// Step 2: Replace the name of the guest who can't make it
let NewGuest : string = `Daniya`
let indexNum : number = Guestllist.indexOf(guestWhoCantMakeIt);

if(indexNum != -1)
{
    Guestllist[indexNum]=NewGuest
}

// Print a second set of names for dinner 
//console.log(`Second set of invitations :`)
//Guestllist.forEach((guest : string) => 
//{
  //  console.log(`Dear ${guest}, I would be delighted to have you join me for dinner tonight at my place. Your company would make the evening even more enjoyable.`);
//})
//inform about the bigger table
console.log(`Good News! We found a bigger table`)

//addig a new guest to the beginning of the array
let newguest1 : string = `Hooriya`
Guestllist.unshift(newguest1)
//adding a new guest in the middle of the array
let newguest2 : string = `Shiza`
let midpoint : number = Math.floor(Guestllist.length/2)
Guestllist.splice(midpoint,0,newguest2)
// adding a new name to the end of the array
let newguest3 : string = `Sara`
Guestllist.push(newguest3)
//console.log(Guestllist);
//print a new set of invitations
for(let guest of Guestllist)
{
    console.log(`Dear ${guest}, I would be delighted to have you join me for dinner tonight at my place. Your company would make the evening even more enjoyable.`)  
}