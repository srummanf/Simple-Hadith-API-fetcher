const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
app.get('/', (req, res) => {
    res.sendFile(__dirname+"/index.html");
});
app.get("/hadith", (req, res) => {
    fs.readFile(__dirname + '/' + 'hadith.json', (err, data) => {
        res.end(data);
    });
});
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
});

