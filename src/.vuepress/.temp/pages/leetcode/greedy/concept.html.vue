<template><div><ul>
<li>
<p>A greedy algorithm is a problem-solving technique that makes <strong>the locally optimal choice at each step</strong> in the hope of <strong>finding the global optimum solution</strong>.</p>
</li>
<li>
<p>Problems on which greedy approach works has two properties:</p>
<ul>
<li><strong>Greedy choice</strong>: A global optimum can be arrived at by selecting a local optimum.</li>
<li><strong>Optimal substructure</strong>: An optimal solution to the problem contains optimal solutions to subproblem.</li>
</ul>
</li>
</ul>
<div class="hint-container important">
<p class="hint-container-title">Difference to Backtracking and DP</p>
<p>Backtracking prunes the decision tree trying to cut off impossible answers early, so the tree is as small as possible. Usually, the time complexity is exponential.</p>
<p>Memoization in dynamic programming is used to avoid repeating calculations. DP considers outcomes of all subproblems to ensure a global optimum. Its time complexity is usually polynomial.</p>
<p><strong>Backtracking and DP are technically still &quot;brute-force&quot; but smart brute-force.</strong></p>
<p>The difference with greedy algorithms is: sometimes, you don't need to try every possible solution to get the best result. This cuts down the search space even more, making greedy algorithms more efficient, because <strong>Greedy algorithm never reconsiders its choices</strong>.</p>
<p><strong>Dynamic programming is exhaustive and guaranteed to find a solution. Greedy algorithm may not always find the optimal solution.</strong></p>
</div>
</div></template>


