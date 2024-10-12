const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pertemuan5'
});

connection.connect((err) => {
    if (err) {
        console.error("Terjadi kesalahan dalam koneksi ke mySQL:", err.stack);
        return;
    }
    console.log("Koneksi mySQL berhasil dengan id " + connection.threadId);
});

app.set('view engine', 'ejs');

// Routing (Create, Read, Update, Delete)

// Read
app.get('/', (req, res) => {
    const query = 'SELECT * FROM users';
    connection.query(query, (err, result) => {
        res.render('index', { users: result });
    });
});

// Create /input /insert
app.post('/add', (req, res) => {
    const { name, email, phone } = req.body;
    const query = 'INSERT INTO users (name, email, phone) VALUES (?, ?, ?)';
    connection.query(query, [name, email, phone], (err, result) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// Update (menampilkan form edit)
app.get('/edit/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM users WHERE id = ?';
    connection.query(query, [id], (err, result) => {
        if (err) throw err;
        res.render('edit', { user: result[0] });
    });
});

// Update (menyimpan perubahan)
app.post('/update/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, phone } = req.body;
    const query = 'UPDATE users SET name = ?, email = ?, phone = ? WHERE id = ?';
    connection.query(query, [name, email, phone, id], (err, result) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// Delete
app.get('/delete/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM users WHERE id = ?';
    connection.query(query, [id], (err, result) => {
        if (err) throw err;
        res.redirect('/');
    });
});

app.listen(3000, () => {
    console.log("Server berjalan di port 3000, buka web melalui http://localhost:3000");
});
