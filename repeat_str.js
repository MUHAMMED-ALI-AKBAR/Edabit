function repeatString(str, num){
  if ( typeof str === 'string' ){
    let result = str.repeat(num)
    return result
  }else{
    return 'Not a string'
  }
}


console.log(repeatString("Mubashir", 2))

console.log(repeatString("Matt", 3) )

console.log(repeatString(1990, 7) )

//  ➞ "MubashirMubashir
//  ➞ "MattMattMatt"
//  ➞ "Not A String !!"


