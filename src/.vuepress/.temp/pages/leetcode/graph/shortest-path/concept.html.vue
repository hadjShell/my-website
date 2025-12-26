<template><div><h2 id="🧠-concept" tabindex="-1"><a class="header-anchor" href="#🧠-concept"><span>🧠 Concept</span></a></h2>
<Mermaid code="eJyVktFOwzAMRd/5Cr/RIuUjWkafi/oF3mKSQBJXiQtM0f6damKbEKu6vUXO1b32sYOLOuD4AJCYpaoGy0koC/QoFvrEW08h1/UsAChlcNF4UpmnHcEf7eFwlADUG/f+kSXhY4bGG05ObKh+PwFevoWihrfEAdpuONefMUYWsBi1J4hkUNwnwRc5YyWfvF8nmkhtMZOGlrwPGFXHSV+SzoZD3zX/yjf1sdZEi9ntFuIvAWtGpfTsoihhdXws4Wye1jCegN/DspTGezWiS3kpuPO819eXuNlHDDODMbFJGOYjMjfN/QNTscAC"></Mermaid><ul>
<li>
<p>Usually, the shortest path refers to the <strong>minimal sum of path weights</strong> for weighted graph</p>
</li>
<li>
<p><strong>Single-source</strong> shortest path</p>
<ul>
<li>Find the shortest path from one starting point to <strong>all other nodes</strong></li>
<li>The output of a single-source shortest path algorithm is usually a <strong>one-dimensional array <code v-pre>distTo</code></strong>, where <code v-pre>distTo[i]</code> means the shortest path length from the start node to node <code v-pre>i</code></li>
</ul>
</li>
<li>
<p><strong>Point-to-point</strong> shortest path</p>
<ul>
<li>Find the shortest path from a start node <code v-pre>src</code> to a target node <code v-pre>dst</code></li>
<li>A special case of the single-source shortest path problem, stopped when reach <code v-pre>dst</code>, or</li>
<li>A<sup>*</sup> Algorithm</li>
</ul>
</li>
<li>
<p><strong>All pairs</strong> shortest path</p>
<ul>
<li>Find the shortest paths <strong>between any two nodes</strong> in a graph</li>
<li>The final output of an all-pairs shortest path algorithm is a <strong>2D array <code v-pre>dist</code></strong>, where <code v-pre>dist[i][j]</code> means the shortest path length from node <code v-pre>i</code> to node <code v-pre>j</code></li>
<li>Sometimes, using <strong>Floyd</strong> is more efficient. Sometimes, running <strong>Dijkstra multiple times</strong> is better.</li>
</ul>
</li>
</ul>
</div></template>


