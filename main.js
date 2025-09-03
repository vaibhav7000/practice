const fs = require("fs");


function readFile(path, successCallback, errorCallback) {

    // fs.readFile is asynchronous task and we have to pass the callback functions
    fs.readFile(path,  "utf-8", (err, result) => {
        if(!err) {
            successCallback(result);
            return
        }

        errorCallback(err);
    })
}


readFile(".env", (data) => {
    console.log(data);
}, (err) => {
    console.log(err);
})


function readAndWriteFile(path, successCallback, errorCallback) {
    fs.readFile(path, 'utf-8', (e, result) => {
        if(!e) {
            successCallback(result);
            return
        }

        errorCallback(e);
    })
}


readAndWriteFile(".env", (result) => {
    const data = `${result}
    random word
    `

    fs.writeFile(".env", data, (e) => {
        if(!e) {
            console.log("successfully write the file");
        }

        console.log("issue occured when reading the file");
    })


}, (e) => {
    console.log("error occured when reading the file");
})

/*

    There are many "asynchronous functions" that are provided by the runtime-enviroment, in which we use the callback function concept to pass the function / task that we want to do after the asynchronous task happens

    You can say that in JS "callback functions" are introduced to perform asynchrnous task ( the task that are handled by the environment and after the task is done callback function will be kept inside the callback queue and when the JS thread is free it will pick the task) ->

    But this makes a problem called callback hell, many nested callback functions that makes
    1. The code hard to debug
    2. Looks ugly

    Every time when we need to perform the asynchronous task we have to pass callback functions ( other task that we want to run after the async code done but if there are multiple async task than it will create a problem called callback hell (nesting of many callbacks) )


*/