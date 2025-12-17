---
title: Scala Notes
icon: devicon:scala
order: 6
category:
  - Note
tag:
  - Language
  - Scala
footer: false
editLink: false
---

## Introduction

- Features
  - It’s a high-level programming language
  - It has a concise, readable syntax
  - It’s statically-typed (but feels dynamic)
  - It has an expressive type system
  - It’s a functional programming (FP) language
  - It’s an object-oriented programming (OOP) language
  - It supports the fusion of FP and OOP
  - It runs on the JVM (and in the browser)
  - It interacts seamlessly with Java code
  - It’s used for server-side applications (including microservices), big data applications, and can also be used in the browser with Scala.js
- REPL (read-eval-print loop)
  - A command-line interpreter / a language shell
  - A simple, interactive computer programming environment that takes single user inputs (i.e. single expression), evaluates them, and returns the result to the user
  - A program written in a REPL is executed piecewise
  - Scala repl, ammonite repl
  - Command `scala` or `amm` to open it
- Scala worksheets
  - A worksheet is a Scala file that is evaluated on save, and the result of each expression is shown in a column to the right of your program
  - Worksheets use the extension `.worksheet.sc`

---

## Data and Variable Types

- **All values** have a **type** (**even for so-called primitive type**)

- Two types of variables

  - `val`
    - An immutable variable
    - You should always create a variable with `val`, unless there’s a reason you need a mutable variable
  - `var`
    - A mutable variable

- Declaring variable types

  - ```scala
    val x: Int = 1   // explicit
    val x = 1        // implicit; the compiler infers the type
    ```

  - The Scala compiler can usually infer the data type for you

  - You can always explicitly declare a variable’s type if you prefer

- `BigInt`, `BigDecimal`

  - Support all the operators you’re used to using with numeric types

- Casting

  - ```scala
    // upcast
    val b: Byte = 127
    val i: Int = b  // 127

    val face: Char = '☺'
    val number: Int = face  // 9786

    // downcast
    val x: Long = 987654321
    val y: Float = x.toFloat  // 9.8765434E8 (note that `.toFloat` is required because the cast results in precision loss)
    val z: Long = y  // Error
    ```

- ![hierarchy](/assets/image/scala/hierarchy.svg)

- `Any`

  - The supertype of all types, also called the **top type**
  - It defines certain universal methods such as `equals`, `hashCode`, and `toString`

- `Matchable`

  - Used to mark all types that we can perform pattern matching on

- `AnyVal`

  - Value types
  - `Byte`, `Int`, `Long`, `Short`, `Double`, `Float`, `Char`, `Unit`, `Boolean`
  - Default numeric types: `Int`, `Double`
  - You can append the characters `L`, `D`, and `F` (and their lowercase equivalents) to numbers to specify that they are `Long`, `Double`, or `Float` values
  - `Unit`
    - A value type which carries no meaningful information
    - There is exactly one instance of `Unit` which we can refer to as: `()`
    - If you write methods in Scala that have no return value, `Unit` is used for the same purpose as `void`

- `AnyRef`

  - Reference type
  - Correspond to `java.lang.Object`

- `Nothing`

  - A subtype of all types, also called the **bottom type**
  - There is no value that has the type `Nothing`
  - A common use is to signal non-termination, such as a thrown exception, program exit, or an infinite loop—i.e., it is the type of an expression which does not evaluate to a value, or a method that does not return normally

- `Null`

  - A subtype of all reference types
  - It has a single value identified by the keyword literal `null`
  - Currently, the usage of `null` is considered bad practice

---

## String

- Similar to Java String

- Multiline strings

  - ```scala
    val quote = """The essence of Scala:
                   Fusion of functional and object-oriented
                   programming in a typed setting."""
    ```

  - One drawback of this basic approach is that the lines after the first line are indented, and look like this:

  - ```scala
    "The essence of Scala:
                   Fusion of functional and object-oriented
                   programming in a typed setting."
    ```

  - When spacing is important, put a `|` symbol in front of all lines after the first line, and call the `stripMargin` method after the string:

  - ```scala
    val quote = """The essence of Scala:
                   |Fusion of functional and object-oriented
                   |programming in a typed setting.""".stripMargin
    ```

  - ```scala
    "The essence of Scala:
    Fusion of functional and object-oriented
    programming in a typed setting."
    ```

- String Interpolation

  - String interpolation provides a way to use variables inside strings

  - The `s` Interpolator

    - Prepending `s` to any string literal allows the usage of variables directly in the string

    - ```scala
      val name = "James"
      val age = 30
      println(s"$name is $age years old")   // "James is 30 years old"
      println(s"2 + 2 = ${2 + 2}")   // "2 + 2 = 4"
      val x = -1
      println(s"x.abs = ${x.abs}")   // "x.abs = 1"
      // escape $ ""
      println(s"New offers starting at $$14.99")   // New offers starting at $14.99
      println(s"""{"name":"James"}""")     // {"name":"James"}
      ```

  - The `f` Interpolator

    - Prepending `f` to any string literal allows the creation of simple formatted strings, similar to `printf` in other languages

    - Typesafe

    - If there is no `%` character after a variable definition a formatter of `%s` (`String`) is assumed

    - ```scala
      val height = 1.9d
      val name = "James"
      println(f"$name%s is $height%2.2f meters tall")  // "James is 1.90 meters tall"
      // escape %
      println(f"3/19 is less than 20%%")  // "3/19 is less than 20%"
      ```

  - The raw Interpolator

    - The raw interpolator is similar to the `s` interpolator except that it performs no escaping of literals within the string

    - ```scala
      scala> raw"a\nb"
      res1: String = a\nb
      ```

  - Custom Interpolators

## Control Structures

## OOP

- ```scala
  // class
  case class Student(var rollno : Int = 1, var name : String = "John", var marks : Int = 90) {
    // method
    def show() = {
      println("Hi");
    }

    def >(s : Student) : Boolean = marks > s.marks
  }

  // objects
  val s1 = Student(marks = 80)
  val s2 = Student(name = "David")

  s1.show()
  s1 > s2
  ```

-

## Method

- **Everything is a method** (**No operators**)

  - ```scala
    1 + 2
    // + is actually a method
    1.+(2)
    ```

- foo

---

## List and Lambda Expression

- ```scala
  val nums = List(1, 2, 3, 4, 5, 6)
  for (n <- nums) println(n)
  nums.foreach{ (n : Int) => println(n) }

  nums.reverse	// reverse list, return a new list
  nums.drop(2).take(2)	// remove first 2 elements, take next 2 elements

  nums drop 2	// also valid

  nums.head
  nums.tail

  nums.filter(n => n > 1)

  nums.partition(n => n > 2)
  ```

- ```scala
  // tuple
  // in scala we can return multiple values
  val parts = nums.partition(n => n > 2)

  val p1 = parts._1
  val p2 = parts._2

  // or
  val (p1, p2) = nums.partition(n => n > 2)
  ```

- ***
