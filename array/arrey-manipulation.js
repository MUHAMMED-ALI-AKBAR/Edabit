//  ➞ [1, 2, 3, 4]

//  ➞ [3, 5, 7, 9]

//  ➞ [0, -1, -2, -3]

function incrementItems(pera1){
  return pera1.map(elem => elem + 1)
}

console.log(incrementItems([0, 1, 2, 3]))
console.log(incrementItems([2, 4, 6, 8]))
console.log(incrementItems([-1, -2, -3, -4]))

 