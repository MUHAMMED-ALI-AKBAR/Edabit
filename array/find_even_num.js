function getOnlyEvens(pera1) {
  const result = []; 
  for (let i = 0; i < pera1.length; i++) {
    if (i % 2 === 0 && pera1[i] % 2 === 0) {
      result.push(pera1[i]);
    }
  }
  return result;
}

console.log(getOnlyEvens([1, 3, 2, 6, 4, 8]));

console.log(getOnlyEvens([0, 1, 2, 3, 4]));

console.log(getOnlyEvens([1, 2, 3, 4, 5]));

// ➞ [2, 4]
// ➞ [0, 2, 4]
// ➞ []
