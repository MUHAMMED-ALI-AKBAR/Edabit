function index(arr,str){
  let a = arr.findIndex(elme => elme === str)
  return a
}

console.log(index(["hi", "edabit", "fgh", "abc"], "fgh") )

console.log(index(["Red", "blue", "Blue", "Green"], "blue")) 

console.log(index(["a", "g", "y", "d"], "d"))

console.log(index(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"))

// ➞ 2
// ➞ 1
// ➞ 3
// ➞ 0