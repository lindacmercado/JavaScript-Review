//Create a Animal Constructor that has the following parameters. species, name, legs, color, food 
//(which is an array of foods they can eat).

function Animal(species, name, legs, color, food) {
    this.species = species,
    this.name = name,
    this.legs = legs,
    this.color = color,
    this.food = food;
}


//Now create a person function that creates an object and returns it (not in constructor form) 
//that has the following parameters. name, age, height, gender

var person = function(name, age, height, gender) {
    
    var newPerson = {};
    newPerson.name = name;
    newPerson.age = age;
    newPerson.height = height;
    newPerson.gender = gender;
    return newPerson;
}


//Create a animal array and a person array.

  var animal = [];
  var persons = [];


//Create two instances of Animal and push those into your animal array

  var dog = new Animal('dog', 'Gypsy', 4, 'black and white', ['purina', 'puppy chow']);
  var cat = new Animal('cat', 'Chloe', 4, 'gray', ['purina', 'cat chow']);
  animal.push(dog, cat);


//Create two instances of person and push those into your person array.

persons.push(person('Tina', 43, '5-8', 'female'));
persons.push(person('Tyler', 7, '4-7', 'male'));



//Now we want every instance of Animal to have a eat method. This method will choose a random item in that 
//instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

  Animal.prototype.eat = function () {
    var ranNum = Math.floor(Math.random() * (this.food.length));
    alert(this.name + " ate " + this.food[ranNum]);
};


//At this point, if we wanted to add something to every istance of person could we? 

  //Yes or no? and why or why not?

//No, because the person function creates an object and isnt a template to create more of the same. 


/*
  1) What happens when you use the 'new' keyword to call a Constructor function? 
            inherits properties of its 'class'
  2) What's a good way to describe the keyword 'this'
            'this' is a pronoun for whatever object is in the current scope
  3) Can a normal function which creates an object and then returns that object use the prototype?
           No, its not connected to a 'class'.
  4) What happens if you forget to use 'new' when calling a constructor?
           Returns undefined
*/