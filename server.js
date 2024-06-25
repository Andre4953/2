const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Statische Dateien (CSS, JS, Bilder usw.) bereitstellen
app.use(express.static(path.join(__dirname, 'public')));

// Routen definieren
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about-us', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about-us.html'));
});

// Bilder-Routen hinzufügen
app.get('/Images/:image', (req, res) => {
    const imageFile = req.params.image;
    res.sendFile(path.join(__dirname, 'public', 'Images', imageFile));
});

// Server starten
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});