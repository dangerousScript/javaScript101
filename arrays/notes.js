const notes = ['Note 1', 'Note 2', 'Note 3']

console.log(`Last Removed: ${notes.pop()}`)
notes.push('My new note')

console.log(`First Removed: ${notes.shift()}`)
console.log(`Add to first: ${notes.unshift('My first note')}`)

// remove from array, start from 1 and delete 0 items, and insert to deleted item
notes.splice(1, 0, 'Inserted new item')

notes[2] = 'This is new note 3'

notes.forEach(function (item, index) {
    console.log(index)
    console.log(item)
})

console.log(notes.length)
console.log(notes)


// for loop
for (let count = 0; count <= 2; count++) {
    console.log(count)
}

// indexOf, but not with objects
console.log(notes.indexOf('Inserted new item'))