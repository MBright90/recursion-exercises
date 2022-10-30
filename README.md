# recursion-exercises
Creating two recursive JavaScript functions:

fibonacci
 Creating a fibonacci recursive function, as opposed to a for loop, has the advantage of being able to access the previous results in a scoped array. Being able to access the last two numbers in the sequence means that we do not have to repeat calculations for all previous iterations each time we want a new number. This has a huge effect on the time take to calculate large fibonacci sequences.

merge-sort
To create the merge sort function, I initially lay out the steps needed in pseudo code. I then separated the pseudo code into a base and recursive case. To get my head around the recursive steps of the algorithm, I first created a version of it using the built in sort functions. I used console logs to visualize the process of recursion. I then built my merge sort function proper, using recursion and trying to use as few built-in javascript functions as possible. This means that I felt more in control of exactly what my function is doing at each point of the process. I did choose to use Array.push() and Array.slice() during the final iteration of each sort as this only occurs once per recursive function call and kept it as readable as possible.