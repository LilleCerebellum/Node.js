const express = require('express');
const app = express();

const { readFile } = require('fs').promises;
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    
    res.send(await readFile('./index.html', 'utf8'));
});
    
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});