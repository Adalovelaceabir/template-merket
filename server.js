const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Sample data
const templates = [
    {
        id: 1,
        name: 'Business Pro',
        description: 'Professional business template suitable for corporate websites',
        price: 49.99,
        imageUrl: 'https://via.placeholder.com/600x400?text=Business+Pro',
        category: 'business'
    },
    {
        id: 2,
        name: 'E-Shop',
        description: 'Modern e-commerce template with product showcase and cart functionality',
        price: 59.99,
        imageUrl: 'https://via.placeholder.com/600x400?text=E-Shop',
        category: 'ecommerce'
    },
    {
        id: 3,
        name: 'Creative Portfolio',
        description: 'Elegant portfolio template for designers and artists',
        price: 39.99,
        imageUrl: 'https://via.placeholder.com/600x400?text=Creative+Portfolio',
        category: 'portfolio'
    },
    {
        id: 4,
        name: 'Blogger',
        description: 'Clean and responsive blog template with multiple post layouts',
        price: 34.99,
        imageUrl: 'https://via.placeholder.com/600x400?text=Blogger',
        category: 'blog'
    }
];

// API Routes
app.get('/api/templates', (req, res) => {
    res.json(templates);
});

app.get('/api/templates/:id', (req, res) => {
    const template = templates.find(t => t.id === parseInt(req.params.id));
    if (!template) return res.status(404).json({ message: 'Template not found' });
    res.json(template);
});

// Serve frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const templates = require('./data/templates.json');
const categories = require('./data/categories.json');
