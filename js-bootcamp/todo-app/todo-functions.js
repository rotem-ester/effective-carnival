//fetches existing todos from local storage
const getSavedTodos = function(){
    const todosJSON = localStorage.getItem('todos')

    if (todosJSON !== null){
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

//saves todos to local storage
const saveTodos = function(todos){
    localStorage.setItem('todos', JSON.stringify(todos))
}

//generate the Summary of todos left DOM
const generateSummaryDOM = function(incompleteTodos){
    document.querySelector('#summary').textContent = `You have ${incompleteTodos.length} todos left`
}

//generates the todo DOM
const generateTodoDOM = function(todo){
    const todoEl = document.createElement('div')
    const todoText = document.createElement('span')
    const todoCheckBox = document.createElement('input')
    const todoRemoveButton = document.createElement('button')
    
    //setup todo checkbox
    todoCheckBox.setAttribute('type', 'checkbox')
    todoEl.appendChild(todoCheckBox)
    
    //setup todo text
    todoText.textContent = todo.text
    todoEl.appendChild(todoText)

    //setup todo remove button
    todoRemoveButton.textContent = 'x'
    todoEl.appendChild(todoRemoveButton)

    return todoEl
}

//renders the todos
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
    generateSummaryDOM(incompleteTodos)
    
    document.querySelector('#todos').innerHTML = ''

    filteredTodos.forEach(function(todo){
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}