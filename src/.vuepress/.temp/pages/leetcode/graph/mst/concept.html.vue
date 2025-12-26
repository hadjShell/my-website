<template><div><h2 id="🧠-concept" tabindex="-1"><a class="header-anchor" href="#🧠-concept"><span>🧠 Concept</span></a></h2>
<ul>
<li>
<p>Spanning Tree</p>
<ul>
<li>
<p>Given an <strong>undirected connected</strong> graph <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>G</mi></mrow><annotation encoding="application/x-tex">G</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">G</span></span></span></span>, a <strong>spanning tree</strong> is a subgraph of <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>G</mi></mrow><annotation encoding="application/x-tex">G</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">G</span></span></span></span> that includes all the vertices of <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>G</mi></mrow><annotation encoding="application/x-tex">G</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">G</span></span></span></span> and is a tree</p>
</li>
<li>
<p>Features</p>
<ul>
<li>It includes <strong>all the vertices</strong> from the original graph</li>
<li>The number of edges is one less than the number of vertices (<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>V</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">V-1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span> edges)</li>
<li>It is <strong>connected</strong> and has <strong>no cycles</strong></li>
</ul>
</li>
</ul>
</li>
<li>
<p>MST</p>
<ul>
<li>
<p>If the graph is a <strong>undirected connected weighted graph</strong>, the <strong>minimum spanning tree</strong> is the spanning tree with the smallest total edge weights</p>
</li>
<li>
<p>Real world example</p>
<ul>
<li>For example, if you want to build roads between several cities, the nodes in the graph are cities, the edges are roads, and the weights are the cost to build each road. We want to connect all the cities with the lowest total cost. This is a classic minimum spanning tree problem.</li>
</ul>
</li>
</ul>
</li>
</ul>
</div></template>


