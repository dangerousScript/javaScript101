const todos = [{
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
        completed: false,
    },
    {
        text: 'Do homework',
        completed: true,
    },
]


// remove all p tags with 'the' word in it

// const ps = document.querySelectorAll('p')

// ps.forEach(function (p) {
//     if (p.textContent.includes(' the ')) {
//         p.remove()
//     }
// })

// filters
const filters = {
    search: '',
    hideCompleted: false
}

const renderTodos = function (todos, filters) {
    let filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.search.toLowerCase())
    })

    filteredTodos = filteredTodos.filter(function (todo) {
        if (filters.hideCompleted) {
            return !todo.completed
        } else {
            return true
        }
    })

    document.querySelector('#todo-data').innerHTML = ''

    // count left todos
    const pLeft = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    const paragraphLeftTodos = document.createElement('h2')
    paragraphLeftTodos.textContent = `You have ${pLeft.length} todos left.`
    document.querySelector('#todo-data').appendChild(paragraphLeftTodos)

    // // add p for each todo
    filteredTodos.forEach(function (todo) {
        const paragraphForEach = document.createElement('p')
        paragraphForEach.textContent = todo.text
        document.querySelector('#todo-data').appendChild(paragraphForEach)
    })
}

// poziv kad se stranica ucita da ispise trenutne vrednosti
renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.search = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#todo-form').addEventListener('submit', function (e) {
    e.preventDefault()
    const addTodo = {
        text: e.target.elements.newTodo.value,
        completed: false,
    }
    
    todos.push(addTodo)
    e.target.elements.newTodo.value = ''
    renderTodos(todos, filters)
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})