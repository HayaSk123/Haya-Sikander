let GUESTLIST: Array<string> = ["Emaan", "Moosa", "Mahnoor", "Wajiha"];

let GUEST_WHO_CANT_MAKE_IT: string = `Emaan`

let NEW_GUEST: string = `Daniya`
let INDEX_NUM: number = GUESTLIST.indexOf(GUEST_WHO_CANT_MAKE_IT);

if (INDEX_NUM != -1) {
    GUESTLIST[INDEX_NUM] = NEW_GUEST
}

// console.log(`Good News! We found a bigger table`)

let NEW_GUEST_1: string = `Hooriya`
GUESTLIST.unshift(NEW_GUEST_1)

let NEW_GUEST_2: string = `Shiza`
let MIDPOINT: number = Math.floor(GUESTLIST.length / 2)
GUESTLIST.splice(MIDPOINT, 0, NEW_GUEST_2)

let NEW_GUEST_3: string = `Sara`
GUESTLIST.push(NEW_GUEST_3)

// for (let GUEST of GUESTLIST) {
//     console.log(`Dear ${GUEST}, I would be delighted to have you join me for dinner tonight at my place. Your company would make the evening even more enjoyable.`)
// }
console.log(`Previous Guestlist :${GUESTLIST}`)
console.log(`Unfortunately, the new dinner table won't arrive in time, so I'll only be able to invite two guests for dinner.`)

while(GUESTLIST.length > 2){
    let removeguest = GUESTLIST.pop()
    console.log(`Sorry ${removeguest}, I hope you understand and can join us another time`)
}
for( let GUEST of GUESTLIST ){
    console.log(`Dear ${GUEST}, I would be delighted to have you join me for dinner tonight at my place. Your company would make the evening even more enjoyable.`)  
}
GUESTLIST.pop()
GUESTLIST.pop()
console.log(GUESTLIST)