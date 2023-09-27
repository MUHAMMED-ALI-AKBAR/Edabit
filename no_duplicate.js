function set(arr){
  let newarr = [];
  for (let i=0;i<arr.length-1;++i) {
if ( arr[i] != [i]){
  newarr.push(arr[i]);
}
}
return newarr.sort(Number);
}
console.log(set([1, 3, 3, 5, 5]) )

console.log(set([4, 4, 4, 4]))

console.log(set([5, 7, 8, 9, 10, 15]) )

console.log(set([3, 3, 3, 2, 1]) )

// ➞ [1, 3, 5]
// ➞ [4]
// ➞ [5, 7, 8, 9, 10, 15]
// ➞ [1, 2, 3]