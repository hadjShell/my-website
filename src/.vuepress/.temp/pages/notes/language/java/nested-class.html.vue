<template><div><ul>
<li>Place a class definition within another class definition</li>
<li>Nested classes are divided into two categories: non-static and static
<ul>
<li>Non-static nested classes are called <em>inner classes</em></li>
<li>Nested classes that are declared <code v-pre>static</code> are called <em>static nested classes</em></li>
</ul>
</li>
</ul>
<h2 id="inner-classes" tabindex="-1"><a class="header-anchor" href="#inner-classes"><span>Inner Classes</span></a></h2>
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
<h2 id="static-nested-classes" tabindex="-1"><a class="header-anchor" href="#static-nested-classes"><span>Static Nested Classes</span></a></h2>
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
<h2 id="why-nested-classes" tabindex="-1"><a class="header-anchor" href="#why-nested-classes"><span>Why Nested Classes?</span></a></h2>
<ul>
<li>It is a way of logically grouping classes that are only used in one place</li>
<li>It increases encapsulation</li>
<li>It can lead to more readable and maintainable code</li>
<li>Nature of the problem</li>
</ul>
</div></template>


