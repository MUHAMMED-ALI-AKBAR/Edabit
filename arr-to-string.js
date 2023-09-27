function arrayToString(pera1) {
  const a = pera1.toString().split(",").join('')
  return a;
}

console.log(arrayToString([1, 2, 3, 4, 5, 6]));

console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));

console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));
 