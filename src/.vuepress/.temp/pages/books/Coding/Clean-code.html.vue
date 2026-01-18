<template><div><h2 id="why-clean-code-is-important" tabindex="-1"><a class="header-anchor" href="#why-clean-code-is-important"><span>Why Clean Code is Important?</span></a></h2>
<p>Good programmers are like poets writing their code guided by their &quot;code sense&quot;.<br>
Master programmers think of systems as stories to be told rather than programs to be written.</p>
<h2 id="guideline" tabindex="-1"><a class="header-anchor" href="#guideline"><span>Guideline</span></a></h2>
<p>This section gives a bunch of guidelines on different sectors of programming.</p>
<h3 id="names" tabindex="-1"><a class="header-anchor" href="#names"><span>Names</span></a></h3>
<ul>
<li>
<p><strong>Use Intention-Revealing Names</strong></p>
<ul>
<li>
<p>The names of a variable, function, or class, should answer why it exists, what it does, and how it does.</p>
</li>
<li>
<p>If a name requires a comment, then it doesn't reveal its content, e.g.</p>
</li>
<li>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// bad style</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> d</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	// elapsed time in days</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// good style</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> elapsedTimeInDays</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><em>The problem isn't the simplicity of the code but implicity of the code.</em></p>
</li>
<li>
<p>Classes and objects should have <strong>noun and noun phrase names</strong></p>
</li>
<li>
<p>Methods should have <strong>verb or verb phrase names</strong>, and predicates should be named for <strong>their value and prefixed with <code v-pre>get</code>, <code v-pre>set</code>, and <code v-pre>is</code></strong></p>
</li>
</ul>
</li>
<li>
<p><strong>Avoid Disinformation</strong></p>
<ul>
<li>Be aware of using names which vary in small ways</li>
<li>Using inconsistent spelling is disinformation</li>
</ul>
</li>
<li>
<p><strong>Make Meaningful Distinctions</strong></p>
<ul>
<li>If names must be different, then they should also mean something different.</li>
<li>Noise word are redundant</li>
</ul>
</li>
<li>
<p><strong>Use Searchable Names</strong></p>
<ul>
<li>Constants should be given names instead of using magical numbers everywhere</li>
</ul>
</li>
<li>
<p><strong>Avoid Encoding</strong></p>
<ul>
<li>History lesson: in old days, programmers are forced to encode type or scope information into names, e.g.
<ul>
<li>Fortan forced encodings by making the first letter a code for type</li>
<li>Member variables were encoded with a <code v-pre>m_</code> prefix</li>
<li>Interfaces were encoded with a <code v-pre>I</code> prefix</li>
</ul>
</li>
<li>Now we don't use this style anymore</li>
</ul>
</li>
<li>
<p><strong>Consistent Style</strong></p>
<ul>
<li>Pick one word for one abstract concept and stick with it</li>
<li>Avoid using the same word for two purposes</li>
</ul>
</li>
<li>
<p><strong>Use Solution/Problem Domain Names</strong></p>
<ul>
<li>Feel free to use CS terms, algorithm names, pattern names, math terms, etc.</li>
<li>Otherwise, use the name from the problem domain</li>
<li><em>Separating solution and problem domain concepts is part of the job of a good programmer and designer.</em></li>
</ul>
</li>
</ul>
<p>Choosing good names requires good descriptive skills and a shared cultural background. Also, don't be afraid of renaming things. It will pay off in short term and continue to pay in the long run.</p>
<h3 id="functions" tabindex="-1"><a class="header-anchor" href="#functions"><span>Functions</span></a></h3>
<ul>
<li>
<p><strong>Small!</strong></p>
<ul>
<li>The first rule of functions is that they should be small. The second rule of functions is that they should be smaller than that.</li>
</ul>
</li>
<li>
<p><strong>Do One Thing</strong></p>
<ul>
<li><strong>Functions should do one thing. They should do it well. They should do it only.</strong></li>
<li>Function should either do something or answer something, but not both. <strong>Either it should change the state of an object, or it should return some information about that object</strong>.</li>
<li>If a function has steps towards to complete one task that are one level blow the stated name of the function, then the function is doing one thing.</li>
<li>One way to know that a function is doing more than one thing is if you can extract another function from it with a name that is not merely a restatement of its implementation.</li>
<li>Read code from top to bottom should feel like reading a set of to do paragraphs.</li>
</ul>
</li>
<li>
<p><strong>Don't Repeat Yourself</strong></p>
<ul>
<li>Duplication may be the root of all evil in software.
<blockquote>
<p>It would appear that since the invention of the subroutine, innovations in software development have been an ongoing attempt to eliminate duplication from our source code.</p>
</blockquote>
</li>
</ul>
</li>
<li>
<p><code v-pre>switch</code></p>
<ul>
<li>It's hard to make a <code v-pre>switch</code> statement that does one thing, not violating SRP and OCP.</li>
<li>General rule for <code v-pre>switch</code>: <em><code v-pre>switch</code> can be tolerated if the appear only once, are used to create polymorphic objects, and are hidden behind an inheritance relationship so that the rest of the system can't see them.</em> E.g., to bury them in an <code v-pre>AbstractFactory</code>.</li>
</ul>
</li>
<li>
<p><strong>Arguments</strong></p>
<ul>
<li>The ideal number of arguments is 0 (<em>niladic</em>); next is 1 (<em>monadic</em>), followed by 2 (<em>dyadic</em>). 3 (<em>triadic</em>) should be avoided.</li>
<li>Arguments are hard for conceptual processing and testing.</li>
<li><strong>Common monadic forms</strong>
<ul>
<li><strong>Ask a question about the argument</strong>. E.g., <code v-pre>boolean isFileExisted(&quot;myFile&quot;)</code>.</li>
<li><strong>Operate on that argument, transform it into something else and return it</strong>. E.g., <code v-pre>InputStream openFile(&quot;myFile&quot;)</code>.</li>
<li><strong>Event listener</strong>: no output, function uses the event of argument to alter the state of the system.</li>
</ul>
</li>
<li><strong>Passing a boolean into a function is a truly terrible practice</strong>, violating SRP that it does one thing if the flag is true and another if the flag is false.</li>
<li>When a function seems to need more than 2 or 3 arguments, it's likely that <strong>some of those arguments ought to be wrapped into a class of their own</strong>.</li>
<li>Sometimes we want to pass a variable number of arguments into a function. If they are all treated identically, then they are equivalent to a single argument of <code v-pre>List</code>. E.g., <code v-pre>String.format(String format, Object... args)</code>.</li>
<li>Anything that forces you to check the function signature is equivalent to a double-take. It's an cognitive break and should be avoided.</li>
</ul>
</li>
<li>
<p><strong>Error Handling</strong></p>
<ul>
<li>
<p>Exceptions are preferred to returning error codes, because when you return an error code, you create the problem that the caller must deal with the error immediately. But the error processing code can be seperated from the working logic with exceptions.</p>
</li>
<li>
<p><code v-pre>try/catch</code> blocks are ugly in their own way. <strong>It's better to extract the bodies of the <code v-pre>try/catch</code> blocks into functions of their own</strong>. E.g.,</p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> delete</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Page</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> page) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  try</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    deletePageAndAllReferences</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(page)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">  } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">catch</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Exception</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> e</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">) {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    logError</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(e)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">private</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> deletePageAndAllReferences</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Page</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> page) throws Exception {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  deletePage</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(page)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">  registry</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">deleteReference</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">page</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">  config</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">deleteKey</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">page</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">makeKey</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">());</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">private</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> logError</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Exception</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> e) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">  logger</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">getMessage</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">());</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p><strong>Structured Programming</strong></p>
<ul>
<li>Every function, and every block within a function, should have <strong>one entry and one exit</strong>, i.e., there should be only one <code v-pre>return</code>, no <code v-pre>break</code> or <code v-pre>continue</code>, and never <code v-pre>goto</code>.</li>
<li>If your keep functions small, then occational multiple <code v-pre>return</code>, <code v-pre>break</code>, <code v-pre>continue</code> does no harm and can sometimes be better.</li>
</ul>
</li>
</ul>
<p>Writing functions is an iterative process. Just be patient and do the refactoring work.</p>
<h3 id="comments" tabindex="-1"><a class="header-anchor" href="#comments"><span>Comments</span></a></h3>
<h3 id="formatting" tabindex="-1"><a class="header-anchor" href="#formatting"><span>Formatting</span></a></h3>
</div></template>


