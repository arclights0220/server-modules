// todo 리스트 CRUD

module.exports = {
    todos: [],
    createTodo(message) {
        this.todos.push({
            message,
            id: Math.random() * 1264712462
        });
    },
    deleteLastTodo(){
        if(this.todos.length > 0)
        this.todos.pop();
    },
    getTodos(){
        return this.todos;
    },
    deleteAll(){
        this.todos = [];
    },
    deleteById(id){
        this.todos.splice(this.todos.findIndex(todo => todo.id == id), 1);
    }
};