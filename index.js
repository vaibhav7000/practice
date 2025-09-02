function greet() {
    console.log("hello");
    try {
        console.log(a);
    } catch (error) {
        console.log("error came inside the catch block");
    }
}

greet();

console.log("out of the function scope");

const firstname = "JS";
const lastname = "developer";

console.log(lastname);

{
    var fullname = "js developer";
}

var fullname = "swift develop";
console.log(fullname);


const gender = "male";

function greetBasedOnGender(firstname, lastname, gender) {
    if( gender === "male" ) {
        console.log(`${firstname} ${lastname} is male`);
    } else {
        console.log(`${firstname} ${lastname} is female`);
    }
}


function countPrints(count, start) {
    if(start > count) {
        console.log("start is greater than count");
    }

    for(let i = start; i <= count; i++) {
        console.log(i);
    }
}

/*

    Compiled languages -> Before running the code we have to convert it into executable ( compiler ) that contains 0' and 1's and hence the logic inside the application runs.
    Interpreted languages -> In this the code gets converted into 0's and 1's at the runtime => Can partially run

    var -> creating variables using var creates global level scope and allows re-declaration, if they are declared inside the block scope then also can be accessded outside the blocks

    let, const -> Block level scope their instance only is prsent inside the scope

    When dealing with complex primitives in JS we are actually dealing with the addresses of the variables ( objects, arrays, function ) => direclty dealing with actual variables
*/

function printEven(arr) {
    arr.forEach(num => {
        !(num % 2) ? console.log(`${num} is even`) : undefined;
    })
}

printEven([1,2,3,3,4]);

function getMax(arr) {
    let max = -Number.MAX_VALUE;

    arr.forEach(num => {
        max = num > max ? num : max;
    })

    return max;
}

console.log(getMax([1,2,3,4,5,5,6]));