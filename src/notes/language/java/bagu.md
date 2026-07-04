---
title: Bagu
category:
  - Note
tag:
  - Language
  - Java
footer: false
editLink: false
---

## What are the basic principals of OOP?

The four main OOP principles are abstraction, encapsulation, inheritance, and polymorphism.

Abstraction means for the class design you show only the essential features and hide unnecessary details. For example, the Student class should only include information like student number and scores etc., not the weight.

Encapsulation means you keep data private inside a class and expose it through public methods.

Inheritance means one class can reuse and extend another class's behavior.

Polymorphism means the same method of the parent class can behave differently in the subclasses. For example, a Vehicle class can be extended by Car and Bike, and each of them can implement drive() differently.

## What happened when you create an array object in Java?

If we want to create an array object in Java, first we have to call the constructor. It will assign a continuous memory on heap, which stores references to the element objects. And then it returns a reference to the actual array object on heap, and that reference is stored on stack.
