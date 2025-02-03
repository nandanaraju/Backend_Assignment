const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const userRoutes = require('./routes/userRoutes');
const groupRoutes = require('./routes/groupRoutes');
const notificationRoutes = require('./routes/notificationRoutes');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', groupRoutes);
app.use('/api', notificationRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {})
    .then(() => {
        console.log(" MongoDB Connected");
        app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
    })
    .catch(err => console.error("Database connection error:", err));
