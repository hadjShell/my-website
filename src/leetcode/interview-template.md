---
title: How to Ace The Coding Interview
author: David Zhang aka Hadjshell
isOriginal: true
footer: false
editLink: false
---

## Category

For coding interview, there are three different types of questions, and for each question there is a different interviewer assigned to it.

### Solid Coding

Frankly, these kinds of questions are straightforward; everyone knows how to answer them. They purely test **your coding skills, how much coding experience you have, and your ability to quickly translate your ideas into code**. They're a must-ask type of question for interviewees. **New grads typically face two or even three rounds of these questions**, while experienced candidates might only have one. Failing these questions can easily lead to failure in the phone interview or early rounds.

Solid coding can be further categorized to two classes:

- Testing the understanding of the algorithms and edge cases;
- Testing the understanding of the data structures and complexities.

### Problem Solving

These types of questions are crucial for new grads and can help you differentiate yourself. Computer science isn't just about algorithms; we also need knowledge of databases, operating systems, networking, security, and other areas. New grads tend to be weaker in these areas, so interviewers want them to demo**nstrate quick thinking, critical thinking, and rapid reaction skills**. Problem solving was created to assess these abilities.

Problem solving can be further categorized to four classes:

- **API design**: assessing if the candidate has a deep understanding of the data structures;
- **Abstraction**: assessing whether the candidate can abstract the real-world scenario to a classic problem domain;
- **DP**
- **Real-world programs**: These types of questions mainly depend on your daily accumulation, and they are a large category of questions that cannot be practiced through LeetCode. E.g., thread pool, random generator, log merging, etc.

### Bar raiser

These types of questions only arise when the number of onsite applicants far exceeds the headcount, or when your performance in the first few rounds significantly surpasses the phone interview's assessment. The purpose is to help the company select the best candidates. For applicants, the bad news is that you'll have to endure a painful hour; the good news is that you'll gain a thorough understanding of just how talented the company's top performers are, allowing you to fully showcase your abilities, and even potentially be hired by someone from a higher tier.

## Process

### Analysis

1. When the interviewer says the question, write down the **key points** at the top (e.g. sorted array). Make sure you have all the details. Show how organized you are.

2. **Ask questions**. For example:

- Double check: What are the inputs? What are the outputs?
- What are the type of the values? Will there be an overflow?
- What is the most important value of the problem? Do you have time, and space and memory, etc.. What is the main goal?

However, **don't be annoying and ask too many questions**. One trick is to talk through your underdstanding of the question with examples, considering normal case and edge case.

### Plan

3. **Start with the naive/brute force approach**. First thing that comes into mind. It shows that you’re able to think well and critically (you don't need to write this code, just speak about it).

4. **Tell them why this approach is not the best** (i.e. O(n^2) or higher, not readable, etc...)

5. **Give optimal solutions**. Walk through your approach, comment things and see where you may be able to break things. **It's better if you can give the complexity before coding**.

6. **Discuss with the interviewers**. Because sometimes the perfect solution may not be able to finish within a limited time frame. Ask them if they accept not perfect but working solutions.

### Coding

7. **Clean coding!**

8. Think about **error checks** and how you can break this code.

9. **Test your code**: check for no params, 0, undefined, null, massive arrays, async code, etc.

### Follow-up

10. Finally talk to the interviewer **where you would improve the code**. Does it work? Are there different approaches? Is it readable? What would you google to improve? How can performance be improved? Possibly: Ask the interviewer what was the most interesting solution you have seen to this problem.

11. If your interviewer is happy with the solution, the interview usually ends here. It is also common that the interviewer asks you extension questions, such as how you would handle the problem if the whole input is too large to fit into memory, or if the input arrives as a stream. This is a common follow-up question at Google, where they care a lot about scale. The answer is usually a divide-and-conquer approach — perform distributed processing of the data and only read certain chunks of the input from disk into memory, write the output back to disk and combine them later.

## Rubrics

![](/assets/image/leetcode/interview-rubric.png)
