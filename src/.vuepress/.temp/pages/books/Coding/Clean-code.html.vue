<template><div><h2 id="why-clean-code-is-important" tabindex="-1"><a class="header-anchor" href="#why-clean-code-is-important"><span>Why Clean Code is Important?</span></a></h2>
<p>Good programmers are like poets writing their code guided by their &quot;code sense&quot;.</p>
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
<li><strong>Small!</strong>
<ul>
<li>The first rule of functions is that they should be small. The second rule of functions is that they should be smaller than that.</li>
</ul>
</li>
<li><strong>Do One Thing</strong>
<ul>
<li><strong>Functions should do one thing. They should do it well. They should do it only.</strong></li>
<li>If a function has steps towards to complete one task that are one level blow the stated name of the function, then the function is doing one thing.</li>
<li>One way to know that a function is doing more than one thing is if you can extract another function from it with a name that is not merely a restatement of its implementation.</li>
</ul>
</li>
<li></li>
</ul>
<h3 id="comments" tabindex="-1"><a class="header-anchor" href="#comments"><span>Comments</span></a></h3>
<h3 id="formatting" tabindex="-1"><a class="header-anchor" href="#formatting"><span>Formatting</span></a></h3>
</div></template>


