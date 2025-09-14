const express = require('express');
const app = express();

const { readFile } = require('fs').promises;
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    try {
        const htmlPath = path.join(__dirname, '..', 'index.html');
        const html = await readFile(htmlPath, 'utf8');
        res.send(html);
    } catch (err) {
        res.status(500).send('Error loading HTML file.');
    }
});
    
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});