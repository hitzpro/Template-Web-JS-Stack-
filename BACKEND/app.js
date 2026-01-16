const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

// Inisialisasi aplikasi Express
const app = express();

// --- MIDDLEWARE (Pelengkap/Plugin) ---

// 1. Logger: Biar kelihatan di terminal kalau ada request masuk
app.use(morgan('dev'));

// 2. Body Parser: Biar bisa baca data JSON dan Form dari frontend
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3. CORS: Biar backend ini boleh diakses dari website lain/frontend
app.use(cors());

// 4. Static Files: Biar folder 'uploads' bisa diakses publik (misal: lihat gambar)
// Contoh akses: http://localhost:5000/uploads/namagambar.jpg
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// --- ROUTES (Jalur URL) ---

// Route Cek Kesehatan Server (Ping)
app.get('/', (req, res) => {
    res.json({
        message: 'Server backend is running smoothly! 🚀',
        timestamp: new Date()
    });
});

// Nanti kamu import routes lain di sini, contoh:
// const userRoutes = require('./routes/userRoutes');
// app.use('/api/users', userRoutes);


// Export app biar bisa dijalankan oleh server.js
module.exports = app;