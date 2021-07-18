console.log(arrowTitle)
    /* START CODE UNDER THIS LINE */



/*--------------------Pulse Check--------------------*/
//______________________________________________________
//Q1
// const recFunction = function() {
//     return recFunction();
// };

// recFunction(); //  Uncaught RangeError: Maximum call stack size exceeded
//______________________________________________________
//Q2
// const recFunction = function(number) {
//     if (number === 0) {
//         return "End";
//     }
//     recFunction(number - 1)
// };

// recFunction(9); // => undefined
//______________________________________________________
// //Q3
// const recFunction = function(number) {
//     if (number === 0) {
//         return 0;
//     }
//     return recFunction(number - 1)
// };

// recFunction(9); // => "0"


//______________________________________________________
// //Q4
// const recFunction = function(number) {
//     if (number === 0) {
//         return 0;
//     }
//     return number + '' + recFunction(number - 1)
//     ''
// };

// recFunction(9); // => "9876543210"
//______________________________________________________
//Q5
const countDown = function(number) {
    // console.log(number);
    if (number === 0) {
        return;
    }
    return number + '-' + countDown(number - 1);
};

countDown(10); // => "10-9-8-7-6-5-4-3-2-1-0"
countDown(3); // => "3-2-1-0"







/*--------------------Practice--------------------*/
//______________________________________________________
//Q2