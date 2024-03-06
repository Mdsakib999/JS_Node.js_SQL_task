const express = require('express');
const multer = require('multer');
const mysql = require('mysql');
const fs = require('fs');

const app = express();
const port = 3000;


const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'upload_images'); 
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname); 
  }
});
const upload = multer({ storage: storage });

// **Add your database credential
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_mysql_username',
  password: 'your_mysql_password',
  database: 'your_database_name'
});


app.post('/upload', upload.single('file'), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send('No file uploaded.');
  }
  res.status(200).send('File uploaded successfully.');
});


app.use(express.static('public'));


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
