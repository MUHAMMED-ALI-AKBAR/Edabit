function concatName(fName, lName){
  const result = lName + "," + " " + fName
  return result
}

console.log(concatName("First", "Last") )

console.log(concatName("John", "Doe") )

console.log(concatName("Mary", "Jane") )

// ➞ "Last, First"
// ➞ "Doe, John"
// ➞ "Jane, Mary"