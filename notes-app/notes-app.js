// DOM -> document object model
const notes = [{
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

// Query and Remove
/* const p = document.querySelector('p')
p.remove() */

// Query all and remove
// const ps = document.querySelectorAll('p')

// ps.forEach(function (p) {
//     // change text
//     p.textContent = 'Changed text'

//     // print text from paragraphs
//     //
        
//     console.log(p.textContent)
//     //p.remove()
// })

// // Add a new element
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is a new element from JS'
// document.querySelector('body').appendChild(newParagraph)

// uvek ce selektovati prvi button
// document.querySelector('button').addEventListener('click', function (e) {
//     console.log(e)
//     e.target.textContent = `Clicked`
// })

const filters = {
    searchText: ''
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteElement = document.createElement('p')
        noteElement.textContent = note.title
        document.querySelector('#notes').appendChild(noteElement)
    })
}

renderNotes(notes, filters)

// bolje selektovanje preko ID elementa
document.querySelector('#create-note').addEventListener('click', function (e) {
        console.log(e)
        e.target.textContent = `Added`
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})