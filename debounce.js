/*
    "this" keyword refers to the context from where it is called
    if "this" is called from function of object => this will refer to the object
*/

const ob = {
    firstname: "cv",
    lastname: "vc",

    greet() {
        console.log(this.firstname);
        console.log(this.lastname);
    }
}


/*

    "Debouncing" is programming practice in which we make delay time consuming tasks and once the sitution is ideal we fire the request / peform the task and hence this does not hinder the performance

    In "Throtling" we define the function to be called  after a specific period of time
    In "rate limiting" we define the function call be done n times in m time frame

*/

// call, apply ( call the function immediately ) and bind are methods of the functions that ties the function with a particular this keyword

// call takes input as object / reference + arguments that are to be passed inside the main function

function greet(age, lastname) {
    console.log(age);
    console.log(`Hello, I am ${this.name}, age ${lastname}`);
}

const person = { name: "Vaibhav"};
greet.call(person, 24, 20);

greet.apply(person, [1,2]);

function greetRandom(...value) {
    console.log(value);
    console.log(this.firstname);
}

const greetJS = greetRandom.bind({
    firstname: "JS"
})
  

greetJS(1,3,4,54,5);

