1. Line 9 prints out "values added: 20", as expected.
2. Line 13 prints out "final result: 20". this works without error.
3. You should not use var since it has no block scope, so line 9 will always return the same value as line 13.
4. 
