const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
const folderPath = '/intro/IMG/YoundMEWEB'; 

app.get('/getFilenames', (req, res) => {
    const fullPath = path.join(__dirname, folderPath); 
    fs.readdir(fullPath, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            res.status(500).json({ error: 'Error reading directory' });
            return;
        }


        const imageFilenames = files.map(filename => path.join(folderPath, filename));


        res.setHeader('Content-Type', 'application/json');
        res.json(files);
    });
});

const port = 5500; // Set the desired port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});