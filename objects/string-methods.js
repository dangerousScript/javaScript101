let name = '  Stefan Janjic '

// length property
console.log(name.length)

// convert to upper case
console.log(name.toUpperCase())

// convert to lower case
console.log(name.toLowerCase())

// includes method
let password = 'wd521_password_dsa'
console.log(password.includes('password'))  // true
let password1 = 'wd521_dsa'
console.log(password1.includes('password'))  // false

// trim method (brise sve razmake sa pocetka i kraja stringa)
// npr ako korisnik slucajno unese razmak na kraju ili pocetku
console.log(name.trim())

// challenge
// isValidPassword
// true - only if its length is greater than 8 and it doesnt contain the word 'password'
let isValidPassword = function (password) {
    if (password.length > 8 && !password.includes('password')) {
        return true
    }
    return false
}

// test poziva, false true false
console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abv1234@5s51@%#2'))
console.log(isValidPassword('ss512scwpassword5521'))
