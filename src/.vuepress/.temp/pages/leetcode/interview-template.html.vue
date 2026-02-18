<template><div><h2 id="category" tabindex="-1"><a class="header-anchor" href="#category"><span>Category</span></a></h2>
<p>For coding interview, there are three different types of questions, and for each question there is a different interviewer assigned to it.</p>
<h3 id="solid-coding" tabindex="-1"><a class="header-anchor" href="#solid-coding"><span>Solid Coding</span></a></h3>
<p>Frankly, these kinds of questions are straightforward; everyone knows how to answer them. They purely test <strong>your coding skills, how much coding experience you have, and your ability to quickly translate your ideas into code</strong>. They're a must-ask type of question for interviewees. <strong>New grads typically face two or even three rounds of these questions</strong>, while experienced candidates might only have one. Failing these questions can easily lead to failure in the phone interview or early rounds.</p>
<p>Solid coding can be further categorized to two classes:</p>
<ul>
<li>Testing the understanding of the algorithms and edge cases;</li>
<li>Testing the understanding of the data structures and complexities.</li>
</ul>
<h3 id="problem-solving" tabindex="-1"><a class="header-anchor" href="#problem-solving"><span>Problem Solving</span></a></h3>
<p>These types of questions are crucial for new grads and can help you differentiate yourself. Computer science isn't just about algorithms; we also need knowledge of databases, operating systems, networking, security, and other areas. New grads tend to be weaker in these areas, so interviewers want them to demo<strong>nstrate quick thinking, critical thinking, and rapid reaction skills</strong>. Problem solving was created to assess these abilities.</p>
<p>Problem solving can be further categorized to four classes:</p>
<ul>
<li><strong>API design</strong>: assessing if the candidate has a deep understanding of the data structures;</li>
<li><strong>Abstraction</strong>: assessing whether the candidate can abstract the real-world scenario to a classic problem domain;</li>
<li><strong>DP</strong></li>
<li><strong>Real-world programs</strong>: These types of questions mainly depend on your daily accumulation, and they are a large category of questions that cannot be practiced through LeetCode. E.g., thread pool, random generator, log merging, etc.</li>
</ul>
<h3 id="bar-raiser" tabindex="-1"><a class="header-anchor" href="#bar-raiser"><span>Bar raiser</span></a></h3>
<p>These types of questions only arise when the number of onsite applicants far exceeds the headcount, or when your performance in the first few rounds significantly surpasses the phone interview's assessment. The purpose is to help the company select the best candidates. For applicants, the bad news is that you'll have to endure a painful hour; the good news is that you'll gain a thorough understanding of just how talented the company's top performers are, allowing you to fully showcase your abilities, and even potentially be hired by someone from a higher tier.</p>
<h2 id="process" tabindex="-1"><a class="header-anchor" href="#process"><span>Process</span></a></h2>
<h3 id="analysis" tabindex="-1"><a class="header-anchor" href="#analysis"><span>Analysis</span></a></h3>
<ol>
<li>
<p>When the interviewer says the question, write down the <strong>key points</strong> at the top (e.g. sorted array). Make sure you have all the details. Show how organized you are.</p>
</li>
<li>
<p><strong>Ask questions</strong>. For example:</p>
</li>
</ol>
<ul>
<li>Double check: What are the inputs? What are the outputs?</li>
<li>What are the type of the values? Will there be an overflow?</li>
<li>What is the most important value of the problem? Do you have time, and space and memory, etc.. What is the main goal?</li>
</ul>
<p>However, <strong>don't be annoying and ask too many questions</strong>. One trick is to talk through your underdstanding of the question with examples, considering normal case and edge case.</p>
<h3 id="plan" tabindex="-1"><a class="header-anchor" href="#plan"><span>Plan</span></a></h3>
<ol start="3">
<li>
<p><strong>Start with the naive/brute force approach</strong>. First thing that comes into mind. It shows that you’re able to think well and critically (you don't need to write this code, just speak about it).</p>
</li>
<li>
<p><strong>Tell them why this approach is not the best</strong> (i.e. O(n^2) or higher, not readable, etc...)</p>
</li>
<li>
<p><strong>Give optimal solutions</strong>. Walk through your approach, comment things and see where you may be able to break things. <strong>It's better if you can give the complexity before coding</strong>.</p>
</li>
<li>
<p><strong>Discuss with the interviewers</strong>. Because sometimes the perfect solution may not be able to finish within a limited time frame. Ask them if they accept not perfect but working solutions.</p>
</li>
</ol>
<h3 id="coding" tabindex="-1"><a class="header-anchor" href="#coding"><span>Coding</span></a></h3>
<ol start="7">
<li>
<p><strong>Clean coding!</strong></p>
</li>
<li>
<p>Think about <strong>error checks</strong> and how you can break this code.</p>
</li>
<li>
<p><strong>Test your code</strong>: check for no params, 0, undefined, null, massive arrays, async code, etc.</p>
</li>
</ol>
<h3 id="follow-up" tabindex="-1"><a class="header-anchor" href="#follow-up"><span>Follow-up</span></a></h3>
<ol start="10">
<li>
<p>Finally talk to the interviewer <strong>where you would improve the code</strong>. Does it work? Are there different approaches? Is it readable? What would you google to improve? How can performance be improved? Possibly: Ask the interviewer what was the most interesting solution you have seen to this problem.</p>
</li>
<li>
<p>If your interviewer is happy with the solution, the interview usually ends here. It is also common that the interviewer asks you extension questions, such as how you would handle the problem if the whole input is too large to fit into memory, or if the input arrives as a stream. This is a common follow-up question at Google, where they care a lot about scale. The answer is usually a divide-and-conquer approach — perform distributed processing of the data and only read certain chunks of the input from disk into memory, write the output back to disk and combine them later.</p>
</li>
</ol>
<h2 id="rubrics" tabindex="-1"><a class="header-anchor" href="#rubrics"><span>Rubrics</span></a></h2>
<figure><img src="/assets/image/leetcode/interview-rubric.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


