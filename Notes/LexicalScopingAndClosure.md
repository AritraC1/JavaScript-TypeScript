# Lexical scoping
Lexical scoping (also called static scoping) means that the scope of a variable is determined by its position in the source code. In other words, where a variable is defined determines where it can be accessed.

```Javascript
function outer() {
  let x = 10;

  function inner() {
    console.log(x); // inner can access x because x is defined in the outer scope
  }

  inner();
}

outer();
```

- Here, inner() can access x because x is in the lexical scope of inner().
- Lexical scope is set when the function is written, not when it is called.


# Closure
A closure is the combination of a function bundled together with references to its surrounding lexical environment. It allows the function to "remember" and access variables from its outer scope, even after that outer function has finished executing. In JavaScript, closures are created automatically whenever a function is created.

```Javascript
function outer() {
  let counter = 0;

  return function inner() {
    counter++;
    console.log(counter);
  };
}

const increment = outer(); // outer() is called, and inner() is returned
increment(); // 1
increment(); // 2
```

- Even though outer() has finished executing, the returned function inner() retains access to counter due to closure.
- This is because the function inner closed over the counter variable.

## Key Concept
| Concept        | Description                                                         |
|----------------|--------------------------------------------------------------------|
| Lexical Scope  | Determined by where variables/functions are defined.               |
| Closure        | A function that remembers the environment in which it was created. |
