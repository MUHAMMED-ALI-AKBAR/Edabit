function minMax (pera1){
  const max = Math.max(...pera1);
  const min = Math.min(...pera1);
  return [min, max]
}

console.log(minMax([1, 2, 3, 4, 5]) )

console.log(minMax([2334454, 5]) )

console.log(minMax([1]) )

// ➞ [1, 5]
// ➞ [5, 2334454]
// ➞ [1, 1]
