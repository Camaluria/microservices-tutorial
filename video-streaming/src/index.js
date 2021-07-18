const express = require('express');
const app = express();
const fs = require("fs");
const port = 3000;
// if (!process.env.PORT){
//     throw new Error ("Missing PORT ENV in process.env!")
// }
// const port = process.env.port;

app.get('/', (req,res) => {
    res.send('Hello World');
});
app.get('/video', (req,res) => {
    const path = "./videos/SampleVideo_1280x720_1mb.mp4";
    fs.stat(path, (err,stats) => {
        if (err) {
            console.error("An error occured");
            res.sendStatus(500);
            return;
        }
        res.writeHead(200, {
            "Content-Length": stats.size,
            "Content-Type": "video/mp4",
        });
        fs.createReadStream(path).pipe(res);
    });
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});