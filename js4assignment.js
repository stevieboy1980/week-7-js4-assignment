console.log ('1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.')
console.log ('a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.')
console.log ('b. Do not use numbers to reference the last element, find it programmatically. ages[7] - ages[0] is not allowed! Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths). Use a loop to iterate through the array and calculate the average age.')

// Create the ages array.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log ("Ages:", ages);
// This step subtracts the value of the first element in the array from the value of the last element. 
let difference = ages[ages.length - 1] - ages[0];
console.log("Difference between last and first element:", difference);

// This adds a new age to the end of the array.
ages.push(44);
console.log ('Ages after adding new age', ages);

// This subtracts the difference of the last and first element after adding another age to the end of the array.
difference = ages[ages.length - 1] - ages[0];
console.log("Difference after adding a new age:", difference);

// A for loop adds up all the elements in the ages array.
let total = 0;
for (let i = 0; i < ages.length; i++) {
    total += ages[i]; 
    console.log ('index', i , 'ages:', total);
}
// This last step calculates the average age by dividing the total sum of all ages by the length of the array.
let averageAge = total / ages.length;  
console.log("Average age:", averageAge);

console.log ('--------------------------')
console.log ('2. Create an array called names that contains the following values: "Sam", "Tommy", "Tim", "Sally", "Buck", "Bob". Use a loop to iterate through the array and calculate the average number of letters per name. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.')

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let totalLetters=0;
// The for loop iterates through the array and adds up the letters of each name after the previous name.  
for (let i = 0; i < names.length; i++) {
//console.log (i, 'Test');
totalLetters += names[i].length;
console.log("index:", i, "name:", names[i], "totalLetters", totalLetters);
}
let averageLetters = totalLetters / names.length
console.log ("Average letters" , averageLetters);

let concatNames = "";
for (let i = 0; i < names.length; i++){

concatNames = concatNames.concat(names[i] + " ");
console.log(i, "Names concatenated", concatNames);
}
console.log ("-------------------------------------")
console.log ("3. How do you access the last element of any array?")
//The last element of any array is accessed by using array.length-1 since the index always starts at 0.  Since the first element is always 0, you must subtract 1 from the array to access the last element. Example using ages array below.
console.log ("Last element of ages array:" , ages[ages.length - 1]);

console.log("-----------------------------------")
console.log("4. How do you access the first element of any array?")
// To access the first element of any array, you just access index 0 since the first element of any array always starts at 0.  Example using ages array below.
console.log ("The first element of the ages array is:", ages[0]);

console.log("-----------------------------------")
console.log("5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.");

let nameLengths = [];
for (let i = 0; i < names.length; i++){
   nameLengths.push(names[i].length);
   console.log ("Name lengths array:", nameLengths);
}

console.log("-------------------------------------")
console.log("6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.");
//This array adds up each element together by adding the sum of each of the previous elements.
let lettersTotal = 0;
for (let i = 0; i < nameLengths.length; i++){
// console.log (i, "test");
lettersTotal += nameLengths[i];
console.log ("LettersTotal:", lettersTotal);
}

console.log("------------------------------------");
console.log("7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').");
function concatWords (word,n){
    console.log ("Word Par:",word, "n Par:", n);
    let concat = word.repeat(n);
console.log(concat);
}
concatWords("Hello" , 3);

console.log("-------------------------------------");
console.log ("8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.");

function fullName (firstName, lastName){
    let fullName = firstName + " " + lastName;
    console.log(fullName); 
}
fullName("Steve" , "Young");

console.log ('------------------------------------');
console.log('9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.');

let numbers1 = [10,20,30,40,50];
let numbers2 = [1,2,3,4,5];

function sumNumbersArray(array){
    let total = 0;

    for (let i = 0; i < array.length; i++){
        total += array[i];
        console.log("Total:", total);
    }

    if (total > 100){
        console.log("Total:", total, true);
        return true
    } else {
        console.log("Total:" , total, false);
        return false
    }
}
sumNumbersArray(numbers1);

console.log("-----------------------------------");
console.log("10. Write a function that takes an array of numbers and returns the average of all the elements in the array.");
let numbers = [20,40,60,80];

function averageOfArray(numbers){
    let sum = 0
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
        console.log("Sum:" , sum);
    }
    let average = sum / numbers.length;
    console.log ("Average:" , average);
    return average;
}
averageOfArray(numbers);

console.log("-------------------------------------");
console.log("11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.");

let array1 = [50,100,150,200,250];
let array2 = [12,14,16,18,20];

function averageOfTwo(array1,array2){
    console.log("Parameters:" , array1, array2);
    let total1 = 0;
    let total2 = 0;
    for (const number of array1){
        total1 += number;
        console.log("Current number loop1:", number, "Total1:" , total1);
    }
    for (const number of array2){
        total2 += number;
        console.log("Current number loop2", number, "Total2:",total2);
    }
    let average1 = total1 / array1.length;
    let average2 = total2 / array2.length;

    console.log("Average of loop1", average1, "Average of loop2" ,average2);

    if (average1 > average2){
        console.log("Average1 is > Average2:",true);
        return true;
    } else if (average1 < average2) {
        console.log("Average1 is > Average2" ,false);
        return false;

    } else {
        console.log("Numbers are equal");
    }
}
averageOfTwo(array1, array2);

console.log("-----------------------------------");
console.log("12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.")

function willBuyDrink (isHotOutside, moneyInPocket){
    console.log("Is it hot outside?", isHotOutside, "Money in my pocket:", moneyInPocket);
    let willBuyDrink = isHotOutside === true && moneyInPocket > 10.5;
    console.log("Buy a drink?", willBuyDrink);
    return willBuyDrink;
}

willBuyDrink(true, 15);