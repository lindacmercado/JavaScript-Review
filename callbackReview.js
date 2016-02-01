/* Declare and Define the functions here that will make the function calls below work properly */



var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

var first = function(names, callback) {
    callback(names[0]);
}
first(names, function(firstName) {
console.log('The first name in names is ' + firstName)
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

var last = function(names, callback) {
    callback(names[names.length - 1]);
}

last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//have the contains function return a boolean value for if the name is in the array or not.

var contains = function(arr, str ,cb) {
    if(str.indexOf(arr) !== -1) {
        cb(true);
    } else {
        cb(false);
    }
}


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});





/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


var numbers = [1,2,3,4,5];
//Produces a new array of values by mapping each value in list through a transformation function

function map(array, cb) {
    var newArray = [];
    for(var i = 0; i < array.length; i++) {
        newArray[i] = cb(array[i]);
    }
    return newArray;
}
map(numbers, function(num){
  return num * 2; //returns an array of [2,4,6,8,10]
});


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

function uniq(array, cb) {
    var newArray = [];
    for(var i = array.length -1; i > 0; i--) {
        if(newArray.indexOf(array[i]) === -1) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

function each(array, cb) {
    for(var i = 0; i < array.length; i++) {
        var num = array[i];
        var indice = i;
        cb(num, indice);
    }
}

each(names, function(item, indice) {
  console.log('The item in the ' + indice + ' position is ' + item)
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

function getUserById(id, array, cb) {
    for(var key in array) {
        if(array[key].id === id) {
            cb(array[key]);
        }
    }
}

getUserById('16t', users, function(user){
  console.log('The user with the id 16t has the email of ' + user.email + 'the name of ' + user.name + ' and the address of ' + user.address); 
});


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


//Looks through each value in the list, returning the first one that passes a truth test 

var numbers  = [1, 2, 3, 4, 5, 6];

function find(array, cb) {
    for(var i = 0; i < array.length; i++) {
        if(cb(array[i])) {
            return array[i];
        }
    }
}

find(numbers, function(num){ 
  return num % 2 === 0; //should return 2
})
