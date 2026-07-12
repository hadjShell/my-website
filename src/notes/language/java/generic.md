---
title: Generics
category:
  - Note
tag:
  - Language
  - Java
footer: false
editLink: false
---

- One of the most significant change in Java SE5

- The concept of **parameterized types**: you tell what type you want to use, and it takes care of the details

- ```java
  // generic class or interface
  public class ClassName<T> {}
  public interface InterfaceName<A, B, C, D> {}

  // generic methods
  public <T> void func(T x) {}
  ```

- If you don't specify the type explicitly when declaring the instance, it will be an `Object` type

- Generics class, generics interface, generics method

- **Static generic method cannot use the generic type declared by its class because that type is only accessible after instantiation**

- Bounds
  - Allow you to place constraints on the parameter types that can be used with generics

  - ```java
    class A {}
    class B extends A {}

    // always extends whenever A is a class or an interface
    class Test<T extends A> {}

    public class Main {
      public static void main(String[] args) {
        // both allowed
        Test<A> t = new Test<>();
        Test<B> t = new Test<>();
      }
    }
    ```

- Wildcard
  - Type arguments of parameterized types

  - ```java
    // upper bound
    ? extends B
    // lower bound
    ? super B
    ```

  - ```java
    class Test {
        static void printCollection(Collection<?> c) {
                                    // a wildcard collection
            for (Object o : c) {
                System.out.println(o);
            }
        }

        public static void main(String[] args) {
            Collection<String> cs = new ArrayList<String>();
            cs.add("hello");
            cs.add("world");
            printCollection(cs);
        }
    }
    ```

  - If **the type parameter is only used in method signature**, in the absence of such interdependency between the type(s) of the argument(s), the return type and/or throws type, generic methods are considered bad style, and wildcards are preferred

- Java generics are implemented using _erasure_, which means that any specific type information is erased when you use a generic
  - ```java
    // This is not allowed
    T[] t = new T[size]; // compile error

    T[] t = (T[]) new Object[size]; // no error
    ```

- Erasure is a compromise in the implementation of Java generics, reification would be a better choice if generics had been part of Java 1.0

- [Erasure ensures migration compatibility](https://docs.oracle.com/javase/specs/jls/se8/html/jls-4.html#jls-4.7)
