const express = require("express")
const app = express()
const todos = require('./model')

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res)=>{
    res.render('index');
})

app.get('/get', (req, res)=>{
    res.send(todos.getTodos());
})

app.get('/create', (req, res)=>{
    todos.createTodo(req.query.message)
    res.send("created");
})

app.get('/delete', (req, res) => {
    todos.deleteLastTodo()
    res.send("deleted");
})

app.get('/deleteById', (req, res) => {
    todos.deleteById(req.query.id);
})

app.get('/deleteAll', (req, res)=>{
    todos.deleteAll();
    res.send("all deleted")
})
app.listen(8080)
















// var test = require("./modules/module-test")
// test.hello()


// app.listen(80, () => {
//     console.log("서버가 열렸습니다.")
// })

// app.get('/', (req, res) => {
//     res.send(req.username)
// })
// app.get('/x', (req, res) => {
//     res.send("sex")
// })
// app.use((req,res,next)=>{
//     res.send("없는 페이지입니다.")
// })