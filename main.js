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
        return 0;
    }
    return number + '-' + countDown(number - 1);
};

countDown(10); // => "10-9-8-7-6-5-4-3-2-1-0"
countDown(3); // => "3-2-1-0"







/*--------------------Practice--------------------*/
//______________________________________________________
//Q1
const factorial = function(number) {
    if (number === 0) {
        return 1;
    }
    return number * factorial(number - 1);
};

factorial(5); // 1 * 2 * 3 * 4 * 5 => 120
factorial(3); // 1 * 2 * 3 => 6
factorial(1); // => 1
factorial(0); // => 1

//______________________________________________________
//Q2
const sumCubes = function(numbers) {
    if (!numbers[0]) {
        return 0;
    }
    return Math.pow(numbers[0], 3) + sumCubes(numbers.slice(1))

};

sumCubes([1, 2]); // => 9
sumCubes([1, 2, 3]); // => 36
sumCubes([5, 3, 3]); // => 179
sumCubes([]); // => 0
//______________________________________________________
//Q3
const getLength = function(string) {
    if (!string[0]) {
        return 0;
    }
    return 1 + getLength(string.slice(1))
};

getLength("Hello"); // => 5
getLength("John"); // => 4
getLength(""); // => 0
//______________________________________________________
//Q4
const reverseString = function(string) {
    if (string === "")
        return "";

    else
        return reverseString(string.substr(1)) + string.charAt(0);
};

reverseString("Hello World"); // => "dlrow olleH"
reverseString("John Doe"); // => "eoD nhoJ"
reverseString(""); // => ""
//______________________________________________________
//Q5
const countCharacter = function(string, character) {
    if (string.length === 0)
        return 0;
    else if (string.charAt(0) == character)
        return 1 + countCharacter(string.substring(1), character);
    else
        return countCharacter(string.substring(1), character);

};

countCharacter("hello", "l"); // => 2
countCharacter("hello", "e"); // => 1
countCharacter("hello", "z"); // => 0
//______________________________________________________
//Q6
const oddOrEven = function(number) {
    if (number == 0) {
        return "The number is even";
    } else if (number == 1) {
        return "The number is odd";
    } else if (number < 0) {
        return oddOrEven(-number);
    } else
        return oddOrEven(number - 2);
}
oddOrEven(8); // => "The number is even"
oddOrEven(1); // => "The number is odd"
//______________________________________________________
//Q7
const multiply = function(numberOne, numberTwo) {
    if (numberTwo === 0) {
        return 0;
    }
    return numberOne + multiply(numberOne, numberTwo - 1);

};

// multiply(2, 3); // => 6
// multiply(4, 5); // => 20
//______________________________________________________
//Q8
const isPalindrome = function(string) {
    string = string.replaceAll(' ', '')
    if (!string[0]) {
        return true
    }
    if (string[0] === string[string.length - 1]) {
        return true && isPalindrome(string.slice(1, string.length - 1));
    }
    return false
};

isPalindrome("dad"); // => true
isPalindrome("dads"); // => false
isPalindrome("John doe"); // => false
isPalindrome("a bcdcba"); // => true
isPalindrome("a santa at nasa"); // => true
isPalindrome("was it a car or a cat i saw"); // => true
//______________________________________________________
//Q9
const remainder = function(numberOne, numberTwo) {
    if (numberOne < numberTwo) {
        return numberOne;
    }
    return remainder(numberOne - numberTwo, numberTwo)
};

remainder(5, 1); // => 0
remainder(7, 2); // => 1
remainder(7, 4); // => 3
remainder(8, 2); // => 0
remainder(4, 6); // => 4
remainder(1, 8); // => 1
//______________________________________________________
//Q10
// find the relation between the fibonacci number and the value of the sequence at that number
// Fibonacci numbers: | F0 | F1 | F2 | F3 | F4 | F5 | F6 | F7 | F8 | F9 | F10 |
// Value of sequence: | 0  | 1  |  1 | 2  | 3  | 5  | 8  | 13 | 21 | 34 | 55  |

const fibonacci = function(fibNumber) {
    if (fibNumber <= 1) {
        return fibNumber;
    }
    return fibonacci(fibNumber - 1) + fibonacci(fibNumber - 2)
};

fibonacci(4); // => 3
fibonacci(7); // => 13
fibonacci(13); // => 233






/*--------------------Extra Practice--------------------*/
//______________________________________________________
//Q1
const maximumNumber = function(numbers) {
    numbers.slice();
    if (numbers.length == 1) {
        return numbers[0];
    }

    if (numbers[0] < numbers[1]) {
        numbers.splice(0, 1);
    } else {
        numbers.splice(1, 1);
    }

    return maximumNumber(numbers);
};

maximumNumber([0, 5, 2, 10, 8, 6]); // => 10
maximumNumber([0, 5, 6]); // => 6

//______________________________________________________
//Q2
const family = {
    name: "John",
    child: {
        name: "Bill",
        child: {
            name: "Mark",
            child: {
                name: "Terry",
                child: null,
            },
        },
    },
};

const familyTree = function(family) {
    if (family[0] === family.child[0]) {
        return 0;
    }
    return familyTree(family.name[2])
};

familyTree(family); // => "John Bill Mark Terry"
//______________________________________________________
//Q3
const flattenArray = function(array) {
    // return array.reduce((flat, i) => {
    //     if (Array.isArray(i)) {
    //         return flat.concat(flattenArray(i));
    //     }
    //     return flattenArray(flat.concat(i));
    // }, []);
};

flattenArray([1, 2, 3, [4, 5, [6, 7]]]); // => [1, 2, 3, 4, 5, 6, 7]
flattenArray([
    [1, 2, [3, 4]]
]); // => [1, 2, 3, 4]