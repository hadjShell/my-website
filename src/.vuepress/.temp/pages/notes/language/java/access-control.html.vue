<template><div><ul>
<li>
<p>Package</p>
<ul>
<li>A collection of similar classes, interfaces, or other packages</li>
<li><code v-pre>package</code>, <code v-pre>import</code></li>
<li>Create a library and import it
<ul>
<li>Extract the package to <code v-pre>.jar</code> (Java ARchive) file in the project structure</li>
<li>Import the <code v-pre>.jar</code> file into the new project libraries in the project structure</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Scope</p>
</li>
<li>
<p>Naming Convention</p>
<ul>
<li>Reversed url</li>
</ul>
</li>
<li>
<p>Access control</p>
<ul>
<li>
<p>At the top level: public or package-private (no explicit modifiers)</p>
</li>
<li>
<p>At the member level: public, private, protected, or package-private</p>
</li>
<li>
<p>A class declared with <code v-pre>public</code> is visible to all classes everywhere; A class with no modifier is visible only within its package</p>
</li>
<li>
<table>
<thead>
<tr>
<th>Modifier</th>
<th>Class</th>
<th>Package</th>
<th>Subclass outside the package</th>
<th>World</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>public</code></td>
<td>Y</td>
<td>Y</td>
<td>Y</td>
<td>Y</td>
</tr>
<tr>
<td><code v-pre>protected</code></td>
<td>Y</td>
<td>Y</td>
<td>Y</td>
<td>N</td>
</tr>
<tr>
<td>no modifier</td>
<td>Y</td>
<td>Y</td>
<td>N</td>
<td>N</td>
</tr>
<tr>
<td><code v-pre>private</code></td>
<td>Y</td>
<td>N</td>
<td>N</td>
<td>N</td>
</tr>
</tbody>
</table>
</li>
</ul>
</li>
</ul>
</div></template>


