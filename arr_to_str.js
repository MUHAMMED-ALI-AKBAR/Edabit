function parseArray(pera1){
const a = pera1.toString()
return a
}


console.log(parseArray([1, 2, "a", "b"]))

console.log(parseArray(["abc", 123, "def", 456]))

console.log(parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]) )

console.log(parseArray([]) )

// ➞ ["1", "2", "a", "b"]
// ➞ ["abc", "123", "def", "456"]
// ➞ ["1", "2", "3", "17", "24", "3", "a", "123b"]
// ➞ []