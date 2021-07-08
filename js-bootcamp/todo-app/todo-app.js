const todos = [{
    text: 'Order cat food',
    completed: true
}, {
    text: 'Clean kitchen',
    completed: false
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Go to doctor',
    completed: false
}, {
    text: 'Exercise',
    completed: false
}]

const filters = {
    text: '',
    hideCompleted: false
}

const renderTodos = function(todos, filters){
    const filteredTodos = todos.filter(function(todo){
        if (filters.hideCompleted){
            return todo.text.toLowerCase().includes(filters.text.toLowerCase())
                    && !todo.completed
        } else {
            return todo.text.toLowerCase().includes(filters.text.toLowerCase())
        }
    })

    const incompleteTodos = filteredTodos.filter(function(todo){
        return !todo.completed
    })
    
    document.querySelector('#todos').innerHTML = ''

    document.querySelector('#summary').textContent = `You have ${incompleteTodos.length} todos left`

    filteredTodos.forEach(function(todo){
        const todoP = document.createElement('p')
        todoP.textContent = todo.text
        document.querySelector('#todos').appendChild(todoP)
    })
}

renderTodos(todos, filters)

document.querySelector('#search-todo').addEventListener('input', function(e){
    filters.text = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#submit-todo').addEventListener('submit', function(e){
    e.preventDefault()
    todos.push({text: e.target.elements.toDoText.value, completed: false})
    e.target.elements.toDoText.value = ''
    renderTodos(todos, filters)
})

document.querySelector('#hide-completed').addEventListener('change', function(e){
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})




