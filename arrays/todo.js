const todos = [
  { text: 'learn js', completed: false },
  { text: 'play with sage', completed: false },
  { text: 'go skiing', completed: true },
  { text: 'chorin', completed: true },
  { text: 'look on the bright side', completed: false },
]

// convert array to array of objects (text, completed)

// function to remove a todo by text value
const deleteTodo = function (todos, text) {
  const index = todos.findIndex(function (todo) {
    return todo.text.toLowerCase() === text.toLowerCase()
  })
  if (index > -1) {
    todos.splice(index, 1) // this works because arrays are also passed by reference
  }
}

// function to sort todos
const sortTodos = function (todos) {
  todos.sort(function (a, b) {
    if (!a.completed && b.completed) {
      return -1 // a comes first
    } else if (!b.completed && a.completed) {
      return 1 // b comes first
    } else {
      return 0 // they are the same
    }
  })
}

// Usage
// deleteTodo(todos, 'chorin')
// console.log(todos)

const getIncompleteTodos = function (todos) {
  return todos.filter(function (todo) {
    return !todo.completed
  })
}

// console.log(getIncompleteTodos(todos))

sortTodos(todos)
console.log(todos)
