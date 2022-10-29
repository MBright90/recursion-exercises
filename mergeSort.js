// #####################################################
//
// Initial Pseudo Code
//
// Enter an array object
// If the array is a single item long, return that array
// If the array is longer than a single item:
//   Sort left half of array by recursively calling function on left half until one item is left
//   Sort right half of array by recursively call function on right half until one item is left
// Merge two arrays together
// Return merged array
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

// Initial creation of mergeSort using the built in sort functions. Creating this first allowed
// me to test the base and recursive cases were doing their expected behaviors.

function mergeSortBuiltIn(array) {
  if (array.length <= 1) return array

  const leftHalf = mergeSort(array.slice(0, array.length / 2))
  const rightHalf = mergeSort(array.slice(array.length / 2))

  const mergedArray = leftHalf.concat(rightHalf)
  mergedArray.sort((first, second) => first - second)
  return mergedArray
}

console.log(mergeSortBuiltIn([45, 12, 29, 74, 4, 5]))

//  ######################################################
//
// Creation of mergeSort without using built in sort functions. Avoided use of unshift as this is performance heavy.


function mergeSort(array) {

    // base case
    if (array.length <= 1) return array
  
    // recursive case
    const leftHalf = mergeSortRevised(array.slice(0, array.length / 2))
    const rightHalf = mergeSortRevised(array.slice(array.length / 2))
  
    let leftIndex = 0
    let rightIndex = 0
    let mergedArray = [];

    // Continue merging until all items have been merged. When all items have been merged on one half,
    // add the entire opposite half to the array and break out of the loop
    return (() => {
        while (leftHalf.length >= leftIndex || rightHalf.length >= rightIndex) {
            console.log(mergedArray)

            // If all the left half items have been included, add the entire right half of the array and return the array
            // to the next step in the call stack
            if (leftHalf.length <= leftIndex ) {
                mergedArray.push(...rightHalf.slice(rightIndex))
                return mergedArray
            // If all the right half items have been merged, add the entire left half of the array and return the array
            // to the next step in the call stack
            } else if (rightHalf.length <= rightIndex) {
                mergedArray.push(...leftHalf.slice(leftIndex))
                return mergedArray
            // If the next item in the left half is less than the next item in the right half, merge the left item
            } else if (leftHalf[leftIndex] < rightHalf[rightIndex]) {
                mergedArray[mergedArray.length] = leftHalf[leftIndex]
                leftIndex += 1
            // If the next item in the right half is less than the next item in the left half, merge the right item
            } else {
                mergedArray[mergedArray.length] = rightHalf[rightIndex]
                rightIndex += 1
            }
    }})()
}

console.log(mergeSortRevised([33, 21, 43, 15, 98, 76, 45, 32]))
