var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

 function last(arr) {
     var array = arr[arr.length - 1];
     return array;
 }
 
 
 console.log(last(threeItems));


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];

function removeOdds(array) {
    var evens = [];
    for(var i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            evens.push(array[i]);
        }
    }
    return evens;
}
removeOdds(evenArray);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and an array full of numbers 
//'randomArray'. Your job is to write a function that will get a random number, then loop through the array to 
//see if that random number is in the array. If it is, alert true, if it's not, alert false

var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

function finder() {
     var randNum = getRandomArbitrary();
     console.log(randNum);
     if(randomArray.indexOf(randNum) !== -1) {
         return true;
     } else {
         return false;
     }
 }

finder();


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, 
//first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.

var first = [1,2,3,4,5];
var second = [];

function addNums(arr1, arr2) {
    for(var i = 0; i < arr1.length; i++) {
        arr2.push(arr1[i]);
    }  
      arr2.push(6, 7);
      return arr2;
    }
   addNums(first, second); 


console.log(first) //[1,2,3,4,5];
console.log(second) //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best";

 function longest(str) {
     var splitString = str.split(" ");
     var longest = 0;
     var longWord;
     
     for(var i = 0; i < splitString.length; i++) {
         if(longest < splitString[i].length) {
             longest = splitString[i].length;
             longWord = splitString[i];
         }
    }
        return longWord;
 }

longest(sentence);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word 
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

function capitalize(str) {
    return str.replace(/\w\S*/g, function(txt) {
   return txt.charAt(0).toUpperCase() + txt.slice(1);
    })
}
capitalize(myPoem);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in 
//that string.

function vowelCounter(string) {
    var vowelCount = 0;
    var string = string.toString();
    for(var i = 0; i < string.length; i++) {
        if(string.charAt(i) === 'a' || string.charAt(i) === 'e' || string.charAt(i) === 'i' || string.charAt(i) === 'o' || string.charAt(i) === 'u') {
            vowelCount += 1;
        }
    }
    return vowelCount;
}
vowelCounter(theOdyssey);
