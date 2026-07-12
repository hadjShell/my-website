---
title: Lambda Expression
category:
  - Note
tag:
  - Language
  - Java
footer: false
editLink: false
---

- Java 8 feature

- Anonymous function whose definition is not bound to an identifier

- To replace anonymous inner class

- Only works for **`FunctionalInterface`**

- ```java
  @FunctionalInterface
  interface MyLambda {
    void display(String s);
  }

  public class Main {
    public static void main(String[] args) {
      MyLambda m = (s) -> {
        System.out.println("Hello " + s);
      };
      m.display("David");
    }
  }
  ```

- Acting as an object

- Local variables referenced from a lambda expression must be final or effectively final (not modified)

- Instance variables can be accessed and modified

- Use cases
  - `Runnable`
  - `Comparator`
  - `Listener`
  - `Collections`

> Very similar to arrow function in JavaScript
>
> [Oracle tutorial](https://www.oracle.com/webfolder/technetwork/tutorials/obe/java/lambda-quickstart/index.html)

- Method references
  - Sometimes, a lambda expression does nothing but call an existing method. In those cases, it's often clearer to refer to the existing method by name

  - | Kind                                                                        | Syntax                                 | Examples                                                         |
    | --------------------------------------------------------------------------- | -------------------------------------- | ---------------------------------------------------------------- |
    | Reference to a static method                                                | `ContainingClass::staticMethodName`    | `Person::compareByAge` `MethodReferencesExamples::appendStrings` |
    | Reference to an instance method of a particular object                      | `containingObject::instanceMethodName` | `myComparisonProvider::compareByName` `myApp::appendStrings2`    |
    | Reference to an instance method of an arbitrary object of a particular type | `ContainingType::methodName`           | `String::compareToIgnoreCase` `String::concat`                   |
    | Reference to a constructor                                                  | `ClassName::new`                       | `HashSet::new`                                                   |
