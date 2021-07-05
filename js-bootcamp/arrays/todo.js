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
    text: 'Have sex',
    completed: false
}, {
    text: 'Exercise',
    completed: false
}]

const sortTodos = function(todos){
    todos.sort(function(a, b){
        if (!a.completed && b.completed){
            return -1
        } else if (a.completed && !b.completed){
            return 1
        } else {
            return 0
        }
    })
}

const deleteTodo = function(todos, todoTitle){
    const index = todos.findIndex(function(todo){
        return todo.text.toLowerCase() === todoTitle.toLowerCase()
    })

    if (index !== -1){
        todos.splice(index, 1)
    }
}

const getThingsToDo = function(todos){
    return todos.filter(function(todo){
        return !todo.completed
    })
}

console.log('-------all things to do------')
console.log(getThingsToDo(todos))
console.log('-----------------------------')

console.log(todos)
deleteTodo(todos, 'have sex')
console.log('-------after delete------')
console.log(todos)
deleteTodo(todos, 'hello')
console.log('-------after delete something that\'s not there------')
console.log(todos)

console.log('---------------after sorting--------------')
sortTodos(todos)
console.log(todos)




// console.log(`you have ${todos.length} todos!`)

// let printTodo = function(todo){
//     console.log(todo)
// }

// for (let i = 0; i < todos.length; i++){
//     console.log('loop loop loop')
//     console.log(todos[i])
// }

// todos.forEach(printTodo)

// //removes last element
// todos.pop()

// //pushing element to the end of the array
// todos.push('do shopping')

// //removes the first element
// todos.shift()

// //pushing element to the begining of the array
// todos.unshift('buy food')

// //removes elements from anywhere in the array
// // start at index 2 and remove 3 items
// todos.splice(2, 3)

// //start at index 1, delete 0 items, add element at index 1
// todos.splice(1, 0, 'todododo')

// console.log(`you have ${todos.length} todos!`)
// todos.forEach(function (todo, index) {
//     console.log(todo + index + '\n')
// })

