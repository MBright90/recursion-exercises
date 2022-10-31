// #####################################################
//
// Initial Pseudo Code
//
// Enter a sorted array object and a target to look for
// Find the middle index of the array and check that item against the target value

// If the target is less than the middle item:
//   Set the new end point of the search to just below the middle value

// If the target is more than the middle value:
//  Set the new start point of the search to just above the middle value

// Recursively call the binary search, passing in the new start and end points.
// Repeat until an array of single length is found: 
//   If this is the target, return the index.
//   If this is not the target, return -1.
//
// ######################################################
//
// midIndex = (startIndex + endIndex) / 2
// midValue = array[midIndex]
//
// BASE CASE //
// if midValue === targetValue return midIndex
// if midIndex < 1 return -1 <-- This acknowledges the target value is not in the array
//
// else RECURSIVE CASE
// if targetValue < midValue
//   return binarySearch(target, start, midIndex - 1)
// else 
//   return binarySearch(target, midIndex + 1, end)
//
// ######################################################

function binarySearch(array, target, startIndex = 0, endIndex = array.length - 1) {

    const checkArrayLength = (arraySlice) => {
        if (arraySlice.length > 0) return true
    }

    const midIndex = Math.floor((startIndex + endIndex) / 2)
    const midValue = array[midIndex]

    if (midValue === target) return midIndex
    if (!checkArrayLength(array.slice(startIndex, endIndex))) return -1

    if (target < midValue) return binarySearch(array, target, startIndex, midIndex - 1)
    return binarySearch(array, target, midIndex + 1, endIndex)
}

const testArray = [2, 6, 12, 15, 16, 19, 20, 21, 23, 24, 26, 28, 30, 31, 42, 47, 49, 51, 53, 58, 62, 83, 85, 91, 95]

console.log(binarySearch(testArray, 95))