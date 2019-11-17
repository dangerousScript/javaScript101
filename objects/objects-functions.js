// challenge
// create a function that returns an object 
// function take fahrenheit - return object
// with all three temperatures

let tempConverter = function(fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celsius: (fahrenheit - 32) * 5 / 9,
        kelvin: (fahrenheit + 459.67) * 5 / 9
    }
}

let newTemp = tempConverter(20)
console.log(`F: ${newTemp.fahrenheit}, C: ${newTemp.celsius}, K: ${newTemp.kelvin}`)