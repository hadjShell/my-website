---
title: Clean Code - Robert Martin
category:
  - Reading
tag:
  - Coding Style
  - 术
footer: false
editLink: false
---

## Why Clean Code is Important?

Good programmers are like poets writing their code guided by their "code sense".

## Guideline

This section gives a bunch of guidelines on different sectors of programming.

### Names

- **Use Intention-Revealing Names**

  - The names of a variable, function, or class, should answer why it exists, what it does, and how it does.

  - If a name requires a comment, then it doesn't reveal its content, e.g.

  - ```java
    // bad style
    int d;	// elapsed time in days

    // good style
    int elapsedTimeInDays;
    ```

  - _The problem isn't the simplicity of the code but implicity of the code._

  - Classes and objects should have **noun and noun phrase names**

  - Methods should have **verb or verb phrase names**, and predicates should be named for **their value and prefixed with `get`, `set`, and `is`**

- **Avoid Disinformation**

  - Be aware of using names which vary in small ways
  - Using inconsistent spelling is disinformation

- **Make Meaningful Distinctions**

  - If names must be different, then they should also mean something different.
  - Noise word are redundant

- **Use Searchable Names**

  - Constants should be given names instead of using magical numbers everywhere

- **Avoid Encoding**

  - History lesson: in old days, programmers are forced to encode type or scope information into names, e.g.
    - Fortan forced encodings by making the first letter a code for type
    - Member variables were encoded with a `m_` prefix
    - Interfaces were encoded with a `I` prefix
  - Now we don't use this style anymore

- **Consistent Style**

  - Pick one word for one abstract concept and stick with it
  - Avoid using the same word for two purposes

- **Use Solution/Problem Domain Names**

  - Feel free to use CS terms, algorithm names, pattern names, math terms, etc.
  - Otherwise, use the name from the problem domain
  - _Separating solution and problem domain concepts is part of the job of a good programmer and designer._

Choosing good names requires good descriptive skills and a shared cultural background. Also, don't be afraid of renaming things. It will pay off in short term and continue to pay in the long run.

### Functions

- **Small!**
  - The first rule of functions is that they should be small. The second rule of functions is that they should be smaller than that.
- **Do One Thing**
  - **Functions should do one thing. They should do it well. They should do it only.**
  - If a function has steps towards to complete one task that are one level blow the stated name of the function, then the function is doing one thing.
  - One way to know that a function is doing more than one thing is if you can extract another function from it with a name that is not merely a restatement of its implementation.
-

### Comments

### Formatting
