---
title: Nested Classes
category:
  - Note
tag:
  - Language
  - Java
footer: false
editLink: false
---

- Place a class definition within another class definition
- Nested classes are divided into two categories: non-static and static
  - Non-static nested classes are called _inner classes_
  - Nested classes that are declared `static` are called _static nested classes_

## Inner Classes

- Inside the outer class, inner class can access the members of outer class directly (even if it's `private`)

- Inside the outer class, you can create inner class objects

- If you want to make an object of the inner class anywhere except from within a non-static method of the outer class, you must specify the type of the object as `Outer.Inner`

  ```java
  // Inner class is public
  Outer outer = new Outer();
  Outer.Inner inner = outer.new Inner();
  ```

- Produce the reference to the outer class object within the inner class definition: `Outer.this`

- The inner class will be compiled to `Outer$Inner.class`

- Inner class cannot have `static` members or nested classes

### Local and Anonymous Inner Classes

- Local inner class: an inner class defined inside a code block, typically in a method
  - A local class can access local variables and parameters of the enclosing block that are final or _effectively final_

- Anonymous inner class: an inner class defined at the time of creation of itself
  - In other words, we can say that it a class without the name and can have only one object that is created by its definition

  - Useful when you want a class inheriting from a superclass or implementing an interface which only used in a specific method

  - ```java
    interface Eatable {
     	void eat();
    }
    class TestAnnonymousInner1 {
       public static void main(String args[]) {
       		Eatable e = new Eatable() {
        		public void eat() {System.out.println("nice fruits");}
       		};
       		e.eat();
       }
    }
    ```

## Static Nested Classes

- The static member of outer class

- In effect, a static nested class is behaviorally a top-level class that has been nested in another top-level class for packaging convenience

- You instantiate a static nested class the same way as a top-level class

  ```java
  StaticNestedClass staticNestedObject = new StaticNestedClass();
  ```

## Why Nested Classes?

- It is a way of logically grouping classes that are only used in one place
- It increases encapsulation
- It can lead to more readable and maintainable code
- Nature of the problem
