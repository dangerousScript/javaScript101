const notes = [
    {
        title: 'My next trip',
        body: 'I would like to go to Spain',
    }, 
    {
        title: 'Hobbits to work on',
        body: 'Exercise. Eating a bit better.',
    }, 
    {
        title: 'Office modification',
        body: 'Get a new seat',
    }
]

// with findIndex (returns index)
/* const findNote = function (notes, noteTitle) {
    const index = notes.findIndex(function (item) {
        // toLowerCase, so title is not case sensitive
        return item.title.toLowerCase() === noteTitle.toLowerCase()
    })
    return notes[index]
} */

// with find (returns object)
const findNote = function (notes, noteTitle) {
    const note = notes.find(function (item) {
        // toLowerCase, so title is not case sensitive
        return item.title.toLowerCase() === noteTitle.toLowerCase()
    })
    return note
}

const findNotes = function (notes, qurey) {
    return notes.filter(function (note) {
        const isTitleMatch = note.title.toLowerCase().includes(qurey.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(qurey.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

// sort
const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        // return -1 if a should be first
        // return 1 if b should be first
        // return 0 if position doesnt need to be changed, if they are same

        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

console.log(findNotes(notes, 'eating'))
console.log('----------------')
const note = findNote(notes, 'Office modification')
console.log(note)

console.log('----------------')
// use findIndex with objects
const index = notes.findIndex(function (note) {
    return note.title === 'Hobbits to work on'
})
console.log(index)

console.log('---- SORT -----')
sortNotes(notes)
console.log(notes)