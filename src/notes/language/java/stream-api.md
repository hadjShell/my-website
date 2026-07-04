---
title: Stream API
category:
  - Note
tag:
  - Language
  - Java
footer: false
editLink: false
---

Stream in Java was introduced in Java 8 to simplify the processing of collections and data. It provides a modern and efficient way to perform operations on groups of objects using a functional programming approach. Streams help developers write cleaner, shorter, and more readable code for data processing tasks.

- Allows processing of data **without modifying the original collection**.
- Supports parallel processing to improve performance on large datasets.
- Reduces the need for lengthy loops and temporary variables in code.

## Stream Model

The syntax for declaring a Java Stream: `Stream<T> stream;`

The core mental model is: **a stream pipeline has a source, zero or more intermediate operations, and one terminal operation. The pipeline only actually runs when a terminal operation is called**.

The features of Java streams are mentioned below:

- A Stream is not a data structure; it just takes input from Collections, Arrays or I/O channels.
- Streams do not modify the original data; they only produce results using their methods.
- A stream does not store elements itself. It stores a pipeline of operations connected to a data source.
- Intermediate operations (like filter, map, etc.) are lazy and return another Stream, so you can chain them together.
- A terminal operation (like collect, forEach, count) ends the stream and gives the final result.

## Stream Operation

There are two types of Stream operations.

### Intermediate Operations

Intermediate operations are the operations that transform a stream into another stream. These operations are lazy in nature, meaning they do not execute until a terminal operation is called.

| Function        | What it does                                     | How to use it                                               | Notes                                                      |
| --------------- | ------------------------------------------------ | ----------------------------------------------------------- | ---------------------------------------------------------- |
| `filter()`      | Keeps elements that match a condition.           | `users.stream().filter(User::isActive)`                     | Common for active users, paid orders, valid records.       |
| `map()`         | Transforms each element into another value/type. | `users.stream().map(User::getName)`                         | Common for entity → DTO or object → field.                 |
| `flatMap()`     | Flattens nested streams/lists into one stream.   | `orders.stream().flatMap(o -> o.getItems().stream())`       | Use for orders → items, users → roles, courses → students. |
| `distinct()`    | Removes duplicate elements.                      | `names.stream().distinct()`                                 | For objects, depends on `equals()` and `hashCode()`.       |
| `sorted()`      | Sorts elements.                                  | `users.stream().sorted(Comparator.comparing(User::getAge))` | Use `.reversed()` for descending order.                    |
| `limit()`       | Keeps only the first `n` elements.               | `users.stream().limit(10)`                                  | Common for top N results.                                  |
| `skip()`        | Skips the first `n` elements.                    | `users.stream().skip(10)`                                   | Often used with `limit()` for pagination.                  |
| `peek()`        | Looks at elements during the pipeline.           | `stream.peek(System.out::println)`                          | Mainly for debugging. Avoid business logic here.           |
| `mapToInt()`    | Converts stream to `IntStream`.                  | `users.stream().mapToInt(User::getAge)`                     | Use before `sum()`, `average()`, `max()`, etc.             |
| `mapToLong()`   | Converts stream to `LongStream`.                 | `orders.stream().mapToLong(Order::getAmount)`               | Useful for large numeric fields.                           |
| `mapToDouble()` | Converts stream to `DoubleStream`.               | `users.stream().mapToDouble(User::getSalary)`               | Useful for numeric aggregation.                            |
| `parallel()`    | Converts stream to parallel stream.              | `users.stream().parallel()`                                 | Use carefully; avoid shared mutable state.                 |
| `sequential()`  | Converts stream back to sequential stream.       | `stream.sequential()`                                       | Rarely needed in normal projects.                          |

### Terminal Operations

Terminal operations produce a result or side effect. Once a terminal operation runs, all intermediate operations are triggered to execute, the stream is consumed and cannot be reused.

| Function              | What it does                                             | How to use it                                               | Notes                                              |
| --------------------- | -------------------------------------------------------- | ----------------------------------------------------------- | -------------------------------------------------- |
| `collect()`           | Collects stream result into a collection/map/string/etc. | `stream.collect(Collectors.toList())`                       | Most common terminal operation before Java 16.     |
| `toList()`            | Collects stream into a list.                             | `users.stream().filter(User::isActive).toList()`            | Java 16+. Returned list is unmodifiable.           |
| `forEach()`           | Performs an action for each element.                     | `users.stream().forEach(System.out::println)`               | Avoid heavy side effects.                          |
| `count()`             | Counts elements.                                         | `users.stream().filter(User::isActive).count()`             | Returns `long`.                                    |
| `max()`               | Finds maximum element.                                   | `users.stream().max(Comparator.comparing(User::getSalary))` | Returns `Optional<T>`.                             |
| `min()`               | Finds minimum element.                                   | `users.stream().min(Comparator.comparing(User::getAge))`    | Returns `Optional<T>`.                             |
| `findFirst()`         | Finds first element in stream order.                     | `users.stream().filter(User::isActive).findFirst()`         | Returns `Optional<T>`. Use when order matters.     |
| `findAny()`           | Finds any matching element.                              | `users.stream().filter(User::isActive).findAny()`           | More useful in parallel streams.                   |
| `anyMatch()`          | Checks if at least one element matches.                  | `users.stream().anyMatch(User::isActive)`                   | Short-circuiting operation.                        |
| `allMatch()`          | Checks if all elements match.                            | `users.stream().allMatch(User::isActive)`                   | Good for validation.                               |
| `noneMatch()`         | Checks if no elements match.                             | `users.stream().noneMatch(u -> u.getAge() < 18)`            | Good for validation.                               |
| `reduce()`            | Combines elements into one result.                       | `nums.stream().reduce(0, Integer::sum)`                     | Prefer built-in collectors when possible.          |
| `sum()`               | Sums primitive stream values.                            | `users.stream().mapToInt(User::getAge).sum()`               | Only on `IntStream`, `LongStream`, `DoubleStream`. |
| `average()`           | Calculates average of primitive stream values.           | `users.stream().mapToInt(User::getAge).average()`           | Returns `OptionalDouble`.                          |
| `summaryStatistics()` | Gets count, min, max, sum, average.                      | `users.stream().mapToInt(User::getAge).summaryStatistics()` | Useful for reporting.                              |
| `iterator()`          | Returns an iterator from the stream.                     | `stream.iterator()`                                         | Rare in normal business code.                      |
| `toArray()`           | Converts stream to array.                                | `stream.toArray(String[]::new)`                             | Useful when API requires arrays.                   |

### Common `Collectors` used with `collect()`

These are not stream operations directly, but they are very common terminal-collection helpers.

| Collector                     | What it does                           | How to use it                                                              | Notes                                              |
| ----------------------------- | -------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------- |
| `Collectors.toList()`         | Collects into list.                    | `stream.collect(Collectors.toList())`                                      | Common before Java 16.                             |
| `Collectors.toSet()`          | Collects into set.                     | `stream.collect(Collectors.toSet())`                                       | Removes duplicates.                                |
| `Collectors.toMap()`          | Collects into map.                     | `users.stream().collect(Collectors.toMap(User::getId, u -> u))`            | Add merge function if duplicate keys are possible. |
| `Collectors.groupingBy()`     | Groups by key.                         | `users.stream().collect(Collectors.groupingBy(User::getDepartment))`       | Produces `Map<K, List<V>>`.                        |
| `Collectors.partitioningBy()` | Splits into `true` and `false` groups. | `users.stream().collect(Collectors.partitioningBy(User::isActive))`        | Produces `Map<Boolean, List<T>>`.                  |
| `Collectors.counting()`       | Counts elements in a group.            | `groupingBy(User::getDept, Collectors.counting())`                         | Returns `Long`.                                    |
| `Collectors.summingInt()`     | Sums integer field in a group.         | `groupingBy(Item::getProductId, Collectors.summingInt(Item::getQuantity))` | Common in reporting.                               |
| `Collectors.averagingInt()`   | Calculates average integer field.      | `groupingBy(User::getDept, Collectors.averagingInt(User::getAge))`         | Returns `Double`.                                  |
| `Collectors.joining()`        | Joins strings.                         | `names.stream().collect(Collectors.joining(", "))`                         | Useful for display/logging.                        |

## Stream or For Loop

Use streams when they make data processing more declarative and readable. Use loops when they make control flow clearer. For example,

Use Stream when your task sounds like:

- filter these records
- convert each object
- group by this field
- count by category
- sum by key
- sort and take top N
- check whether any/all match
- build a lookup map
- flatten nested collections

Use a for loop when your task involves:

- complex mutation
- early break with complicated logic
- many side effects
- step-by-step debugging
- shared mutable state
- performance-critical hot loops
