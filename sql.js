const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('DBpost');

db.all("SELECT * FROM users", (err, data)=>{
console.log(data)
})

db.all("SELECT post.id, text,name FROM post JOIN users ON post.user_id=users.id", (err, data)=>{
    console.log(data)
})

db.run("INSERT INTO users (name,password) VALUES ('Danil','фарфор33453')")