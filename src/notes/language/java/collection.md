---
title: Collections
category:
  - Note
tag:
  - Language
  - Java
footer: false
editLink: false
---

## Java Collection Framework

![java_collection_api_diagram](/assets/image/java/java_collection_api_diagram.svg)

## `Collection`

- Methods
  - `boolean add(E e)`
  - `boolean addAll(Collection<? extends E> c)`
  - `boolean remove(Object o)`
  - `boolean removeAll(Collection<?> c)`
  - `boolean retainAll(Collection<?> c)`
  - `boolean contains(Object o)`
  - `boolean containsAll(Collection<?> c)`
  - `void clear()`
  - `boolean isEmpty()`
  - `int size()`
  - `Iterator<E> iterator()`
  - `Object[] toArray()`
  - `T[] toArray(T[] a)`
    `a` - the array into which the elements of this collection are to be stored, if it is big enough; otherwise, a new array of the same runtime type is allocated for this purpose.
    The element in the array immediately following the end of the collection is set to `null`.

## `List`

- An ordered collection (a sequence)

- Methods
  - `void add(int index, E e)`
  - `boolean addAll(int index, Collection<? extends E> c)`
  - `E get(int index)`
  - `E remove(int index)`
  - `E set(int index, E e)`
    Returns the element previously at the specified position.
  - `int indexOf(Object o)`
  - `int lastIndexOf(Object o)`
  - `List<E> subList(int from, int to)`
    `from` - low endpoint (inclusive) of the subList
    `to` - high endpoint (exclusive) of the subList
  - `ListIterator<E> listIterator()`
  - `ListIterator<E> listIterator(int index)`
  - `static List<E> of(E... elements)`
    Returns an **unmodifiable list** containing an arbitrary number of elements.
  - `static List<E> copyOf(Collection<? extends E> coll)`
    Returns an **unmodifiable list** containing the elements of the given Collection, in its iteration order.
    The given Collection must not be null, and it must not contain any null elements.

- More flexible iterator: `listIterator()`
  - `previous()`, logically equivalent to `*(p--)`
  - `hasPrevious()`

### `ArrayList`

- Resizable-array implementation of the `List` interface

- Cannot store primitive type variables
- Copy an `ArrayList`
  - `addAll(originalArrayList)`
  - `ArrayList<E> copy = new ArrayList<>(originalArrayList)`

### `LinkedList`

- Doubly-linked list implementation of the `List` and `Deque` interfaces

- Suitable for large list with lots of insertion and deletion

## `Queue`

- FIFO

- Methods
  - `boolean add(E e)`
    Throws an `IllegalStateException` if no space is currently available.
  - `boolean offer(E e)`
    Returns false instead of throwing `IllegalStateException`.
  - `E remove()`
    Retrieves and removes the head of this queue, or throws `NoSuchElementException` if this queue is empty.
  - `E poll()`
    Retrieves and removes the head of this queue, or returns `null` if this queue is empty.
  - `E element()`
    Retrieves, but does not remove, the head of this queue, or throws `NoSuchElementException` if this queue is empty.
  - `E peek()`
    Retrieves, but does not remove, the head of this queue, or returns `null` if this queue is empty.

- |         | Throws exception | Returns special value |
  | ------- | ---------------- | --------------------- |
  | Insert  | `add(e)`         | `offer(e)`            |
  | Remove  | `remove()`       | `poll()`              |
  | Examine | `element()`      | `peek()`              |

## `Deque`

- Double ended queue

- A linear collection that supports element insertion and removal at both ends

- It can be used as **a queue or a stack**

- Methods
  | | First Element (Head) | | Last Element (Tail) | |
  | :------ | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
  | | Throws exception | Special value | Throws exception | Special value |
  | Insert | [`addFirst(e)`](<https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#addFirst(E)>) | [`offerFirst(e)`](<https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#offerFirst(E)>) | [`addLast(e)`](<https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#addLast(E)>) | [`offerLast(e)`](<https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#offerLast(E)>) |
  | Remove | [`removeFirst()`](<https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#removeFirst()>) | [`pollFirst()`](<https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#pollFirst()>) | [`removeLast()`](<https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#removeLast()>) | [`pollLast()`](<https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#pollLast()>) |
  | Examine | [`getFirst()`](<https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#getFirst()>) | [`peekFirst()`](<https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#peekFirst()>) | [`getLast()`](<https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#getLast()>) | [`peekLast()`](<https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#peekLast()>) |

- Comparison of `Queue` and `Deque` methods
  | `Queue` Method | Equivalent `Deque` Method |
  | ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
  | [`add(e)`](<https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#add(E)>) | [`addLast(e)`](<https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#addLast(E)>) |
  | [`offer(e)`](<https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#offer(E)>) | [`offerLast(e)`](<https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#offerLast(E)>) |
  | [`remove()`](<https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#remove()>) | [`removeFirst()`](<https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#removeFirst()>) |
  | [`poll()`](<https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#poll()>) | [`pollFirst()`](<https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#pollFirst()>) |
  | [`element()`](<https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#element()>) | [`getFirst()`](<https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#getFirst()>) |
  | [`peek()`](<https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#peek()>) | [`peekFirst()`](<https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#peekFirst()>) |

- Comparison of `Stack` and `Deque` methods
  | Stack Method | Equivalent `Deque` Method |
  | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
  | [`push(e)`](<https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#push(E)>) | [`addFirst(e)`](<https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#addFirst(E)>) |
  | [`pop()`](<https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#pop()>) | [`removeFirst()`](<https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#removeFirst()>) |
  | [`peek()`](<https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#peek()>) | [`getFirst()`](<https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#getFirst()>) |

### `ArrayDeque`

- **Resizable-array** implementation of `Deque`.

- This class is likely to be faster than `Stack` when used as a stack, and faster than `LinkedList` when used as a queue.

- **Null elements are prohibited**.

- Most `ArrayDeque` operations run in amortized constant time.

### `PriorityQueue`

- An unbounded priority queue based on a priority heap.

- The elements are ordered according to their _natural ordering_, or by a `Comparator` provided at construction time.

## `Set`

- A collection that contains no duplicate elements, and at most one `null` element. More formally, sets contain no pair of elements `e1` and `e2` such that `e1.equals(e2)`.

- No defined ordering.

- No extra methods.

### `HashSet`

- This class implements the `Set` interface, backed by a hash table (actually a `HashMap` instance).

- `HashSet(int initialCapacity, float loadFactor)`

### `LinkedHashSet`

- Hash table and linked list implementation of the `Set` interface, with predictable iteration order.

- This linked list defines the iteration ordering, which is the order in which elements were inserted into the set (_insertion-order_).

### `TreeSet`

- A `NavigableSet` implementation based on a `TreeMap`.

- The elements are ordered according to their _natural ordering_, or by a `Comparator` provided at construction time.

- This implementation provides guaranteed `log(n)` time cost for the basic operations.

- Methods
  - `E ceiling(E e)`
  - `E floor(E e)`
  - `E higher(E e)`
  - `E lower(E e)`

## `Map`

- An object that maps keys to values

- Java map **cannot contain duplicate keys**, and each key can only map to at most one value.

- Methods
  - `V put(K key, V value)`
    Returns the previous value associated with `key`, or `null` if there was no mapping for `key`
  - `V get(k key)`
  - `V remove(k key)`
  - `boolean remove(K key, V value)`
  - `V replace(K key, V value)`
  - `boolean replace(K key, V oldValue, V newValue)`
  - `boolean containsKey(Object key)`
  - `boolean containsValue(Object value)`
  - `Set<K> keySet()`
  - `Collection<V> values()`
  - `Set<Map.Entry<K, V>> entrySet()`
    Those returned collections are backed by the map, so changes to the map are reflected in the set, and vice-versa

::: tip Some Useful Sugar Syntax Function

- `V getOrDefault(key, defaultValue)`

Use it when you want to read a value, and if the key doesn't exist, return a default value.

```java
Map<Character, Integer> freq = new HashMap<>();

for (char c : s.toCharArray()) {
    freq.put(c, freq.getOrDefault(c, 0) + 1);
}
```

- `V computeIfAbsent(key, key -> newValue)`

Use it when you want to create a value only when the key does not exist. The lambda only runs when the key is absent.

```java
// Suppose you want: category -> list of products

// Instead of this
if (!map.containsKey("fruit")) {
    map.put("fruit", new ArrayList<>());
}
map.get("fruit").add("apple");

// You can write
map
  .computeIfAbsent("fruit", k -> new ArrayList<>())
  .add("apple");
```

Common use: lazy cache

```java
Map<String, UserProfile> cache = new HashMap<>();

UserProfile profile = cache.computeIfAbsent(userId, id -> loadUserProfileFromDatabase(id));
```

- `V computeIfPresent(key, (key, oldValue) -> newValue)`

Use it when you want to update a value only if the key already exists. One important rule: **If `computeIfPresent` return null, Java removes the entry**.

```java
// decrement frequency, remove entry when no frequency
freq.computeIfPresent(num, (k, count) -> count == 1 ? null : count - 1);
```

- `V merge(key, newValue, (oldValue, incomingValue) -> mergedValue)`

merge() is one of the most elegant methods for counting and accumulating.
If key doesn't exist, put key -> newValue; if key exists, replace old value with merged result.

Common use: frequency counter

```java
Map<Character, Integer> freq = new HashMap<>();

for (char c : s.toCharArray()) {
    freq.merge(c, 1, Integer::sum);
}

// If c does not exist, put c -> 1.
// If c exists, old count + 1.

// Equivalent to: freq.put(c, freq.getOrDefault(c, 0) + 1);
```

Common use: keep max/min value by key

```java
Map<String, Integer> highestScoreByUser = new HashMap<>();

highestScoreByUser.merge(userId, score, Math::max);
```

- `V compute(key, (key, oldValue) -> newValue)`

Use it when you want full control whether the key exists or not. If the key does not exist, oldValue is null.

- `V putIfAbsent(key, value)`

If the specified key is not already associated with a value (or is mapped to null) associates it with the given value and returns null, else returns the current value.

:::

- [**Map iterations**](https://mp.weixin.qq.com/s?__biz=MzkxOTcxNzIxOA==&mid=2247505580&idx=1&sn=1825ca5be126c2b650e201fb3fa8a3e6&source=41&poc_token=HMtzHWmjZaC5gevPs4SIaO0Gsjdpog13PQ_H-gj2)

### `HashMap`

- Hash table based implementation

### `LinkedHashMap`

- Hash table and linked list implementation

- **LRU Cache**

- Override the method `protected boolean removeEldestEntry(Map.Entry<K, V> eldest)`
  - ```java
    private static final int MAX_ENTRIES = 100;

     protected boolean removeEldestEntry(Map.Entry eldest) {
        return size() > MAX_ENTRIES;
     }
    ```

### `EnumMap`

### `TreeMap`

- A red-black tree implementation

## `BitSet`

- This class implements a vector of bits that grows as needed
- Each component of the bit set has a `boolean` value
- By default, all bits in the set initially have the value `false`

## `Collections`

- `Collections` is a utility

- It contains only `static` methods

- Methods
  - `<T extends Comparable<? super T>> void sort(List<T> l)`
  - `<T> void sort(List<T> l, Comparator<? super T> c)`
  - `void reverse(List<?> l)`
  - `void rotate(List<?> l, int distance)`
  - `void shuffle(List<?> l)`
  - `void swap(List<?> l, int i, int j)`
  - `min()`, `max()`
  - `<T> int binarySearch(List<? extends Comparable<? super T>> list, T key)`
  - `<T> int binarySearch(List<? extends T> list, T key, Comparator<? super T> c)`
    Returns the index of the search key, if it is contained in the list; otherwise, `(-(insertion point) - 1)`

## `Iterator`

- An iterator over a collection
- Iterators allow the caller to remove elements from the underlying collection during the iteration with well-defined semantics
- Methods
  - `boolean hasNext()`

  - `E next()`

  - `void remove()`

- **fail-fast**: if the list is structurally modified at any time after the iterator is created, in any way **except through the iterator's own `remove()` or `add()` methods**, the iterator will throw a `ConcurrentModificationException`. Thus, in the face of concurrent modification, the iterator fails quickly and cleanly, rather than risking arbitrary, non-deterministic behavior at an undetermined time in the future
- _The fail-fast behavior of iterators should be used only to detect bugs_
- Iterator is implemented as a private inner class in each collection class implementation
- `ListIterator`
  - An iterator for lists that allows the programmer to traverse the list in either direction, modify the list during iteration, and obtain the iterator's current position in the list
  - A `ListIterator` has no current element; its _cursor position_ always lies between the element that would be returned by a call to `previous()` and the element that would be returned by a call to `next()`

## `Comparable` and `Comparator`

- `java.lang.Comparable<T>`
  - Method
    - `int compareTo(T o)`
    - Returns a negative integer, zero, or a positive integer as this object is less than, equal to, or greater than the specified object

  - Lists (and arrays) of objects that implement this interface can be sorted automatically by `Collections.sort` (and `Arrays.sort`). Objects that implement this interface can be used as keys in a `SortedMap` or as elements in a `SortedSet`, without the need to specify a comparator
  - **It is a functional interface but not one logically**
    - It is more like a trait of an object. "This thing can be compared", rather than "this thing does the comparing"

  - How to use `Comparable`?
    - Implement the interface

- `java.util.Comparator<T>`
  - A functional interface
    - `int compare(T o1, T o2)`

  - Comparators can be passed to a sort method (such as `Collections.sort` or `Arrays.sort`) to allow precise control over the sort order. Comparators can also be used to control the order of certain data structures (such as `SortedSet` or `SortedMap`), or to provide an ordering for collections of objects that don't have a natural ordering
  - When to use `Comparator`?
    - The objects in collections don't have natural ordering. E.g. their class is provided in an external library without write permission

    - The objects do have natural ordering but you want to sort it in a different logic

  - How to use `Comparator`?
    - Create an anonymous class implementing `Comparator` and pass it as a parameter
    - Lamda expression

## Shallow Copy vs. Deep Copy

- | Shallow Copy                                                                                  | Deep Copy                                                                                    |
  | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
  | Shallow Copy stores the references of objects to the original memory address.                 | Deep copy stores copies of the object’s value.                                               |
  | Shallow Copy reflects changes made to the new/copied object in the original object.           | Deep copy doesn’t reflect changes made to the new/copied object in the original object.      |
  | Shallow Copy stores the copy of the original object and points the references to the objects. | Deep copy stores the copy of the original object and recursively copies the objects as well. |
  | Shallow copy is faster.                                                                       | Deep copy is comparatively slower.                                                           |

- Shallow copy

  ```java
  Collection<T> copy = new Collection<>(original);
  ```

- Deep copy
  - Deep copy of Java class
    - Implement the `Clonable` interface and override the `clone()` method (inherited from `Object`) in the class of objects within the collection

      > Note: `Object.clone()` is `native`
      >
      > Must implement `Cloneable` to handle `CloneNotSupportedException`, more details referring to the Javadoc in the source code

    - However, `clone()` is actually shallow copy not deep copy

    - Therefore,
      - All immutable fields or primitive fields can be used as it is. They don’t require any special treatment. e.g. primitive classes, wrapper classes and `String` class.
      - For all mutable field members, we must create a new object of member and assign it’s value to cloned object.

    - ```java
      @Override
      public Person clone() {
          try {
              Person person = (Person) super.clone();
              person.setAddress(person.getAddress().clone());
              return person;
          } catch (CloneNotSupportedException e) {
              throw new AssertionError();
          }
      }
      ```

  - Deep copy of Java Collections
    1. Create a new instance of collection
    2. Clone all elements from given collection to clone collection

  - [Example](https://howtodoinjava.com/java/collections/arraylist/arraylist-clone-deep-copy/)

## Collections to Array

- `<T> T[] toArray(T[] array)`
  Practice: pass a specific type array of length 0

## Array to Collections

- `List<T> Arrays.asList(T... a)`
  - **The array should be an array of object instead of an array of primitive type values**
    - ```java
      int[] myArray = {1, 2, 3};
      List myList = Arrays.asList(myArray);
      System.out.println(myList.size());// 1
      System.out.println(myList.get(0));// address of that array
      System.out.println(myList.get(1));// ArrayIndexOutOfBoundsException
      int[] array = (int[]) myList.get(0);
      System.out.println(array[0]);// 1
      ```

  - The returned list implements the optional `Collection` methods, except those that would change the size of the returned list. Those methods leave the list unchanged and throw `UnsupportedOperationException`
    - No `add()`, `remove()`, `clear()`

- How to correctly transform an array to a list
  1. `List list = new ArrayList<>(Arrays.asList("a", "b", "c"))`

  2. ```java
     Integer[] myArray = { 1, 2, 3 };
     List myList = Arrays.stream(myArray).collect(Collectors.toList());
     // Also works for primitive array
     int[] myArray2 = { 1, 2, 3 };
     List myList = Arrays.stream(myArray2).boxed().collect(Collectors.toList());
     ```

  3. `List.of(array)`
     - Unmodifiable list

---
