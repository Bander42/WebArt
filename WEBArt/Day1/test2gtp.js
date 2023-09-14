// Node.js backend (server.js)
const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000;

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});


app.use('/uploads', express.static('uploads'));


const upload = multer({ storage });

app.use(express.static('public'));

// Handle file uploads
app.post('/upload', upload.array('photos'), (req, res) => {
  // Call Java code to process metadata and organize files
  // ...

  res.send('Files uploaded and processed successfully.');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
