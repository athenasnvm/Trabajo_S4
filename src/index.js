const express = require('express');
const fs = require('fs');
const path = require('path');
const https = require('https');
const app = express();

//settings app
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(express.json());

//routes
app.get('/user', (req, res) => {
    res.json({
        name: 'John Doe',
        age: 30,
        city: 'New York',
        phone: '1234567890'
    });
});

//server
const server = https.createServer(
    {
        key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
        cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem'))
    },
    app
);

server.listen(app.get('port'), () => {
    console.log(`Server is running on port ${app.get('port')}`);
});