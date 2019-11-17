// challenge
// are both vegan? - only offer up vegan dishes
// at least one is vegan - make sure to offer up some vegan options
// none is vegan - offer up anything on the menu

let isFirstVegan = true
let isSecondVegan = true

if (isFirstVegan && isSecondVegan) {
    console.log('Only offer up vegan dishes.')
} else if (isFirstVegan || isSecondVegan) {
    console.log('Make sure to offer up some vegan options.')
} else {
    console.log('Offer up anything on the menu.')
}