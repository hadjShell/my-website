<template><div><h2 id="🧠-concept" tabindex="-1"><a class="header-anchor" href="#🧠-concept"><span>🧠 Concept</span></a></h2>
<ul>
<li>
<p>A binary tree that <strong><code v-pre>left.val &lt; root.val &lt; right.val</code></strong></p>
</li>
<li>
<p>For each node in a BST, <strong>its left subtree and right subtree are BST</strong></p>
</li>
<li>
<p>Searching, insertion, deletion - <code v-pre>O(log N)</code> for balanced BST, <code v-pre>O(N)</code> for unbalanced BST</p>
<ul>
<li>
<p>For a perfect binary tree, its level is equal to <code v-pre>log (N + 1)</code>, which is approximately <code v-pre>log N</code></p>
</li>
<li>
<div class="language-txt line-numbers-mode" data-highlighter="shiki" data-ext="txt" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-txt"><span class="line"><span>Algorithm findBST</span></span>
<span class="line"><span>Inputs c: Pointer; key: Integer</span></span>
<span class="line"><span>Returns Pointer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Begin</span></span>
<span class="line"><span>if c = NULL then return NULL</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>if c.key() = key then return c</span></span>
<span class="line"><span>if c.key() > key then</span></span>
<span class="line"><span>return findBST(c.leftPTR(), key)</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>return findBST(c.rightPTR(), key)</span></span>
<span class="line"><span>End</span></span>
<span class="line"><span></span></span>
<span class="line"><span>c - pointer to current node</span></span>
<span class="line"><span>c.key() - value at node c</span></span>
<span class="line"><span>c.leftPTR() - pointer to left node at c</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>Deletion</p>
<ul>
<li>
<p>Node with at most one subtree</p>
<ul>
<li>Simple delete and change the pointer if needed</li>
</ul>
</li>
<li>
<p>Root node &amp; nodes that have two subtrees</p>
<ul>
<li>
<p>Marked as deleted, or</p>
</li>
<li>
<p><strong>Minimum in right subtree</strong>, or</p>
<ul>
<li>Find next highest node N, i.e., go right then left as far as you can</li>
<li>Delete N (having at most one subtree)</li>
<li>Replace node deleting by node N</li>
</ul>
</li>
<li>
<p><strong>Maximum in left subtree</strong></p>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="🛠️-pattern" tabindex="-1"><a class="header-anchor" href="#🛠️-pattern"><span>🛠️ Pattern</span></a></h2>
<ul>
<li>
<p>First of all, <strong>BST is a binary tree</strong></p>
</li>
<li>
<p><strong><code v-pre>left.val &lt; root.val &lt; right.val</code></strong></p>
</li>
<li>
<p>For each node in a BST, <strong>its left subtree and right subtree are BST</strong></p>
</li>
<li>
<p><strong>Inorder traversal returns an ascending list</strong></p>
</li>
<li>
<p>利用 BST <strong>左小右大</strong>的特性提升算法效率 -&gt; <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>l</mi><mi>o</mi><mi>g</mi><mi>N</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(logN)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mord mathnormal">o</span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span><span class="mclose">)</span></span></span></span></p>
</li>
</ul>
</div></template>


