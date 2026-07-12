<template><div><ul>
<li>String is an object</li>
<li>String is immutable</li>
</ul>
<h2 id="creating-string" tabindex="-1"><a class="header-anchor" href="#creating-string"><span>Creating String</span></a></h2>
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
<h2 id="common-string-methods" tabindex="-1"><a class="header-anchor" href="#common-string-methods"><span>Common String Methods</span></a></h2>
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
<h2 id="regualr-expression" tabindex="-1"><a class="header-anchor" href="#regualr-expression"><span>Regualr Expression</span></a></h2>
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
<h2 id="printing" tabindex="-1"><a class="header-anchor" href="#printing"><span>Printing</span></a></h2>
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
</div></template>


