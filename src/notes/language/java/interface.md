---
title: Interfaces and Abstract Classes
category:
  - Note
tag:
  - Language
  - Java
footer: false
editLink: false
---

- Interfaces and abstract classes provide a more structured way to separate interface from implementation
- Inheritance is specialisation; interface is generalisation

## Interfaces

- `implements`
- An interface is a contract of what the classes **can** do
- An abstract class taken to the extreme,thus more flexibility (complete decoupling)
- Refer to different types of objects with one identical interface type
  - Generalisation
  - Capability of putting different types of objects into one data structure
  - Less effort for code alteration
- One class can implement several interfaces
  - "Multiple inheritance": A class can be upcast to more than one base type with interfaces
- Interface cannot be instantiated
- Methods in interfaces are implicitly `public`
- Fields in interfaces are implicitly constant (`public static final`)
- SInce Java 8 interface can have `static` methods
- An interface can extend another interface
- Interface can have `default` methods which can have method body
  - Java 8 feature
  - Make refactoring interface easier
  - Java 9 allows `private` methods in interface that can be used in `default` methods inside interface
- Type of Interface
  - Normal interface
  - **Functional Interface**
    - Has only one abstract function

  - Marker Interface
    - Has no member fields or methods
    - Eg. `Serializable`, `Cloneable`, `RandomAccess`

## Abstract Classes

- An abstract class is a class that is declared `abstract`
- Contain a mix of methods with or without implementation
- An abstract method is a method that is declared `abstract` without an implementation
- Abstract class cannot be instantiated, but can be subclassed
- When an abstract class is subclassed, the subclass usually provides implementations for all of the abstract methods in its superclass. However, if it doesn't, then the subclass must also be declared `abstract`
- A subclass of a non-abstract superclass can be `abstract`

## Interfaces vs. Abstract Classes

- Abstract Classes
  - Purpose is to **provide a common definition of a base class that multiple derived classes can share**
  - Share code among several **closely related classes**
  - Expect classes that extend your abstract class to have many common methods or fields or required access modifier other than `public`
  - Want to declare non static or non final fields
  - Provide default implementations of certain methods but leave other methods open to being overridden
- Interfaces
  - Purpose is **abstraction**
  - Expect unrelated classes will implement your interface
  - Want to specify the behavior of a particular data type, but not concern about who implements its behavior
  - Want to separate different behaviors
