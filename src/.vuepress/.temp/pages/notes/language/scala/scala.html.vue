<template><div><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h2>
<ul>
<li>Features
<ul>
<li>It’s a high-level programming language</li>
<li>It has a concise, readable syntax</li>
<li>It’s statically-typed (but feels dynamic)</li>
<li>It has an expressive type system</li>
<li>It’s a functional programming (FP) language</li>
<li>It’s an object-oriented programming (OOP) language</li>
<li>It supports the fusion of FP and OOP</li>
<li>It runs on the JVM (and in the browser)</li>
<li>It interacts seamlessly with Java code</li>
<li>It’s used for server-side applications (including microservices), big data applications, and can also be used in the browser with Scala.js</li>
</ul>
</li>
<li>REPL (read-eval-print loop)
<ul>
<li>A command-line interpreter / a language shell</li>
<li>A simple, interactive computer programming environment that takes single user inputs (i.e. single expression), evaluates them, and returns the result to the user</li>
<li>A program written in a REPL is executed piecewise</li>
<li>Scala repl, ammonite repl</li>
<li>Command <code v-pre>scala</code> or <code v-pre>amm</code> to open it</li>
</ul>
</li>
<li>Scala worksheets
<ul>
<li>A worksheet is a Scala file that is evaluated on save, and the result of each expression is shown in a column to the right of your program</li>
<li>Worksheets use the extension <code v-pre>.worksheet.sc</code></li>
</ul>
</li>
</ul>
<hr>
<h2 id="data-and-variable-types" tabindex="-1"><a class="header-anchor" href="#data-and-variable-types"><span>Data and Variable Types</span></a></h2>
<ul>
<li>
<p><strong>All values</strong> have a <strong>type</strong> (<strong>even for so-called primitive type</strong>)</p>
</li>
<li>
<p>Two types of variables</p>
<ul>
<li><code v-pre>val</code>
<ul>
<li>An immutable variable</li>
<li>You should always create a variable with <code v-pre>val</code>, unless there’s a reason you need a mutable variable</li>
</ul>
</li>
<li><code v-pre>var</code>
<ul>
<li>A mutable variable</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Declaring variable types</p>
<ul>
<li>
<div class="language-scala line-numbers-mode" data-highlighter="shiki" data-ext="scala" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-scala"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">val</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> x</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Int</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">   // explicit</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">val</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> x</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">        // implicit; the compiler infers the type</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>The Scala compiler can usually infer the data type for you</p>
</li>
<li>
<p>You can always explicitly declare a variable’s type if you prefer</p>
</li>
</ul>
</li>
<li>
<p><code v-pre>BigInt</code>, <code v-pre>BigDecimal</code></p>
<ul>
<li>Support all the operators you’re used to using with numeric types</li>
</ul>
</li>
<li>
<p>Casting</p>
<ul>
<li>
<div class="language-scala line-numbers-mode" data-highlighter="shiki" data-ext="scala" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-scala"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// upcast</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">val</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Byte</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 127</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">val</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Int</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> b  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 127</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">val</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> face</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Char</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> '☺'</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">val</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> number</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Int</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> face  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 9786</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// downcast</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">val</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> x</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Long</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 987654321</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">val</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> y</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Float</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> x.toFloat  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 9.8765434E8 (note that `.toFloat` is required because the cast results in precision loss)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">val</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> z</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Long</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> y  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// Error</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<figure><img src="/assets/image/scala/hierarchy.svg" alt="hierarchy" tabindex="0" loading="lazy"><figcaption>hierarchy</figcaption></figure>
</li>
<li>
<p><code v-pre>Any</code></p>
<ul>
<li>The supertype of all types, also called the <strong>top type</strong></li>
<li>It defines certain universal methods such as <code v-pre>equals</code>, <code v-pre>hashCode</code>, and <code v-pre>toString</code></li>
</ul>
</li>
<li>
<p><code v-pre>Matchable</code></p>
<ul>
<li>Used to mark all types that we can perform pattern matching on</li>
</ul>
</li>
<li>
<p><code v-pre>AnyVal</code></p>
<ul>
<li>Value types</li>
<li><code v-pre>Byte</code>, <code v-pre>Int</code>, <code v-pre>Long</code>, <code v-pre>Short</code>, <code v-pre>Double</code>, <code v-pre>Float</code>, <code v-pre>Char</code>, <code v-pre>Unit</code>, <code v-pre>Boolean</code></li>
<li>Default numeric types: <code v-pre>Int</code>, <code v-pre>Double</code></li>
<li>You can append the characters <code v-pre>L</code>, <code v-pre>D</code>, and <code v-pre>F</code> (and their lowercase equivalents) to numbers to specify that they are <code v-pre>Long</code>, <code v-pre>Double</code>, or <code v-pre>Float</code> values</li>
<li><code v-pre>Unit</code>
<ul>
<li>A value type which carries no meaningful information</li>
<li>There is exactly one instance of <code v-pre>Unit</code> which we can refer to as: <code v-pre>()</code></li>
<li>If you write methods in Scala that have no return value, <code v-pre>Unit</code> is used for the same purpose as <code v-pre>void</code></li>
</ul>
</li>
</ul>
</li>
<li>
<p><code v-pre>AnyRef</code></p>
<ul>
<li>Reference type</li>
<li>Correspond to <code v-pre>java.lang.Object</code></li>
</ul>
</li>
<li>
<p><code v-pre>Nothing</code></p>
<ul>
<li>A subtype of all types, also called the <strong>bottom type</strong></li>
<li>There is no value that has the type <code v-pre>Nothing</code></li>
<li>A common use is to signal non-termination, such as a thrown exception, program exit, or an infinite loop—i.e., it is the type of an expression which does not evaluate to a value, or a method that does not return normally</li>
</ul>
</li>
<li>
<p><code v-pre>Null</code></p>
<ul>
<li>A subtype of all reference types</li>
<li>It has a single value identified by the keyword literal <code v-pre>null</code></li>
<li>Currently, the usage of <code v-pre>null</code> is considered bad practice</li>
</ul>
</li>
</ul>
<hr>
<h2 id="string" tabindex="-1"><a class="header-anchor" href="#string"><span>String</span></a></h2>
<ul>
<li>
<p>Similar to Java String</p>
</li>
<li>
<p>Multiline strings</p>
<ul>
<li>
<div class="language-scala line-numbers-mode" data-highlighter="shiki" data-ext="scala" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-scala"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">val</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> quote</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> """The essence of Scala:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">               Fusion of functional and object-oriented</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">               programming in a typed setting."""</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>One drawback of this basic approach is that the lines after the first line are indented, and look like this:</p>
</li>
<li>
<div class="language-scala line-numbers-mode" data-highlighter="shiki" data-ext="scala" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-scala"><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"The essence of Scala:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">               Fusion of functional and object-oriented</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">               programming in a typed setting."</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>When spacing is important, put a <code v-pre>|</code> symbol in front of all lines after the first line, and call the <code v-pre>stripMargin</code> method after the string:</p>
</li>
<li>
<div class="language-scala line-numbers-mode" data-highlighter="shiki" data-ext="scala" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-scala"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">val</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> quote</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> """The essence of Scala:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">               |Fusion of functional and object-oriented</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">               |programming in a typed setting."""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.stripMargin</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<div class="language-scala line-numbers-mode" data-highlighter="shiki" data-ext="scala" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-scala"><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"The essence of Scala:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Fusion of functional and object-oriented</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">programming in a typed setting."</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>String Interpolation</p>
<ul>
<li>
<p>String interpolation provides a way to use variables inside strings</p>
</li>
<li>
<p>The <code v-pre>s</code> Interpolator</p>
<ul>
<li>
<p>Prepending <code v-pre>s</code> to any string literal allows the usage of variables directly in the string</p>
</li>
<li>
<div class="language-scala line-numbers-mode" data-highlighter="shiki" data-ext="scala" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-scala"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">val</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "James"</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">val</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> age</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 30</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">println(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">$</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> is </span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">$</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">age</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> years old"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)   </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// "James is 30 years old"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">println(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"2 + 2 = </span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">${</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> +</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)   </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// "2 + 2 = 4"</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">val</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> x</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> -</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">println(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"x.abs = </span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">${</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">x.abs</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)   </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// "x.abs = 1"</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// escape $ ""</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">println(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"New offers starting at </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">$$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">14.99"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)   </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// New offers starting at $14.99</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">println(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"""{"name":"James"}"""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)     </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// {"name":"James"}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>The <code v-pre>f</code> Interpolator</p>
<ul>
<li>
<p>Prepending <code v-pre>f</code> to any string literal allows the creation of simple formatted strings, similar to <code v-pre>printf</code> in other languages</p>
</li>
<li>
<p>Typesafe</p>
</li>
<li>
<p>If there is no <code v-pre>%</code> character after a variable definition a formatter of <code v-pre>%s</code> (<code v-pre>String</code>) is assumed</p>
</li>
<li>
<div class="language-scala line-numbers-mode" data-highlighter="shiki" data-ext="scala" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-scala"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">val</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> height</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1.9d</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">val</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "James"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">println(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">$</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">%s is </span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">$</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">height</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">%2.2f meters tall"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// "James is 1.90 meters tall"</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// escape %</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">println(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"3/19 is less than 20%%"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// "3/19 is less than 20%"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>The raw Interpolator</p>
<ul>
<li>
<p>The raw interpolator is similar to the <code v-pre>s</code> interpolator except that it performs no escaping of literals within the string</p>
</li>
<li>
<div class="language-scala line-numbers-mode" data-highlighter="shiki" data-ext="scala" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-scala"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">scala</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">></span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> raw</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"a\nb"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">res1: </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">String</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> a\nb</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>Custom Interpolators</p>
</li>
</ul>
</li>
</ul>
<h2 id="control-structures" tabindex="-1"><a class="header-anchor" href="#control-structures"><span>Control Structures</span></a></h2>
<h2 id="oop" tabindex="-1"><a class="header-anchor" href="#oop"><span>OOP</span></a></h2>
<ul>
<li>
<div class="language-scala line-numbers-mode" data-highlighter="shiki" data-ext="scala" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-scala"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// class</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">case</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Student</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">var</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> rollno</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> : </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Int</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">var</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> : </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">String</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "John"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">var</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> marks</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> : </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Int</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 90</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  // method</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> show</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    println(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Hi"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> ></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> : </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Student</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) : </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Boolean</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> marks </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> s.marks</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// objects</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">val</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> s1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Student</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(marks </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 80</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">val</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> s2</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Student</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(name </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "David"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">s1.show()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">s1 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> s2</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li></li>
</ul>
<h2 id="method" tabindex="-1"><a class="header-anchor" href="#method"><span>Method</span></a></h2>
<ul>
<li>
<p><strong>Everything is a method</strong> (<strong>No operators</strong>)</p>
<ul>
<li>
<div class="language-scala line-numbers-mode" data-highlighter="shiki" data-ext="scala" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-scala"><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> +</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// + is actually a method</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>foo</p>
</li>
</ul>
<hr>
<h2 id="list-and-lambda-expression" tabindex="-1"><a class="header-anchor" href="#list-and-lambda-expression"><span>List and Lambda Expression</span></a></h2>
<ul>
<li>
<div class="language-scala line-numbers-mode" data-highlighter="shiki" data-ext="scala" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-scala"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">val</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> nums</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> List</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">6</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (n &#x3C;- nums) println(n)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">nums.foreach{ (</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> : </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) => println(n) }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">nums.reverse	</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// reverse list, return a new list</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">nums.drop(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">).take(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)	</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// remove first 2 elements, take next 2 elements</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">nums drop </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	// also valid</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">nums.head</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">nums.tail</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">nums.filter(n => n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">></span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">nums.partition(n => n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">></span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<div class="language-scala line-numbers-mode" data-highlighter="shiki" data-ext="scala" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-scala"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// tuple</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// in scala we can return multiple values</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">val</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> parts</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> nums.partition(n => n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">></span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">val</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> p1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> parts._1</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">val</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> p2</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> parts._2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// or</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">val</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (p1, p2) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> nums.partition(n => n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">></span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<hr>
</li>
</ul>
</div></template>


