---
title: String
category:
  - Note
tag:
  - Language
  - Java
footer: false
editLink: false
---

- String is an object
- String is immutable

## Creating String

- `String str = "Hello world!";`
  - Point to an object in **string pool**
- Constructors
  - `String(char [])`
  - `String(byte [])`
  - `String(String)`
  - Point to an object in **heap**

## Common String Methods

- `int length()`
- `String toLowerCase()`
- `String toUpperCase()`
- `String trim()`
- `String substring(int begin)`
- `String substring(int begin, int end)`
  - `[begin, end)`

- `String replace(char old, char new)`
- `String replaceAll(String regex, String replacement)`
- `boolean startsWith(String s)`
- `boolean endsWith(String s)`
- `char charAt(int index)`
- `int indexOf(char c)`
- `int indexOf(String s)`
- `int lastIndexOf(char c)`
- `boolean equals(String s)`
- `boolean equalsIgnoreCase(String s)`
- `int compareTo(String s)`
  - Compares two strings lexicographically
- `boolean matches(String regex)`
- `String[] split(String regex, int limit)`
- `String[] split(String regex)`
  - This method works as if by invoking the two-argument [`split`](<https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html#split(java.lang.String,int)>) method with the given expression and a limit argument of zero
  - Trailing empty strings will therefore be discarded

- `static String String.join(CharSequence delimiter, CharSequence... elements)`
- `char[] toCharArray()`
- `static String String.valueOf(int i)`
  - Convert other data type value to a string

## Regualr Expression

![regex-cheatsheet](/assets/image/java/regex-cheatsheet.jpg)

### StringBuffer & StringBuilder

- `StringBuffer`
  - "Mutable String"
  - `append()`, `insert()`
  - Initially will have a size of 16 capacity
  - It is thread-safe
- `StringBuilder`
  - Basically same as `StringBuffer`
  - It is not thread-safe, but faster
  - `+, +=` is actually implemented by `StringBuilder`, one operator creates a new `StringBuilder` object

## Printing

- ```java
  // Only take one parameter
  System.out.print()
  System.out.println()

  // Formatted output
  System.out.printf()
  System.out.format()
  ```
