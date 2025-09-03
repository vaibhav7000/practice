const express = require("express");
const fs = require("fs");
const app = express();

let rateLimit = [];

const limit = 5;
const requestWindow = 10000;

function rateLimiting(req, res, next) {
    const now = Date.now();

    rateLimit = rateLimit.filter(ts => now - ts < requestWindow); // means these ts that lead to true are request within the requestWindow; else remove the previous

    if(rateLimit.length === limit) {
        res.status(200).json({
            msg: "you are violating the rate limiting"
        })
        return;
    }

    rateLimit.push(now);
    next();
}


app.use(rateLimiting);


app.get('/', async (req, res, next) => {
    const data = await readFile("main.html");

    res.status(200).send(data);
})

app.listen(3000, () => {
    console.log('server started');
})


function readFile(path) {
    return new Promise(function(res, rej) {
        fs.readFile(path,'utf-8', (err, result) => {
            if(!err) {
                res(result);
                return
            }
            
            rej(err);
        })
    })
}