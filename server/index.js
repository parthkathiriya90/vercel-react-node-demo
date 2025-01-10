const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();

// API endpoint
app.use('/api/products', async (req, res) => {
    const response = await axios.get('https://fakestoreapi.com/products');
    res.send(response.data);
});

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../client/dist')));

// Handle requests by serving index.html for all routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

// Start the server
app.listen(4000, () => {
    console.log('Server is running on port 4000');
});