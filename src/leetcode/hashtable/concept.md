---
title: Hashtable Concept & Pattern
author: David Zhang aka Hadjshell
order: 1
isOriginal: true
footer: false
editLink: false
---

## 🧠 Concept

- Also called **Hash Map**, **Dictionary**

- A data structure which can **map keys to values**. A hash table uses a **hash function** to compute an index into an array of buckets or slots, from which the desired value can be found

- Key has to be unique, value can be the same

### Perfect hashing

- Suppose key values within range `0` to `N-1` and use an array of size `N` to store records

- Then a key can correspond directly to the array location of its associated record
- Searching and insertion would require only a single array access and thus `O(1)`
- However, perfect hashing is rarely practical to implement

### Hash function

- **One-way** function

- Idempotent

- ```mermaid
  graph LR;
  K((Key)) --> H[Hash Function]
  H --> L((location))
  ```

- Two important issues in Hashing (**防，治思想**)

  - How to define a good hash function?
    ::: important

    Need to ensure hash function is reasonably random, which means key will be evenly distributed and so reduces key collisions

    :::

  - How to resolve key collisions?

### Collision resolution strategies

- **Separate Chaining**

  - Build a linked list for each of the table position

- **Linear Probing**

  - No linked list, just array

  - When a key collides with a previously inserted key we simply place it in the **next available unused location** to the right (if reaching the end go the beginning)

    ::: tip

    There is possibly a key collision in a sequential non-null elements between `null` and `null`

    :::

  - Searching

    - Find the position using hash function

    - Search from here upwards through array looking for key
    - Searching is deemed **unsuccessful if we reach an empty location or end up back where we started**

  - Deletion

    - Cannot directly delete the element (new `null` may affect searching)

    - Two possible approaches

      - Using a special **Ilinking** (empty character) to **mark a deletion** - searching does not stop if this character is encountered

        > Simple but can be slow for searching

      - **Delete the contiguous occupied cells to the right and reinsert them**

        > More costly but faster searching

### Pros & Cons

- Pros

  - Fast operations: search, insertion, deletion take `O(1)` on average

  - Flexible keys: most data types can be used for keys, as long as they're hashable

- Cons

  - Slow worst case: operations take `O(N)` in the worst case

  - **Unordered**: keys are not stored in a special order
  - Single-directional lookups: look up the value for a given key is `O(1)`, but look up the key for a given value is `O(N)`
  - Not cache-friendly: usage of linked list with separate chaining solution

### Performance

- **Initial Capacity**

  - It is the capacity of HashMap at the time of its creation (It is the number of buckets a HashMap can hold when the HashMap is instantiated)

- **Load Factor**

  - It is the percent value of the capacity after which the capacity of HashMap is to be increased (It is the percentage fill of buckets after which Rehashing takes place)

- Threshold

  - Load Factor × Initial Capacity

- Rehashing

  - It is the process of **doubling** the capacity of the HashMap after it reaches its Threshold

- If the initial capacity is kept higher then rehashing will never be done. But by keeping it higher increases the time complexity of iteration. So it should be chosen very cleverly to increase performance. The expected number of values should be taken into account to set the initial capacity. The most generally preferred load factor value is **0.75** which provides a good deal between time and space costs. The load factor’s value varies between 0 and 1.

- When Hash Map operations cost `O(N)` time?

  - Hash collisions

    - If all our keys caused hash collisions, we'd be at risk of having to walk through all of our values for a single lookup (one big linked list). This is unlikely, but it could happen.

  - Dynamic array resizing
    - Suppose we keep adding more items to our hash map. As the number of keys and values in our hash map exceeds the number of indices in the underlying array, hash collisions become inevitable. To mitigate this, we could expand our underlying array whenever things start to get crowded. That requires allocating a larger array and rehashing all of our existing keys to figure out their new position—O(n) time.

## 🛠️ Pattern

- If the values of keys are limited, **bucket array** instead of hash table can be used to increase the performance
- **Combine hash map with other data structures** to improve time performance
- `int + int -> long`
