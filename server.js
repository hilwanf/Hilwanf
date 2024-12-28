// server.js
const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const WebSocket = require('ws');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

const SECRET_KEY = process.env.JWT_SECRET;

// WebSocket setup
const wss = new WebSocket.Server({ noServer: true });

// Upgrade HTTP server ke WebSocket
const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});

server.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit('connection', ws, request);
    });
});

// Middleware untuk verifikasi token JWT
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(403).send('Token tidak ditemukan.');

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) return res.status(401).send('Token tidak valid.');
        req.user = decoded;
        next();
    });
};

// Notifikasi WebSocket
const notifyClients = (data) => {
    const message = JSON.stringify({
        event: 'data_changed',
        message: 'Data kapal telah diperbarui.',
        data: [data]
    });

    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(message);
        }
    });
};

// Endpoint untuk registrasi pengguna
app.post('/auth/register', async (req, res) => {
    const { username, password, role } = req.body;

    if (!username || !password || !role) {
        return res.status(400).send('Semua field harus diisi.');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const query = 'INSERT INTO users (username, password, role) VALUES (?, ?, ?)';
    connection.query(query, [username, hashedPassword, role], (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(201).send({ id_user: results.insertId, username, role });
    });
});

// Endpoint untuk login
app.post('/auth/login', (req, res) => {
    const { username, password } = req.body;

    const query = 'SELECT * FROM users WHERE username = ?';
    connection.query(query, [username], async (err, results) => {
        if (err) return res.status(500).send(err);
        if (results.length === 0) return res.status(401).send('Username atau password salah.');

        const user = results[0];
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(401).send('Username atau password salah.');

        const token = jwt.sign({ id_user: user.id_user, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
        res.send({ token });
    });
});

// CRUD Kapal

// Create Kapal
app.post('/kapal', verifyToken, (req, res) => {
    if (req.user.role !== 'admin') return res.status(403).send('Akses ditolak.');

    const { nama_kapal, jenis_kapal, kapasitas_muatan } = req.body;
    if (!nama_kapal) return res.status(400).send('Nama kapal tidak boleh kosong.');
    if (kapasitas_muatan <= 0) return res.status(400).send('Kapasitas muatan harus positif.');

    const query = 'INSERT INTO kapal (nama_kapal, jenis_kapal, kapasitas_muatan) VALUES (?, ?, ?)';
    connection.query(query, [nama_kapal, jenis_kapal, kapasitas_muatan], (err, results) => {
        if (err) return res.status(500).send(err);
        const newKapal = { id_kapal: results.insertId, nama_kapal, jenis_kapal, kapasitas_muatan };
        notifyClients(newKapal); // Kirim notifikasi
        res.status(201).send(newKapal);
    });
});

// Read Kapal
app.get('/kapal', (req, res) => {
    connection.query('SELECT * FROM kapal', (err, results) => {
        if (err) return res.status(500).send(err);
        res.send(results);
    });
});

app.get('/kapal/:id', (req, res) => {
    const { id } = req.params;
    connection.query('SELECT * FROM kapal WHERE id_kapal = ?', [id], (err, results) => {
        if (err) return res.status(500).send(err);
        res.send(results[0]);
    });
});

// Update Kapal
app.put('/kapal/:id', verifyToken, (req, res) => {
    if (req.user.role !== 'admin') return res.status(403).send('Akses ditolak.');

    const { id } = req.params;
    const { nama_kapal, jenis_kapal, kapasitas_muatan } = req.body;

    const query = 'UPDATE kapal SET nama_kapal = ?, jenis_kapal = ?, kapasitas_muatan = ? WHERE id_kapal = ?';
    connection.query(query, [nama_kapal, jenis_kapal, kapasitas_muatan, id], (err, results) => {
        if (err) return res.status(500).send(err);
        const updatedKapal = { id_kapal: id, nama_kapal, jenis_kapal, kapasitas_muatan };
        notifyClients(updatedKapal); // Kirim notifikasi
        res.send(updatedKapal);
    });
});

// Delete Kapal
app.delete('/kapal/:id', verifyToken, (req, res) => {
    if (req.user.role !== 'admin') return res.status(403).send('Akses ditolak.');

    const { id } = req.params;
    connection.query('DELETE FROM kapal WHERE id_kapal = ?', [id], (err, results) => {
        if (err) return res.status(500).send(err);
        notifyClients({ id_kapal: id }); // Kirim notifikasi
        res.send({ message: 'Data kapal berhasil dihapus.' });
    });
});