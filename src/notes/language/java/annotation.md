---
title: Annotations
category:
  - Note
tag:
  - Language
  - Java
footer: false
editLink: false
---

- Annotations provide information (_metadata_) that you need to fully describe your program to the compiler and JVM, but that cannot be expressed in Java

- Java 5 feature

- In fact, annotation is a **special interface** which extends `Annotation` interface

- Built-in annotations
  - Annotates the code (**class, method, variable**)
    - `@Override`
    - `@Deprecated`
      - Methods can still be used
    - `@SuppressWarnings()`
      - To turn off inappropriate compiler warnings
    - `@SafeVarargs`
      - Useful for variable arguments
      - Method must be `private` or `final`
    - `@FunctionalInterface`
      - Describe an interface that has only one method
  - Annotates the annotation
    - `@Retention(RetentionPolicy.CLASS)`
      - Indicates how long annotations with the annotated type are to be retained
    - `@Documented`
      - Provides support to JavaDoc
    - `@Target`
      - Indicates the target of the annotation
    - `@Inherited`
      - Indicates the annocation can be used on subclasses
    - `@Repeatable`
      - Indicates the annotation can be used multiple times

- User-defined annotations
  - ```java
    @interface MyAnno {
      String name();
      String date();
      String version() default "1.0";
    }

    @MyAnno(name="David", date="01/01/1970")
    public MyClass {}
    ```
