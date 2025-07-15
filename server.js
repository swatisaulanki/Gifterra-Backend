
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send('🎉 Welcome to the Gifterra Backend API')
})

app.use('/uploads', express.static('uploads'));

app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/cart', require('./routes/cartRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
