//1
function sumArray(arr) {
    let sum =0;
    for (let p = 0; p < arr.length; p++){
        sum += arr[p];
    }
    return sum;
}

//Проверка

const array = [1, 5, 0, 9, 4, 8]
const result = sumArray(array);
console.log(result); 

//2
function getDivisors(number) {
    let divisors = [];

    for (let p = 1; p <= number; p++){
        if (number % p === 0) {
            divisors.push(p);
        }
    }

    return divisors;
}

//Проверка

console.log(getDivisors(16)); 

//3
function stringToCharArray(str) {
    return Array.from(str);
}

//Проверка

const resulte = stringToCharArray('Маша Холопова');
console.log(resulte)

//4
function reverseString(str) {
    let array = str.split('');
    let reversedArray = array.reverse();
    let reversedStr = reversedArray.join('');
    return reversedStr;
}

//Проверка

let input = 'Ультро Печенька';
let output = reverseString(input);
console.log(output);

//5
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

//Проверка

console.log(capitalizeFirstLetter('изучение программы'));

//6
function  capitalizeSrting(str) {
    let words = str.split(' ');

    for (let p = 0; p <words.length; p++) {
        words [p] = words[p].charAt(0).toUpperCase() + words[p].slice(1);
    }

    let newStr = words.join(' ');

    return newStr;
}

//Проверка

let str = 'изучение джава скрипт'
let resulet = capitalizeSrting(str);
console.log(resulet);

//7
function fillArrayWithNumders(n) {
    const arr = [];
    for (let p = 1; p <= n; p++) {
        arr.push(p);
    }
    return arr;
}

//Проверка

const resulette = fillArrayWithNumders(21); 
console.log(resulette);

//8
function sumOfDigits(number) {
    let sum = 0;
    let numberString = number.toString();
    for (let p = 0; p < numberString.length; p++) {
        sum += Number(numberString[p]);
    }
    return sum;
}

//Проверка

console.log(sumOfDigits(2136));

//9
function isLeapYear(year) {
    if (year % 4 !== 0) {
        return false;
    } else if (year % 100 !== 0) {
        return true;
    } else if (year % 400 !== 0) {
        return true;
    } else {
        return true;
    }
}

//Проверка

console.log(isLeapYear(2006))
console.log(isLeapYear(2020))
console.log(isLeapYear(2034))

//10
function secondsToDays(seconds) {
    let secondsInDay = 86400;
    let days = Math.floor(seconds / secondsInDay);
    return days
}

//Проверка

let seconds = 600000;
let days = secondsToDays(seconds);
console.log(days);

//11
function getRandomElement(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

//Проверка

let arrayP = [2, 1, 8, 6, 7, 10]
let RandomElement = getRandomElement(arrayP);
console.log(RandomElement);

//12
function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let p = 2; p < number; p++) {
        if (number % p === 0) {
            return false;
        }
    }
    return true;
}

//Проверка

console.log(isPrime(6));
console.log(isPrime(7));