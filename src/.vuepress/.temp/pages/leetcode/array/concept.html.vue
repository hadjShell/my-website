<template><div><h2 id="🧠-concept" tabindex="-1"><a class="header-anchor" href="#🧠-concept"><span>🧠 Concept</span></a></h2>
<ul>
<li>
<p>Organizes items sequentially</p>
</li>
<li>
<p>Sometimes called <strong>list</strong></p>
</li>
<li>
<p>Elements are stored in continuous memory, <strong>accessing is <code v-pre>O(1)</code></strong></p>
</li>
<li>
<p>Array's index is actually a <strong>pointer</strong></p>
</li>
<li>
<p>Array can be empty, i.e. no elements, no memory allocated</p>
</li>
<li>
<p>Static array and Dynamic array</p>
<ul>
<li>Dynamic array allocate new memory and copy the old array</li>
<li>Append in static array is <code v-pre>O(1)</code>, in dynamic array is <code v-pre>O(n)</code></li>
</ul>
</li>
<li>
<p>Pros</p>
<ul>
<li>Fast lookup</li>
<li>Fast push / pop</li>
<li>Ordered</li>
</ul>
</li>
<li>
<p>Cons</p>
<ul>
<li>Slow insertion</li>
<li>Slow deletion</li>
<li>Fixed size (static array)</li>
</ul>
</li>
</ul>
<h2 id="🛠️-pattern" tabindex="-1"><a class="header-anchor" href="#🛠️-pattern"><span>🛠️ Pattern</span></a></h2>
<ul>
<li>
<p>Partition - 同类项分组一起看，改变顺序可能便于处理</p>
</li>
<li>
<p>Forward and backward - 正看反看 + 分段看</p>
</li>
<li>
<p>In-place - 合理利用废空间（无用信息位或者已处理信息位）</p>
</li>
<li>
<p>Bucket - suitable when elements' values are within a range</p>
</li>
<li>
<p>Simulation for 2D arrays</p>
</li>
<li>
<p>2D array 对角线翻转，x 轴翻转，y 轴翻转的组合</p>
</li>
<li>
<p>方向数组</p>
<ul>
<li><code v-pre>int[][] dir = new int[][]{{1, 0}, {0, 1}, {0, -1}, {-1, 0}};</code></li>
</ul>
</li>
<li>
<p>2D array mapping to 1D array</p>
<ul>
<li><code v-pre>(i, j) -&gt; i * arr[0].length + j</code></li>
</ul>
</li>
<li>
<p><a href="https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm" target="_blank" rel="noopener noreferrer">Boyer–Moore majority vote algorithm</a></p>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Tips for Boyer-Moore Algorithm</p>
<p>If a second pass is not performed and there is no majority, the algorithm will not detect that no majority exists.</p>
</div>
<ul>
<li>环形数组</li>
</ul>
</div></template>


