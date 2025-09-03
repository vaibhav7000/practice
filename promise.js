const fs = require("fs");

/*
    Promises provides a cleaner way to write the asynchronous functions and passing the callbacks to the functions by wrapping the asynchronous task inside the Promise and then we will be mapping the callback to the resolve and reject.

    Here we will not pass the callback functions directly to the asychrnous task rather mapping will be done

    under the hood promises code get converted into the async callback, but provides syntatical sugar over it
*/


function readFile(path) {
    return new Promise(function(resolve, reject) {
        fs.readFile(path, (err, result) => {
            if(!err) {
                resolve(result);
                return
            }
            reject(err);
        })
    })
}


function writeFile(path, data) {
    return new Promise(function(resolve, reject) {
        fs.writeFile(path, data, (err) => {
            if(!err) {
                resolve("done");
                return;
            }

            reject(err);
        })
    })
}

readFile(".env").then(data => {
    const finalData = `${data}         randomworld`;

    writeFile(".env", finalData).then(res => {
        console.log(res) // done
    }).catch(err => console.log(err));

}).catch(err => {
    console.log(err);
})


function outer() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    }
}


const increment = outer();

increment();
increment();