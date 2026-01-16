<template><div><h2 id="🧠-concept" tabindex="-1"><a class="header-anchor" href="#🧠-concept"><span>🧠 Concept</span></a></h2>
<ul>
<li>
<p>The basic idea of dynamic programming is to exhaust all possibilities to <strong>find the optimal value</strong>, which is a brute-force approach. However, DP optimises this process by <strong>avoiding redundant exploration of repeated subproblems</strong> in the decision tree. This simple optimization typically reduces time complexities <strong>from exponential to polynomial</strong>.</p>
</li>
<li>
<p>Three core elements of DP</p>
<ul>
<li>
<p><strong>State transition equation:</strong> Defines how a problem is broken down into smaller subproblems and how the solution to a state is derived from the solutions of those subproblems.</p>
</li>
<li>
<p><strong>Optimal substructure:</strong> The optimal solution of the given problem can be obtained by using <strong>the optimal solution to its subproblems</strong> instead of trying every possible way to solve the subproblems. To satisfy the optimal substructure, <strong>the subproblems must be independent of each other</strong>. For example, we can say that the maximum marks of an exam has optimal substructure because we can solve it by checking the maximum marks of each subject; however, assuming math mark is associated with english mark, i.e., those are not independent, then the problem doesn't have optimal substructure.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>The problem can be derived into different combinations of subproblems, therefore an optimal solution can be selected by comparison of those different answers.</p>
</div>
</li>
<li>
<p><strong>Overlapping subproblems:</strong> Many subproblems are solved multiple times. DP addresses this by using <strong>memoization</strong> (top-down) or a <strong>tabulation</strong> (bottom-up) to store and reuse previously computed results, avoiding redundant computations.</p>
</li>
</ul>
</li>
</ul>
<div class="hint-container important">
<p class="hint-container-title">Difference between Dynamic Programming and Backtracking</p>
<ul>
<li><strong>DP is 分解子问题思想的 DFS</strong>, to <strong>find an optimal solution</strong> of a given problem, optimised by <strong>memorising solutions of subproblems</strong>.</li>
<li><strong>Backtracking is 遍历思想的 DFS</strong>, to <strong>find all or some valid solutions that satisfy given constraints</strong>, optimised by <strong>pruning the decision tree when a path violates the constraints</strong>.</li>
</ul>
</div>
<h2 id="🛠️-algorithm" tabindex="-1"><a class="header-anchor" href="#🛠️-algorithm"><span>🛠️ Algorithm</span></a></h2>
<ul>
<li>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// Top-down recursive dynamic programming</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Result</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> dp</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">State</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> state) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> baseCase</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> defaultValue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  // overlapping subproblems</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  if</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> memo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">containsKey</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(state)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> memo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(state);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  // state transition equation</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">  Result</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> optimal</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  for</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> nextState in nextStates</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">    Result</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> result </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> cal</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">dp</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(nextState))</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">    optimal </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> findOptimal</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(optimal</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> result)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">  memo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">put</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(state, optimal);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  return</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> memo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(state);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// Bottom-up iterative dynamic programming</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">dp[baseState] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> defaultValue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// Perform state transitions</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">for</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> state from nextState to targetState</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">  Result</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> optimal</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  for</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> prevState to baseState</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">    optimal </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> findOptimal</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(optimal</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> cal</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(dp[prevState]))</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">  dp[state] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> optimal</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> dp[targetState]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>In general, <code v-pre>memo</code> is implemented as <strong>a one-dimensional or multidimensional array</strong> rather than a hash map. Arrays are more efficient than hash maps and can also be used to achieve the same lookup behavior. The pseudocode is intended to abstract this pattern for clarity and ease of explanation.</p>
<p>I personally instanciate <code v-pre>memo</code> with wrapper class object because the elelment will be initiated to <code v-pre>null</code>, naturally reflecting that the state is currently unchecked.</p>
</div>
</li>
<li>
<p><strong>Bottom-to-top DP algorithms are usually more efficient</strong>, but they are generally harder (and sometimes impossible) to build, since it is not always easy to predict which primitive sub-problems you are going to need to solve the whole original problem, and which path you have to take from small sub-problems to get to the final solution in the most efficient way.</p>
</li>
<li>
<p>带备忘录的动态规划算法的时间复杂度:</p>
</li>
</ul>
<div style="text-align:center">
<p><strong>子问题的个数 x 函数本身的时间复杂度</strong>,<br>
<strong>「状态」的个数 x 函数本身的时间复杂度</strong></p>
</div>
<ul>
<li>
<p>Optimisation on space complexity</p>
<ul>
<li>Compress the size of the DP table when only a part of it is needed during state transition.</li>
<li>In general, it's easier to write with bottom-up dp.</li>
</ul>
</li>
</ul>
</div></template>


