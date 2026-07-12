<template><div><h2 id="type-of-errors" tabindex="-1"><a class="header-anchor" href="#type-of-errors"><span>Type of Errors</span></a></h2>
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
<h2 id="exception-class" tabindex="-1"><a class="header-anchor" href="#exception-class"><span><code v-pre>Exception</code> Class</span></a></h2>
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
<h2 id="how-to-handle-exceptions" tabindex="-1"><a class="header-anchor" href="#how-to-handle-exceptions"><span>How to Handle Exceptions</span></a></h2>
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
<h2 id="exception-specification" tabindex="-1"><a class="header-anchor" href="#exception-specification"><span>Exception Specification</span></a></h2>
<ul>
<li>Politely tell the client programmer what exceptions the method throws, so the client programmer can handle them</li>
<li><code v-pre>throws</code></li>
<li>Unchecked exceptions can be omitted</li>
<li>The &quot;exception specification interface&quot; for a particular method may narrow during inheritance and overriding, but it may not widen</li>
</ul>
<blockquote>
<p><a href="https://www.oracle.com/technical-resources/articles/enterprise-architecture/effective-exceptions-part1.html" target="_blank" rel="noopener noreferrer">A great article by Barry Ruzek around this topic</a></p>
</blockquote>
</div></template>


