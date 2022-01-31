// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

describe("onlyName", () => {
  const people = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]
  it("returns an array with a sentence about each person with their name capitalized.", () => {
    
    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(onlyName(people)).toEqual(expect.arrayContaining(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]))
  })
})
    //ERROR: onlyName is not defined

// b) Create the function that makes the test pass.

const onlyName = ( array ) =>{
  // iterate of the array with getNameRegex function given values
  let newArr = array.map(word => {
      // extract name and capitalize
    let fullName = getNameRegex(word.name);
      // concat name and occupation together
    let sentence = `${fullName} is ${word.occupation}.`
    return sentence;
  })
  return newArr;
}
  // create separte function that takes in the argument of name and uses .replace to to uppercase our names
  const getNameRegex = (name) => {
    //\b sets the boundary for pinpointing the position before the first character in a string. \w will match any single string character. In this case, I want to replace the character between these two spaces.
    return name.replace(/\b\w/g, c => {
      // uppercase this character
      return c.toUpperCase();
    })
  }
console.log(onlyName(people));


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]
describe("divThree", () => {
  it(" takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    expect(divThree(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(divThree(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})
    //ERROR: divThree is not defined!

// b) Create the function that makes the test pass.

  //create a function, takes in array
  const divThree =(array) =>{
    //iterate over the array and targets only number types. Iterate again and use modulo to get the remainders when divided by 3
    return array.filter(value => typeof value === 'number').map(value => value % 3)
    
  }
  console.log(divThree(hodgepodge1));
  console.log(divThree(hodgepodge2));


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe("sumCube", () => {
  const cubeAndSum1 = [2, 3, 4]
  // Expected output: 99
  const cubeAndSum2 = [0, 5, 10]
  // Expected output: 1125
  it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
    expect(sumCube(cubeAndSum1)).toEqual(99)
    expect(sumCube(cubeAndSum2)).toEqual(1125)
  })
})
    // ReferenceError: sumCube is not defined


// b) Create the function that makes the test pass.

// create function that takes in array
const sumCube = (array) =>{
  // iterate over the array and cube each value
  return array.map(value => value ** 3)
  // use reduce to add all the values in the returned array
.reduce((a,b) => a + b)
}
console.log(sumCube(cubeAndSum1));
console.log(sumCube(cubeAndSum2));