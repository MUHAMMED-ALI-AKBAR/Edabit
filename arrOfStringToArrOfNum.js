function toNumberArray(pera1){
  return pera1.map(Number);
}

console.log(toNumberArray(["9.4", "4.2"]))

console.log(toNumberArray(["91", "44"]))

console.log(toNumberArray(["9.5", "8.8"]))

// ➞ [9.4, 4.2]
// ➞ [91, 44]
// ➞ [9.5, 8.8]