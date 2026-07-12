---
title: Basic Syntax and Concepts
category:
  - Note
tag:
  - Language
  - Java
footer: false
editLink: false
---

- Java is case-sensitive

### Variables

- Three types of variables
  - **Fields** - member variables in a class

  - **Local variables** - variables in a method or block of code

  - **Parameters** - variables in method declarations

    > ==NOTE==: No global variables in Java

- Data type
  - _Primitive data type_
    - `boolean`, `byte`, `short`, `int`, `long`, `float`, `double`, `char`
    - Overflow and underflow
    - `BigDecimal` class overcomes the precision issues of the floating number types
    - `char` in Java is **2 bytes** to allow you to store Unicode characters
      - e.g. `'\u0040' == 'A'`
  - _Class data type_
  - Casting

- Declaration and Initialisation

- Literals
  - **Good habit**: add appropriate data type suffix

### Operators

- Operator and operand
- Mathematical operators
  - Only overriding operator in Java: `+`, `+=`
    - Other data type variables will be automatically casted to a String
- Assignment operator
- Abbreviating operators
- `++`, `--`
- Relational operators
- Logical operators
- Bitwise operators
- Ternary operator
- Casting operators
- `,`
- Operator precedence

### Expressions and Statements

- Expression is formed by combining variables, literals, method return values and operators
- Statement is an executable line or code block
  - Declaration statement
  - Expression statement
    - Assignment expressions
    - `++`, `--`
    - Method calls
    - Object creation

  - Control flow statement

- Code organisation: whitespace and indentation

### Flow control

- `if-else`
- `switch`
  - `String` can be used
  - [Enhanced switch](https://nipafx.dev/java-switch/)
- `while`
- `do while`
- `for`
- `foreach`

### Method

- Function in Java

- Java method is **pass-by-value**

- A parameter is a variable in a method definition. When a method is called, the arguments are the data you pass into the method's parameters

- Method Overloading
  - Methods have the same name, but take a unique list of argument types
  - Overloaded methods **CANNOT** differ only by return type
  - Type promotion
    - Can cause compile time error if there are more than one methods matched
- Variable Arguments
  - Variable numbers of inputs

  - **Must** be the last parameter

  - ```java
    void show(int... x) {
      for (int e : x)
        System.out.println(e);
    }

    // All valid
    show();
    show(10);
    show(10, 20);
    show(10, 20, 30);
    int[] x = {1, 2, 3};
    show(x);
    ```

- Command-line Arguments
  - `String[] args` in `main()`
