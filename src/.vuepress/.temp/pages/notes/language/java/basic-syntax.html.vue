<template><div><ul>
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
</div></template>


