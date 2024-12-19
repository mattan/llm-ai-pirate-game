const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let storedText = '';

app.post('/save-text', (req, res) => {
    storedText = req.body.text;
    res.send('Text saved successfully');
});

app.get('/get-text', (req, res) => {
    res.send(storedText);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
