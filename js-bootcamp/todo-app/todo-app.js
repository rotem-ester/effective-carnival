let todos = getSavedTodos()

const filters = {
    text: '',
    hideCompleted: false
}

renderTodos(todos, filters)

document.querySelector('#search-todo').addEventListener('input', function(e){
    filters.text = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#submit-todo').addEventListener('submit', function(e){
    e.preventDefault()
    todos.push({text: e.target.elements.toDoText.value, completed: false})
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.toDoText.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function(e){
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})




