function recursiveFib(arrayLength) {
    // base case
    if (arrayLength <= 1) return [0]
    if (arrayLength <= 2) return [0, 1]
    
    // recursive case
    const array = recursiveFib(arrayLength - 1)
    array.push(array[array.length - 1] + array[array.length - 2])
    return array[array.length]
  }
  
  console.log(recursiveFib(10))

  export default recursiveFib