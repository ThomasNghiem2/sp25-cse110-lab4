# Part 1
1. Line 9 prints out "values added: 20", as expected.
2. Line 13 prints out "final result: 20". this works without error.
3. You should not use var since it has no block scope, so line 9 will always return the same value as line 13.
4. Line 9 prints out "values added: 20", as expected.
5. Line 13 returns an error, as let is block local, so it is only visible within the if statement. This means that at line 13, result is not defined.
6. Nothing is printed and the code returns an error because at line 7 a const variable is attempted to be changed, which is not allowed.
7. Nothing is printed and the code returns an error because at line 7 a const variable is attempted to be changed, which is not allowed.
