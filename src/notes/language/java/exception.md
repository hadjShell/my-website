---
title: Exception Handling
category:
  - Note
tag:
  - Language
  - Java
footer: false
editLink: false
---

## Type of Errors

- Syntax error
  - Identified by compiler
- Logical error
  - Identified by debugging
- **Runtime error**
  - Bad inputs
  - Unavailable resources
  - Etc.

## `Exception` Class

- Methods
  - `String getMessage()`

  - `String toString()`

  - `void printStackTrace()`
    - Prints this throwable and its backtrace to the standard error stream

- ```mermaid
  graph TD
  A[Object] --> B[Throwable]
  B --> C[Exception]
  B --> D[Error]
  C --> E[ClassNotFoundException]
  C --> F[IOException]
  C --> G[InterruptedException]
  R --> H[NumberFormatException]
  C --> R[RuntimeException]
  R --> I[ArithmeticException]
  R --> J[IndexOutOfBoundException]
  R --> K[NullPointerException]
  D --> L[StackOverflowError]
  D --> M[VirtualMachineError]
  D --> N[OutOfMemoryError]
  ```
- Error
  - Error cause the program to exit since they are not recoverable

  - Considered as unchecked exceptions

- **Checked exceptions**: you must handle them _at compile time_

- `RuntimeException`

- **Unchecked exceptions**: you don't have to handle them
- They’re always **thrown automatically** by Java and you don’t need to include them in your exception specifications
- If a `RuntimeException` gets all the way out to `main( )` **without being caught**, `printStackTrace( )` is called for that exception as the program exits; the output is reported to `System.err`

- Creating your own exceptions
  - ```java
    class MinBalanceException extends Exception {
      public String toString() {
        return "Minimal balance should be 5000. Try again!"
      }
    }
    ```

## How to Handle Exceptions

- ```java
  try {
    // logic that might generate exceptions
  } catch () {
    // handling exception if it occurs
  } finally {
    // activities happen every time even if a method is returned (executed before return)
    // cleanup
  }
  ```

- There can be zero, one, or multiple `catch` blocks

- `try catch` block can be nested

- `finally` block is necessary when you need to set something other than memory (garbage collector is responsible for releasing heap memories) back to its original state (releasing resources)

> Objects in heap are also resources, the real composition of the program are the references on stack

- The finally block will not be executed if program exits (either by calling `System.exit()` or by causing a fatal error that causes the process to abort)

- **Try with resources**
  - Java 7 feature

  - Support multiple resources, separated by `;`

  - ```java
    try (Scanner scanner = new Scanner(new File("test.txt"))) {
        while (scanner.hasNext()) {
            System.out.println(scanner.nextLine());
        }
    } catch (FileNotFoundException fnfe) {
        fnfe.printStackTrace();
    }

    // no finally block
    // For objects which implement AutoClosable interface
    ```

- Java supports termination exception handling instead of resumption

- **Throwing an exception**
  - `throw new Exception("");`
  - Exceptions can be rethrown
    - Happen in the `catch` block
    - _Exception chaining_: Often you want to catch one exception and throw another, but still keep the information about the originating exception
  - Exception propagation
    - Exception bubbles up through the call stack if it is not caught

> There is a pitfall in Java Exception implementation: lost exception
>
> `return` inside `finally` block

## Exception Specification

- Politely tell the client programmer what exceptions the method throws, so the client programmer can handle them
- `throws`
- Unchecked exceptions can be omitted
- The "exception specification interface" for a particular method may narrow during inheritance and overriding, but it may not widen

> [A great article by Barry Ruzek around this topic](https://www.oracle.com/technical-resources/articles/enterprise-architecture/effective-exceptions-part1.html)
