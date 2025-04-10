const express = require('express');
const sequelize = require('./config/database');
const Comment = require('./models/Comment');
const Contact = require('./models/Contact');
const DynamicText = require('./models/DynamicText');
const commentRoutes = require('./routes/comments');
const contactRoutes = require('./routes/contacts');
const dynamicTextRoutes = require('./routes/dynamicTexts');
const path = require('path'); // Declarar path aquí, solo una vez

// Definir app
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Servir archivos estáticos desde la carpeta public
app.use(express.static('public'));

// Montar las rutas de la API
app.use('/api/comments', commentRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/dynamic-texts', dynamicTextRoutes);

// Rutas para servir archivos HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'services.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Rutas existentes que devuelven JSON (probablemente ya están en tu server.js)
app.get('/info', (req, res) => {
    res.json({ message: 'Info endpoint' });
});

app.get('/users', (req, res) => {
    res.json({ users: [] }); // Esto es un placeholder, puede que ya tengas lógica aquí
});

app.post('/users', (req, res) => {
    res.json({ message: 'User created' }); // Esto es un placeholder, puede que ya tengas lógica aquí
});

// Sincronizar la base de datos e iniciar el servidor
const PORT = process.env.PORT || 3000;
sequelize.sync()
    .then(() => {
        console.log('Base de datos sincronizada');
        app.listen(PORT, () => {
            console.log(`Servidor escuchando en http://localhost:${PORT}`);
            console.log('Rutas disponibles:');
            console.log('GET /');
            console.log('GET /about');
            console.log('GET /services');
            console.log('GET /contact');
            console.log('POST /users');
            console.log('GET /users');
            console.log('GET /info');
        });
    })
    .catch(err => {
        console.error('Error al sincronizar la base de datos:', err);
    });