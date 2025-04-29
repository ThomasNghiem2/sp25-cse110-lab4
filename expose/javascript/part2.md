# Part 2

1. At line 12, it would print out the number 3, since i is var, making it visible through the entire function. So, after the for loop finishes, the value of i is 3, which is what it print out.
2. Var is visible across the function and tolerates redeclarations, so the through the for loop, discountedPrice is overwritten multiple times. At line 13, discountedPrice is printed, which shows the calculated value when i = prices.length - 1. This would be the value 300 * (1 - 0.5) = 150. So, the number 150 is printed at line 13.
3. Line 14 would print out the number 150 since would also be overwritten to the final iteration of the loop, which would be Math.round(discountedPrice * 100) / 100 = Math.round(150 * 100) / 100 = 150.
4. The function returns discounted which would have the appended discounted values, which are half the original. So, the array returned would be [50, 100, 150].
5. There is an error at line 12, as i is not defined. This is because let makes it block-local, so it's only visible within the for loop.
6. Like at line 12, line 13 also produces an error as discountedPrice is not defined. It is also block-local, so only visible within the loop.
7. Line 14 prints the numbers 150, since it is defined at the top of the function and is not restricted by any block. It is overwrittenuntil the final loop where the value 300 is halved and is then set as the value for finalPrice.
8. Like with quesiton 4, the function also properly returns the discounted values, which are half the original. appended to the initally empty discounted array. This gives [50, 100, 150].
9. There is an error at line 11, as i is not defined. This is because let makes it block-local, so it's only visible within the for loop.
10. Line 12 prints out the number 3, since it is initially set to prices.length, which is 3.
11. This function returns [50, 100, 150], as while it is a const variable, this only means that it can't be reassigned. The functions that modify the values inside the array still work, and thus append the halved prices to the originally empty discounted array.
12. a) student.name  b) student['Grad Year']  c) student.greeting()  d) student['Favorite Teacher'].name  e) student.courseLoad[0]
