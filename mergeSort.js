// #####################################################
// Initial Pseudo Code
//
// Sort left half of array
// Sort right half of array
// Merge arrays together
//
// ######################################################
//
// BASE CASE //
// if length < 2, return (array is only a single element)
//
// else RECURSIVE CASE
// array 1 = mergeSort(array.splice(first half))
// array 2 = mergeSort(array.splice(second half))
// return merge of array 1 and array 2
//
// ######################################################

function mergeSort(array) {
  console.log(`array: ${array}`)
  if (array.length <= 1) return array

  const leftHalf = mergeSort(array.slice(0, array.length / 2))
  const rightHalf = mergeSort(array.slice(array.length / 2))

  const merged = leftHalf.concat(rightHalf)
  merged.sort((first, second) => first - second)
  console.log(`merged: ${merged}`)
  return merged
}

console.log(mergeSort([3, 5, 8, 7]))
