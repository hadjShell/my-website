---
title: OOP
category:
  - Note
tag:
  - Language
  - Java
footer: false
editLink: false
---

## Classes and Objects

- Class is the blueprint, objects are the instances of their class

- Class - fields and methods

  Object - properties and behaviors

- Constructor
  - A special method is required to create a new instance of the class
  - No return type
  - Every objects has a default constructor
  - Constructors can be overloaded, using `this` keyword to overload to avoid duplication
  - `this()` must be the first statement in the overloaded constructor body
  - If a class doesn't explicitly declare any constructor, Java compiler automatically provides a no-argument constructor. This default constructor calls the class parent's no-argument constructor, or the `Object` constructor if the class has no parent. **If the parent doesn't have no-argument constructor, compiler will reject the program.**
  - It's good to always define a default constructor

- The `getter` and `setter` can also have additional validations instead of just setting or getting the fields values

- Reference vs. Object
  - All other types which are not one of the primitive types are reference types
  - References --- pointers
  - The only operators allowed for reference type are assignment via `=` and equality comparison via `==` and `!=` (Strings can use `+`, `+=`)
  - `instance of` operator: verify that an particular object is of a certain type
    - Typically used before performing a type casting

  - `new` operator instantiates a class by allocating memory for a new object and returning a reference to that memory
  - In Java, there is no way to access an object directly (_no pointer_), everything is done using a reference

- `static` keyword
  - Fields that have `static` modifier are called static fields or class variables
  - They are associated with the class, rather than with any object. Every instance of the class shares a class variable, which is in one fixed location in memory
  - `static` methods can't access instance methods and instance variables directly, and can't use `this` keyword
  - If a method doesn't use instance variables that method should be declared as a static method
  - Referring to static fields or methods with an object instance is not encouraged
  - **`static` block**: a code block that will be executed before the creation of any object of that class

- `final` keyword
  - Final variables
    - `final` means a value cannot be changed **after** initialisation at run-time
      - Blank finals -> a final field inside a class can be different from each other, and yet it remains its immutablility

    - `static final` means compile-time constant

  - Final arguments
    - Inside the method you cannot change the argument

  - Final methods
    - Prevent the method being overridden by the subclass
    - Any private methods in a class are implicitly `final`

  - Final classes
    - Prevent the class from being inherited

## Reusing classes

### Inheritance

- **"is-a"** relationship

- `extends`

- Excepting `Object`, every class has one and only direct superclass

- Inheritance chain

- A subclass inherits all the members (fields, methods, and nested classes) from its super class

- A subclass doesn't "inherit" (cannot directly access) the `private` members of its parent class

  > [A great discussion about this topic](https://www.zhihu.com/question/63183685)

- Values of the inheritance:
  - To handle the complexity of the large project
  - Keep common behaviors in one class
  - Split different behaviors into separate classes
  - Keep all of the objects in a single data structure

- `this` vs. `super`
  - `super` is used to access/call the parent class members
  - `this` is used to access/call the current class members
  - Both of them can be used anywhere in a class except static areas, any attempt to do so will lead to compile-time errors
  - `this` is commonly used with constructors and setters
  - `super` is commonly used with method overriding
  - `this()` call a constructor from another overloaded constructor in the same class
  - `super()` call a parent constructor
  - **Java compiler puts a default call to `super()` if we don't add it**, and it's always the no-argument `super` which is inserted by compiler
  - A constructor can have a call to `super()` or `this()` but never both

- **Method overloading vs. method overriding**
  - Method overloading means providing two or more separate methods in a class with the same name but different parameters

  - We can overload static and instance methods

  - Overloading rules
    - Methods must have the same method name
    - Methods must have different parameters
    - If methods follow the rules above then they may or may ont
      - Have different return types
      - Have different access modifiers
      - Throw different checked or unchecked exceptions

  - Method overriding means defining a method in a child class that already exists in the parent class with same signature

  - Overriding rules
    - It must have same name and same arguments

    - Return type can be a subclass of the return type in the parent class

      > Covariant return types

    - We can't override static methods only instance methods

    - Constructors and private methods cannot be overridden

    - Methods that are final cannot be overridden

    - It can't have a lower access modifier

    - Must not throw a new or broader checked exception

### Composition

- **"has-a"** relationship
- Use class type variables as fields
- Consider to use composition prior to inheritance

## Encapsulation

- Separate the implementation and the interface

## Polymorphism

- Compile Time Rules
  - Compiler **ONLY** knows reference type
  - Can only look in reference type class for method
  - Outputs a method signature
- Runtime Rules
  - Follow exact **runtime type** of object to find the method
  - Must match compile time method signature to appropriate method in actual object's class
