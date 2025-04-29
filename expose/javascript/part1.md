1. Line 9 prints out "values added: 20", as expected.
2. Line 13 prints out "final result: 20". this works without error.
3. You should not use var since it is hoisted, so if add is false, then line 13 would still execute without error as it is declared but not assigned a value.
4. 
