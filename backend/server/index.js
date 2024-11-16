const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;

const app = express();

// Middleware.
app.use(express.json());

// Connect to MongoDB.
mongoose.connect('mongodb://localhost/noteKeeperApp')
    .then(() => console.log('MongoDB is connected'))
    .catch(error => console.log(error));

// Routes.
const noteRoute = require('../routes/noteRoute');
app.use('/api/notes', noteRoute);

// Start the server.
app.listen(
    PORT,
    () => console.log(`The server is running on http://localhost:${PORT}`)
)