function minMax(pera1){
  const a = Math.min(...pera1)
  const b = Math.max(...pera1)
  return [a,b]
}

console.log(minMax([1, 2, 3, 4, 5]))

console.log(minMax([2334454, 5]))

console.log(minMax([1]))

// ➞ [1, 5]
// ➞ [5, 2334454]
// ➞ [1, 1]