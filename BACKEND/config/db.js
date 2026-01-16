const mysql = require('mysql2');
require('dotenv').config();

// Membuat kolam koneksi (Connection Pool)
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Kita export versi "promise" biar nanti bisa pakai gaya coding modern (async/await)
// Ini jauh lebih rapi daripada pakai callback
module.exports = pool.promise();