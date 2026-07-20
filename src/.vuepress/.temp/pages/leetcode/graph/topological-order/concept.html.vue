<template><div><h2 id="🧠-concept" tabindex="-1"><a class="header-anchor" href="#🧠-concept"><span>🧠 Concept</span></a></h2>
<div class="hint-container important">
<p class="hint-container-title">Problem Domain</p>
<p>Dependecy Problem. DFS path.</p>
<p>依赖问题，首先想到的就是把问题转化成「<strong>有向图</strong>」这种数据结构，只要图中存在环，那就说明存在循环依赖</p>
</div>
<ul>
<li>
<p><strong>DAG</strong> - Directed Acyclic Graph</p>
</li>
<li>
<p>Definition</p>
<ul>
<li>A topological order of a directed graph G = (V, E) is an ordering of its nodes as v1, v2, …, vn so that for every edge (vi , vj ) we have i &lt; j</li>
<li><img src="/assets/image/leetcode/topological.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></li>
<li>A <strong>sink vertex</strong> has no outgoing edges.</li>
<li>A <strong>source vertex</strong> has no incoming edges.</li>
</ul>
</li>
<li>
<p>Properties</p>
<ul>
<li>If G is a <strong>DAG</strong>, then G has <strong>a node with no entering edges (source vertex)</strong>. (It can have multiple sink vertices.)
<blockquote>
<p>If a DAG is not connected, it can have multiple source vertices.</p>
</blockquote>
</li>
<li>If G is a <strong>DAG</strong>, then <strong>G has a topological ordering</strong>.</li>
</ul>
</li>
</ul>
<h2 id="🛠️-algorithm" tabindex="-1"><a class="header-anchor" href="#🛠️-algorithm"><span>🛠️ Algorithm</span></a></h2>
<ol>
<li>isAcyclic?</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">Algorithm</p>
<p><strong><code v-pre>visited</code> + <code v-pre>onPath</code> DFS: <code v-pre>onPath</code> 看每个节点出发是否存在环，<code v-pre>visited</code> 剪枝加速</strong></p>
</div>
<ol start="2">
<li><strong>把图结构后序遍历的结果进行反转，就是拓扑排序的结果</strong> (可以和第一步同步进行)</li>
</ol>
<blockquote>
<p>不前序的原因是一开始进去遍历的点不一定是 source vertex.</p>
</blockquote>
</div></template>


