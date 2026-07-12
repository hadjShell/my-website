<template><div><ul>
<li>Interfaces and abstract classes provide a more structured way to separate interface from implementation</li>
<li>Inheritance is specialisation; interface is generalisation</li>
</ul>
<h2 id="interfaces" tabindex="-1"><a class="header-anchor" href="#interfaces"><span>Interfaces</span></a></h2>
<ul>
<li><code v-pre>implements</code></li>
<li>An interface is a contract of what the classes <strong>can</strong> do</li>
<li>An abstract class taken to the extreme,thus more flexibility (complete decoupling)</li>
<li>Refer to different types of objects with one identical interface type
<ul>
<li>Generalisation</li>
<li>Capability of putting different types of objects into one data structure</li>
<li>Less effort for code alteration</li>
</ul>
</li>
<li>One class can implement several interfaces
<ul>
<li>&quot;Multiple inheritance&quot;: A class can be upcast to more than one base type with interfaces</li>
</ul>
</li>
<li>Interface cannot be instantiated</li>
<li>Methods in interfaces are implicitly <code v-pre>public</code></li>
<li>Fields in interfaces are implicitly constant (<code v-pre>public static final</code>)</li>
<li>SInce Java 8 interface can have <code v-pre>static</code> methods</li>
<li>An interface can extend another interface</li>
<li>Interface can have <code v-pre>default</code> methods which can have method body
<ul>
<li>Java 8 feature</li>
<li>Make refactoring interface easier</li>
<li>Java 9 allows <code v-pre>private</code> methods in interface that can be used in <code v-pre>default</code> methods inside interface</li>
</ul>
</li>
<li>Type of Interface
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
<h2 id="abstract-classes" tabindex="-1"><a class="header-anchor" href="#abstract-classes"><span>Abstract Classes</span></a></h2>
<ul>
<li>An abstract class is a class that is declared <code v-pre>abstract</code></li>
<li>Contain a mix of methods with or without implementation</li>
<li>An abstract method is a method that is declared <code v-pre>abstract</code> without an implementation</li>
<li>Abstract class cannot be instantiated, but can be subclassed</li>
<li>When an abstract class is subclassed, the subclass usually provides implementations for all of the abstract methods in its superclass. However, if it doesn't, then the subclass must also be declared <code v-pre>abstract</code></li>
<li>A subclass of a non-abstract superclass can be <code v-pre>abstract</code></li>
</ul>
<h2 id="interfaces-vs-abstract-classes" tabindex="-1"><a class="header-anchor" href="#interfaces-vs-abstract-classes"><span>Interfaces vs. Abstract Classes</span></a></h2>
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
</div></template>


