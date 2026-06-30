<template><div><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h2>
<ul>
<li>
<figure><img src="/assets/image/java/Java.png" alt="Java" tabindex="0" loading="lazy"><figcaption>Java</figcaption></figure>
</li>
<li>
<p>JDK</p>
<ul>
<li>
<p>Java development toolkit</p>
</li>
<li>
<p>Versions of JDK get released every 6 months</p>
</li>
<li>
<p>Release a LTS version every 3 years</p>
</li>
</ul>
</li>
<li>
<p>Java is a hybrid language</p>
<ul>
<li><code v-pre>javac</code> - compile</li>
<li><code v-pre>java</code> - interpret</li>
</ul>
</li>
<li>
<p>JVM</p>
<ul>
<li>Java virtual machine</li>
<li>Make Java platform independent</li>
<li><img src="/assets/image/java/JVM.png" alt="JVM" tabindex="0" loading="lazy"><figcaption>JVM</figcaption></li>
</ul>
</li>
</ul>
<hr>
<h2 id="basic-syntax-and-concepts" tabindex="-1"><a class="header-anchor" href="#basic-syntax-and-concepts"><span>Basic Syntax and Concepts</span></a></h2>
<ul>
<li>Java is case-sensitive</li>
</ul>
<h3 id="variables" tabindex="-1"><a class="header-anchor" href="#variables"><span>Variables</span></a></h3>
<ul>
<li>
<p>Three types of variables</p>
<ul>
<li>
<p><strong>Fields</strong> - member variables in a class</p>
</li>
<li>
<p><strong>Local variables</strong> - variables in a method or block of code</p>
</li>
<li>
<p><strong>Parameters</strong> - variables in method declarations</p>
<blockquote>
<p><mark>NOTE</mark>: No global variables in Java</p>
</blockquote>
</li>
</ul>
</li>
<li>
<p>Data type</p>
<ul>
<li><em>Primitive data type</em>
<ul>
<li><code v-pre>boolean</code>, <code v-pre>byte</code>, <code v-pre>short</code>, <code v-pre>int</code>, <code v-pre>long</code>, <code v-pre>float</code>, <code v-pre>double</code>, <code v-pre>char</code></li>
<li>Overflow and underflow</li>
<li><code v-pre>BigDecimal</code> class overcomes the precision issues of the floating number types</li>
<li><code v-pre>char</code> in Java is <strong>2 bytes</strong> to allow you to store Unicode characters
<ul>
<li>e.g. <code v-pre>'\u0040' == 'A'</code></li>
</ul>
</li>
</ul>
</li>
<li><em>Class data type</em></li>
<li>Casting</li>
</ul>
</li>
<li>
<p>Declaration and Initialisation</p>
</li>
<li>
<p>Literals</p>
<ul>
<li><strong>Good habit</strong>: add appropriate data type suffix</li>
</ul>
</li>
</ul>
<h3 id="operators" tabindex="-1"><a class="header-anchor" href="#operators"><span>Operators</span></a></h3>
<ul>
<li>Operator and operand</li>
<li>Mathematical operators
<ul>
<li>Only overriding operator in Java: <code v-pre>+</code>, <code v-pre>+=</code>
<ul>
<li>Other data type variables will be automatically casted to a String</li>
</ul>
</li>
</ul>
</li>
<li>Assignment operator</li>
<li>Abbreviating operators</li>
<li><code v-pre>++</code>, <code v-pre>--</code></li>
<li>Relational operators</li>
<li>Logical operators</li>
<li>Bitwise operators</li>
<li>Ternary operator</li>
<li>Casting operators</li>
<li><code v-pre>,</code></li>
<li>Operator precedence</li>
</ul>
<h3 id="expressions-and-statements" tabindex="-1"><a class="header-anchor" href="#expressions-and-statements"><span>Expressions and Statements</span></a></h3>
<ul>
<li>
<p>Expression is formed by combining variables, literals, method return values and operators</p>
</li>
<li>
<p>Statement is an executable line or code block</p>
<ul>
<li>
<p>Declaration statement</p>
</li>
<li>
<p>Expression statement</p>
<ul>
<li>Assignment expressions</li>
<li><code v-pre>++</code>, <code v-pre>--</code></li>
<li>Method calls</li>
<li>Object creation</li>
</ul>
</li>
<li>
<p>Control flow statement</p>
</li>
</ul>
</li>
<li>
<p>Code organisation: whitespace and indentation</p>
</li>
</ul>
<h3 id="flow-control" tabindex="-1"><a class="header-anchor" href="#flow-control"><span>Flow control</span></a></h3>
<ul>
<li><code v-pre>if-else</code></li>
<li><code v-pre>switch</code>
<ul>
<li><code v-pre>String</code> can be used</li>
<li><a href="https://nipafx.dev/java-switch/" target="_blank" rel="noopener noreferrer">Enhanced switch</a></li>
</ul>
</li>
<li><code v-pre>while</code></li>
<li><code v-pre>do while</code></li>
<li><code v-pre>for</code></li>
<li><code v-pre>foreach</code></li>
</ul>
<h3 id="method" tabindex="-1"><a class="header-anchor" href="#method"><span>Method</span></a></h3>
<ul>
<li>
<p>Function in Java</p>
</li>
<li>
<p>Java method is <strong>pass-by-value</strong></p>
</li>
<li>
<p>A parameter is a variable in a method definition. When a method is called, the arguments are the data you pass into the method's parameters</p>
</li>
<li>
<p>Method Overloading</p>
<ul>
<li>Methods have the same name, but take a unique list of argument types</li>
<li>Overloaded methods <strong>CANNOT</strong> differ only by return type</li>
<li>Type promotion
<ul>
<li>Can cause compile time error if there are more than one methods matched</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Variable Arguments</p>
<ul>
<li>
<p>Variable numbers of inputs</p>
</li>
<li>
<p><strong>Must</strong> be the last parameter</p>
</li>
<li>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> show</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">...</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> x</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  for</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> e </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> x)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">    System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(e);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// All valid</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">show</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">show</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">10</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">show</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 20</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">show</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 20</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 30</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">[] x </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> {</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 3</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">show</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(x)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>Command-line Arguments</p>
<ul>
<li><code v-pre>String[] args</code> in <code v-pre>main()</code></li>
</ul>
</li>
</ul>
<hr>
<h2 id="string" tabindex="-1"><a class="header-anchor" href="#string"><span>String</span></a></h2>
<ul>
<li>String is an object</li>
<li>String is immutable</li>
</ul>
<h3 id="creating-string" tabindex="-1"><a class="header-anchor" href="#creating-string"><span>Creating String</span></a></h3>
<ul>
<li><code v-pre>String str = &quot;Hello world!&quot;;</code>
<ul>
<li>Point to an object in <strong>string pool</strong></li>
</ul>
</li>
<li>Constructors
<ul>
<li><code v-pre>String(char [])</code></li>
<li><code v-pre>String(byte [])</code></li>
<li><code v-pre>String(String)</code></li>
<li>Point to an object in <strong>heap</strong></li>
</ul>
</li>
</ul>
<h3 id="common-string-methods" tabindex="-1"><a class="header-anchor" href="#common-string-methods"><span>Common String Methods</span></a></h3>
<ul>
<li>
<p><code v-pre>int length()</code></p>
</li>
<li>
<p><code v-pre>String toLowerCase()</code></p>
</li>
<li>
<p><code v-pre>String toUpperCase()</code></p>
</li>
<li>
<p><code v-pre>String trim()</code></p>
</li>
<li>
<p><code v-pre>String substring(int begin)</code></p>
</li>
<li>
<p><code v-pre>String substring(int begin, int end)</code></p>
<ul>
<li><code v-pre>[begin, end)</code></li>
</ul>
</li>
<li>
<p><code v-pre>String replace(char old, char new)</code></p>
</li>
<li>
<p><code v-pre>String replaceAll(String regex, String replacement)</code></p>
</li>
<li>
<p><code v-pre>boolean startsWith(String s)</code></p>
</li>
<li>
<p><code v-pre>boolean endsWith(String s)</code></p>
</li>
<li>
<p><code v-pre>char charAt(int index)</code></p>
</li>
<li>
<p><code v-pre>int indexOf(char c)</code></p>
</li>
<li>
<p><code v-pre>int indexOf(String s)</code></p>
</li>
<li>
<p><code v-pre>int lastIndexOf(char c)</code></p>
</li>
<li>
<p><code v-pre>boolean equals(String s)</code></p>
</li>
<li>
<p><code v-pre>boolean equalsIgnoreCase(String s)</code></p>
</li>
<li>
<p><code v-pre>int compareTo(String s)</code></p>
<ul>
<li>Compares two strings lexicographically</li>
</ul>
</li>
<li>
<p><code v-pre>boolean matches(String regex)</code></p>
</li>
<li>
<p><code v-pre>String[] split(String regex, int limit)</code></p>
</li>
<li>
<p><code v-pre>String[] split(String regex)</code></p>
<ul>
<li>This method works as if by invoking the two-argument <a href="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html#split(java.lang.String,int)" target="_blank" rel="noopener noreferrer"><code v-pre>split</code></a> method with the given expression and a limit argument of zero</li>
<li>Trailing empty strings will therefore be discarded</li>
</ul>
</li>
<li>
<p><code v-pre>static String String.join(CharSequence delimiter, CharSequence... elements)</code></p>
</li>
<li>
<p><code v-pre>char[] toCharArray()</code></p>
</li>
<li>
<p><code v-pre>static String String.valueOf(int i)</code></p>
<ul>
<li>Convert other data type value to a string</li>
</ul>
</li>
</ul>
<h3 id="regualr-expression" tabindex="-1"><a class="header-anchor" href="#regualr-expression"><span>Regualr Expression</span></a></h3>
<figure><img src="/assets/image/java/regex-cheatsheet.jpg" alt="regex-cheatsheet" tabindex="0" loading="lazy"><figcaption>regex-cheatsheet</figcaption></figure>
<h3 id="stringbuffer-stringbuilder" tabindex="-1"><a class="header-anchor" href="#stringbuffer-stringbuilder"><span>StringBuffer &amp; StringBuilder</span></a></h3>
<ul>
<li><code v-pre>StringBuffer</code>
<ul>
<li>&quot;Mutable String&quot;</li>
<li><code v-pre>append()</code>, <code v-pre>insert()</code></li>
<li>Initially will have a size of 16 capacity</li>
<li>It is thread-safe</li>
</ul>
</li>
<li><code v-pre>StringBuilder</code>
<ul>
<li>Basically same as <code v-pre>StringBuffer</code></li>
<li>It is not thread-safe, but faster</li>
<li><code v-pre>+, +=</code> is actually implemented by <code v-pre>StringBuilder</code>, one operator creates a new <code v-pre>StringBuilder</code> object</li>
</ul>
</li>
</ul>
<h3 id="printing" tabindex="-1"><a class="header-anchor" href="#printing"><span>Printing</span></a></h3>
<ul>
<li>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// Only take one parameter</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// Formatted output</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">printf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">format</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<hr>
<h2 id="array" tabindex="-1"><a class="header-anchor" href="#array"><span>Array</span></a></h2>
<ul>
<li>Initialisation
<ul>
<li><code v-pre>&lt;type&gt;[] varArr = new &lt;type&gt;[size];</code>
<ul>
<li>All elements will be initialized to <code v-pre>0</code>, <code v-pre>false</code>, or <code v-pre>null</code></li>
</ul>
</li>
<li><code v-pre>&lt;type&gt;[] varArr = {element1, element2, };</code>
<ul>
<li>Must combine with the declaration</li>
</ul>
</li>
<li>For loop</li>
</ul>
</li>
<li>Array is an object</li>
<li>Array has a field <code v-pre>length</code></li>
<li>Array utilities - <code v-pre>Arrays</code>
<ul>
<li><code v-pre>int binarySearch()</code></li>
<li><code v-pre>int compare()</code></li>
<li><code v-pre>T[] copyOf()</code></li>
<li><code v-pre>boolean equals()</code></li>
<li><code v-pre>void fill()</code></li>
<li><code v-pre>void sort()</code></li>
<li><code v-pre>String toString()</code></li>
<li><code v-pre>List&lt;T&gt; asList()</code></li>
</ul>
</li>
</ul>
<hr>
<h2 id="oop" tabindex="-1"><a class="header-anchor" href="#oop"><span>OOP</span></a></h2>
<h3 id="classes-and-objects" tabindex="-1"><a class="header-anchor" href="#classes-and-objects"><span>Classes and Objects</span></a></h3>
<ul>
<li>
<p>Class is the blueprint, objects are the instances of their class</p>
</li>
<li>
<p>Class - fields and methods</p>
<p>Object - properties and behaviors</p>
</li>
<li>
<p>Constructor</p>
<ul>
<li>A special method is required to create a new instance of the class</li>
<li>No return type</li>
<li>Every objects has a default constructor</li>
<li>Constructors can be overloaded, using <code v-pre>this</code> keyword to overload to avoid duplication</li>
<li><code v-pre>this()</code> must be the first statement in the overloaded constructor body</li>
<li>If a class doesn't explicitly declare any constructor, Java compiler automatically provides a no-argument constructor. This default constructor calls the class parent's no-argument constructor, or the <code v-pre>Object</code> constructor if the class has no parent. <strong>If the parent doesn't have no-argument constructor, compiler will reject the program.</strong></li>
<li>It's good to always define a default constructor</li>
</ul>
</li>
<li>
<p>The <code v-pre>getter</code> and <code v-pre>setter</code> can also have additional validations instead of just setting or getting the fields values</p>
</li>
<li>
<p>Reference vs. Object</p>
<ul>
<li>
<p>All other types which are not one of the primitive types are reference types</p>
</li>
<li>
<p>References --- pointers</p>
</li>
<li>
<p>The only operators allowed for reference type are assignment via <code v-pre>=</code> and equality comparison via <code v-pre>==</code> and <code v-pre>!=</code> (Strings can use <code v-pre>+</code>, <code v-pre>+=</code>)</p>
</li>
<li>
<p><code v-pre>instance of</code> operator: verify that an particular object is of a certain type</p>
<ul>
<li>Typically used before performing a type casting</li>
</ul>
</li>
<li>
<p><code v-pre>new</code> operator instantiates a class by allocating memory for a new object and returning a reference to that memory</p>
</li>
<li>
<p>In Java, there is no way to access an object directly (<em>no pointer</em>), everything is done using a reference</p>
</li>
</ul>
</li>
<li>
<p><code v-pre>static</code> keyword</p>
<ul>
<li>Fields that have <code v-pre>static</code> modifier are called static fields or class variables</li>
<li>They are associated with the class, rather than with any object. Every instance of the class shares a class variable, which is in one fixed location in memory</li>
<li><code v-pre>static</code> methods can't access instance methods and instance variables directly, and can't use <code v-pre>this</code> keyword</li>
<li>If a method doesn't use instance variables that method should be declared as a static method</li>
<li>Referring to static fields or methods with an object instance is not encouraged</li>
<li><strong><code v-pre>static</code> block</strong>: a code block that will be executed before the creation of any object of that class</li>
</ul>
</li>
<li>
<p><code v-pre>final</code> keyword</p>
<ul>
<li>
<p>Final variables</p>
<ul>
<li>
<p><code v-pre>final</code> means a value cannot be changed <strong>after</strong> initialisation at run-time</p>
<ul>
<li>Blank finals -&gt; a final field inside a class can be different from each other, and yet it remains its immutablility</li>
</ul>
</li>
<li>
<p><code v-pre>static final</code> means compile-time constant</p>
</li>
</ul>
</li>
<li>
<p>Final arguments</p>
<ul>
<li>Inside the method you cannot change the argument</li>
</ul>
</li>
<li>
<p>Final methods</p>
<ul>
<li>Prevent the method being overridden by the subclass</li>
<li>Any private methods in a class are implicitly <code v-pre>final</code></li>
</ul>
</li>
<li>
<p>Final classes</p>
<ul>
<li>Prevent the class from being inherited</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="reusing-classes" tabindex="-1"><a class="header-anchor" href="#reusing-classes"><span>Reusing classes</span></a></h3>
<h4 id="inheritance" tabindex="-1"><a class="header-anchor" href="#inheritance"><span>Inheritance</span></a></h4>
<ul>
<li>
<p><strong>&quot;is-a&quot;</strong> relationship</p>
</li>
<li>
<p><code v-pre>extends</code></p>
</li>
<li>
<p>Excepting <code v-pre>Object</code>, every class has one and only direct superclass</p>
</li>
<li>
<p>Inheritance chain</p>
</li>
<li>
<p>A subclass inherits all the members (fields, methods, and nested classes) from its super class</p>
</li>
<li>
<p>A subclass doesn't &quot;inherit&quot; (cannot directly access) the <code v-pre>private</code> members of its parent class</p>
<blockquote>
<p><a href="https://www.zhihu.com/question/63183685" target="_blank" rel="noopener noreferrer">A great discussion about this topic</a></p>
</blockquote>
</li>
<li>
<p>Values of the inheritance:</p>
<ul>
<li>To handle the complexity of the large project</li>
<li>Keep common behaviors in one class</li>
<li>Split different behaviors into separate classes</li>
<li>Keep all of the objects in a single data structure</li>
</ul>
</li>
<li>
<p><code v-pre>this</code> vs. <code v-pre>super</code></p>
<ul>
<li><code v-pre>super</code> is used to access/call the parent class members</li>
<li><code v-pre>this</code> is used to access/call the current class members</li>
<li>Both of them can be used anywhere in a class except static areas, any attempt to do so will lead to compile-time errors</li>
<li><code v-pre>this</code> is commonly used with constructors and setters</li>
<li><code v-pre>super</code> is commonly used with method overriding</li>
<li><code v-pre>this()</code> call a constructor from another overloaded constructor in the same class</li>
<li><code v-pre>super()</code> call a parent constructor</li>
<li><strong>Java compiler puts a default call to <code v-pre>super()</code> if we don't add it</strong>, and it's always the no-argument <code v-pre>super</code> which is inserted by compiler</li>
<li>A constructor can have a call to <code v-pre>super()</code> or <code v-pre>this()</code> but never both</li>
</ul>
</li>
<li>
<p><strong>Method overloading vs. method overriding</strong></p>
<ul>
<li>
<p>Method overloading means providing two or more separate methods in a class with the same name but different parameters</p>
</li>
<li>
<p>We can overload static and instance methods</p>
</li>
<li>
<p>Overloading rules</p>
<ul>
<li>Methods must have the same method name</li>
<li>Methods must have different parameters</li>
<li>If methods follow the rules above then they may or may ont
<ul>
<li>Have different return types</li>
<li>Have different access modifiers</li>
<li>Throw different checked or unchecked exceptions</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Method overriding means defining a method in a child class that already exists in the parent class with same signature</p>
</li>
<li>
<p>Overriding rules</p>
<ul>
<li>
<p>It must have same name and same arguments</p>
</li>
<li>
<p>Return type can be a subclass of the return type in the parent class</p>
<blockquote>
<p>Covariant return types</p>
</blockquote>
</li>
<li>
<p>We can't override static methods only instance methods</p>
</li>
<li>
<p>Constructors and private methods cannot be overridden</p>
</li>
<li>
<p>Methods that are final cannot be overridden</p>
</li>
<li>
<p>It can't have a lower access modifier</p>
</li>
<li>
<p>Must not throw a new or broader checked exception</p>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="composition" tabindex="-1"><a class="header-anchor" href="#composition"><span>Composition</span></a></h4>
<ul>
<li><strong>&quot;has-a&quot;</strong> relationship</li>
<li>Use class type variables as fields</li>
<li>Consider to use composition prior to inheritance</li>
</ul>
<h3 id="encapsulation" tabindex="-1"><a class="header-anchor" href="#encapsulation"><span>Encapsulation</span></a></h3>
<ul>
<li>Separate the implementation and the interface</li>
</ul>
<h3 id="polymorphism" tabindex="-1"><a class="header-anchor" href="#polymorphism"><span>Polymorphism</span></a></h3>
<ul>
<li>
<p>Compile Time Rules</p>
<ul>
<li>Compiler <strong>ONLY</strong> knows reference type</li>
<li>Can only look in reference type class for method</li>
<li>Outputs a method signature</li>
</ul>
</li>
<li>
<p>Runtime Rules</p>
<ul>
<li>Follow exact <strong>runtime type</strong> of object to find the method</li>
<li>Must match compile time method signature to appropriate method in actual object's class</li>
</ul>
</li>
</ul>
<hr>
<h2 id="interfaces-and-abstract-classes" tabindex="-1"><a class="header-anchor" href="#interfaces-and-abstract-classes"><span>Interfaces and Abstract Classes</span></a></h2>
<ul>
<li>Interfaces and abstract classes provide a more structured way to separate interface from implementation</li>
<li>Inheritance is specialisation; interface is generalisation</li>
</ul>
<h3 id="interfaces" tabindex="-1"><a class="header-anchor" href="#interfaces"><span>Interfaces</span></a></h3>
<ul>
<li>
<p><code v-pre>implements</code></p>
</li>
<li>
<p>An interface is a contract of what the classes <strong>can</strong> do</p>
</li>
<li>
<p>An abstract class taken to the extreme,thus more flexibility (complete decoupling)</p>
</li>
<li>
<p>Refer to different types of objects with one identical interface type</p>
<ul>
<li>Generalisation</li>
<li>Capability of putting different types of objects into one data structure</li>
<li>Less effort for code alteration</li>
</ul>
</li>
<li>
<p>One class can implement several interfaces</p>
<ul>
<li>&quot;Multiple inheritance&quot;: A class can be upcast to more than one base type with interfaces</li>
</ul>
</li>
<li>
<p>Interface cannot be instantiated</p>
</li>
<li>
<p>Methods in interfaces are implicitly <code v-pre>public</code></p>
</li>
<li>
<p>Fields in interfaces are implicitly constant (<code v-pre>public static final</code>)</p>
</li>
<li>
<p>SInce Java 8 interface can have <code v-pre>static</code> methods</p>
</li>
<li>
<p>An interface can extend another interface</p>
</li>
<li>
<p>Interface can have <code v-pre>default</code> methods which can have method body</p>
<ul>
<li>Java 8 feature</li>
<li>Make refactoring interface easier</li>
<li>Java 9 allows <code v-pre>private</code> methods in interface that can be used in <code v-pre>default</code> methods inside interface</li>
</ul>
</li>
<li>
<p>Type of Interface</p>
<ul>
<li>
<p>Normal interface</p>
</li>
<li>
<p><strong>Functional Interface</strong></p>
<ul>
<li>Has only one abstract function</li>
</ul>
</li>
<li>
<p>Marker Interface</p>
<ul>
<li>Has no member fields or methods</li>
<li>Eg. <code v-pre>Serializable</code>, <code v-pre>Cloneable</code>, <code v-pre>RandomAccess</code></li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="abstract-classes" tabindex="-1"><a class="header-anchor" href="#abstract-classes"><span>Abstract Classes</span></a></h3>
<ul>
<li>An abstract class is a class that is declared <code v-pre>abstract</code></li>
<li>Contain a mix of methods with or without implementation</li>
<li>An abstract method is a method that is declared <code v-pre>abstract</code> without an implementation</li>
<li>Abstract class cannot be instantiated, but can be subclassed</li>
<li>When an abstract class is subclassed, the subclass usually provides implementations for all of the abstract methods in its superclass. However, if it doesn't, then the subclass must also be declared <code v-pre>abstract</code></li>
<li>A subclass of a non-abstract superclass can be <code v-pre>abstract</code></li>
</ul>
<h3 id="interfaces-vs-abstract-classes" tabindex="-1"><a class="header-anchor" href="#interfaces-vs-abstract-classes"><span>Interfaces vs. Abstract Classes</span></a></h3>
<ul>
<li>Abstract Classes
<ul>
<li>Purpose is to <strong>provide a common definition of a base class that multiple derived classes can share</strong></li>
<li>Share code among several <strong>closely related classes</strong></li>
<li>Expect classes that extend your abstract class to have many common methods or fields or required access modifier other than <code v-pre>public</code></li>
<li>Want to declare non static or non final fields</li>
<li>Provide default implementations of certain methods but leave other methods open to being overridden</li>
</ul>
</li>
<li>Interfaces
<ul>
<li>Purpose is <strong>abstraction</strong></li>
<li>Expect unrelated classes will implement your interface</li>
<li>Want to specify the behavior of a particular data type, but not concern about who implements its behavior</li>
<li>Want to separate different behaviors</li>
</ul>
</li>
</ul>
<hr>
<h2 id="access-control" tabindex="-1"><a class="header-anchor" href="#access-control"><span>Access Control</span></a></h2>
<ul>
<li>
<p>Package</p>
<ul>
<li>A collection of similar classes, interfaces, or other packages</li>
<li><code v-pre>package</code>, <code v-pre>import</code></li>
<li>Create a library and import it
<ul>
<li>Extract the package to <code v-pre>.jar</code> (Java ARchive) file in the project structure</li>
<li>Import the <code v-pre>.jar</code> file into the new project libraries in the project structure</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Scope</p>
</li>
<li>
<p>Naming Convention</p>
<ul>
<li>Reversed url</li>
</ul>
</li>
<li>
<p>Access control</p>
<ul>
<li>
<p>At the top level: public or package-private (no explicit modifiers)</p>
</li>
<li>
<p>At the member level: public, private, protected, or package-private</p>
</li>
<li>
<p>A class declared with <code v-pre>public</code> is visible to all classes everywhere; A class with no modifier is visible only within its package</p>
</li>
<li>
<table>
<thead>
<tr>
<th>Modifier</th>
<th>Class</th>
<th>Package</th>
<th>Subclass outside the package</th>
<th>World</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>public</code></td>
<td>Y</td>
<td>Y</td>
<td>Y</td>
<td>Y</td>
</tr>
<tr>
<td><code v-pre>protected</code></td>
<td>Y</td>
<td>Y</td>
<td>Y</td>
<td>N</td>
</tr>
<tr>
<td>no modifier</td>
<td>Y</td>
<td>Y</td>
<td>N</td>
<td>N</td>
</tr>
<tr>
<td><code v-pre>private</code></td>
<td>Y</td>
<td>N</td>
<td>N</td>
<td>N</td>
</tr>
</tbody>
</table>
</li>
</ul>
</li>
</ul>
<hr>
<h2 id="nested-classes" tabindex="-1"><a class="header-anchor" href="#nested-classes"><span>Nested Classes</span></a></h2>
<ul>
<li>Place a class definition within another class definition</li>
<li>Nested classes are divided into two categories: non-static and static
<ul>
<li>Non-static nested classes are called <em>inner classes</em></li>
<li>Nested classes that are declared <code v-pre>static</code> are called <em>static nested classes</em></li>
</ul>
</li>
</ul>
<h3 id="inner-classes" tabindex="-1"><a class="header-anchor" href="#inner-classes"><span>Inner Classes</span></a></h3>
<ul>
<li>
<p>Inside the outer class, inner class can access the members of outer class directly (even if it's <code v-pre>private</code>)</p>
</li>
<li>
<p>Inside the outer class, you can create inner class objects</p>
</li>
<li>
<p>If you want to make an object of the inner class anywhere except from within a non-static method of the outer class, you must specify the type of the object as <code v-pre>Outer.Inner</code></p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// Inner class is public</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Outer</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> outer </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Outer</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Outer</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Inner</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> inner </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> outer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Inner</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Produce the reference to the outer class object within the inner class definition: <code v-pre>Outer.this</code></p>
</li>
<li>
<p>The inner class will be compiled to <code v-pre>Outer$Inner.class</code></p>
</li>
<li>
<p>Inner class cannot have <code v-pre>static</code> members or nested classes</p>
</li>
</ul>
<h3 id="local-and-anonymous-inner-classes" tabindex="-1"><a class="header-anchor" href="#local-and-anonymous-inner-classes"><span>Local and Anonymous Inner Classes</span></a></h3>
<ul>
<li>
<p>Local inner class: an inner class defined inside a code block, typically in a method</p>
<ul>
<li>A local class can access local variables and parameters of the enclosing block that are final or <em>effectively final</em></li>
</ul>
</li>
<li>
<p>Anonymous inner class: an inner class defined at the time of creation of itself</p>
<ul>
<li>
<p>In other words, we can say that it a class without the name and can have only one object that is created by its definition</p>
</li>
<li>
<p>Useful when you want a class inheriting from a superclass or implementing an interface which only used in a specific method</p>
</li>
<li>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">interface</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Eatable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> 	void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> eat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> TestAnnonymousInner1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">   public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">String</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[])</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">   		Eatable</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> e</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Eatable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    		public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> eat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"nice fruits"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">   		};</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">   		e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">eat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">   }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<h3 id="static-nested-classes" tabindex="-1"><a class="header-anchor" href="#static-nested-classes"><span>Static Nested Classes</span></a></h3>
<ul>
<li>
<p>The static member of outer class</p>
</li>
<li>
<p>In effect, a static nested class is behaviorally a top-level class that has been nested in another top-level class for packaging convenience</p>
</li>
<li>
<p>You instantiate a static nested class the same way as a top-level class</p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">StaticNestedClass</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> staticNestedObject </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> StaticNestedClass</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
<h3 id="why-nested-classes" tabindex="-1"><a class="header-anchor" href="#why-nested-classes"><span>Why Nested Classes?</span></a></h3>
<ul>
<li>It is a way of logically grouping classes that are only used in one place</li>
<li>It increases encapsulation</li>
<li>It can lead to more readable and maintainable code</li>
<li>Nature of the problem</li>
</ul>
<hr>
<h2 id="exception-handling" tabindex="-1"><a class="header-anchor" href="#exception-handling"><span>Exception Handling</span></a></h2>
<h3 id="type-of-errors" tabindex="-1"><a class="header-anchor" href="#type-of-errors"><span>Type of Errors</span></a></h3>
<ul>
<li>Syntax error
<ul>
<li>Identified by compiler</li>
</ul>
</li>
<li>Logical error
<ul>
<li>Identified by debugging</li>
</ul>
</li>
<li><strong>Runtime error</strong>
<ul>
<li>Bad inputs</li>
<li>Unavailable resources</li>
<li>Etc.</li>
</ul>
</li>
</ul>
<h3 id="exception-class" tabindex="-1"><a class="header-anchor" href="#exception-class"><span><code v-pre>Exception</code> Class</span></a></h3>
<ul>
<li>
<p>Methods</p>
<ul>
<li>
<p><code v-pre>String getMessage()</code></p>
</li>
<li>
<p><code v-pre>String toString()</code></p>
</li>
<li>
<p><code v-pre>void printStackTrace()</code></p>
<ul>
<li>Prints this throwable and its backtrace to the standard error stream</li>
</ul>
</li>
</ul>
</li>
<li>
<Mermaid code="eJxlkEtOw0AQRPc+hS+QKyDFPzBgDzIRm5YX40kHD8zH6vSQcHvCOEgmXna9KlWp30lOY7orki2I4QMV9+lmc5dmsBvJn+RgsE+yKOVQnhVOrL37kwooiTz1SR7PEnIjj8fWc+WD2y/sM6+gFivxHmrHSBQmxmWki/QB2mAHpMqTlbwKd9AFx9riKljDljSPFlmrFXy8dO7xLAKLQ3YzdXY8XXqNefH6d9uCFpE+wytL9Sm+kA7Gn65PmFkDb5o4SNNINWqH/2ALsbNB6+n7Sn4Ak0CA3A=="></Mermaid></li>
<li>
<p>Error</p>
<ul>
<li>
<p>Error cause the program to exit since they are not recoverable</p>
</li>
<li>
<p>Considered as unchecked exceptions</p>
</li>
</ul>
</li>
<li>
<p><strong>Checked exceptions</strong>: you must handle them <em>at compile time</em></p>
</li>
<li>
<p><code v-pre>RuntimeException</code></p>
</li>
<li>
<p><strong>Unchecked exceptions</strong>: you don't have to handle them</p>
</li>
<li>
<p>They’re always <strong>thrown automatically</strong> by Java and you don’t need to include them in your exception specifications</p>
</li>
<li>
<p>If a <code v-pre>RuntimeException</code> gets all the way out to <code v-pre>main( )</code> <strong>without being caught</strong>, <code v-pre>printStackTrace( )</code> is called for that exception as the program exits; the output is reported to <code v-pre>System.err</code></p>
</li>
<li>
<p>Creating your own exceptions</p>
<ul>
<li>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> MinBalanceException</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> extends</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Exception</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  public</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> String</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> toString</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "Minimal balance should be 5000. Try again!"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<h3 id="how-to-handle-exceptions" tabindex="-1"><a class="header-anchor" href="#how-to-handle-exceptions"><span>How to Handle Exceptions</span></a></h3>
<ul>
<li>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">try</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  // logic that might generate exceptions</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">} </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">catch</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> () {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  // handling exception if it occurs</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">} </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">finally</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  // activities happen every time even if a method is returned (executed before return)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  // cleanup</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>There can be zero, one, or multiple <code v-pre>catch</code> blocks</p>
</li>
<li>
<p><code v-pre>try catch</code> block can be nested</p>
</li>
<li>
<p><code v-pre>finally</code> block is necessary when you need to set something other than memory (garbage collector is responsible for releasing heap memories) back to its original state (releasing resources)</p>
</li>
</ul>
<blockquote>
<p>Objects in heap are also resources, the real composition of the program are the references on stack</p>
</blockquote>
<ul>
<li>
<p>The finally block will not be executed if program exits (either by calling <code v-pre>System.exit()</code> or by causing a fatal error that causes the process to abort)</p>
</li>
<li>
<p><strong>Try with resources</strong></p>
<ul>
<li>
<p>Java 7 feature</p>
</li>
<li>
<p>Support multiple resources, separated by <code v-pre>;</code></p>
</li>
<li>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">try</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Scanner</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> scanner </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Scanner</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> File</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"test.txt"</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">))) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    while</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">scanner</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">hasNext</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">scanner</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">nextLine</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">());</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">} </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">catch</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">FileNotFoundException</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> fnfe</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">    fnfe</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">printStackTrace</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// no finally block</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// For objects which implement AutoClosable interface</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>Java supports termination exception handling instead of resumption</p>
</li>
<li>
<p><strong>Throwing an exception</strong></p>
<ul>
<li><code v-pre>throw new Exception(&quot;&quot;);</code></li>
<li>Exceptions can be rethrown
<ul>
<li>Happen in the <code v-pre>catch</code> block</li>
<li><em>Exception chaining</em>: Often you want to catch one exception and throw another, but still keep the information about the originating exception</li>
</ul>
</li>
<li>Exception propagation
<ul>
<li>Exception bubbles up through the call stack if it is not caught</li>
</ul>
</li>
</ul>
</li>
</ul>
<blockquote>
<p>There is a pitfall in Java Exception implementation: lost exception</p>
<p><code v-pre>return</code> inside <code v-pre>finally</code> block</p>
</blockquote>
<h3 id="exception-specification" tabindex="-1"><a class="header-anchor" href="#exception-specification"><span>Exception Specification</span></a></h3>
<ul>
<li>Politely tell the client programmer what exceptions the method throws, so the client programmer can handle them</li>
<li><code v-pre>throws</code></li>
<li>Unchecked exceptions can be omitted</li>
<li>The &quot;exception specification interface&quot; for a particular method may narrow during inheritance and overriding, but it may not widen</li>
</ul>
<blockquote>
<p><a href="https://www.oracle.com/technical-resources/articles/enterprise-architecture/effective-exceptions-part1.html" target="_blank" rel="noopener noreferrer">A great article by Barry Ruzek around this topic</a></p>
</blockquote>
<hr>
<h2 id="multiprogramming" tabindex="-1"><a class="header-anchor" href="#multiprogramming"><span>Multiprogramming</span></a></h2>
<ul>
<li>
<p>Multiprogramming</p>
<ul>
<li>
<p>Running more than one programs on a single computer</p>
</li>
<li>
<Mermaid code="eJxLL0osyFAIceFyjPYtzSnJLCjKBwrl5mbmpccq6Orq2ik4QSR0S4tTi4pjuRwhos4Q0ZLE4myQUi5niLALVDijKDUxBSwBADvqIEU="></Mermaid></li>
</ul>
</li>
</ul>
<blockquote>
<p>Go read the Concurrency chapter of Thinking in Java</p>
</blockquote>
<ul>
<li>By multiprogramming CPU's idle time is minimised</li>
<li>A Thread of execution is the smallest sequence of programmed instructions that can be managed independently</li>
<li>In many cases, a thread is a component of a process</li>
<li>Useful for web server, GUI, animation, etc.</li>
</ul>
<h3 id="how-to-implement-multithreading" tabindex="-1"><a class="header-anchor" href="#how-to-implement-multithreading"><span>How to Implement Multithreading</span></a></h3>
<ol>
<li>
<p><code v-pre>extends</code> or <code v-pre>implements</code> or lambda expression</p>
<ul>
<li>Depends on whether the subclass is inherited a superclass or not</li>
<li><code v-pre>Thread</code> class</li>
<li><code v-pre>Runnable</code> interface</li>
</ul>
</li>
<li>
<p>Overriding the <code v-pre>run()</code> method</p>
<ul>
<li><code v-pre>run()</code> is the starting point of a thread</li>
</ul>
</li>
<li>
<p>Start the thread</p>
<ul>
<li>If <code v-pre>implements Runnable</code>, <code v-pre>Thread t = new Thread(new Object()); t.start();</code></li>
<li>If <code v-pre>extends Thread</code>, <code v-pre>o.start();</code></li>
</ul>
</li>
</ol>
<h3 id="thread-class" tabindex="-1"><a class="header-anchor" href="#thread-class"><span><code v-pre>Thread</code> class</span></a></h3>
<ul>
<li>
<p>States of Thread</p>
<ul>
<li><img src="/assets/image/java/thread-states.png" alt="thread-states" tabindex="0" loading="lazy"><figcaption>thread-states</figcaption></li>
</ul>
</li>
<li>
<p>Thread priority</p>
<ul>
<li>Scheduler in JVM maintains a thread ready queue</li>
<li>The exact behaviour depends on the JVM</li>
</ul>
</li>
<li>
<p>Constructors</p>
<ul>
<li><code v-pre>Thread()</code></li>
<li><code v-pre>Thread(Runnable r)</code></li>
<li><code v-pre>Thread(Runnable r, String name)</code></li>
<li><code v-pre>Thread(ThreadGroup g, String name)</code></li>
</ul>
</li>
<li>
<p>Getter and setter</p>
<ul>
<li><code v-pre>long getId()</code></li>
<li><code v-pre>String getName()</code></li>
<li><code v-pre>int getPriority()</code>
<ul>
<li>Default priority of a thread (<code v-pre>NORM_PRIORITY</code>) in Java is 5; <code v-pre>MIN_PRIORITY</code> is 1 and <code v-pre>MAX_PRIORITY</code> is 10</li>
</ul>
</li>
<li><code v-pre>ThreadState getState()</code></li>
<li><code v-pre>ThreadGroup getThreadGroup()</code></li>
<li><code v-pre>void setName(String name)</code></li>
<li><code v-pre>void setPriority(int p)</code></li>
<li><code v-pre>void setDaemon(boolean b)</code>
<ul>
<li>A daemon thread is the background thread with least priority</li>
<li>An example: garbage collector</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Enquiry methods</p>
<ul>
<li><code v-pre>boolean isAlive()</code></li>
<li><code v-pre>boolean isDaemon()</code></li>
<li><code v-pre>boolean isInterrupted()</code></li>
</ul>
</li>
<li>
<p>Instance methods</p>
<ul>
<li>
<p><code v-pre>void inerrupt()</code></p>
</li>
<li>
<p><code v-pre>void join()</code></p>
<ul>
<li>Wait for this thread to die</li>
</ul>
</li>
<li>
<p><code v-pre>void join(long milli)</code></p>
</li>
<li>
<p><code v-pre>void run()</code></p>
</li>
<li>
<p><code v-pre>void start()</code></p>
</li>
</ul>
</li>
<li>
<p>Static methods</p>
<ul>
<li>
<p><code v-pre>int activeCount()</code></p>
<ul>
<li>Returns an estimate of the number of active threads in the current thread's <code v-pre>ThreadGroup</code> and its subgroups</li>
</ul>
</li>
<li>
<p><code v-pre>Thread currentThread()</code></p>
<ul>
<li>Returns a reference to the currently executing thread object.</li>
</ul>
</li>
<li>
<p><code v-pre>void sleep(long milli)</code></p>
<ul>
<li>Causes the currently executing thread to sleep</li>
</ul>
</li>
<li>
<p><code v-pre>void yield()</code></p>
<ul>
<li>A hint to the scheduler that the current thread is willing to yield its current use of a processor</li>
</ul>
</li>
<li>
<p><code v-pre>void dumpStack()</code></p>
<ul>
<li>Prints a stack trace of the current thread to the standard error stream</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="synchronisation" tabindex="-1"><a class="header-anchor" href="#synchronisation"><span>Synchronisation</span></a></h3>
<ul>
<li>Shared resources</li>
<li>Critical section</li>
<li>Mutual exclusion</li>
<li>Locking / mutex</li>
<li>Semaphore</li>
<li>Monitor</li>
<li>Race condition</li>
<li>Inter-thread communication</li>
<li>How Java achieve synchronisation
<ul>
<li>Object monitor</li>
<li><code v-pre>sychronized</code>
<ul>
<li>Guard the critical section</li>
</ul>
</li>
<li>Synchronised method</li>
<li>Synchronised block</li>
</ul>
</li>
<li>How Java achieve ITC
<ul>
<li><code v-pre>wait()</code>, <code v-pre>notify()</code>, <code v-pre>notifyAll()</code></li>
</ul>
</li>
</ul>
<hr>
<h2 id="java-lang" tabindex="-1"><a class="header-anchor" href="#java-lang"><span><code v-pre>Java.lang</code></span></a></h2>
<ul>
<li>A default package which will be automatically imported</li>
</ul>
<h3 id="object" tabindex="-1"><a class="header-anchor" href="#object"><span><code v-pre>Object</code></span></a></h3>
<ul>
<li>
<p>The root of the class hierarchy</p>
</li>
<li>
<p>Every class is a subclass, direct or indirect, of the <code v-pre>Object</code> class</p>
</li>
<li>
<p><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html" target="_blank" rel="noopener noreferrer">Interfaces</a></p>
<ul>
<li>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> * native 方法，用于返回当前运行时对象的 Class 对象，使用了 final 关键字修饰，故不允许子类重写。</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> final</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> native</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Class</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">&#x3C;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">?</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">></span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> getClass</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">()</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> * native 方法，用于返回对象的哈希码，主要使用在哈希表中，比如 JDK 中的HashMap。</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> native</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> hashCode</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">()</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> * 用于比较 2 个对象的内存地址是否相等，String 类对该方法进行了重写以用于比较字符串的值是否相等。</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> boolean</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> equals</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Object</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> obj)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> * native 方法，用于创建并返回当前对象的一份拷贝。</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">protected</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> native</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Object</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> clone</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">() throws </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">CloneNotSupportedException</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> * 返回类的名字实例的哈希码的 16 进制的字符串。建议 Object 所有的子类都重写这个方法。</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> String</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> toString</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">()</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> * native 方法，并且不能重写。唤醒一个在此对象监视器上等待的线程(监视器相当于就是锁的概念)。如果有多个线程在等待只会任意唤醒一个。</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> final</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> native</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> notify</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">()</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> * native 方法，并且不能重写。跟 notify 一样，唯一的区别就是会唤醒在此对象监视器上等待的所有线程，而不是一个线程。</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> final</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> native</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> notifyAll</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">()</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> * native方法，并且不能重写。暂停线程的执行。注意：sleep 方法没有释放锁，而 wait 方法释放了锁 ，timeout 是等待时间。</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> final</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> native</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> wait</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">long</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> timeout) throws </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">InterruptedException</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> * 多了 nanos 参数，这个参数表示额外时间（以纳秒为单位，范围是 0-999999）。 所以超时的时间还需要加上 nanos 纳秒。。</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> final</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> wait</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">long</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> timeout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> nanos) throws </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">InterruptedException</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> * 跟之前的2个wait方法一样，只不过该方法一直等待，没有超时时间这个概念</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> final</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> wait</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">() throws </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">InterruptedException</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> * 实例被垃圾回收器回收的时候触发的操作</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">protected</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> finalize</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">() throws Throwable { }</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>Override <code v-pre>equals()</code> and <code v-pre>hashcode()</code></p>
<ul>
<li>If two objects are equal according to the <code v-pre>equals()</code> method, then calling the <code v-pre>hashCode</code> method on each of the two objects must produce the same integer result</li>
<li><strong>If two objects are equivalent then their hashcode must be equal; if two objects' hashcode are equal, it doesn't mean that these two objects are necessarily equivalent</strong></li>
<li>Default implementation of <code v-pre>equals()</code> simply tests <code v-pre>this == obj</code></li>
<li>If logical equivalent is important, override <code v-pre>equals()</code></li>
<li><strong>Principles</strong>
<ul>
<li>Reflexive</li>
<li>Symmetric</li>
<li>Transitive</li>
<li>Consistent</li>
<li>For non-null reference <code v-pre>x</code>, <code v-pre>x.equals(null) == false</code></li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="wrapper-class" tabindex="-1"><a class="header-anchor" href="#wrapper-class"><span>Wrapper Class</span></a></h3>
<ul>
<li>
<p>Java supports primitive types using classes</p>
</li>
<li>
<p>Wrapper objects are <strong>immutable</strong></p>
</li>
<li>
<p>Initialisation</p>
<ul>
<li><code v-pre>Integer myInteger = new Integer(56);</code></li>
<li><code v-pre>Integer myInteger = 56;</code>
<ul>
<li>Will be converted to <code v-pre>Integer myInteger = Integer.valueOf(56);</code> at compile time</li>
</ul>
</li>
<li><code v-pre>int myInt = myInteger</code>
<ul>
<li>Will be converted to <code v-pre>int myInt = myInteger.intValue()</code></li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>It's a good practice using <code v-pre>equals()</code> method to compare wrapper class objects</strong></p>
</li>
<li>
<p>Interfaces</p>
<ul>
<li>
<p>Autoboxing --- <code v-pre>Integer.valueOf(int)</code></p>
</li>
<li>
<p>Unboxing --- <code v-pre>intValue()</code></p>
</li>
<li>
<p>Parsing values from a string</p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> strNum </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "2048"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> num </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> Integer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">parseInt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(strNum);</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p><code v-pre>BigDecimal</code></p>
<ul>
<li>Constructor
<ul>
<li><code v-pre>BigDecimal(String value)</code></li>
<li><code v-pre>BigDecimal.valueOf(double value)</code></li>
</ul>
</li>
<li>Methods
<ul>
<li><code v-pre>BigDecimal add(BigDecimal val)</code></li>
<li><code v-pre>BigDecimal substract(BigDecimal val)</code></li>
<li><code v-pre>BigDecimal multiply(BigDecimal val)</code></li>
<li><code v-pre>BigDecimal divide(BigDecimal divisor, int scale, RoundingMode roundingMode)</code></li>
<li><code v-pre>int compareTo(BigDecimal val)</code>
<ul>
<li>Omit comparison on scale</li>
<li>DON'T use <code v-pre>equals()</code></li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="math" tabindex="-1"><a class="header-anchor" href="#math"><span><code v-pre>Math</code></span></a></h3>
<ul>
<li>All static methods</li>
</ul>
<h3 id="enum" tabindex="-1"><a class="header-anchor" href="#enum"><span><code v-pre>Enum</code></span></a></h3>
<ul>
<li>Work like a class with static final fields, each identifier is an object</li>
<li>It can have a constructor but only <code v-pre>private</code> or default</li>
<li>It can also have other members</li>
</ul>
<h3 id="java-lang-reflect" tabindex="-1"><a class="header-anchor" href="#java-lang-reflect"><span><code v-pre>Java.lang.reflect</code></span></a></h3>
<ul>
<li>
<p>Helpful to get information of a class</p>
</li>
<li>
<p>Four ways to get a <code v-pre>Class</code> object</p>
<ul>
<li>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Class</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> alunbarClass </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> TargetObject</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">TargetObject</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> o </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> TargetObject</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Class</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> alunbarClass2 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> o</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">getClass</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// Below two will not initialise the class,</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// static fields and static code blocks will not be executed</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Class</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> alunbarClass1 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> Class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">forName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"cn.javaguide.TargetObject"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">ClassLoader</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">getSystemClassLoader</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">loadClass</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"cn.javaguide.TargetObject"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>Example</p>
<ul>
<li>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">package</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD"> cn.javaguide</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> TargetObject</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    private</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    public</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> TargetObject</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        value </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "JavaGuide"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> publicMethod</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">String</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"I love "</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> +</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> s);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    private</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> privateMethod</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"value is "</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> +</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> value);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">package</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD"> cn.javaguide</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> throws</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> ClassNotFoundException</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> NoSuchMethodException</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> IllegalAccessException</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> InstantiationException</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> InvocationTargetException</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> NoSuchFieldException</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">        Class</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD">?</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">> </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">targetClass</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> Class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">forName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"cn.javaguide.TargetObject"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">        TargetObject</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> targetObject</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (TargetObject) </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">targetClass</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">newInstance</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">        Method</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">[] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">methods</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> targetClass</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">getDeclaredMethods</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Method</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> method</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> :</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> methods) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">            System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">method</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">getName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">());</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">        Method</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> publicMethod</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> targetClass</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">getDeclaredMethod</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"publicMethod"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">                String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        publicMethod</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">invoke</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(targetObject, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"JavaGuide"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">        Field</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> field</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> targetClass</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">getDeclaredField</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"value"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        field</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">setAccessible</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        field</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">set</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(targetObject, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"JavaGuide"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">        Method</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> privateMethod</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> targetClass</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">getDeclaredMethod</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"privateMethod"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        privateMethod</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">setAccessible</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        privateMethod</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">invoke</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(targetObject);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<h3 id="serializabale" tabindex="-1"><a class="header-anchor" href="#serializabale"><span><code v-pre>Serializabale</code></span></a></h3>
<ul>
<li><a href="https://javaguide.cn/java/basis/serialization.html" target="_blank" rel="noopener noreferrer">https://javaguide.cn/java/basis/serialization.html</a></li>
</ul>
<hr>
<h2 id="date-and-time-api" tabindex="-1"><a class="header-anchor" href="#date-and-time-api"><span>Date and Time API</span></a></h2>
<ul>
<li>Starting time: <code v-pre>1 Jan 1970</code>; starting year for a calendar: <code v-pre>1900</code></li>
<li>Old APIs in <code v-pre>java.util</code>
<ul>
<li>Keep timestamp in a <code v-pre>long</code> value in milliseconds</li>
<li>Is mutable</li>
<li><code v-pre>java.util.Date</code> is deprecated</li>
<li><code v-pre>java.util.Calendar</code>
<ul>
<li>An abstract class</li>
<li>The standard calendar: <code v-pre>GregorianCalendar</code></li>
</ul>
</li>
<li><code v-pre>java.util.TimeZone</code>
<ul>
<li>An abstract class</li>
</ul>
</li>
</ul>
</li>
<li>New APIs: Joda Date and Time APIs in <code v-pre>java.time</code>
<ul>
<li>Date and time are separated</li>
<li>Keep timestamp in seconds and nano seconds</li>
<li>Is <strong>immutable</strong></li>
<li><code v-pre>Instant</code>
<ul>
<li>A timestamp</li>
</ul>
</li>
<li><code v-pre>LocalDate</code>, <code v-pre>LocalTime</code>, <code v-pre>LocalDateTime</code>, <code v-pre>ZonedDateTime</code>, <code v-pre>ZoneID</code></li>
<li><code v-pre>Duration</code>, <code v-pre>Period</code>
<ul>
<li>A <code v-pre>Duration</code> is a simple measure of time along the time-line in nanoseconds</li>
<li>A <code v-pre>Period</code> expresses an amount of time in units meaningful to humans, such as years or days</li>
<li><code v-pre>between()</code></li>
</ul>
</li>
<li><code v-pre>Month</code>, <code v-pre>DayOfWeek</code>, <code v-pre>Year</code>, <code v-pre>YearMonth</code>, <code v-pre>MonthDay</code>, <code v-pre>OffsetTime</code>, <code v-pre>OffsetDateTime</code>, <code v-pre>ZoneOffset</code></li>
<li>Methods
<ul>
<li><code v-pre>of</code> - static factory method</li>
<li><code v-pre>now</code> - static factory method</li>
<li><code v-pre>parse</code> - static factory method focused on parsing</li>
<li><code v-pre>get</code> - gets the value of something</li>
<li><code v-pre>is</code> - checks if something is true</li>
<li><code v-pre>with</code> - the immutable equivalent of a setter</li>
<li><code v-pre>plus</code> - adds an amount to an object</li>
<li><code v-pre>minus</code> - subtracts an amount from an object</li>
<li><code v-pre>to</code> - converts this object to another type</li>
<li><code v-pre>at</code> - combines this object with another</li>
</ul>
</li>
<li>All calculations should check for numeric overflow and throw either an <code v-pre>ArithmeticException</code> or a <code v-pre>DateTimeException</code></li>
<li><code v-pre>DateTimeFormatter</code>
<ul>
<li><code v-pre>ofPattern(String pattern)</code></li>
<li><a href="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatter.html" target="_blank" rel="noopener noreferrer">doc</a></li>
</ul>
</li>
<li><code v-pre>ChronoField</code></li>
</ul>
</li>
</ul>
<hr>
<h2 id="lamda-expression" tabindex="-1"><a class="header-anchor" href="#lamda-expression"><span>Lamda Expression</span></a></h2>
<ul>
<li>
<p>Java 8 feature</p>
</li>
<li>
<p>Anonymous function whose definition is not bound to an identifier</p>
</li>
<li>
<p>To replace anonymous inner class</p>
</li>
<li>
<p>Only works for <strong><code v-pre>FunctionalInterface</code></strong></p>
</li>
<li>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">FunctionalInterface</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">interface</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> MyLambda</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> display</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">String</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">    MyLambda</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> m</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (s) </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD">-></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">      System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Hello "</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> +</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> s);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    };</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">    m</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">display</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"David"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Acting as an object</p>
</li>
<li>
<p>Local variables referenced from a lambda expression must be final or effectively final (not modified)</p>
</li>
<li>
<p>Instance variables can be accessed and modified</p>
</li>
<li>
<p>Use cases</p>
<ul>
<li><code v-pre>Runnable</code></li>
<li><code v-pre>Comparator</code></li>
<li><code v-pre>Listener</code></li>
<li><code v-pre>Collections</code></li>
</ul>
</li>
</ul>
<blockquote>
<p>Very similar to arrow function in JavaScript</p>
<p><a href="https://www.oracle.com/webfolder/technetwork/tutorials/obe/java/lambda-quickstart/index.html" target="_blank" rel="noopener noreferrer">Oracle tutorial</a></p>
</blockquote>
<ul>
<li>
<p>Method references</p>
<ul>
<li>
<p>Sometimes, a lambda expression does nothing but call an existing method. In those cases, it's often clearer to refer to the existing method by name</p>
</li>
<li>
<table>
<thead>
<tr>
<th>Kind</th>
<th>Syntax</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td>Reference to a static method</td>
<td><code v-pre>ContainingClass::staticMethodName</code></td>
<td><code v-pre>Person::compareByAge</code> <code v-pre>MethodReferencesExamples::appendStrings</code></td>
</tr>
<tr>
<td>Reference to an instance method of a particular object</td>
<td><code v-pre>containingObject::instanceMethodName</code></td>
<td><code v-pre>myComparisonProvider::compareByName</code> <code v-pre>myApp::appendStrings2</code></td>
</tr>
<tr>
<td>Reference to an instance method of an arbitrary object of a particular type</td>
<td><code v-pre>ContainingType::methodName</code></td>
<td><code v-pre>String::compareToIgnoreCase</code> <code v-pre>String::concat</code></td>
</tr>
<tr>
<td>Reference to a constructor</td>
<td><code v-pre>ClassName::new</code></td>
<td><code v-pre>HashSet::new</code></td>
</tr>
</tbody>
</table>
</li>
</ul>
</li>
</ul>
<hr>
<h2 id="java-io-streams" tabindex="-1"><a class="header-anchor" href="#java-io-streams"><span>Java IO Streams</span></a></h2>
<ul>
<li>
<img src="/assets/image/java/Stream.png" alt="Stream" style="zoom:33%;" />
</li>
<li>Stack and method area is the <strong>context</strong> of a program; others are the resources</li>
<li><a href="https://docs.oracle.com/javase%2F9%2Fdocs%2Fapi%2F%2F/java/io/package-tree.html" target="_blank" rel="noopener noreferrer"><code v-pre>java.io</code> package hierarchy</a></li>
<li><a href="https://docs.oracle.com/javase/tutorial/essential/io/index.html" target="_blank" rel="noopener noreferrer">Java Stream Tutorial</a></li>
</ul>
<h3 id="stream" tabindex="-1"><a class="header-anchor" href="#stream"><span>Stream</span></a></h3>
<ul>
<li><em>Stream is a flow of data</em></li>
<li>An <em>I/O Stream</em> represents an input source or an output destination</li>
<li>Streams support many different kinds of data, including simple bytes, primitive data types, localized characters, and objects</li>
<li>Some streams simply pass on data; others manipulate and transform the data in useful ways</li>
<li>The basic principle
<ul>
<li>A stream is a sequence of data</li>
<li>A program uses an <em>input stream</em> to read data from a source, one item at a time</li>
<li>A program uses an <em>output stream</em> to write data to a destination, one item at time</li>
</ul>
</li>
</ul>
<h3 id="byte-streams" tabindex="-1"><a class="header-anchor" href="#byte-streams"><span>Byte Streams</span></a></h3>
<ul>
<li>Handle I/O of raw binary data</li>
<li>All byte stream classes are descended from <code v-pre>InputStream</code>and <code v-pre>OutputStream</code> (abstract class)</li>
<li><code v-pre>InputStream</code> methods
<ul>
<li><code v-pre>int read()</code>
<ul>
<li>Reads the next byte of data from the input stream</li>
<li>The only abstract method</li>
<li>Returns the next byte of data, or <code v-pre>-1</code> if the end of the stream is reached</li>
<li>This method blocks until input data is available, end of file is detected, or an exception is thrown</li>
</ul>
</li>
<li><code v-pre>int read(byte[] b)</code>
<ul>
<li>Reads some number of bytes from the input stream and stores them into the buffer array <code v-pre>b</code></li>
</ul>
</li>
<li><code v-pre>int read(byte[]b, int off, int len)</code>
<ul>
<li>Reads up to <code v-pre>len</code> bytes of data from the input stream into buffer array <code v-pre>b</code></li>
<li>The first byte read is stored into element <code v-pre>b[off]</code>, the next one into <code v-pre>b[off+1]</code>, and so on</li>
</ul>
</li>
<li><code v-pre>byte[] readAllBytes()</code>
<ul>
<li>Reads all remaining bytes from the input stream</li>
</ul>
</li>
<li><code v-pre>long transferTo(OutputStream out)</code>
<ul>
<li>Reads all bytes from this input stream and writes the bytes to the given output stream in the order that they are read</li>
<li>Returns the number of bytes transferred</li>
</ul>
</li>
<li><code v-pre>int available()</code>
<ul>
<li>Returns an estimate of the number of bytes that can be read (or skipped over) from this input stream without blocking or <code v-pre>0</code> when it reaches the end of the input stream</li>
</ul>
</li>
<li><code v-pre>long skip(long n)</code>
<ul>
<li>Skips over and discards <code v-pre>n</code> bytes of data from this input stream</li>
<li>Returns the actual number of bytes skipped</li>
</ul>
</li>
<li><code v-pre>void mark(int limit)</code>
<ul>
<li>Marks the current position in this input stream. A subsequent call to the <code v-pre>reset</code> method repositions this stream at the last marked position so that subsequent reads re-read the same bytes</li>
<li><strong>Only works for buffered streams</strong></li>
</ul>
</li>
<li><code v-pre>void reset()</code>
<ul>
<li>Repositions this stream to the position at the time the <code v-pre>mark</code> method was last called on this input stream</li>
</ul>
</li>
<li><code v-pre>boolean markSupported()</code>
<ul>
<li>Tests if this input stream supports the <code v-pre>mark</code> and <code v-pre>reset</code> methods</li>
</ul>
</li>
<li><code v-pre>void close()</code>
<ul>
<li>Closes this input stream and releases any system resources associated with the stream</li>
</ul>
</li>
</ul>
</li>
<li><code v-pre>OutputStream</code> methods
<ul>
<li><code v-pre>void write(int b)</code>
<ul>
<li>Writes the specified byte to this output stream</li>
<li>The byte to be written is the eight low-order bits of the argument <code v-pre>b</code>. The 24 high-order bits of <code v-pre>b</code> are ignored</li>
<li>The only abstract method</li>
</ul>
</li>
<li><code v-pre>void write(byte[] b)</code>
<ul>
<li>Writes <code v-pre>b.length</code> bytes from the specified byte array to this output stream</li>
</ul>
</li>
<li><code v-pre>void write(byte[] b, int off, int len)</code>
<ul>
<li>Writes <code v-pre>len</code> bytes from the specified byte array starting at offset <code v-pre>off</code> to this output stream</li>
</ul>
</li>
<li><code v-pre>void flush()</code>
<ul>
<li>Flushes this output stream and forces any buffered output bytes to be written out</li>
<li><strong>Only works for buffered streams</strong></li>
</ul>
</li>
<li><code v-pre>void close()</code>
<ul>
<li>Closes this output stream and releases any system resources associated with this stream</li>
</ul>
</li>
</ul>
</li>
<li>Hierarchy of byte streams
<ul>
<li><img src="/assets/image/java/java.io.png" alt="java.io" tabindex="0" loading="lazy"><figcaption><a href="http://java.io" target="_blank" rel="noopener noreferrer">java.io</a></figcaption></li>
</ul>
</li>
<li><code v-pre>ByteArrayInputStream</code>
<ul>
<li><code v-pre>ByteArrayInputStream(byte[] buf)</code>
<ul>
<li>Creates a <code v-pre>ByteArrayInputStream</code> so that it uses <code v-pre>buf</code> as its buffer array</li>
</ul>
</li>
<li><code v-pre>ByteArrayInputStream(byte[] buf, int offset, int length)</code></li>
</ul>
</li>
<li><code v-pre>ByteArrayOutputStream</code>
<ul>
<li><code v-pre>ByteArrayOutputStream()</code></li>
<li><code v-pre>ByteArrayOutputStream(int size)</code></li>
<li><code v-pre>byte[] toByteArray()</code></li>
<li><code v-pre>void writeTo(OutputStream out)</code>
<ul>
<li>Writes the complete contents of this byte array output stream to the specified output stream argument</li>
</ul>
</li>
</ul>
</li>
<li><code v-pre>FileInputStream</code> and <code v-pre>FileOutputStream</code></li>
</ul>
<h3 id="character-streams" tabindex="-1"><a class="header-anchor" href="#character-streams"><span>Character Streams</span></a></h3>
<ul>
<li>Working with that Java stores character in 2 bytes</li>
<li>Character streams are often &quot;wrappers&quot; for byte streams</li>
<li>The character stream uses the byte stream to perform the physical I/O, while the character stream handles translation between characters and bytes</li>
<li><code v-pre>Reader</code> methods
<ul>
<li>Similar to <code v-pre>InputStream</code></li>
<li>Don't have <code v-pre>available()</code></li>
</ul>
</li>
<li><code v-pre>Writer</code> methods
<ul>
<li><code v-pre>Writer append(char c)</code>
<ul>
<li>Appends the specified character to this writer</li>
<li><code v-pre>out.append(c)</code> behaves exactly the same as <code v-pre>out.write(c)</code></li>
</ul>
</li>
<li><code v-pre>Writer append(CharSequence csq)</code></li>
<li><code v-pre>Writer append(CharSequence csq, int start, int end)</code></li>
</ul>
</li>
<li>Hierarchy of character stream
<ul>
<li><img src="/assets/image/java/reader_writer.jpg" alt="reader_writer" tabindex="0" loading="lazy"><figcaption>reader_writer</figcaption></li>
</ul>
</li>
<li><code v-pre>CharArrayReader</code> and <code v-pre>CharArrayWriter</code></li>
<li><code v-pre>FileReader</code> and <code v-pre>FileWriter</code></li>
</ul>
<h3 id="buffered-streams" tabindex="-1"><a class="header-anchor" href="#buffered-streams"><span>Buffered Streams</span></a></h3>
<ul>
<li>
<p>For unbuffered steams, each read or write request is handled directly by the underlying OS</p>
</li>
<li>
<p>This can make a program much less efficient, since each such request often triggers disk access, network activity, or some other operation that is relatively expensive</p>
</li>
<li>
<p>Buffer</p>
<ul>
<li>A temporary memory object for holding the data</li>
<li>The native input and output APIs are called only when the buffer is <strong>empty or full</strong></li>
<li>It often makes sense to write out a buffer at critical points, without waiting for it to fill. This is known as <em>flushing</em> the buffer</li>
</ul>
</li>
<li>
<p>A program can convert an unbuffered stream into a buffered stream using the <em>wrapping idiom</em></p>
<ul>
<li>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">in </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> BufferedReader</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> FileReader</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"xanadu.txt"</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">))</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">out </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> BufferedWriter</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> FileWriter</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"characteroutput.txt"</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">))</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p><code v-pre>BufferedInputStream</code> and <code v-pre>BufferedOutputStream</code></p>
</li>
<li>
<p><code v-pre>BufferedReader</code> and <code v-pre>BufferedWriter</code></p>
</li>
</ul>
<h3 id="formatting-streams" tabindex="-1"><a class="header-anchor" href="#formatting-streams"><span>Formatting Streams</span></a></h3>
<ul>
<li><code v-pre>PrintWriter</code>, <code v-pre>PrintStream</code>
<ul>
<li>The only <code v-pre>PrintStream</code> objects you are likely to need are <code v-pre>System.out</code> and <code v-pre>System.error</code></li>
<li>When you need to create a formatted output stream, instantiate <code v-pre>PrintWriter</code>, not <code v-pre>PrintStream</code></li>
<li><code v-pre>PrintStream</code> never throws an <code v-pre>IOException</code></li>
<li><code v-pre>PrintStream</code> can be created so as to flush automatically; this means that the <code v-pre>flush</code> method of the underlying output stream is automatically invoked after a byte array is written, one of the <code v-pre>println</code> methods is invoked, or a newline character or byte (<code v-pre>'\n'</code>) is written</li>
<li><code v-pre>void print()</code>
<ul>
<li><code v-pre>String.valueOf()</code> is invoked, and then the string's characters are converted into bytes according to the default charset, and these bytes are written in exactly the manner of the <code v-pre>write(int)</code>.</li>
</ul>
</li>
<li><code v-pre>void println()</code></li>
<li><code v-pre>PrintStream printf()</code>, <code v-pre>PrintStream format()</code>
<ul>
<li>They behave the same</li>
</ul>
</li>
</ul>
</li>
<li><code v-pre>Scanner</code>
<ul>
<li>Useful for breaking down formatted input into tokens and translating individual tokens according to their data type</li>
<li>By default, a scanner uses white space (<em>include blanks, tabs, and line terminators</em>) to separate tokens
<ul>
<li><code v-pre>Scanner useDelimiter(String pattern)</code></li>
<li><code v-pre>Scanner useDelimiter(Pattern pattern)</code></li>
</ul>
</li>
<li>A scanning operation (<code v-pre>next()</code> or <code v-pre>hasNext()</code>) may block waiting for input</li>
<li>Even though a scanner is not a stream, you need to close it to indicate that you're done with its underlying stream</li>
</ul>
</li>
</ul>
<h3 id="data-streams" tabindex="-1"><a class="header-anchor" href="#data-streams"><span>Data Streams</span></a></h3>
<ul>
<li><code v-pre>DataInputStream</code>, <code v-pre>DataOutputStream</code></li>
<li>Created as a wrapper for an existing byte stream object</li>
<li>The input stream consists of simple binary data, with nothing to indicate the type of individual values, or where they begin in the stream (not readable)</li>
<li>Each specialized <code v-pre>write</code> in <code v-pre>DataStreams</code> is exactly matched by the corresponding specialized <code v-pre>read</code>. It is up to the programmer to make sure that output types and input types are matched in this way</li>
<li><code v-pre>DataStreams</code> uses one very bad programming technique: it uses floating point numbers to represent monetary values</li>
</ul>
<h3 id="object-streams" tabindex="-1"><a class="header-anchor" href="#object-streams"><span>Object Streams</span></a></h3>
<ul>
<li>Serialisation and deserialisation
<ul>
<li>Serialization in Java is a mechanism of writing the state of an object into a byte stream</li>
<li>Storing and retrieving the state of an object</li>
<li>Most, but not all, standard classes support serialization of their objects</li>
<li>Rules
<ul>
<li><strong>Implement the marker interface <code v-pre>Serializable</code></strong></li>
<li><strong>There must be a non-parametarized constructor</strong></li>
<li><strong><code v-pre>static</code> or <code v-pre>transient</code> members will not be serialised</strong></li>
</ul>
</li>
</ul>
</li>
<li><code v-pre>ObjectInputStream</code>, <code v-pre>ObjectOutputStream</code>
<ul>
<li>A single invocation of <code v-pre>writeObject()</code> can cause a large number of objects to be written to the stream</li>
<li>A stream can only contain one copy of an object, though it can contain any number of references to it</li>
<li>If a single object is written to two different streams, it is effectively duplicated</li>
<li>Type casting after <code v-pre>readObject()</code> is needed</li>
</ul>
</li>
</ul>
<h3 id="randomaccessfile" tabindex="-1"><a class="header-anchor" href="#randomaccessfile"><span><code v-pre>RandomAccessFile</code></span></a></h3>
<ul>
<li>
<p>A random access file behaves like a large array of bytes stored in the file system</p>
</li>
<li>
<p>There is a kind of cursor, or index into the implied array, called the <em>file pointer</em></p>
</li>
<li>
<p>Implements <code v-pre>DataInput</code> and <code v-pre>DataOutput</code></p>
</li>
<li>
<p>Constructor</p>
<ul>
<li>
<p><code v-pre>RandomAccessFile(File file, String mode)</code></p>
</li>
<li>
<p><code v-pre>RandomAccessFile(String name, String mode)</code></p>
</li>
<li>
<table>
<thead>
<tr>
<th style="text-align:left">Value</th>
<th style="text-align:left">Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>&quot;r&quot;</code></td>
<td style="text-align:left">Open for reading only. Invoking any of the <code v-pre>write</code> methods of the resulting object will cause an <code v-pre>IOException</code> to be thrown.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>&quot;rw&quot;</code></td>
<td style="text-align:left">Open for reading and writing. If the file does not already exist then an attempt will be made to create it.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>&quot;rws&quot;</code></td>
<td style="text-align:left">Open for reading and writing, as with <code v-pre>&quot;rw&quot;</code>, and also require that every update to the file's content or metadata be written synchronously to the underlying storage device.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>&quot;rwd&quot;</code></td>
<td style="text-align:left">Open for reading and writing, as with <code v-pre>&quot;rw&quot;</code>, and also require that every update to the file's content be written synchronously to the underlying storage device.</td>
</tr>
</tbody>
</table>
</li>
</ul>
</li>
<li>
<p>Methods</p>
<ul>
<li><code v-pre>long getFilePointer()</code>
<ul>
<li>Returns the current offset in this file</li>
</ul>
</li>
<li><code v-pre>void seek(long pos)</code>
<ul>
<li>Sets the file-pointer offset, measured from the beginning of this file, at which the next read or write occurs</li>
</ul>
</li>
<li><code v-pre>long length()</code>
<ul>
<li>Returns the length of this file, measured in bytes</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="piped-streams" tabindex="-1"><a class="header-anchor" href="#piped-streams"><span>Piped Streams</span></a></h3>
<ul>
<li>Communicate producer and consumer instead of using shared objects</li>
<li>Typically, data is written to a <code v-pre>PipedOutputStream</code> object by one thread and data is read from the connected <code v-pre>PipedInputStream</code> by some other thread</li>
<li><code v-pre>connect()</code></li>
</ul>
<h3 id="file-i-o" tabindex="-1"><a class="header-anchor" href="#file-i-o"><span>File I/O</span></a></h3>
<ul>
<li>
<p><code v-pre>Path</code></p>
<ul>
<li>
<p>A <code v-pre>Path</code> is <strong>NOT</strong> system independent</p>
</li>
<li>
<p>You can think of the <code v-pre>Path</code> as storing these name elements as a sequence</p>
</li>
<li>
<p><code v-pre>Paths.get(String first, String... more)</code></p>
<ul>
<li>
<p>Creating a <code v-pre>Path</code></p>
</li>
<li>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Path</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> p1 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> Paths</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"/tmp/foo"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// Paths.get() is a shorthand of</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Path</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> p2 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> FileSystems</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">getDefault</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">getPath</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"/tmp/foo"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p><code v-pre>Path getFileName()</code></p>
</li>
<li>
<p><code v-pre>Path getName(int index)</code></p>
</li>
<li>
<p><code v-pre>int getNameCount()</code></p>
</li>
<li>
<p><code v-pre>Path subpath(int beginIndex, int endIndex)</code></p>
<ul>
<li>Not including a root element</li>
</ul>
</li>
<li>
<p><code v-pre>Path getParent()</code></p>
</li>
<li>
<p><code v-pre>Path getRoot()</code></p>
</li>
<li>
<p><code v-pre>URI toUri()</code></p>
</li>
<li>
<p><code v-pre>Path toAbsolutePath()</code></p>
<ul>
<li>The file does not need to exist for this method to work</li>
</ul>
</li>
<li>
<p><code v-pre>Path toRealPath(LinkOption... option)</code></p>
<ul>
<li>If <code v-pre>true</code> is passed to this method and the file system supports symbolic links, this method resolves any symbolic links in the path</li>
<li>If the <code v-pre>Path</code> is relative, it returns an absolute path</li>
<li>If the <code v-pre>Path</code> contains any redundant elements, it returns a path with those elements removed</li>
<li>This method throws an exception if the file does not exist or cannot be accessed</li>
</ul>
</li>
<li>
<p><code v-pre>Path resolve(Path p)</code></p>
</li>
<li>
<p><code v-pre>Path resolve(String s)</code></p>
<ul>
<li>Join two paths</li>
</ul>
</li>
<li>
<p><code v-pre>Path relativize(Path other)</code></p>
<ul>
<li>Constructs a relative path between this path and a given path</li>
</ul>
</li>
</ul>
</li>
<li>
<p><code v-pre>File</code></p>
</li>
<li>
<p><code v-pre>Files</code></p>
</li>
</ul>
<hr>
<h2 id="generics" tabindex="-1"><a class="header-anchor" href="#generics"><span>Generics</span></a></h2>
<ul>
<li>
<p>One of the most significant change in Java SE5</p>
</li>
<li>
<p>The concept of <strong>parameterized types</strong>: you tell what type you want to use, and it takes care of the details</p>
</li>
<li>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// generic class or interface</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> ClassName</span><span style="--shiki-light:#C18401;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">T</span><span style="--shiki-light:#C18401;--shiki-dark:#ABB2BF">></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {}</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> interface</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> InterfaceName</span><span style="--shiki-light:#C18401;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">A</span><span style="--shiki-light:#C18401;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> B</span><span style="--shiki-light:#C18401;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> C</span><span style="--shiki-light:#C18401;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> D</span><span style="--shiki-light:#C18401;--shiki-dark:#ABB2BF">></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// generic methods</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> &#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">T</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">></span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> func</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">T</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> x) {}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>If you don't specify the type explicitly when declaring the instance, it will be an <code v-pre>Object</code> type</p>
</li>
<li>
<p>Generics class, generics interface, generics method</p>
</li>
<li>
<p><strong>Static generic method cannot use the generic type declared by its class because that type is only accessible after instantiation</strong></p>
</li>
<li>
<p>Bounds</p>
<ul>
<li>
<p>Allow you to place constraints on the parameter types that can be used with generics</p>
</li>
<li>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> A</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {}</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> B</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> extends</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> A</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// always extends whenever A is a class or an interface</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Test</span><span style="--shiki-light:#C18401;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">T</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> extends</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> A</span><span style="--shiki-light:#C18401;--shiki-dark:#ABB2BF">></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // both allowed</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">    Test</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">A</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">> </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">t</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Test</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;>();</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">    Test</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">B</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">> </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">t</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Test</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;>();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>Wildcard</p>
<ul>
<li>
<p>Type arguments of parameterized types</p>
</li>
<li>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// upper bound</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">?</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> extends </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">B</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// lower bound</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">?</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> super</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> B</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Test</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> printCollection</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Collection</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD">?</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">c</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">                                // a wildcard collection</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Object</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> o</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> :</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> c) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">            System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(o);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">        Collection</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">String</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">> </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">cs</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> ArrayList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>();</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        cs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"hello"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        cs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"world"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        printCollection</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(cs);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>If <strong>the type parameter is only used in method signature</strong>, in the absence of such interdependency between the type(s) of the argument(s), the return type and/or throws type, generic methods are considered bad style, and wildcards are preferred</p>
</li>
</ul>
</li>
<li>
<p>Java generics are implemented using <em>erasure</em>, which means that any specific type information is erased when you use a generic</p>
<ul>
<li>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// This is not allowed</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">T</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">[] t </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> T</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">[size]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> // compile error</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">T</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">[] t </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">T</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">[]) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Object</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">[size]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> // no error</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>Erasure is a compromise in the implementation of Java generics, reification would be a better choice if generics had been part of Java 1.0</p>
</li>
<li>
<p><a href="https://docs.oracle.com/javase/specs/jls/se8/html/jls-4.html#jls-4.7" target="_blank" rel="noopener noreferrer">Erasure ensures migration compatibility</a></p>
</li>
</ul>
<hr>
<h2 id="collections" tabindex="-1"><a class="header-anchor" href="#collections"><span>Collections</span></a></h2>
<h3 id="java-collection-framework" tabindex="-1"><a class="header-anchor" href="#java-collection-framework"><span>Java Collection Framework</span></a></h3>
<figure><img src="/assets/image/java/java_collection_api_diagram.svg" alt="java_collection_api_diagram" tabindex="0" loading="lazy"><figcaption>java_collection_api_diagram</figcaption></figure>
<h3 id="collection" tabindex="-1"><a class="header-anchor" href="#collection"><span><code v-pre>Collection</code></span></a></h3>
<ul>
<li>Methods
<ul>
<li><code v-pre>boolean add(E e)</code></li>
<li><code v-pre>boolean addAll(Collection&lt;? extends E&gt; c)</code></li>
<li><code v-pre>boolean remove(Object o)</code></li>
<li><code v-pre>boolean removeAll(Collection&lt;?&gt; c)</code></li>
<li><code v-pre>boolean retainAll(Collection&lt;?&gt; c)</code></li>
<li><code v-pre>boolean contains(Object o)</code></li>
<li><code v-pre>boolean containsAll(Collection&lt;?&gt; c)</code></li>
<li><code v-pre>void clear()</code></li>
<li><code v-pre>boolean isEmpty()</code></li>
<li><code v-pre>int size()</code></li>
<li><code v-pre>Iterator&lt;E&gt; iterator()</code></li>
<li><code v-pre>Object[] toArray()</code></li>
<li><code v-pre>T[] toArray(T[] a)</code>
<ul>
<li><code v-pre>a</code> - the array into which the elements of this collection are to be stored, if it is big enough; otherwise, a new array of the same runtime type is allocated for this purpose</li>
<li>The element in the array immediately following the end of the collection is set to <code v-pre>null</code></li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="list" tabindex="-1"><a class="header-anchor" href="#list"><span><code v-pre>List</code></span></a></h3>
<ul>
<li>
<p>An ordered collection (a sequence)</p>
</li>
<li>
<p>Methods</p>
<ul>
<li>
<p><code v-pre>void add(int index, E e)</code></p>
</li>
<li>
<p><code v-pre>boolean addAll(int index, Collection&lt;? extends E&gt; c)</code></p>
</li>
<li>
<p><code v-pre>E get(int index)</code></p>
</li>
<li>
<p><code v-pre>E remove(int index)</code></p>
</li>
<li>
<p><code v-pre>E set(int index, E e)</code></p>
<ul>
<li>Returns the element previously at the specified position</li>
</ul>
</li>
<li>
<p><code v-pre>int indexOf(Object o)</code></p>
</li>
<li>
<p><code v-pre>int lastIndexOf(Object o)</code></p>
</li>
<li>
<p><code v-pre>List&lt;E&gt; subList(int from, int to)</code></p>
<ul>
<li><code v-pre>from</code> - low endpoint (inclusive) of the subList</li>
<li><code v-pre>to</code> - high endpoint (exclusive) of the subList</li>
</ul>
</li>
<li>
<p><code v-pre>ListIterator&lt;E&gt; listIterator()</code></p>
</li>
<li>
<p><code v-pre>ListIterator&lt;E&gt; listIterator(int index)</code></p>
</li>
<li>
<p><code v-pre>static List&lt;E&gt; of(E... elements)</code></p>
<ul>
<li>Returns an <strong>unmodifiable list</strong> containing an arbitrary number of elements</li>
</ul>
</li>
<li>
<p><code v-pre>static List&lt;E&gt; copyOf(Collection&lt;? extends E&gt; coll)</code></p>
<ul>
<li>Returns an <strong>unmodifiable list</strong> containing the elements of the given Collection, in its iteration order</li>
<li>The given Collection must not be null, and it must not contain any null elements</li>
</ul>
</li>
</ul>
</li>
<li>
<p>More flexible iterator: <code v-pre>listIterator()</code></p>
<ul>
<li>
<p>Can move back</p>
<ul>
<li>
<p><code v-pre>previous()</code></p>
<ul>
<li>logically equivalent to <code v-pre>*(p--)</code></li>
</ul>
</li>
<li>
<p><code v-pre>hasPrevious()</code></p>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="arraylist" tabindex="-1"><a class="header-anchor" href="#arraylist"><span><code v-pre>ArrayList</code></span></a></h4>
<ul>
<li>Resizable-array implementation of the <code v-pre>List</code> interface</li>
<li>Cannot store primitive type variables</li>
<li>Copy an <code v-pre>ArrayList</code>
<ul>
<li><code v-pre>addAll(originalArrayList)</code></li>
<li><code v-pre>ArrayList&lt;E&gt; copy = new ArrayList&lt;&gt;(originalArrayList)</code></li>
</ul>
</li>
</ul>
<h4 id="linkedlist" tabindex="-1"><a class="header-anchor" href="#linkedlist"><span><code v-pre>LinkedList</code></span></a></h4>
<ul>
<li>Doubly-linked list implementation of the <code v-pre>List</code> and <code v-pre>Deque</code> interfaces</li>
<li>Suitable for large list with lots of insertion and deletion</li>
</ul>
<h3 id="queue" tabindex="-1"><a class="header-anchor" href="#queue"><span><code v-pre>Queue</code></span></a></h3>
<ul>
<li>
<p>FIFO</p>
</li>
<li>
<p>Methods</p>
<ul>
<li>
<p><code v-pre>boolean add(E e)</code></p>
<ul>
<li>Throws an <code v-pre>IllegalStateException</code> if no space is currently available</li>
</ul>
</li>
<li>
<p><code v-pre>boolean offer(E e)</code></p>
<ul>
<li>Returns false instead of throwing <code v-pre>IllegalStateException</code></li>
</ul>
</li>
<li>
<p><code v-pre>E remove()</code></p>
<ul>
<li>Retrieves and removes the head of this queue, or throws <code v-pre>NoSuchElementException</code> if this queue is empty</li>
</ul>
</li>
<li>
<p><code v-pre>E poll()</code></p>
<ul>
<li>Retrieves and removes the head of this queue, or returns <code v-pre>null</code> if this queue is empty</li>
</ul>
</li>
<li>
<p><code v-pre>E element()</code></p>
<ul>
<li>Retrieves, but does not remove, the head of this queue, or throws <code v-pre>NoSuchElementException</code> if this queue is empty</li>
</ul>
</li>
<li>
<p><code v-pre>E peek()</code></p>
<ul>
<li>Retrieves, but does not remove, the head of this queue, or returns <code v-pre>null</code> if this queue is empty</li>
</ul>
</li>
<li>
<table>
<thead>
<tr>
<th></th>
<th>Throws exception</th>
<th>Returns special value</th>
</tr>
</thead>
<tbody>
<tr>
<td>Insert</td>
<td><code v-pre>add(e)</code></td>
<td><code v-pre>offer(e)</code></td>
</tr>
<tr>
<td>Remove</td>
<td><code v-pre>remove()</code></td>
<td><code v-pre>poll()</code></td>
</tr>
<tr>
<td>Examine</td>
<td><code v-pre>element()</code></td>
<td><code v-pre>peek()</code></td>
</tr>
</tbody>
</table>
</li>
</ul>
</li>
</ul>
<h4 id="deque" tabindex="-1"><a class="header-anchor" href="#deque"><span><code v-pre>Deque</code></span></a></h4>
<ul>
<li>
<p>Double ended queue</p>
</li>
<li>
<p>A linear collection that supports element insertion and removal at both ends</p>
</li>
<li>
<p>It can be used as <strong>a queue or a stack</strong></p>
</li>
<li>
<p>Methods</p>
<ul>
<li>
<table>
<thead>
<tr>
<th style="text-align:left"></th>
<th>First Element (Head)</th>
<th></th>
<th>Last Element (Tail)</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"></td>
<td>Throws exception</td>
<td>Special value</td>
<td>Throws exception</td>
<td>Special value</td>
</tr>
<tr>
<td style="text-align:left">Insert</td>
<td><a href="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#addFirst(E)" target="_blank" rel="noopener noreferrer"><code v-pre>addFirst(e)</code></a></td>
<td><a href="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#offerFirst(E)" target="_blank" rel="noopener noreferrer"><code v-pre>offerFirst(e)</code></a></td>
<td><a href="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#addLast(E)" target="_blank" rel="noopener noreferrer"><code v-pre>addLast(e)</code></a></td>
<td><a href="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#offerLast(E)" target="_blank" rel="noopener noreferrer"><code v-pre>offerLast(e)</code></a></td>
</tr>
<tr>
<td style="text-align:left">Remove</td>
<td><a href="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#removeFirst()" target="_blank" rel="noopener noreferrer"><code v-pre>removeFirst()</code></a></td>
<td><a href="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#pollFirst()" target="_blank" rel="noopener noreferrer"><code v-pre>pollFirst()</code></a></td>
<td><a href="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#removeLast()" target="_blank" rel="noopener noreferrer"><code v-pre>removeLast()</code></a></td>
<td><a href="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#pollLast()" target="_blank" rel="noopener noreferrer"><code v-pre>pollLast()</code></a></td>
</tr>
<tr>
<td style="text-align:left">Examine</td>
<td><a href="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#getFirst()" target="_blank" rel="noopener noreferrer"><code v-pre>getFirst()</code></a></td>
<td><a href="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#peekFirst()" target="_blank" rel="noopener noreferrer"><code v-pre>peekFirst()</code></a></td>
<td><a href="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#getLast()" target="_blank" rel="noopener noreferrer"><code v-pre>getLast()</code></a></td>
<td><a href="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#peekLast()" target="_blank" rel="noopener noreferrer"><code v-pre>peekLast()</code></a></td>
</tr>
</tbody>
</table>
</li>
</ul>
</li>
<li>
<p>Comparison of <code v-pre>Queue</code> and <code v-pre>Deque</code> methods</p>
<ul>
<li>
<table>
<thead>
<tr>
<th><code v-pre>Queue</code> Method</th>
<th>Equivalent <code v-pre>Deque</code> Method</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#add(E)" target="_blank" rel="noopener noreferrer"><code v-pre>add(e)</code></a></td>
<td><a href="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#addLast(E)" target="_blank" rel="noopener noreferrer"><code v-pre>addLast(e)</code></a></td>
</tr>
<tr>
<td><a href="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#offer(E)" target="_blank" rel="noopener noreferrer"><code v-pre>offer(e)</code></a></td>
<td><a href="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#offerLast(E)" target="_blank" rel="noopener noreferrer"><code v-pre>offerLast(e)</code></a></td>
</tr>
<tr>
<td><a href="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#remove()" target="_blank" rel="noopener noreferrer"><code v-pre>remove()</code></a></td>
<td><a href="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#removeFirst()" target="_blank" rel="noopener noreferrer"><code v-pre>removeFirst()</code></a></td>
</tr>
<tr>
<td><a href="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#poll()" target="_blank" rel="noopener noreferrer"><code v-pre>poll()</code></a></td>
<td><a href="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#pollFirst()" target="_blank" rel="noopener noreferrer"><code v-pre>pollFirst()</code></a></td>
</tr>
<tr>
<td><a href="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#element()" target="_blank" rel="noopener noreferrer"><code v-pre>element()</code></a></td>
<td><a href="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#getFirst()" target="_blank" rel="noopener noreferrer"><code v-pre>getFirst()</code></a></td>
</tr>
<tr>
<td><a href="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#peek()" target="_blank" rel="noopener noreferrer"><code v-pre>peek()</code></a></td>
<td><a href="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#peekFirst()" target="_blank" rel="noopener noreferrer"><code v-pre>peekFirst()</code></a></td>
</tr>
</tbody>
</table>
</li>
</ul>
</li>
<li>
<p>Comparison of <code v-pre>Stack</code> and <code v-pre>Deque</code> methods</p>
<ul>
<li>
<table>
<thead>
<tr>
<th>Stack Method</th>
<th>Equivalent <code v-pre>Deque</code> Method</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#push(E)" target="_blank" rel="noopener noreferrer"><code v-pre>push(e)</code></a></td>
<td><a href="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#addFirst(E)" target="_blank" rel="noopener noreferrer"><code v-pre>addFirst(e)</code></a></td>
</tr>
<tr>
<td><a href="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#pop()" target="_blank" rel="noopener noreferrer"><code v-pre>pop()</code></a></td>
<td><a href="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#removeFirst()" target="_blank" rel="noopener noreferrer"><code v-pre>removeFirst()</code></a></td>
</tr>
<tr>
<td><a href="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#peek()" target="_blank" rel="noopener noreferrer"><code v-pre>peek()</code></a></td>
<td><a href="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html#getFirst()" target="_blank" rel="noopener noreferrer"><code v-pre>getFirst()</code></a></td>
</tr>
</tbody>
</table>
</li>
</ul>
</li>
</ul>
<h4 id="arraydeque" tabindex="-1"><a class="header-anchor" href="#arraydeque"><span><code v-pre>ArrayDeque</code></span></a></h4>
<ul>
<li><strong>Resizable-array</strong> implementation of <code v-pre>Deque</code></li>
<li>This class is likely to be faster than <code v-pre>Stack</code>when used as a stack, and faster than <code v-pre>LinkedList</code> when used as a queue</li>
<li><strong>Null elements are prohibited</strong></li>
<li>Most <code v-pre>ArrayDeque</code> operations run in amortized constant time</li>
</ul>
<h4 id="priorityqueue" tabindex="-1"><a class="header-anchor" href="#priorityqueue"><span><code v-pre>PriorityQueue</code></span></a></h4>
<ul>
<li>An unbounded priority queue based on a priority heap</li>
<li>The elements are ordered according to their <em>natural ordering</em>, or by a <code v-pre>Comparator</code> provided at construction time</li>
</ul>
<h3 id="set" tabindex="-1"><a class="header-anchor" href="#set"><span><code v-pre>Set</code></span></a></h3>
<ul>
<li>A collection that contains no duplicate elements, and at most one <code v-pre>null</code> element. More formally, sets contain no pair of elements <code v-pre>e1</code> and <code v-pre>e2</code> such that <code v-pre>e1.equals(e2)</code></li>
<li>No defined ordering</li>
<li>No extra methods</li>
</ul>
<h4 id="hashset" tabindex="-1"><a class="header-anchor" href="#hashset"><span><code v-pre>HashSet</code></span></a></h4>
<ul>
<li>This class implements the <code v-pre>Set</code> interface, backed by a hash table (actually a <code v-pre>HashMap</code> instance)</li>
<li><code v-pre>HashSet(int initialCapacity, float loadFactor)</code></li>
</ul>
<h4 id="linkedhashset" tabindex="-1"><a class="header-anchor" href="#linkedhashset"><span><code v-pre>LinkedHashSet</code></span></a></h4>
<ul>
<li>Hash table and linked list implementation of the <code v-pre>Set</code> interface, with predictable iteration order</li>
<li>This linked list defines the iteration ordering, which is the order in which elements were inserted into the set (<em>insertion-order</em>)</li>
</ul>
<h4 id="treeset" tabindex="-1"><a class="header-anchor" href="#treeset"><span><code v-pre>TreeSet</code></span></a></h4>
<ul>
<li>A <code v-pre>NavigableSet</code> implementation based on a <code v-pre>TreeMap</code></li>
<li>The elements are ordered according to their <em>natural ordering</em>, or by a <code v-pre>Comparator</code> provided at construction time</li>
<li>This implementation provides guaranteed <code v-pre>log(n)</code> time cost for the basic operations</li>
<li>Methods
<ul>
<li><code v-pre>E ceiling(E e)</code></li>
<li><code v-pre>E floor(E e)</code></li>
<li><code v-pre>E higher(E e)</code></li>
<li><code v-pre>E lower(E e)</code></li>
</ul>
</li>
</ul>
<h3 id="map" tabindex="-1"><a class="header-anchor" href="#map"><span><code v-pre>Map</code></span></a></h3>
<ul>
<li>An object that maps keys to values</li>
<li>Java map <strong>cannot contain duplicate keys</strong>, and each key can only map to at most one value</li>
<li>Methods
<ul>
<li><code v-pre>V put(K key, V value)</code>
<ul>
<li>Returns the previous value associated with <code v-pre>key</code>, or <code v-pre>null</code> if there was no mapping for <code v-pre>key</code></li>
</ul>
</li>
<li><code v-pre>V get(Object key)</code></li>
<li><code v-pre>V getOrDefault(Object key, V defaultValue)</code></li>
<li><code v-pre>V computeIfAbsent(K key, Function&lt;? super K, ? extends V&gt; mappingFunction)</code>
<ul>
<li>Return the current (existing or computed) value associated with the specified key, or null if the computed value is null</li>
</ul>
</li>
<li><code v-pre>V remove(Object key)</code></li>
<li><code v-pre>V replace(K key, V value)</code></li>
<li><code v-pre>boolean containsKey(Object key)</code></li>
<li><code v-pre>boolean containsValue(Object value)</code></li>
<li><code v-pre>Set&lt;K&gt; keySet()</code></li>
<li><code v-pre>Collection&lt;V&gt; values()</code></li>
<li><code v-pre>Set&lt;Map.Entry&lt;K, V&gt;&gt; entrySet()</code>
<ul>
<li>Those returned collections are backed by the map, so changes to the map are reflected in the set, and vice-versa</li>
</ul>
</li>
</ul>
</li>
<li><a href="https://mp.weixin.qq.com/s?__biz=MzkxOTcxNzIxOA==&amp;mid=2247505580&amp;idx=1&amp;sn=1825ca5be126c2b650e201fb3fa8a3e6&amp;source=41&amp;poc_token=HMtzHWmjZaC5gevPs4SIaO0Gsjdpog13PQ_H-gj2" target="_blank" rel="noopener noreferrer"><strong>Map iterations</strong></a></li>
</ul>
<h4 id="hashmap" tabindex="-1"><a class="header-anchor" href="#hashmap"><span><code v-pre>HashMap</code></span></a></h4>
<ul>
<li>Hash table based implementation</li>
</ul>
<h4 id="linkedhashmap" tabindex="-1"><a class="header-anchor" href="#linkedhashmap"><span><code v-pre>LinkedHashMap</code></span></a></h4>
<ul>
<li>
<p>Hash table and linked list implementation</p>
</li>
<li>
<p><strong>LRU Cache</strong></p>
</li>
<li>
<p>Override the method <code v-pre>protected boolean removeEldestEntry(Map.Entry&lt;K, V&gt; eldest)</code></p>
<ul>
<li>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">private</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> final</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> MAX_ENTRIES </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 100</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> protected</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> boolean</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> removeEldestEntry</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">Map</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">Entry</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> eldest) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> size</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">() </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">></span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> MAX_ENTRIES</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> }</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<h4 id="treemap" tabindex="-1"><a class="header-anchor" href="#treemap"><span><code v-pre>TreeMap</code></span></a></h4>
<ul>
<li>A red-black tree implementation</li>
</ul>
<h3 id="bitset" tabindex="-1"><a class="header-anchor" href="#bitset"><span><code v-pre>BitSet</code></span></a></h3>
<ul>
<li>This class implements a vector of bits that grows as needed</li>
<li>Each component of the bit set has a <code v-pre>boolean</code> value</li>
<li>By default, all bits in the set initially have the value <code v-pre>false</code></li>
</ul>
<h3 id="collections-1" tabindex="-1"><a class="header-anchor" href="#collections-1"><span><code v-pre>Collections</code></span></a></h3>
<ul>
<li><code v-pre>Collections</code> is a utility class</li>
<li>It contains only <code v-pre>static</code> methods</li>
<li>Methods
<ul>
<li><code v-pre>&lt;T extends Comparable&lt;? super T&gt;&gt; void sort(List&lt;T&gt; l)</code></li>
<li><code v-pre>&lt;T&gt; void sort(List&lt;T&gt; l, Comparator&lt;? super T&gt; c)</code></li>
<li><code v-pre>void reverse(List&lt;?&gt; l)</code></li>
<li><code v-pre>void rotate(List&lt;?&gt; l, int distance)</code></li>
<li><code v-pre>void shuffle(List&lt;?&gt; l)</code></li>
<li><code v-pre>void swap(List&lt;?&gt; l, int i, int j)</code></li>
<li><code v-pre>min()</code>, <code v-pre>max()</code></li>
<li><code v-pre>&lt;T&gt; int binarySearch(List&lt;? extends Comparable&lt;? super T&gt;&gt; list, T key)</code></li>
<li><code v-pre>&lt;T&gt; int binarySearch(List&lt;? extends T&gt; list, T key, Comparator&lt;? super T&gt; c)</code>
<ul>
<li>Returns the index of the search key, if it is contained in the list; otherwise, <code v-pre>(-(insertion point) - 1)</code></li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="iterator" tabindex="-1"><a class="header-anchor" href="#iterator"><span><code v-pre>Iterator</code></span></a></h3>
<ul>
<li>
<p>An iterator over a collection</p>
</li>
<li>
<p>Iterators allow the caller to remove elements from the underlying collection during the iteration with well-defined semantics</p>
</li>
<li>
<p>Methods</p>
<ul>
<li>
<p><code v-pre>boolean hasNext()</code></p>
</li>
<li>
<p><code v-pre>E next()</code></p>
</li>
<li>
<p><code v-pre>void remove()</code></p>
</li>
</ul>
</li>
<li>
<p><strong>fail-fast</strong>: if the list is structurally modified at any time after the iterator is created, in any way <strong>except through the iterator's own <code v-pre>remove()</code> or <code v-pre>add()</code> methods</strong>, the iterator will throw a <code v-pre>ConcurrentModificationException</code>. Thus, in the face of concurrent modification, the iterator fails quickly and cleanly, rather than risking arbitrary, non-deterministic behavior at an undetermined time in the future</p>
</li>
<li>
<p><em>The fail-fast behavior of iterators should be used only to detect bugs</em></p>
</li>
<li>
<p>Iterator is implemented as a private inner class in each collection class implementation</p>
</li>
<li>
<p><code v-pre>ListIterator</code></p>
<ul>
<li>An iterator for lists that allows the programmer to traverse the list in either direction, modify the list during iteration, and obtain the iterator's current position in the list</li>
<li>A <code v-pre>ListIterator</code> has no current element; its <em>cursor position</em> always lies between the element that would be returned by a call to <code v-pre>previous()</code> and the element that would be returned by a call to <code v-pre>next()</code></li>
</ul>
</li>
</ul>
<h3 id="comparable-and-comparator" tabindex="-1"><a class="header-anchor" href="#comparable-and-comparator"><span><code v-pre>Comparable</code> and <code v-pre>Comparator</code></span></a></h3>
<ul>
<li>
<p><code v-pre>java.lang.Comparable&lt;T&gt;</code></p>
<ul>
<li>
<p>Method</p>
<ul>
<li><code v-pre>int compareTo(T o)</code></li>
<li>Returns a negative integer, zero, or a positive integer as this object is less than, equal to, or greater than the specified object</li>
</ul>
</li>
<li>
<p>Lists (and arrays) of objects that implement this interface can be sorted automatically by <code v-pre>Collections.sort</code> (and <code v-pre>Arrays.sort</code>). Objects that implement this interface can be used as keys in a <code v-pre>SortedMap</code> or as elements in a <code v-pre>SortedSet</code>, without the need to specify a comparator</p>
</li>
<li>
<p><strong>It is a functional interface but not one logically</strong></p>
<ul>
<li>It is more like a trait of an object. &quot;This thing can be compared&quot;, rather than &quot;this thing does the comparing&quot;</li>
</ul>
</li>
<li>
<p>How to use <code v-pre>Comparable</code>?</p>
<ul>
<li>Implement the interface</li>
</ul>
</li>
</ul>
</li>
<li>
<p><code v-pre>java.util.Comparator&lt;T&gt;</code></p>
<ul>
<li>
<p>A functional interface</p>
<ul>
<li><code v-pre>int compare(T o1, T o2)</code></li>
</ul>
</li>
<li>
<p>Comparators can be passed to a sort method (such as <code v-pre>Collections.sort</code> or <code v-pre>Arrays.sort</code>) to allow precise control over the sort order. Comparators can also be used to control the order of certain data structures (such as <code v-pre>SortedSet</code> or <code v-pre>SortedMap</code>), or to provide an ordering for collections of objects that don't have a natural ordering</p>
</li>
<li>
<p>When to use <code v-pre>Comparator</code>?</p>
<ul>
<li>
<p>The objects in collections don't have natural ordering. E.g. their class is provided in an external library without write permission</p>
</li>
<li>
<p>The objects do have natural ordering but you want to sort it in a different logic</p>
</li>
</ul>
</li>
<li>
<p>How to use <code v-pre>Comparator</code>?</p>
<ul>
<li>Create an anonymous class implementing <code v-pre>Comparator</code> and pass it as a parameter</li>
<li>Lamda expression</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="shallow-copy-vs-deep-copy" tabindex="-1"><a class="header-anchor" href="#shallow-copy-vs-deep-copy"><span>Shallow Copy vs. Deep Copy</span></a></h3>
<ul>
<li>
<table>
<thead>
<tr>
<th>Shallow Copy</th>
<th>Deep Copy</th>
</tr>
</thead>
<tbody>
<tr>
<td>Shallow Copy stores the references of objects to the original memory address.</td>
<td>Deep copy stores copies of the object’s value.</td>
</tr>
<tr>
<td>Shallow Copy reflects changes made to the new/copied object in the original object.</td>
<td>Deep copy doesn’t reflect changes made to the new/copied object in the original object.</td>
</tr>
<tr>
<td>Shallow Copy stores the copy of the original object and points the references to the objects.</td>
<td>Deep copy stores the copy of the original object and recursively copies the objects as well.</td>
</tr>
<tr>
<td>Shallow copy is faster.</td>
<td>Deep copy is comparatively slower.</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>Shallow copy</p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Collection</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">T</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">></span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> copy </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Collection</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;></span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(original)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>Deep copy</p>
<ul>
<li>
<p>Deep copy of Java class</p>
<ul>
<li>
<p>Implement the <code v-pre>Clonable</code> interface and override the <code v-pre>clone()</code> method (inherited from <code v-pre>Object</code>) in the class of objects within the collection</p>
<blockquote>
<p>Note: <code v-pre>Object.clone()</code> is <code v-pre>native</code></p>
<p>Must implement <code v-pre>Cloneable</code> to handle <code v-pre>CloneNotSupportedException</code>, more details referring to the Javadoc in the source code</p>
</blockquote>
</li>
<li>
<p>However, <code v-pre>clone()</code> is actually shallow copy not deep copy</p>
</li>
<li>
<p>Therefore,</p>
<ul>
<li>All immutable fields or primitive fields can be used as it is. They don’t require any special treatment. e.g. primitive classes, wrapper classes and <code v-pre>String</code> class.</li>
<li>For all mutable field members, we must create a new object of member and assign it’s value to cloned object.</li>
</ul>
</li>
<li>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">Override</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Person</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> clone</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    try</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">        Person</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> person </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> (Person) </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">super</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">clone</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        person</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">setAddress</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">person</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">getAddress</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">clone</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">());</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> person</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">    } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">catch</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">CloneNotSupportedException</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> e</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        throw</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> AssertionError</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>Deep copy of Java Collections</p>
<ol>
<li>Create a new instance of collection</li>
<li>Clone all elements from given collection to clone collection</li>
</ol>
</li>
<li>
<p><a href="https://howtodoinjava.com/java/collections/arraylist/arraylist-clone-deep-copy/" target="_blank" rel="noopener noreferrer">Example</a></p>
</li>
</ul>
</li>
</ul>
<h3 id="collections-to-array" tabindex="-1"><a class="header-anchor" href="#collections-to-array"><span>Collections to Array</span></a></h3>
<ul>
<li><code v-pre>&lt;T&gt; T[] toArray(T[] array)</code>
<ul>
<li>Practice: pass a specific type array of length 0</li>
</ul>
</li>
</ul>
<h3 id="array-to-collections" tabindex="-1"><a class="header-anchor" href="#array-to-collections"><span>Array to Collections</span></a></h3>
<ul>
<li>
<p><code v-pre>List&lt;T&gt; Arrays.asList(T... a)</code></p>
<ul>
<li>
<p><strong>The array should be an array of object instead of an array of primitive type values</strong></p>
<ul>
<li>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">[] myArray </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> {</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 3</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">List</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> myList </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> Arrays</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">asList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(myArray);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">myList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">size</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">());</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 1</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">myList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">));</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// address of that array</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">myList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">));</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// ArrayIndexOutOfBoundsException</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">[] array </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">[]) </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">myList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(array[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]);</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 1</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>The returned list implements the optional <code v-pre>Collection</code> methods, except those that would change the size of the returned list. Those methods leave the list unchanged and throw <code v-pre>UnsupportedOperationException</code></p>
<ul>
<li>No <code v-pre>add()</code>, <code v-pre>remove()</code>, <code v-pre>clear()</code></li>
</ul>
</li>
</ul>
</li>
<li>
<p>How to correctly transform an array to a list</p>
<ol>
<li>
<p><code v-pre>List list = new ArrayList&lt;&gt;(Arrays.asList(&quot;a&quot;, &quot;b&quot;, &quot;c&quot;))</code></p>
</li>
<li>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Integer</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">[] myArray </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> { </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 3</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> }</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">List</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> myList </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> Arrays</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">stream</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(myArray).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">collect</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">Collectors</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">toList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">());</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// Also works for primitive array</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">[] myArray2 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> { </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 3</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> }</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">List</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> myList </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> Arrays</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">stream</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(myArray2).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">boxed</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">collect</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">Collectors</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">toList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">());</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>List.of(array)</code></p>
<ul>
<li>Unmodifiable list</li>
</ul>
</li>
</ol>
</li>
</ul>
<hr>
<h2 id="stream-api" tabindex="-1"><a class="header-anchor" href="#stream-api"><span>Stream API</span></a></h2>
<ul>
<li>
<hr>
</li>
</ul>
<h2 id="networking-programming" tabindex="-1"><a class="header-anchor" href="#networking-programming"><span>Networking Programming</span></a></h2>
<ul>
<li><code v-pre>Socket</code>, <code v-pre>ServerSocket</code></li>
<li>A socket is one endpoint of a two-way communication link between two programs running on the network</li>
<li><code v-pre>DatagramSocket</code>, <code v-pre>DatagramPacket</code></li>
</ul>
<hr>
<h2 id="jdbc" tabindex="-1"><a class="header-anchor" href="#jdbc"><span>JDBC</span></a></h2>
<ul>
<li>JDBC is an API used in java programming to interact with databases</li>
<li>Java Database Connectivity</li>
<li><img src="/assets/image/java/JDBC.png" alt="JDBC" tabindex="0" loading="lazy"><figcaption>JDBC</figcaption></li>
<li>Steps
<ol>
<li>Import packages</li>
<li>Load driver</li>
<li>Register driver</li>
<li>Create connection</li>
<li>Create statement</li>
<li>Execute statement</li>
<li>Close</li>
</ol>
</li>
</ul>
<h3 id="jdbc-drivers" tabindex="-1"><a class="header-anchor" href="#jdbc-drivers"><span>JDBC Drivers</span></a></h3>
<ul>
<li>
<p>Establish connection</p>
</li>
<li>
<p>Convert data types from Java language to database data types</p>
</li>
<li>
<p>Type-1 driver</p>
<ul>
<li>JDBC-ODBC bridge</li>
<li>Open Database Connectivity (ODBC) is an open standard API that allows application programmers to access any database</li>
<li>A layer between different program languages and different database systems</li>
<li>Partial driver (not fully written in Java)</li>
</ul>
</li>
<li>
<p>Type-2 driver</p>
<ul>
<li>Native-API</li>
<li>API sitting on the database system</li>
<li>Partial</li>
</ul>
</li>
<li>
<p>Type-3 driver</p>
<ul>
<li>Java-Net protocol driver</li>
<li>Use a server to talk to database</li>
<li>Pure</li>
</ul>
</li>
<li>
<p>Type-4 driver</p>
<ul>
<li>Thin driver</li>
<li>Direct driver written in Java</li>
<li>Pure</li>
</ul>
</li>
<li>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> java.sql.Connection</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> java.sql.DriverManager</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> java.sql.ResultSet</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> java.sql.SQLException</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> java.sql.Statement</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Sample</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // NOTE: Connection and Statement are AutoClosable.</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    //       Don't forget to close them both in order to avoid leaks.</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    try</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    (</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">      // create a database connection</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">      Connection</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> connection</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> DriverManager</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">getConnection</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"jdbc:sqlite:sample.db"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">      Statement</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> statement</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> connection</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">createStatement</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    )</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">      statement</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">setQueryTimeout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">30</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// set timeout to 30 sec.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">      statement</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">executeUpdate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"drop table if exists person"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">      statement</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">executeUpdate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"create table person (id integer, name string)"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">      statement</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">executeUpdate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"insert into person values(1, 'leo')"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">      statement</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">executeUpdate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"insert into person values(2, 'yui')"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">      ResultSet</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> rs</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> statement</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">executeQuery</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"select * from person"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">      while</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">rs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">())</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">        // read the result set</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"name = "</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> +</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> rs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">getString</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"name"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">));</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"id = "</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> +</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> rs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">getInt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"id"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">));</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    catch</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">SQLException</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">      // if the error message is "out of memory",</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">      // it probably means no database file is found</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">      e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">printStackTrace</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">err</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<hr>
<h2 id="hibernate" tabindex="-1"><a class="header-anchor" href="#hibernate"><span>Hibernate</span></a></h2>
<ul>
<li>A Java-based ORM framework (Object-Ralational Mapping)</li>
<li><a href="https://docs.jboss.org/hibernate/orm/6.6/quickstart/html_single/" target="_blank" rel="noopener noreferrer">Quick tutorial</a></li>
</ul>
<h3 id="key-concepts" tabindex="-1"><a class="header-anchor" href="#key-concepts"><span>Key Concepts</span></a></h3>
<ul>
<li>
<p><code v-pre>Entity</code> class</p>
<ul>
<li>
<p>An entity class is a Java class that is mapped to a table in a database</p>
</li>
<li>
<p>Each instance of the entity class represents a row in the table</p>
</li>
<li>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">Entity</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">Table</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">name</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "new_table_name"</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Student</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">Id</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">		// primary key</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">GeneratedValue</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">strategy</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> GenerationType</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">IDENTITY</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">)			</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// surrogate primary key</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    private</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">Column</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">name</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "product_name"</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    private</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    private</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> age</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  	@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">Transient</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">		// this field will not be stored in the database</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  	private</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> university</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  	private</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Address</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> address</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // Getters and Setters</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// Embed those columns into Student table</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">Embeddable</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Address</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  	private</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> roomNo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  	private</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> street</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  	private</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> city</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p><code v-pre>SessionFactory</code></p>
<ul>
<li>
<p>The <code v-pre>SessionFactory</code> is the main interface to interact with Hibernate</p>
</li>
<li>
<p>It is responsible for creating <code v-pre>Session</code> objects that are used to perform operations on the database</p>
</li>
<li>
<p>The <code v-pre>SessionFactory</code> is usually created once during application startup and is used throughout the lifetime of the application (it is a heavyweight class)</p>
</li>
<li>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">SessionFactory</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> sessionFactory </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Configuration</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">configure</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"hibernate.cfg.xml"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">addAnnotatedClass</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">Product</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">buildSessionFactory</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p><code v-pre>Session</code></p>
<ul>
<li>
<p>A <code v-pre>Session</code> is a single-threaded unit of work in Hibernate</p>
</li>
<li>
<p>It allows you to create, read, update, and delete objects from the database. You perform all database operations within the <code v-pre>Session</code></p>
</li>
<li>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Session</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> session </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> sessionFactory</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">getCurrentSession</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// or</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Session</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> session </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> sessionFactory</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">openSession</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Difference</p>
<ul>
<li>
<table>
<thead>
<tr>
<th><strong>Feature</strong></th>
<th><strong><code v-pre>getCurrentSession()</code></strong></th>
<th><strong><code v-pre>openSession()</code></strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Session Lifecycle</strong></td>
<td>Tied to the current request or transaction context.</td>
<td>Creates a new session each time it is called.</td>
</tr>
<tr>
<td><strong>Transaction Management</strong></td>
<td>Automatically associates with the ongoing transaction (if one exists).</td>
<td>Transaction must be manually managed (begin, commit, rollback).</td>
</tr>
<tr>
<td><strong>Session Closing</strong></td>
<td>The session is automatically closed at the end of the transaction.</td>
<td>The session must be explicitly closed by the developer.</td>
</tr>
<tr>
<td><strong>Common Use Case</strong></td>
<td>Typically used in web applications (e.g., within a request/response lifecycle).</td>
<td>Used in more flexible, manual session management contexts (e.g., batch processing).</td>
</tr>
<tr>
<td><strong>Contextual Binding</strong></td>
<td>Uses a session-per-request or session-per-operation pattern.</td>
<td>Can be used independently of the request/transaction lifecycle.</td>
</tr>
<tr>
<td><strong>Transaction Handling</strong></td>
<td>Managed by the container, typically no need to manually start or commit the transaction.</td>
<td>Developer is responsible for managing transactions.</td>
</tr>
</tbody>
</table>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p><code v-pre>Transaction</code></p>
<ul>
<li>
<p>Hibernate uses transactions to ensure the consistency and integrity of the database</p>
</li>
<li>
<p>Transactions are started using <code v-pre>beginTransaction()</code>, and after performing the necessary operations, they are committed or rolled back</p>
</li>
<li>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">session</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">beginTransaction</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// Operations like save, update, delete</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">session</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">getTransaction</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">commit</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>HQL (Hibernate Query Language)</p>
</li>
<li>
<p>Criteria API</p>
</li>
<li>
<p>Lazy vs Eager loading</p>
<ul>
<li>
<p><strong>Lazy Loading:</strong> Associated entities are loaded only when they are accessed for the first time</p>
</li>
<li>
<p><strong>Eager Loading:</strong> Associated entities are loaded immediately when the parent entity is loaded</p>
</li>
<li>
<p>Lazy loading can improve performance by fetching data only when needed, but it can cause issues with <code v-pre>LazyInitializationException</code> if an entity is accessed outside the session context</p>
</li>
<li>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">Entity</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Order</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">OneToMany</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">fetch</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> FetchType</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">LAZY</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    private</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> List</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Product</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">></span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> products</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<h3 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h3>
<ul>
<li>
<p><code v-pre>hibernate.cfg.xml</code></p>
<ul>
<li>
<p>The main configuration file for Hibernate, where you specify the database connection properties, dialect, and other Hibernate settings</p>
</li>
<li>
<div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-xml"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">hibernate-configuration</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">session-factory</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">property</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"hibernate.dialect"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>org.hibernate.dialect.MySQLDialect&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">property</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">property</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"hibernate.connection.driver_class"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>com.mysql.cj.jdbc.Driver&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">property</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">property</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"hibernate.connection.url"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>jdbc:mysql://localhost:3306/yourdb&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">property</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">property</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"hibernate.connection.username"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>root&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">property</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">property</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"hibernate.connection.password"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>password&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">property</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">      	&#x3C;!--Create the table when it is not there and update it instead of recreating it--></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">property</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"hibernate.hbm2ddl.auto"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>update&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">property</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">      	&#x3C;!--Print the sql on the console--></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">property</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"hibernate.show_sql"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>true&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">property</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">property</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"hibernate.format_sql"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>true&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">property</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">session-factory</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">hibernate-configuration</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>Mapping files</p>
<ul>
<li>Define the relationship between entities and the database tables</li>
<li>Nowadays we use annotations</li>
</ul>
</li>
</ul>
<h3 id="features" tabindex="-1"><a class="header-anchor" href="#features"><span>Features</span></a></h3>
<ul>
<li>
<p>CRUD methods</p>
<ul>
<li>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">session</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">beginTransaction</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// create</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">session</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">persist</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(s1);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// read</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Student</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> s2 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> session</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">Student</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">101</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// update</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// Merge a detached entity (assuming it's not currently attached to the session)</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Student</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> s3 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Student</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">s3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">setId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">101</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">s3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">setName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"John"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">s3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">setAge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">20</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// Merge the entity with the current session</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">session</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">merge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(product);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// delete</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> (s2 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">!=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // Delete the student</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">    session</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">remove</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(s2);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">} </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">else</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">    System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Student not found."</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">getTransaction</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">commit</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">close</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>Mapping relationships</p>
<ul>
<li>One to One
<ul>
<li><code v-pre>@OneToOne</code></li>
</ul>
</li>
<li>One to Many &amp; Many to One
<ul>
<li><code v-pre>@OneToMany</code>, <code v-pre>ManyToOne</code></li>
<li>Create a third join table by default</li>
</ul>
</li>
<li>Many to Many
<ul>
<li><code v-pre>@ManyToMany(mappedBy = &quot;&quot;)</code></li>
</ul>
</li>
</ul>
</li>
<li>
<p>Caching</p>
<ul>
<li>Hibernate provides caching mechanisms to reduce database access and improve performance. It supports both first-level cache (Session cache) and second-level cache (across Sessions)
<ul>
<li><strong>First-level cache</strong> is enabled by default, and it stores objects within the current session</li>
<li><strong>Second-level cache</strong> is an optional cache that works across sessions, and can be configured using cache providers like EHCache</li>
</ul>
</li>
</ul>
</li>
</ul>
<hr>
<h2 id="javadoc" tabindex="-1"><a class="header-anchor" href="#javadoc"><span>JavaDoc</span></a></h2>
<ul>
<li>Tags
<ul>
<li>Class
<ul>
<li><code v-pre>@author</code></li>
<li><code v-pre>@version</code></li>
<li><code v-pre>@since</code></li>
<li><code v-pre>@see</code></li>
</ul>
</li>
<li>Method
<ul>
<li><code v-pre>@param</code></li>
<li><code v-pre>@return</code></li>
<li><code v-pre>@throws</code></li>
<li><code v-pre>@exception</code></li>
<li><code v-pre>@deprecated</code></li>
<li><code v-pre>@code</code></li>
</ul>
</li>
<li>Others
<ul>
<li><code v-pre>@link</code></li>
<li><code v-pre>@value</code></li>
<li><code v-pre>@serial</code></li>
</ul>
</li>
</ul>
</li>
</ul>
<hr>
<h2 id="annotations" tabindex="-1"><a class="header-anchor" href="#annotations"><span>Annotations</span></a></h2>
<ul>
<li>
<p>Annotations provide information (<em>metadata</em>) that you need to fully describe your program to the compiler and JVM, but that cannot be expressed in Java</p>
</li>
<li>
<p>Java 5 feature</p>
</li>
<li>
<p>In fact, annotation is a <strong>special interface</strong> which extends <code v-pre>Annotation</code> interface</p>
</li>
<li>
<p>Built-in annotations</p>
<ul>
<li>Annotates the code (<strong>class, method, variable</strong>)
<ul>
<li><code v-pre>@Override</code></li>
<li><code v-pre>@Deprecated</code>
<ul>
<li>Methods can still be used</li>
</ul>
</li>
<li><code v-pre>@SuppressWarnings()</code>
<ul>
<li>To turn off inappropriate compiler warnings</li>
</ul>
</li>
<li><code v-pre>@SafeVarargs</code>
<ul>
<li>Useful for variable arguments</li>
<li>Method must be <code v-pre>private</code> or <code v-pre>final</code></li>
</ul>
</li>
<li><code v-pre>@FunctionalInterface</code>
<ul>
<li>Describe an interface that has only one method</li>
</ul>
</li>
</ul>
</li>
<li>Annotates the annotation
<ul>
<li><code v-pre>@Retention(RetentionPolicy.CLASS)</code>
<ul>
<li>Indicates how long annotations with the annotated type are to be retained</li>
</ul>
</li>
<li><code v-pre>@Documented</code>
<ul>
<li>Provides support to JavaDoc</li>
</ul>
</li>
<li><code v-pre>@Target</code>
<ul>
<li>Indicates the target of the annotation</li>
</ul>
</li>
<li><code v-pre>@Inherited</code>
<ul>
<li>Indicates the annocation can be used on subclasses</li>
</ul>
</li>
<li><code v-pre>@Repeatable</code>
<ul>
<li>Indicates the annotation can be used multiple times</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>User-defined annotations</p>
<ul>
<li>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">interface</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B"> MyAnno</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">  String</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">  String</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> date</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">  String</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> version</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">default</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "1.0"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">MyAnno</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">name</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"David"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> date</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"01/01/1970"</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> MyClass {}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<hr>
<h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference"><span>Reference</span></a></h2>
<ul>
<li>Thinking in Java, Bruce Eckel</li>
<li><a href="C">C notes</a></li>
<li><a href="https://www.javatpoint.com/corejava-interview-questions" target="_blank" rel="noopener noreferrer">Java Interview Questions</a></li>
</ul>
</div></template>


