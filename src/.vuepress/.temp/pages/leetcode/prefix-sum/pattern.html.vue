<template><div><h2 id="🧠-concept" tabindex="-1"><a class="header-anchor" href="#🧠-concept"><span>🧠 Concept</span></a></h2>
<ul>
<li>
<p><strong>Sum of previous elements and itself</strong> for each slot</p>
<ul>
<li>Extended to <strong>state accumulation of previous elements plus the current element (状态的叠加)</strong>.</li>
<li><code v-pre>rangeSum[left, right] = preSum[right + 1] - preSum[left]</code> (with dummy 0).</li>
</ul>
</li>
<li>
<p><strong>Subarray/Range sum</strong> problems</p>
<ul>
<li>Compute the sum of elements between two indices <strong>frequently</strong>.</li>
<li><strong>Find or count</strong> the subarrays that accumulate to a specific state, with the help of hashmap (you can actually store preSum in hashmap to save space).</li>
</ul>
</li>
<li>
<p><strong>区间查询叠加态</strong></p>
</li>
</ul>
<h2 id="🛠️-pattern" tabindex="-1"><a class="header-anchor" href="#🛠️-pattern"><span>🛠️ Pattern</span></a></h2>
<ul>
<li><strong>Dummy 0</strong></li>
<li>Help of <strong>hash table</strong></li>
</ul>
</div></template>


