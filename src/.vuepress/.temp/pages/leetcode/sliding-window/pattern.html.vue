<template><div><h2 id="🧠-concept" tabindex="-1"><a class="header-anchor" href="#🧠-concept"><span>🧠 Concept</span></a></h2>
<ul>
<li>
<p><strong>Subarray, Substring min/max</strong> problem</p>
</li>
<li>
<p>Dynamically <strong>resizable</strong> window</p>
<ul>
<li>When to <strong>increase the window</strong></li>
<li>When to <strong>shrink the window</strong></li>
<li>How to update the result (what is the operation <strong>when window size changes</strong>)</li>
</ul>
</li>
<li>
<p>Choose <strong>data structure of <code v-pre>window</code> and <code v-pre>result</code> object</strong> wisely</p>
</li>
<li>
<p>Close-open range <code v-pre>[)</code></p>
</li>
<li>
<p>Framework</p>
<ul>
<li>
<p><strong>右滑找到一个解的终点， 左滑找到下一解的起点</strong></p>
</li>
<li>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> left </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> right </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Window</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Result</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> result</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">while</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> (right </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> nums</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">size</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">    window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">addLast</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(nums[right]);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">    right</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">++;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  	if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">isQualified</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">)	</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">update</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(result)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">					// 找最大</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    while</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> (left </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">&#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> right </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">&#x26;&#x26;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> window needs to shrink) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">isQualified</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">)	</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">update</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(result)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">			// 找最小</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">      	window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">removeFirst</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(nums[left]);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">        left</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">++;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
</div></template>


