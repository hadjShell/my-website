<template><div><ul>
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
</div></template>


