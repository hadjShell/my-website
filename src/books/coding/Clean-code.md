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
Master programmers think of systems as stories to be told rather than programs to be written.

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
  - Function should either do something or answer something, but not both. **Either it should change the state of an object, or it should return some information about that object**.
  - If a function has steps towards to complete one task that are one level blow the stated name of the function, then the function is doing one thing.
  - One way to know that a function is doing more than one thing is if you can extract another function from it with a name that is not merely a restatement of its implementation.
  - Read code from top to bottom should feel like reading a set of to do paragraphs.

- **Don't Repeat Yourself**

  - Duplication may be the root of all evil in software.
    > It would appear that since the invention of the subroutine, innovations in software development have been an ongoing attempt to eliminate duplication from our source code.

- `switch`

  - It's hard to make a `switch` statement that does one thing, not violating SRP and OCP.
  - General rule for `switch`: _`switch` can be tolerated if the appear only once, are used to create polymorphic objects, and are hidden behind an inheritance relationship so that the rest of the system can't see them._ E.g., to bury them in an `AbstractFactory`.

- **Arguments**

  - The ideal number of arguments is 0 (_niladic_); next is 1 (_monadic_), followed by 2 (_dyadic_). 3 (_triadic_) should be avoided.
  - Arguments are hard for conceptual processing and testing.
  - **Common monadic forms**
    - **Ask a question about the argument**. E.g., `boolean isFileExisted("myFile")`.
    - **Operate on that argument, transform it into something else and return it**. E.g., `InputStream openFile("myFile")`.
    - **Event listener**: no output, function uses the event of argument to alter the state of the system.
  - **Passing a boolean into a function is a truly terrible practice**, violating SRP that it does one thing if the flag is true and another if the flag is false.
  - When a function seems to need more than 2 or 3 arguments, it's likely that **some of those arguments ought to be wrapped into a class of their own**.
  - Sometimes we want to pass a variable number of arguments into a function. If they are all treated identically, then they are equivalent to a single argument of `List`. E.g., `String.format(String format, Object... args)`.
  - Anything that forces you to check the function signature is equivalent to a double-take. It's an cognitive break and should be avoided.

- **Error Handling**

  - Exceptions are preferred to returning error codes, because when you return an error code, you create the problem that the caller must deal with the error immediately. But the error processing code can be seperated from the working logic with exceptions.
  - `try/catch` blocks are ugly in their own way. **It's better to extract the bodies of the `try/catch` blocks into functions of their own**. E.g.,

    ```java
    public void delete(Page page) {
      try {
        deletePageAndAllReferences(page);
      } catch (Exception e) {
        logError(e);
      }
    }

    private void deletePageAndAllReferences(Page page) throws Exception {
      deletePage(page);
      registry.deleteReference(page.name);
      config.deleteKey(page.name.makeKey());
    }

    private void logError(Exception e) {
      logger.log(e.getMessage());
    }
    ```

- **Structured Programming**
  - Every function, and every block within a function, should have **one entry and one exit**, i.e., there should be only one `return`, no `break` or `continue`, and never `goto`.
  - If your keep functions small, then occational multiple `return`, `break`, `continue` does no harm and can sometimes be better.

Writing functions is an iterative process. Just be patient and do the refactoring work.

### Comments

### Formatting
