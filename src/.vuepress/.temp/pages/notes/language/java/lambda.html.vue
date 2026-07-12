<template><div><ul>
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
<li>Method references
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
</div></template>


