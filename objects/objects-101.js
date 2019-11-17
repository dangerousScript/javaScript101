/* let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`) */

// challenge 
// class person: name, age, location
// format: Name is Age and lives in Location
// after print, increase age +1 and print again

let person = {
    name: 'Stefan',
    age: 23,
    location: 'Novi Sad'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)
person.age += 1
console.log(`${person.name} is ${person.age} and lives in ${person.location}`)