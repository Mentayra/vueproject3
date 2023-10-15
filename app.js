const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('DBpost');

db.serialize(() => {

    //создание таблицы
    // db.run("CREATE TABLE users(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, password TEXT)")
    // db.run("CREATE TABLE post(id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INT, text TEXT, FOREIGN KEY(user_id) REFERENCES users(id))")

    //добавление новых данных
    // db.run("INSERT INTO users (name, password) VALUES ('Arteem','84940')")
    // db.run("INSERT INTO users (name, password) VALUES ('Daniil','56924')")

    // db.run("INSERT INTO post (user_id,text) VALUES (1,'Hello! Уже ЗАВТРА мы поедем в Турцию! Ураа!')")
    // db.run("INSERT INTO post (user_id,text) VALUES (2,'ПРИВЕТ. Прикинь мы ТОЖЕ!')")

})

db.close