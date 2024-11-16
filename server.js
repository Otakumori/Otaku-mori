const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Sample Products
const products = [
    { id: 1, name: 'Anime Figure', price: 29.99, category: 'Figures' },
    { id: 2, name: 'Manga Volume', price: 14.99, category: 'Books' },
    { id: 3, name: 'Anime Poster', price: 9.99, category: 'Posters' },
];

// Routes
app.get('/api/products', (req, res) => {
    res.json(products);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});