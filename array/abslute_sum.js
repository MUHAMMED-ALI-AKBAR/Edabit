// function getAbsSum(arr) {
//  const absoluteArr = [];
//  for(let i = 0; i < arr.length; i++){
//     absoluteArr.push(Math.abs(arr[i]))
//  };
//  return absoluteArr.reduce((acc,crr)=> acc + crr, 0)
// }

function getAbsSum(arr){
  const AbsArr = [];
  for ( let x = 0; x < arr.length; x++){
    AbsArr.push(Math.abs(arr[x]))
  }
  return AbsArr.reduce((pera1,pera2) => pera1 + pera2, 0)
}

console.log(getAbsSum([2, -1, 4, 8, 10]));

console.log(getAbsSum([-3, -4, -10, -2, -3]));

console.log(getAbsSum([2, 4, 6, 8, 10]));

console.log(getAbsSum([-1]));


// ➞ 25
// ➞ 22
// ➞ 30
// ➞ 1

// function test(arr){
// let x = arr.map(Number);
// return x
// }

// console.log(test(["2","5",1,2,3]))

// [2,5,1,2,3]
