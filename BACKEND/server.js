require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`=================================`);
    console.log(`🚀 Server berjalan di Port ${PORT}`);
    console.log(`🔗 URL: http://localhost:${PORT}`);
    console.log(`=================================`);
});