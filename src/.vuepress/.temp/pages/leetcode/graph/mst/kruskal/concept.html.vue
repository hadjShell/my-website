<template><div><ul>
<li>
<p><strong>Union Find</strong> + <strong>Greedy Algorithm</strong></p>
</li>
<li>
<p>Algorithm steps</p>
<ol>
<li><strong>Sort all edges by the order of its weight ascendingly</strong>;</li>
<li>Create MST set;</li>
<li>Loop from the edge of smallest weight. If this edge <strong>won't construct a cycle</strong> with other edges in the MST set, <strong>it is definitely a part of MST</strong>, then add it into MST; otherwise it's not;</li>
<li>After 3, if there is <strong>only one connected component</strong>, there exists a minimal spanning tree; otherwise no spanning tree.</li>
</ol>
</li>
<li>
<p>Time complexity: <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>E</mi><mi>l</mi><mi>o</mi><mi>g</mi><mi>E</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(ElogE)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.01968em;">El</span><span class="mord mathnormal">o</span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mclose">)</span></span></span></span></p>
<ul>
<li>Sort: <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>E</mi><mi>l</mi><mi>o</mi><mi>g</mi><mi>E</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(ElogE)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.01968em;">El</span><span class="mord mathnormal">o</span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mclose">)</span></span></span></span>, Union Find: <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>E</mi><mo>∗</mo><mi>O</mi><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo><mo>=</mo><mi>O</mi><mo stretchy="false">(</mo><mi>E</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">E * O(1) = O(E)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord">1</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mclose">)</span></span></span></span></li>
</ul>
</li>
<li>
<p>Space complexity: <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>E</mi><mo>+</mo><mi>V</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(E + V)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="mclose">)</span></span></span></span></p>
</li>
</ul>
</div></template>


