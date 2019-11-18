// create an array with five todos
// print: You have X todos (x = length)
// print the first and second to last items

// delete the 3rd item
// add a new item onto the end
// remove the first itme from the list

// print all todos items with forEach and for loop
// 1. Item
// 2. Item...

// 1. Convert array to array of objects -> properties: text, completed (boolean)
// 2. Create function to remove a todo by text value

// create function to sort objects by completed properties.
// true first, false last

const todos = [
    {
        text: 'Go to gym',
        completed: false,
    },
    {
        text: 'Do some coding',
        completed: true,
    },
    {
        text: 'Walk with dog',
        completed: false,
    },
    {
        text: 'Meet with friends',
        completed: true,
    },
    {
        text: 'Do homework',
        completed: true,
    },
]

const deleteTodo = function (todos, text) {
    // find index in array
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === text.toLowerCase()
    })

    if (index > -1) {
        // remove from index and 1 todo
        todos.splice(index, 1)
        console.log('Successfully removed.')
    } else {
        console.log('Todo: not found')
    }
}

const getThingsToDo = function (todos) {
    return todos.filter(function (todo) {
        // not completed
        return !todo.completed
    })
}

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (a.completed < b.completed) { // false < true
            return 1 // b first
        } else if (a.completed > b.completed) { // true > false
            return -1 // a first
        } else {
            // false false
            return 0
        }
    })
}

// calls
/* console.log('-- Delete Todo ---')
deleteTodo(todos, 'do homeworK')
console.log(todos)
console.log('-- Not completed --')
console.log(getThingsToDo(todos)) */
console.log('-- SORT BY COMPLETE --')
sortTodos(todos)
console.log(todos)


/* console.log(`You have ${todos.length} todos`)
console.log(`First: ${todos[0]}, Second to last: ${todos[todos.length - 2]}`)

// remove 3rd
todos.splice(2, 1)
todos.push('Going to school')
todos.shift()
console.log(todos)
console.log('----------------')

// printing all foreach
todos.forEach(function (item, index) {
    console.log(`${index + 1}. ${item}`)
})
console.log('----------------')
// for loop
for (let todo = 0; todo < todos.length; todo++) {
    console.log(`${todo + 1}. ${todos[todo]}`)
} */