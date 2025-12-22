<template><div><h2 id="🧠-linked-list-concept" tabindex="-1"><a class="header-anchor" href="#🧠-linked-list-concept"><span>🧠 Linked List Concept</span></a></h2>
<ul>
<li>
<p>A linear collection of data elements, consisting of a group of nodes which together represent a sequence (<strong>ordered</strong>)</p>
</li>
<li>
<p>Order is not given by elements' physical placement in memory</p>
</li>
<li>
<p>Nodes have reference to adjacent nodes</p>
</li>
<li>
<p>Head node, tail node</p>
</li>
<li>
<p><code v-pre>NULL</code> terminated</p>
</li>
<li>
<p><strong>Sentinel nodes</strong></p>
<ul>
<li>In some implementations an extra 'sentinel' or 'dummy' node may be added before the first data record or after the last one</li>
<li>This convention simplifies and accelerates some list-handling algorithms, by ensuring that all links can be safely dereferenced and that every list (even one that contains no data elements) always has a &quot;first&quot; and &quot;last&quot; node</li>
</ul>
</li>
<li>
<p><strong>Quick slow pointers</strong></p>
<ul>
<li>Quick first move couple of steps, and then slow start to move too</li>
<li>Quick and slow move in different speed at the same time</li>
<li>Quick change the speed when some conditions are met</li>
</ul>
</li>
<li>
<p>Pros</p>
<ul>
<li>Fast insertion</li>
<li>Fast deletion</li>
<li>Ordered</li>
<li>Flexible size</li>
</ul>
</li>
<li>
<p>Cons</p>
<ul>
<li>Slow lookup</li>
<li>More memory</li>
</ul>
</li>
<li>
<p>Singly Linked List</p>
<ul>
<li><img src="/assets/image/leetcode/singly_linked_list.svg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></li>
</ul>
</li>
<li>
<p>Doubly Linked List</p>
<ul>
<li><img src="/assets/image/leetcode/doubly_linkede_list.svg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></li>
</ul>
</li>
<li>
<p>Single vs. Double</p>
<ul>
<li>Single is a little faster, uses less memory</li>
<li>Double can be traversed from both directions</li>
</ul>
</li>
</ul>
<h2 id="🛠️-pattern" tabindex="-1"><a class="header-anchor" href="#🛠️-pattern"><span>🛠️ Pattern</span></a></h2>
<ul>
<li>
<p>Dummy nodes</p>
</li>
<li>
<p>Fast and slow pointers</p>
<ul>
<li>Find <strong>middle</strong> element</li>
<li><strong>Circular</strong> list</li>
</ul>
</li>
<li>
<p>Left and right pointers</p>
<ul>
<li><strong>Reverse</strong></li>
<li><strong>Water container problem</strong></li>
</ul>
</li>
<li>
<p>Composition with other data structures</p>
</li>
<li>
<p><strong>Skip list</strong></p>
</li>
</ul>
</div></template>


