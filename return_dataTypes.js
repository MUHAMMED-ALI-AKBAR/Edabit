function arrayValuesTypes(arr) {
  return arr.map(elem => typeof elem)
}
console.log(arrayValuesTypes([1, 2, "null", []]));

console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null]));

console.log(
  arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
);

// ➞ ["number", "number", "string", "object"]
// ➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]
// ➞ ["number", "string", "string", "object", "object", "boolean", "number"]
