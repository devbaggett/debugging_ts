// 1. Setting types

// var myString: string;
// // I can assign myString like this:
// myString = "Bee stinger";
// // Why is there a problem with this? What can I do to fix this?
// myString = 9;

// Solution: There is a problem with this because myString requires a string and 9 is an integer. Therefore, putting the 9 in “” would allow it to be stored as a string.



// 2. Setting the types for function parameters

// function sayHello(name: string){
//    return `Hello, ${name}!`;
// }
// // This is working great:
// console.log(sayHello("Kermit"));
// // Why isn't this working? I want it to return "Hello, 9!"
// console.log(sayHello(9));

// Solution: 9 isn’t in “”, again.



// 3. Optional parameters

// function fullName(firstName: string, lastName: string, middleName: string){
//    let fullName = `${firstName} ${middleName} ${lastName}`;
//    return fullName;
// }
// // This works:
// console.log(fullName("Mary", "Moore", "Tyler"));
// // What do I do if someone doesn't have a middle name?
// console.log(fullName("Jimbo", "Jones"));

// Solution: Have to set ‘middleName’ in function to optional by adding a ? at the end.



// 4. Interfaces and function parameters

// interface Student {
//    firstName: string;
//    lastName: string;
//    belts: number;
// }
// function graduate(ninja: Student){
//    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
// }
// const christine = {
//    firstName: "Christine",
//    lastName: "Yang",
//    belts: 2
// }
// const jay = {
//    firstName: "Jay",
//    lastName: "Patel",
//    belt: 4
// }
// // This seems to work fine:
// console.log(graduate(christine));
// // This one has problems:
// console.log(graduate(jay));

// Solution: pluralize belt in const jay since the interface requirement is ‘belts’



// 5. Classes and function parameters

// class Ninja {
//    fullName: string;
//    constructor(
//       public firstName: string,
//       public lastName: string){
//          this.fullName = `${firstName} ${lastName}`;
//       }
//    debug(){
//       console.log("Console.log() is my friend.")
//    }
// }
// // This is not making an instance of Ninja, for some reason:
// const shane = Ninja();
// // Since I'm having trouble making an instance of Ninja, I decided to do this:
// const turing = {
//    fullName: "Alan Turing",
//    firstName: "Alan",
//    lastName: "Turing"
// }
// // Now I'll make a study function, which is a lot like our graduate function from above:
// function study(programmer: Ninja){
//    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
// }
// // Now this has problems:
// console.log(study(turing));

// Solution: had to include in the ninja() function 2 parameters with the first and last name for shane, and then pass shane into the study function.



// 6. Arrow Functions

// var increment = x => x + 1;
// // This works great:
// console.log(increment(3));
// var square = x => {x * x};
// // This is not showing me what I want:
// console.log(square(4));
// // This is not working:
// var multiply = x,y => x * y;
// // Nor is this working:
// var math = (x, y) => let sum = x + y;
//    let product = x * y;
//    let difference = Math.abs(x-y);
//    return [sum, product, difference];

// Solution: 

// var increment = x => x + 1;
// // This works great:
// console.log(increment(3));
// var square = x => x * x;
// // This is not showing me what I want:
// console.log(square(4));
// // This is not working:
// var multiply = (x,y) => x * y;
// // Nor is this working:
// var math = (x, y) => {
//     let sum = x + y;
//     let product = x * y;
//     let difference = Math.abs(x - y);
//     return [sum, product, difference]
// }
// console.log(math(2, 5));





// 7. Arrow functions and ‘this’

// class Elephant {
//    constructor(public age: number){}
//    birthday = function(){
//       this.age++;
//    }
// }
// const babar = new Elephant(8);
// setTimeout(babar.birthday, 1000)
// setTimeout(function(){
//    console.log(`Babar's age is ${babar.age}.`)
//    }, 2000)
// // Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.


// Solution:

// class Elephant {
//    constructor(public age: number){}
//    birthday = () => {
//       this.age++;
//    }
// }
// const babar = new Elephant(8);
// setTimeout(babar.birthday, 1000)
// setTimeout(function(){
//    console.log(`Babar's age is ${babar.age}.`)
//    }, 2000)
// // Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.















