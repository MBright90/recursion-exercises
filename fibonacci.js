function recursiveFib(arrayLength) {
    // base case
    if (arrayLength <= 1) return [0]
    if (arrayLength <= 2) return [0, 1]
    
    // recursive case
    const array = recursiveFib(arrayLength - 1)
    array.push(array[array.length - 1] + array[array.length - 2])
    return array
  }
  
  console.log(recursiveFib(13))
  console.log(recursiveFib(22))
  console.log(recursiveFib(-4))
  console.log(recursiveFib('12'))