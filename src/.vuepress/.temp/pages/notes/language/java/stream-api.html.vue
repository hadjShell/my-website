<template><div><p>Stream in Java was introduced in Java 8 to simplify the processing of collections and data. It provides a modern and efficient way to perform operations on groups of objects using a functional programming approach. Streams help developers write cleaner, shorter, and more readable code for data processing tasks.</p>
<ul>
<li>Allows processing of data <strong>without modifying the original collection</strong>.</li>
<li>Supports parallel processing to improve performance on large datasets.</li>
<li>Reduces the need for lengthy loops and temporary variables in code.</li>
</ul>
<h2 id="stream-model" tabindex="-1"><a class="header-anchor" href="#stream-model"><span>Stream Model</span></a></h2>
<p>The syntax for declaring a Java Stream: <code v-pre>Stream&lt;T&gt; stream;</code></p>
<p>The core mental model is: <strong>a stream pipeline has a source, zero or more intermediate operations, and one terminal operation. The pipeline only actually runs when a terminal operation is called</strong>.</p>
<p>The features of Java streams are mentioned below:</p>
<ul>
<li>A Stream is not a data structure; it just takes input from Collections, Arrays or I/O channels.</li>
<li>Streams do not modify the original data; they only produce results using their methods.</li>
<li>A stream does not store elements itself. It stores a pipeline of operations connected to a data source.</li>
<li>Intermediate operations (like filter, map, etc.) are lazy and return another Stream, so you can chain them together.</li>
<li>A terminal operation (like collect, forEach, count) ends the stream and gives the final result.</li>
</ul>
<h2 id="stream-operation" tabindex="-1"><a class="header-anchor" href="#stream-operation"><span>Stream Operation</span></a></h2>
<p>There are two types of Stream operations.</p>
<h3 id="intermediate-operations" tabindex="-1"><a class="header-anchor" href="#intermediate-operations"><span>Intermediate Operations</span></a></h3>
<p>Intermediate operations are the operations that transform a stream into another stream. These operations are lazy in nature, meaning they do not execute until a terminal operation is called.</p>
<table>
<thead>
<tr>
<th>Function</th>
<th>What it does</th>
<th>How to use it</th>
<th>Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>filter()</code></td>
<td>Keeps elements that match a condition.</td>
<td><code v-pre>users.stream().filter(User::isActive)</code></td>
<td>Common for active users, paid orders, valid records.</td>
</tr>
<tr>
<td><code v-pre>map()</code></td>
<td>Transforms each element into another value/type.</td>
<td><code v-pre>users.stream().map(User::getName)</code></td>
<td>Common for entity → DTO or object → field.</td>
</tr>
<tr>
<td><code v-pre>flatMap()</code></td>
<td>Flattens nested streams/lists into one stream.</td>
<td><code v-pre>orders.stream().flatMap(o -&gt; o.getItems().stream())</code></td>
<td>Use for orders → items, users → roles, courses → students.</td>
</tr>
<tr>
<td><code v-pre>distinct()</code></td>
<td>Removes duplicate elements.</td>
<td><code v-pre>names.stream().distinct()</code></td>
<td>For objects, depends on <code v-pre>equals()</code> and <code v-pre>hashCode()</code>.</td>
</tr>
<tr>
<td><code v-pre>sorted()</code></td>
<td>Sorts elements.</td>
<td><code v-pre>users.stream().sorted(Comparator.comparing(User::getAge))</code></td>
<td>Use <code v-pre>.reversed()</code> for descending order.</td>
</tr>
<tr>
<td><code v-pre>limit()</code></td>
<td>Keeps only the first <code v-pre>n</code> elements.</td>
<td><code v-pre>users.stream().limit(10)</code></td>
<td>Common for top N results.</td>
</tr>
<tr>
<td><code v-pre>skip()</code></td>
<td>Skips the first <code v-pre>n</code> elements.</td>
<td><code v-pre>users.stream().skip(10)</code></td>
<td>Often used with <code v-pre>limit()</code> for pagination.</td>
</tr>
<tr>
<td><code v-pre>peek()</code></td>
<td>Looks at elements during the pipeline.</td>
<td><code v-pre>stream.peek(System.out::println)</code></td>
<td>Mainly for debugging. Avoid business logic here.</td>
</tr>
<tr>
<td><code v-pre>mapToInt()</code></td>
<td>Converts stream to <code v-pre>IntStream</code>.</td>
<td><code v-pre>users.stream().mapToInt(User::getAge)</code></td>
<td>Use before <code v-pre>sum()</code>, <code v-pre>average()</code>, <code v-pre>max()</code>, etc.</td>
</tr>
<tr>
<td><code v-pre>mapToLong()</code></td>
<td>Converts stream to <code v-pre>LongStream</code>.</td>
<td><code v-pre>orders.stream().mapToLong(Order::getAmount)</code></td>
<td>Useful for large numeric fields.</td>
</tr>
<tr>
<td><code v-pre>mapToDouble()</code></td>
<td>Converts stream to <code v-pre>DoubleStream</code>.</td>
<td><code v-pre>users.stream().mapToDouble(User::getSalary)</code></td>
<td>Useful for numeric aggregation.</td>
</tr>
<tr>
<td><code v-pre>parallel()</code></td>
<td>Converts stream to parallel stream.</td>
<td><code v-pre>users.stream().parallel()</code></td>
<td>Use carefully; avoid shared mutable state.</td>
</tr>
<tr>
<td><code v-pre>sequential()</code></td>
<td>Converts stream back to sequential stream.</td>
<td><code v-pre>stream.sequential()</code></td>
<td>Rarely needed in normal projects.</td>
</tr>
</tbody>
</table>
<h3 id="terminal-operations" tabindex="-1"><a class="header-anchor" href="#terminal-operations"><span>Terminal Operations</span></a></h3>
<p>Terminal operations produce a result or side effect. Once a terminal operation runs, all intermediate operations are triggered to execute, the stream is consumed and cannot be reused.</p>
<table>
<thead>
<tr>
<th>Function</th>
<th>What it does</th>
<th>How to use it</th>
<th>Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>collect()</code></td>
<td>Collects stream result into a collection/map/string/etc.</td>
<td><code v-pre>stream.collect(Collectors.toList())</code></td>
<td>Most common terminal operation before Java 16.</td>
</tr>
<tr>
<td><code v-pre>toList()</code></td>
<td>Collects stream into a list.</td>
<td><code v-pre>users.stream().filter(User::isActive).toList()</code></td>
<td>Java 16+. Returned list is unmodifiable.</td>
</tr>
<tr>
<td><code v-pre>forEach()</code></td>
<td>Performs an action for each element.</td>
<td><code v-pre>users.stream().forEach(System.out::println)</code></td>
<td>Avoid heavy side effects.</td>
</tr>
<tr>
<td><code v-pre>count()</code></td>
<td>Counts elements.</td>
<td><code v-pre>users.stream().filter(User::isActive).count()</code></td>
<td>Returns <code v-pre>long</code>.</td>
</tr>
<tr>
<td><code v-pre>max()</code></td>
<td>Finds maximum element.</td>
<td><code v-pre>users.stream().max(Comparator.comparing(User::getSalary))</code></td>
<td>Returns <code v-pre>Optional&lt;T&gt;</code>.</td>
</tr>
<tr>
<td><code v-pre>min()</code></td>
<td>Finds minimum element.</td>
<td><code v-pre>users.stream().min(Comparator.comparing(User::getAge))</code></td>
<td>Returns <code v-pre>Optional&lt;T&gt;</code>.</td>
</tr>
<tr>
<td><code v-pre>findFirst()</code></td>
<td>Finds first element in stream order.</td>
<td><code v-pre>users.stream().filter(User::isActive).findFirst()</code></td>
<td>Returns <code v-pre>Optional&lt;T&gt;</code>. Use when order matters.</td>
</tr>
<tr>
<td><code v-pre>findAny()</code></td>
<td>Finds any matching element.</td>
<td><code v-pre>users.stream().filter(User::isActive).findAny()</code></td>
<td>More useful in parallel streams.</td>
</tr>
<tr>
<td><code v-pre>anyMatch()</code></td>
<td>Checks if at least one element matches.</td>
<td><code v-pre>users.stream().anyMatch(User::isActive)</code></td>
<td>Short-circuiting operation.</td>
</tr>
<tr>
<td><code v-pre>allMatch()</code></td>
<td>Checks if all elements match.</td>
<td><code v-pre>users.stream().allMatch(User::isActive)</code></td>
<td>Good for validation.</td>
</tr>
<tr>
<td><code v-pre>noneMatch()</code></td>
<td>Checks if no elements match.</td>
<td><code v-pre>users.stream().noneMatch(u -&gt; u.getAge() &lt; 18)</code></td>
<td>Good for validation.</td>
</tr>
<tr>
<td><code v-pre>reduce()</code></td>
<td>Combines elements into one result.</td>
<td><code v-pre>nums.stream().reduce(0, Integer::sum)</code></td>
<td>Prefer built-in collectors when possible.</td>
</tr>
<tr>
<td><code v-pre>sum()</code></td>
<td>Sums primitive stream values.</td>
<td><code v-pre>users.stream().mapToInt(User::getAge).sum()</code></td>
<td>Only on <code v-pre>IntStream</code>, <code v-pre>LongStream</code>, <code v-pre>DoubleStream</code>.</td>
</tr>
<tr>
<td><code v-pre>average()</code></td>
<td>Calculates average of primitive stream values.</td>
<td><code v-pre>users.stream().mapToInt(User::getAge).average()</code></td>
<td>Returns <code v-pre>OptionalDouble</code>.</td>
</tr>
<tr>
<td><code v-pre>summaryStatistics()</code></td>
<td>Gets count, min, max, sum, average.</td>
<td><code v-pre>users.stream().mapToInt(User::getAge).summaryStatistics()</code></td>
<td>Useful for reporting.</td>
</tr>
<tr>
<td><code v-pre>iterator()</code></td>
<td>Returns an iterator from the stream.</td>
<td><code v-pre>stream.iterator()</code></td>
<td>Rare in normal business code.</td>
</tr>
<tr>
<td><code v-pre>toArray()</code></td>
<td>Converts stream to array.</td>
<td><code v-pre>stream.toArray(String[]::new)</code></td>
<td>Useful when API requires arrays.</td>
</tr>
</tbody>
</table>
<h3 id="common-collectors-used-with-collect" tabindex="-1"><a class="header-anchor" href="#common-collectors-used-with-collect"><span>Common <code v-pre>Collectors</code> used with <code v-pre>collect()</code></span></a></h3>
<p>These are not stream operations directly, but they are very common terminal-collection helpers.</p>
<table>
<thead>
<tr>
<th>Collector</th>
<th>What it does</th>
<th>How to use it</th>
<th>Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>Collectors.toList()</code></td>
<td>Collects into list.</td>
<td><code v-pre>stream.collect(Collectors.toList())</code></td>
<td>Common before Java 16.</td>
</tr>
<tr>
<td><code v-pre>Collectors.toSet()</code></td>
<td>Collects into set.</td>
<td><code v-pre>stream.collect(Collectors.toSet())</code></td>
<td>Removes duplicates.</td>
</tr>
<tr>
<td><code v-pre>Collectors.toMap()</code></td>
<td>Collects into map.</td>
<td><code v-pre>users.stream().collect(Collectors.toMap(User::getId, u -&gt; u))</code></td>
<td>Add merge function if duplicate keys are possible.</td>
</tr>
<tr>
<td><code v-pre>Collectors.groupingBy()</code></td>
<td>Groups by key.</td>
<td><code v-pre>users.stream().collect(Collectors.groupingBy(User::getDepartment))</code></td>
<td>Produces <code v-pre>Map&lt;K, List&lt;V&gt;&gt;</code>.</td>
</tr>
<tr>
<td><code v-pre>Collectors.partitioningBy()</code></td>
<td>Splits into <code v-pre>true</code> and <code v-pre>false</code> groups.</td>
<td><code v-pre>users.stream().collect(Collectors.partitioningBy(User::isActive))</code></td>
<td>Produces <code v-pre>Map&lt;Boolean, List&lt;T&gt;&gt;</code>.</td>
</tr>
<tr>
<td><code v-pre>Collectors.counting()</code></td>
<td>Counts elements in a group.</td>
<td><code v-pre>groupingBy(User::getDept, Collectors.counting())</code></td>
<td>Returns <code v-pre>Long</code>.</td>
</tr>
<tr>
<td><code v-pre>Collectors.summingInt()</code></td>
<td>Sums integer field in a group.</td>
<td><code v-pre>groupingBy(Item::getProductId, Collectors.summingInt(Item::getQuantity))</code></td>
<td>Common in reporting.</td>
</tr>
<tr>
<td><code v-pre>Collectors.averagingInt()</code></td>
<td>Calculates average integer field.</td>
<td><code v-pre>groupingBy(User::getDept, Collectors.averagingInt(User::getAge))</code></td>
<td>Returns <code v-pre>Double</code>.</td>
</tr>
<tr>
<td><code v-pre>Collectors.joining()</code></td>
<td>Joins strings.</td>
<td><code v-pre>names.stream().collect(Collectors.joining(&quot;, &quot;))</code></td>
<td>Useful for display/logging.</td>
</tr>
</tbody>
</table>
<h2 id="stream-or-for-loop" tabindex="-1"><a class="header-anchor" href="#stream-or-for-loop"><span>Stream or For Loop</span></a></h2>
<p>Use streams when they make data processing more declarative and readable. Use loops when they make control flow clearer. For example,</p>
<p>Use Stream when your task sounds like:</p>
<ul>
<li>filter these records</li>
<li>convert each object</li>
<li>group by this field</li>
<li>count by category</li>
<li>sum by key</li>
<li>sort and take top N</li>
<li>check whether any/all match</li>
<li>build a lookup map</li>
<li>flatten nested collections</li>
</ul>
<p>Use a for loop when your task involves:</p>
<ul>
<li>complex mutation</li>
<li>early break with complicated logic</li>
<li>many side effects</li>
<li>step-by-step debugging</li>
<li>shared mutable state</li>
<li>performance-critical hot loops</li>
</ul>
</div></template>


