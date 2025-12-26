<template><div><ul>
<li>
<p><strong>DAG</strong> - Directed Acyclic Graph</p>
</li>
<li>
<p>Definition</p>
<ul>
<li>A topological order of a directed graph G = (V, E) is an ordering of its nodes as v1, v2, …, vn so that for every edge (vi , vj ) we have i &lt; j</li>
<li><img src="/assets/image/leetcode/topological.png" alt="topological" tabindex="0" loading="lazy"><figcaption>topological</figcaption></li>
</ul>
</li>
<li>
<p>Properties</p>
<ul>
<li>If G is a <strong>DAG</strong>, then G has <strong>a node with no entering edges (sink vertex)</strong></li>
<li>If G is a <strong>DAG</strong>, then <strong>G has a topological ordering</strong></li>
</ul>
</li>
<li>
<p><strong>Dependecy Problem</strong></p>
</li>
<li>
<p>Algorithm</p>
<ol>
<li>isAcyclic</li>
<li><strong>把图结构后序遍历的结果进行反转，就是拓扑排序的结果</strong> (可以和第一步同步进行)</li>
</ol>
<blockquote>
<p>不前序的原因是一开始进去遍历的点不一定是 sink vertex</p>
</blockquote>
</li>
</ul>
</div></template>


