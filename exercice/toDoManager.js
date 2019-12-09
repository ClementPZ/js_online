class TodoManager {
    constructor(todos) {
      this.todos = todos;
    }
    getCompleted() {
      return this.todos.filter( todo => todo.is_completed);
    }
    getPending() {
      return this.todos.filter( todo => !todo.is_completed);
    }
    getFirst() {
      return this.todos[0];
    }
    getLast() {
      return this.todos[this.todos.length - 1];
    }
    getCount() {
      return this.todos.length;
    }
    markAsCompleted(nameOfTodo) {
      const todo = this.todos.find( todo => todo.title === nameOfTodo);
      todo.is_completed = true;
      console.log(`${nameOfTodo} has been marked as done in your list`);
      return this.todos;
    }
    add(todoToAdd) {
      this.todos.push({title: todoToAdd.title, is_completed: todoToAdd.is_completed || false});
      console.log(`${todoToAdd.title} has been added to your list`);
      return this.todos;
    }
    allCompleted() {
      return this.todos.every( todo => todo.is_completed === true);
    }
    allPending() {
      return this.todos.every( todo => todo.is_completed === false);
    }
    exportCsv() {
      return this.todos.map( todo => todo = todo.title).join(", ");
    }
}


// EXAMPLE A TESTER
const initialTodos = [{
    title: "Learn JavaScript",
    is_completed: true
}, {
    title: "Practice flashcards",
    is_completed: false
}, {
    title: "Learn Java",
    is_completed: true
}, {
    title: "Learn Ruby",
    is_completed: true
}];

const todoManager = new TodoManager(initialTodos);



// TEST
console.log(todoManager);

// console.log(todoManager.markAsCompleted("Practice flashcards"));
// console.log(todoManager.add({title: "my new todo", is_completed: true}));
// console.log(todoManager.add({title: "my new todo"}));

// console.log(todoManager.getCompleted()); //returns completed todos
// console.log(todoManager.getPending()); //returns todos that are not completed
// console.log(todoManager.getFirst());
// console.log(todoManager.getLast());
// console.log(todoManager.getCount());
// todoManager.markAsCompleted("Practice flashcards"); //receives a title, finds todo with that title and marks it as completed
// todoManager.add({
//     title: "Recap flashcards",
//     is_completed: true
// });
// //when is_completed is not defined, it should default to false
// todoManager.add({
//     title: "Get some rest"
// });
// console.log(todoManager);

// console.log(todoManager.allCompleted()); //returns true when all todo items are completed
// console.log(todoManager.allPending()); //returns true when all todo items are pending
// console.log(todoManager.exportCsv()); //returns Comma Separated Values of titles "Todo title, Another todo title"
// Marks a todo as completed
// Expected todoManager.markAsCompleted("Second todo") to be equal to [{"title":"First todo","is_completed":false}, {"title":"Second todo","is_completed":true}] but got undefined
// Adds a todo item
// Expected todoManager.add({title: "my new todo", is_completed: true}) to be equal to [{"title":"First todo","is_completed":false}, {"title":"my new todo","is_completed":true}] but got undefined
// Adds a todo item and sets a default for is_completed
// Expected todoManager.add({title: "my new todo"}) to be equal to [{"title":"First todo","is_completed":false}, {"title":"my new todo","is_completed":false}] but got undefined




