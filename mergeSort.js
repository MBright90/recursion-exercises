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
// array 1 = mergesort(array.splice(first half))
// array 2 = mergesort(array.splice(second half))
// return merge of array 1 and array 2
//
// ######################################################