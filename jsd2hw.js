//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
function showFoods(person){
    for(let i = 0; i < Object.keys(person).length; i++){
        console.log(Object.keys(person)[i])
        console.log(Object.values(person)[i])
    }
}

showFoods(person3)



//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    printInfo(name){
        return `Name: ${this.name} \nAge: ${this.age}`
    }addAge(age){
        const new_age = this.age + 1
        return `Holy Jesus ${this.name}! ${new_age} Is old as heck!`
    }
}

let Terry = new Person('Terry', 40)
let Stephanie = new Person('Stephanie', 39)
console.log(Terry.printInfo())
console.log(Terry.addAge())
console.log(Stephanie.printInfo())
console.log(Stephanie.addAge())





// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const words = string => {
    return new Promise( (big, small) => {
        if(string.length > 10){
            big(true)
        }else{
            small(false)
        }
    })
}
words('I am the very model of a modern Major-General')
    .then( () => {
        console.log(`Big Word`)
    } )
    .catch( () => {
        console.log(`Small Number`)
    } )

words('Hypotenuse')
    .then( () => {
        console.log(`Big Word`)
    } )
    .catch( () => {
        console.log(`Small Number`)
    } )


    // Count of positives / sum of negatives:
    // function countPositivesSumNegatives(input) {
    //     const answer = []
    //     let positiveSum = 0
    //     let negativeSum = 0
    
    //     if(input && input.length) {
    //       for(let i = 0; i < input.length; i++) {
    //         if(input[i] > 0) {
    //             positiveSum += 1
    //         } else {
    //             negativeSum += input[i]
    //         }
    //       }
    //       answer.push(positiveSum)
    //       answer.push(negativeSum)
    //     }
    //     return answer
    // }

    // String repeat
    // function repeatStr (n, s) {
    //     let newString = ''
    //     while(n > 0) {
    //         newString += s
    //         n--
    //     }
    //     return newString
    // }