const express = require('express');
const app = express();
const PORT = 3004;
const bcrypt = require('bcryptjs')
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser')
const db = new sqlite3.Database('DBpost');
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send("ПРИВЕТ!")
})

app.get('/getAllUsers', (req, res) => {
    db.all("SELECT users.id,name FROM users", (err, data) => {
        res.json(data)
    })
})

app.get('/getAllPost', (req, res) => {
    db.all("SELECT post.id, text,name FROM post JOIN users ON post.user_id=users.id", (err, data) => {
        res.json(data)
    })
})


app.post('/checkUser', (req, res) => {
    const {name,password} = req.body
    db.get(`SELECT * FROM users WHERE name = '${name}' `, (err, data) => {
        if (bcrypt.compareSync(password,data.password)){
        return res.json({userId: data.id, name: data.name})
        }
        else
        res.sendStatus(410);
        console.log(err);      
    })
})

app.get("/delPost/:id", (req,res)=>{
    db.run(`DELETE FROM post WHERE id =${req.params.id}`)
    db.all("SELECT post.id, text,name FROM post JOIN users ON post.user_id=users.id", (err, data) => {
        res.json(data);
    })
})

app.get("/delUser/:id", (req,res)=>{
    db.run(`DELETE FROM users WHERE id =${req.params.id}`)
    db.all("SELECT name, id FROM users JOIN users ON users.id, users.name", (err, data) => {
        res.json(data);
    })
})
app.post('/addUser', (req, res) => {
    const {name,password} = req.body
    db.all(`SELECT * FROM users WHERE name='${name}'`, (err, data) => {
        if (!data.length){
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password,salt)

        db.run(`INSERT INTO users (name,password) VALUES ('${name}','${hash}')`)
        db.get("SELECT users.id,name FROM users WHERE name=?",name, (err,data)=>{
            return res.json(data)
        })
        }
        else{
        res.sendStatus(401);
        console.log(err);
    
        }
    })
})
app.post("/addPost", (req,res)=>{
    const {userId, text} = req.body
    db.run(`INSERT INTO post (user_id,text) VALUES (${userId},'${text}')`)
    db.all("SELECT post.id, text,name FROM post JOIN users ON post.user_id=users.id", (err, data) => {
        res.json(data)
    })
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})