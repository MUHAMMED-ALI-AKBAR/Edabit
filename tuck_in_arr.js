function tuckIn(arr1, arr2){

  return arr1.concat(arr2, 1)
}

console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]))

console.log(tuckIn([15,150], [45, 75, 35]) )

console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]]) )

// ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// ➞ [15, 45, 75, 35, 150]
// ➞ [[1, 2], [3, 4], [5, 6]]