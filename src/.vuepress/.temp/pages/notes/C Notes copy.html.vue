<template><div><h1 id="c-notes" tabindex="-1"><a class="header-anchor" href="#c-notes"><span>C Notes</span></a></h1>
<hr>
<h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference"><span>Reference</span></a></h2>
<ul>
<li><a href="https://www.bilibili.com/video/BV19W411B7w1?spm_id_from=333.1007.top_right_bar_window_custom_collection.content.click" target="_blank" rel="noopener noreferrer">C语言程序设计 - 翁恺</a></li>
<li>Kernighan, B.W. &amp; Ritchie, D.M. (1988) The C programming language. 2nd ed.. Englewood Cliffs, N.J.: Prentice Hall.</li>
</ul>
<hr>
<h2 id="导论" tabindex="-1"><a class="header-anchor" href="#导论"><span>导论</span></a></h2>
<ul>
<li>
<p>计算机的思维方式：枚举</p>
</li>
<li>
<p>算法改进暴力枚举</p>
</li>
<li>
<p>程序的执行：</p>
<ul>
<li>
<p>解释：借助一个程序，那个程序试图理解你的程序，然后按照你的要求执行</p>
</li>
<li>
<p>编译：借助一个程序，把你的程序翻译成机器语言，然后执行机器语言的程序</p>
<blockquote>
<p>编译是将源程序翻译成可执行的目标代码，翻译与执行是分开的；而解释是对源程序的翻译与执行一次性完成，不生成可存储的目标代码。这只是表象，二者背后的最大区别是：对解释执行而言，程序运行时的控制权在解释器而不在用户程序；对编译执行而言，运行时的控制权在用户程序。</p>
</blockquote>
</li>
<li>
<p>语言本身没有解释和编译之分，只是具体执行方式不同</p>
</li>
<li>
<p>现代两种执行方式已经没有过大的区别，各有优劣</p>
</li>
</ul>
</li>
<li>
<p>现代编程语言语法上差异很小，几乎都是C-like语言</p>
</li>
<li>
<p>某些场景，例如操作系统，只能用C写</p>
</li>
<li>
<p>语言的能力/适用领域主要决定因素：</p>
<ul>
<li>库</li>
<li>传统</li>
</ul>
</li>
<li>
<p>FORTRAN -&gt; BCPL -&gt; B -&gt; C</p>
<blockquote>
<p>C implementations give a better understanding of how the machine behaves. There is no language runtime environment or virtual machine between you and the underlying machine.</p>
</blockquote>
</li>
<li>
<p>标准：<code v-pre>ANSI C</code> -&gt; <code v-pre>C99</code></p>
</li>
<li>
<p>C is a general-purpose programming language.</p>
</li>
<li>
<p>指针是C的灵魂</p>
</li>
<li>
<p>C的应用场景：</p>
<ul>
<li>操作系统，编译器</li>
<li>嵌入式系统</li>
<li>驱动程序</li>
<li>底层驱动</li>
<li>图形引擎、图像处理、声音效果</li>
</ul>
</li>
<li>
<p>Ｃ是一种工业语言</p>
<ul>
<li>开发效率＞＞学习过程</li>
<li>开发效率＞＞开发乐趣</li>
</ul>
</li>
<li>
<p>历史原因，Ｃ的编译器有很多，出现了“方言”现象</p>
</li>
</ul>
<hr>
<h2 id="变量和常量" tabindex="-1"><a class="header-anchor" href="#变量和常量"><span>变量和常量</span></a></h2>
<ul>
<li>变量是一个保存数据的地方，是一段存储空间的别名</li>
<li>变量定义：<code v-pre>&lt;type&gt; &lt;identifier&gt;;</code></li>
<li>标识符：字母，数字，下划线；第一个字符必须为字母或下划线；大小写敏感；不能用保留字</li>
<li>赋值：<code v-pre>=</code>右边的值赋给左边的变量</li>
<li>初始化：定义变量时赋值</li>
<li>没有初始化的变量，值为随机数</li>
<li>C语言类型严格</li>
<li><code v-pre>C99</code>可以在任意位置定义变量；<code v-pre>ANSI C</code>只能在代码开头定义变量</li>
<li>字面量（literal）：直接写在程序里的数值（magic number）</li>
<li>常量定义：<code v-pre>const &lt;type&gt; &lt;identifier&gt; = &lt;value&gt;</code></li>
<li>常量好处：物理意义；便于Debug</li>
</ul>
<hr>
<h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型"><span>数据类型</span></a></h2>
<ul>
<li>
<p>C语言的变量，必须：</p>
<ul>
<li>在使用前定义</li>
<li>确定类型</li>
</ul>
</li>
<li>
<p>C以后的语言向两个方向发展：</p>
<ul>
<li>
<p>C++，Java更强调类型，对类型检查严格</p>
</li>
<li>
<p>JavaScript，Python，PHP不看重类型，甚至不需要事先定义</p>
<blockquote>
<p>支持强类型的观点认为明确的类型有助于尽早发现程序中的简单错误</p>
<p>反对强类型的观点认为多于强调类型迫使程序员面对底层实现而非事务逻辑</p>
</blockquote>
</li>
</ul>
</li>
<li>
<p>C语言需要类型，但是对类型的安全检查并不够</p>
</li>
<li>
<table>
<thead>
<tr>
<th>类型</th>
<th>关键字</th>
</tr>
</thead>
<tbody>
<tr>
<td>整数</td>
<td><code v-pre>char</code>, <code v-pre>short</code>, <code v-pre>int</code>, <code v-pre>long</code>, <code v-pre>long long</code></td>
</tr>
<tr>
<td>浮点数</td>
<td><code v-pre>float</code>, <code v-pre>double</code>, <code v-pre>long double</code></td>
</tr>
<tr>
<td>逻辑</td>
<td><code v-pre>bool</code></td>
</tr>
<tr>
<td>指针</td>
<td></td>
</tr>
<tr>
<td>自定义类型</td>
<td></td>
</tr>
</tbody>
</table>
</li>
<li>
<p>数据类型的区别：</p>
<ul>
<li>内存中占据的大小</li>
<li>内存中的表达形式：补码，编码</li>
</ul>
</li>
<li>
<p><code v-pre>sizeof()</code>：是一个运算符，给出某个<strong>类型</strong>或<strong>变量</strong>在内存中所占据的字节数</p>
<ul>
<li>静态运算符，结果在编译时刻就决定了</li>
<li>不要在<code v-pre>sizeof</code>的括号里做运算，这些运算是不会做的</li>
</ul>
</li>
<li>
<p>字面量也有数据类型</p>
<ul>
<li>默认<code v-pre>int, double, char, string</code></li>
<li>可以指定类型：加后缀</li>
</ul>
</li>
</ul>
<h3 id="整型" tabindex="-1"><a class="header-anchor" href="#整型"><span>整型</span></a></h3>
<ul>
<li>
<table>
<thead>
<tr>
<th>类型</th>
<th>字节</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>char</code></td>
<td>1</td>
</tr>
<tr>
<td><code v-pre>short</code></td>
<td>2</td>
</tr>
<tr>
<td><code v-pre>int</code></td>
<td>4 取决于编译器（CPU）</td>
</tr>
<tr>
<td><code v-pre>long</code></td>
<td>8 取决于编译器（CPU）</td>
</tr>
<tr>
<td><code v-pre>long long</code></td>
<td>8</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>计算机内部表达：补码</p>
</li>
<li>
<table>
<thead>
<tr>
<th>类型</th>
<th>范围</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>char</code></td>
<td>-128 ~ 127</td>
</tr>
<tr>
<td><code v-pre>short</code></td>
<td>-32768 ~ 32767</td>
</tr>
<tr>
<td><code v-pre>int</code></td>
<td>-2<sup>31</sup> ~ 2<sup>31</sup> - 1 (-2147483648 ~ 2147483647)</td>
</tr>
</tbody>
</table>
</li>
<li>
<p><code v-pre>unsigned</code></p>
<ul>
<li>初衷并非扩展数能表达的范围，而是为了做纯二进制运算，主要是为了移位</li>
</ul>
</li>
<li>
<p>整数是以纯二进制方式进行运算的</p>
</li>
<li>
<p>整数越界</p>
</li>
<li>
<table>
<thead>
<tr>
<th>格式化输入输出</th>
<th>类型</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>%d</code></td>
<td><code v-pre>char, short, int, long</code></td>
</tr>
<tr>
<td><code v-pre>%u</code></td>
<td><code v-pre>unsigned</code></td>
</tr>
<tr>
<td><code v-pre>%ld</code></td>
<td><code v-pre>long long</code></td>
</tr>
<tr>
<td><code v-pre>%lu</code></td>
<td><code v-pre>unsigned long long</code></td>
</tr>
<tr>
<td><code v-pre>%o</code></td>
<td>8进制</td>
</tr>
<tr>
<td><code v-pre>%x</code></td>
<td>16进制</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>以<code v-pre>0</code>开始的数字字面量是8进制；以<code v-pre>0x</code>开始的数字字面量是16进制</p>
</li>
<li>
<p>为什么有这么多整数类型？</p>
<ul>
<li>为了准确表达内存，做<strong>底层程序</strong>的需要</li>
<li>历史原因</li>
</ul>
</li>
<li>
<p>没有特殊需要，选择<code v-pre>int</code></p>
<ul>
<li>现在CPU字长普遍32位或64位，一次内存读写就是一个<code v-pre>int</code>，一次计算也是一个<code v-pre>int</code>，选择更短的类型不会更快，甚至可能更慢</li>
<li>现代编译器一般会设计内存对齐，所以更短的类型实际在内存中有可能也占据一个<code v-pre>int</code>的大小</li>
<li><code v-pre>unsigned</code>与否只是输出的不同，内部计算是一样的</li>
</ul>
</li>
</ul>
<h3 id="浮点类型" tabindex="-1"><a class="header-anchor" href="#浮点类型"><span>浮点类型</span></a></h3>
<ul>
<li>
<table>
<thead>
<tr>
<th>类型</th>
<th>字长</th>
<th>范围</th>
<th>有效数字</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>float</code></td>
<td>32</td>
<td>$\pm(1.20 * 10^{-38} - 3.40 * 10^{38}), 0, \pm inf, nan$</td>
<td>7</td>
</tr>
<tr>
<td><code v-pre>double</code></td>
<td>64</td>
<td>$\pm(2.20 * 10^{-308} - 1.79 * 10^{308}), 0, \pm inf, nan$</td>
<td>15</td>
</tr>
</tbody>
</table>
<p><code v-pre>printf</code>输出<code v-pre>inf</code>表示超过范围的浮点数，输出<code v-pre>nan</code>表示不存在的浮点数</p>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-c"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    printf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">%f</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">12.0</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> /</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0.0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    printf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">%f</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">12.0</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> /</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0.0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    printf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">%f</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0.0</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> /</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0.0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">Output:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">inf</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">inf</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">nan</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<table>
<thead>
<tr>
<th>类型</th>
<th><code v-pre>scanf</code></th>
<th><code v-pre>printf</code></th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>float</code></td>
<td><code v-pre>%f</code></td>
<td><code v-pre>%f, %e</code></td>
</tr>
<tr>
<td><code v-pre>double</code></td>
<td><code v-pre>%lf</code></td>
<td><code v-pre>%f, %e</code></td>
</tr>
</tbody>
</table>
<p><code v-pre>%e</code>：科学计数法格式</p>
<ul>
<li>字面量也可使用科学计数法格式，例：<code v-pre>1e-10</code></li>
<li>输出精度，例：<code v-pre>%.5f</code>，四舍五入</li>
</ul>
</li>
<li>
<p>浮点类型对数据的表示是不准确的，是近似的</p>
<ul>
<li>二进制能表示的数是有限的，但数是连续的</li>
</ul>
</li>
<li>
<p>浮点运算没有精度</p>
<ul>
<li>不能直接比较</li>
<li>误差会累积</li>
<li>转而使用整型解决实际问题</li>
</ul>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-c"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    float</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> a, b, c;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    a </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1.345</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">f</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    b </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1.123</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">f</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    c </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> a </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> b;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(c </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2.468</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        printf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Equal!</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    else</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        printf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Not equal! c = </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">%.10f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">, or </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">%f</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, c, c);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// f1 == f2 可能失败</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// fabs(f1 - f2) &#x3C; 1e-12 来比较</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>浮点数内部表达：编码</p>
</li>
<li>
<p>浮点数在计算时是由专用的硬件部件实现的</p>
</li>
<li>
<p>没有特殊需要，使用<code v-pre>double</code></p>
</li>
</ul>
<h3 id="字符类型" tabindex="-1"><a class="header-anchor" href="#字符类型"><span>字符类型</span></a></h3>
<ul>
<li><code v-pre>char</code>既是整型，也是字符型</li>
<li>格式化输入输出：<code v-pre>%c</code></li>
<li>字符字面量：<code v-pre>''</code>表示</li>
<li>ASCII码</li>
</ul>
<h4 id="转义字符-escape-character" tabindex="-1"><a class="header-anchor" href="#转义字符-escape-character"><span>转义字符-Escape character</span></a></h4>
<ul>
<li>
<p>用来表达无法打印出来的控制字符或特殊字符，由<code v-pre>\</code>开头，后面跟上一个字符</p>
</li>
<li>
<table>
<thead>
<tr>
<th>常用转义字符</th>
<th>意义</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>\b</code></td>
<td>回退一格</td>
</tr>
<tr>
<td><code v-pre>\t</code></td>
<td>到下一个表格位</td>
</tr>
<tr>
<td><code v-pre>\n</code></td>
<td>换行</td>
</tr>
<tr>
<td><code v-pre>\r</code></td>
<td>回车</td>
</tr>
<tr>
<td><code v-pre>\&quot;</code></td>
<td>双引号</td>
</tr>
<tr>
<td><code v-pre>\'</code></td>
<td>单引号</td>
</tr>
<tr>
<td><code v-pre>\\</code></td>
<td>反斜杠本身</td>
</tr>
</tbody>
</table>
<p>回退一般不代表删除</p>
<ul>
<li>制表位：每行的固定位置，而不是固定大小的字符数量</li>
<li>换行实际上是回车和换行两个动作</li>
</ul>
</li>
</ul>
<h3 id="类型转换" tabindex="-1"><a class="header-anchor" href="#类型转换"><span>类型转换</span></a></h3>
<h4 id="自动类型转换" tabindex="-1"><a class="header-anchor" href="#自动类型转换"><span>自动类型转换</span></a></h4>
<ul>
<li>当运算符两边出现不一致的类型时，会自动转换成较大的类型</li>
<li><code v-pre>char -&gt; short -&gt; int -&gt; long -&gt; long long</code></li>
<li><code v-pre>int -&gt; float -&gt; double</code></li>
<li>对于<code v-pre>printf</code>，任何小于<code v-pre>int</code>的类型会被转换成<code v-pre>int</code>，<code v-pre>float</code>会被转换成<code v-pre>double</code></li>
<li><code v-pre>scanf</code>不会</li>
</ul>
<h4 id="强制类型转换" tabindex="-1"><a class="header-anchor" href="#强制类型转换"><span>强制类型转换</span></a></h4>
<ul>
<li><code v-pre>(type) value</code></li>
<li>注意安全性</li>
<li>只是从那个变量计算出了一个新的类型的值，它并不改变那个变量，无论是值还是类型</li>
<li>强制类型转换的优先级高于四则运算</li>
</ul>
<h3 id="逻辑类型" tabindex="-1"><a class="header-anchor" href="#逻辑类型"><span>逻辑类型</span></a></h3>
<ul>
<li>C语言原本是没有<code v-pre>bool</code>类型的</li>
<li><code v-pre>#include &lt;stdbool.h&gt;</code></li>
<li>之后可以使用<code v-pre>true</code>，<code v-pre>false</code></li>
<li>实际上是整型，<code v-pre>1</code>和<code v-pre>0</code></li>
</ul>
<hr>
<h2 id="运算" tabindex="-1"><a class="header-anchor" href="#运算"><span>运算</span></a></h2>
<ul>
<li>
<p>表达式：一系列运算符和操作数的组合</p>
</li>
<li>
<p>运算符（operator）</p>
<table>
<thead>
<tr>
<th>运算类型</th>
<th>运算符</th>
</tr>
</thead>
<tbody>
<tr>
<td>四则</td>
<td>+ - * / % ()</td>
</tr>
<tr>
<td>关系</td>
<td>&lt; &gt; &lt;= &gt;= == !=</td>
</tr>
<tr>
<td>逻辑</td>
<td>&amp;&amp; || !</td>
</tr>
<tr>
<td>位</td>
<td>&amp; | ^ &gt;&gt; &lt;&lt; ~</td>
</tr>
<tr>
<td>单目</td>
<td>+ -</td>
</tr>
<tr>
<td>赋值</td>
<td>=</td>
</tr>
<tr>
<td>复合赋值</td>
<td>+= -= *= /= %=</td>
</tr>
<tr>
<td>递增递减</td>
<td>++ --</td>
</tr>
<tr>
<td>条件</td>
<td>? :</td>
</tr>
<tr>
<td>逗号</td>
<td>,</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>操作数（operand）</p>
</li>
</ul>
<h3 id="四则" tabindex="-1"><a class="header-anchor" href="#四则"><span>四则</span></a></h3>
<ul>
<li>整型除法舍弃小数部分</li>
<li>浮点数不能取余</li>
<li>优先级：正负 &gt; 乘除 &gt; 取余 &gt; 加减 &gt; 赋值</li>
</ul>
<h3 id="赋值" tabindex="-1"><a class="header-anchor" href="#赋值"><span>赋值</span></a></h3>
<ul>
<li>赋值也是运算，也有结果</li>
<li>例：<code v-pre>a = 6</code>的结果是<code v-pre>6</code></li>
<li>自右向左结合</li>
</ul>
<h3 id="递增递减" tabindex="-1"><a class="header-anchor" href="#递增递减"><span>递增递减</span></a></h3>
<ul>
<li>前缀：<code v-pre>a++</code>结果是<code v-pre>a</code>加<code v-pre>1</code>以前的值</li>
<li>后缀：<code v-pre>++a</code>结果是<code v-pre>a</code>加<code v-pre>1</code>以后的值</li>
<li><code v-pre>a + 1</code>是附作用</li>
</ul>
<h3 id="关系" tabindex="-1"><a class="header-anchor" href="#关系"><span>关系</span></a></h3>
<ul>
<li>比较结果：逻辑值真1假0</li>
<li>优先级比算术低，比赋值高</li>
<li>连续的关系运算从左向右执行</li>
</ul>
<h3 id="逻辑" tabindex="-1"><a class="header-anchor" href="#逻辑"><span>逻辑</span></a></h3>
<ul>
<li>短路法则：逻辑运算是自左向右进行的，如果左边的结果已经能够决定结果了，就不会做右边的计算</li>
</ul>
<h3 id="逗号" tabindex="-1"><a class="header-anchor" href="#逗号"><span>逗号</span></a></h3>
<ul>
<li>逗号用来连接两个表达式，并以右边的表达式的值作为它的结果</li>
<li>逗号运算符的优先级是最低的</li>
<li>主要在<code v-pre>for</code>中使用</li>
</ul>
<h3 id="位运算" tabindex="-1"><a class="header-anchor" href="#位运算"><span>位运算</span></a></h3>
<ul>
<li>直接对二进制位进行操作</li>
<li>按位与常用于：
<ul>
<li>让某一位或某些位为0：和0与</li>
<li>取一个数中的一段：<code v-pre>x &amp; 0x00ff0000</code></li>
</ul>
</li>
<li>按位或常用于：
<ul>
<li>使得一位或一些位为1：和1或</li>
<li>把两个数拼起来：<code v-pre>0x00ff | 0xff00</code></li>
</ul>
</li>
<li>按位异或：相同为0，不同为1
<ul>
<li>某位取反：和1异或</li>
<li>某位不变：和0异或</li>
</ul>
</li>
<li>左移
<ul>
<li>高位移出，低位补零</li>
<li>所有小于<code v-pre>int</code>的类型，移位以<code v-pre>int</code>的方式做，结果是<code v-pre>int</code></li>
<li><code v-pre>x &lt;&lt;= 1 == x *= 2</code></li>
</ul>
</li>
<li>右移
<ul>
<li>低位移出，高位补符号位</li>
<li><code v-pre>x &gt;&gt;= 1 == x /= 2</code></li>
</ul>
</li>
</ul>
<hr>
<h2 id="流程控制" tabindex="-1"><a class="header-anchor" href="#流程控制"><span>流程控制</span></a></h2>
<ul>
<li>结构化的基石</li>
<li>块：<code v-pre>{}</code></li>
</ul>
<h3 id="选择" tabindex="-1"><a class="header-anchor" href="#选择"><span>选择</span></a></h3>
<h4 id="if-else" tabindex="-1"><a class="header-anchor" href="#if-else"><span>If - else</span></a></h4>
<ul>
<li>二路分支</li>
<li>嵌套</li>
<li>级联</li>
<li>else总是和最近的if匹配</li>
<li>“单一出口”原则</li>
</ul>
<h4 id="switch" tabindex="-1"><a class="header-anchor" href="#switch"><span>Switch</span></a></h4>
<ul>
<li>多路分支</li>
<li>控制表达式只能是整数型</li>
<li><code v-pre>case</code>常量可以是常数，也可以是常数计算的表达式</li>
<li><code v-pre>case</code>判断代码块内执行的开始
<ul>
<li>合并分支</li>
</ul>
</li>
<li><code v-pre>break</code>语句，没有<code v-pre>break</code>会顺序向下执行</li>
<li>默认情况执行<code v-pre>default</code>下的语句</li>
<li><code v-pre>default</code>不是必须但是最好有</li>
</ul>
<h3 id="循环" tabindex="-1"><a class="header-anchor" href="#循环"><span>循环</span></a></h3>
<h4 id="while" tabindex="-1"><a class="header-anchor" href="#while"><span>While</span></a></h4>
<ul>
<li>先判断条件再执行循环体</li>
</ul>
<h4 id="do-while" tabindex="-1"><a class="header-anchor" href="#do-while"><span>Do while</span></a></h4>
<ul>
<li>先执行一次循环体再判断条件</li>
</ul>
<h4 id="for" tabindex="-1"><a class="header-anchor" href="#for"><span>For</span></a></h4>
<ul>
<li>
<p>如果有固定次数，用<code v-pre>for</code>；如果必须执行一次，用<code v-pre>do while</code>；其他情况用<code v-pre>while</code></p>
</li>
<li>
<p>循环控制：<code v-pre>break</code>，<code v-pre>continue</code>；最近匹配原则，针对当前循环</p>
<blockquote>
<p><code v-pre>break</code>对<code v-pre>if-else</code>不起作用</p>
</blockquote>
</li>
<li>
<p>循环嵌套</p>
</li>
<li>
<p>跳出多重循环：<code v-pre>goto</code></p>
</li>
<li>
<p>给定条件的整数集：枚举 + 剔除</p>
</li>
</ul>
<hr>
<h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数"><span>函数</span></a></h2>
<ul>
<li>
<p>函数是可以重复利用的代码块，接受零个或多个参数，做一件事情，并返回零个或一个值</p>
</li>
<li>
<p>函数本质是占用一片连续内存的代码</p>
</li>
<li>
<p>函数定义</p>
<ul>
<li>函数头：返回类型 函数名 参数列表</li>
<li>函数体</li>
</ul>
</li>
<li>
<p>函数调用：<code v-pre>函数名(参数值);</code></p>
<ul>
<li>执行 -&gt; 调用函数 -&gt; 执行调用函数 -&gt; 返回 -&gt; 恢复执行</li>
</ul>
</li>
<li>
<p>函数返回：<code v-pre>return</code></p>
<ul>
<li><code v-pre>return</code>停止函数的执行，并返回一个值</li>
<li><code v-pre>return;</code>, <code v-pre>return exp;</code></li>
</ul>
</li>
<li>
<p><code v-pre>void</code></p>
<ul>
<li><code v-pre>void</code>不能用于定义变量</li>
<li>用于函数定义，表示无返回值或无参数</li>
<li><code v-pre>type func();</code>表示接受任意多的参数</li>
</ul>
</li>
<li>
<p>函数的先后关系</p>
<ul>
<li>C的编译器自上而下顺序分析</li>
<li>调用函数需要先声明或定义</li>
<li>声明定义要一致</li>
</ul>
</li>
<li>
<p>参数传递</p>
<ul>
<li>值传递</li>
<li>调用函数时给的值与参数类型不匹配是C语言传统上最大的漏洞，编译器会隐式地进行类型转换</li>
<li>每个函数有自己的变量空间，参数也位于这个空间中</li>
</ul>
</li>
<li>
<p>变量分类</p>
<ul>
<li>局部（本地）变量：函数的每次运行，就产生了一个独立的变量空间，在这个空间中的变量，是函数这次运行所独有的，称作局部变量
<ul>
<li>定义在函数内部的变量，参数</li>
<li>定义在语句块内的变量</li>
<li>只能在当前<strong>块</strong>中访问使用</li>
<li>块外定义变量在块内仍然有效</li>
<li>本地变量<strong>不会被默认初始化</strong></li>
<li>参数在进入函数时会初始化</li>
</ul>
</li>
<li>全局变量：定义在函数外面的变量
<ul>
<li>没有初始化的全局变量会得到<code v-pre>0</code>值</li>
<li>指针会得到<code v-pre>null</code>值</li>
<li>只能用编译时已知的值来初始化全局变量</li>
<li>全局变量初始化发生在<code v-pre>main</code>函数之前</li>
<li>工程中，全局变量通常以<code v-pre>g</code>作为前缀命名</li>
</ul>
</li>
<li>同名变量
<ul>
<li>不同块中的局部变量可以同名</li>
<li>同一块中的局部变量不可以同名</li>
<li>块内同名变量覆盖块外同名变量</li>
</ul>
</li>
<li>静态变量：<code v-pre>static</code>
<ul>
<li>静态本地变量
<ul>
<li>作用域：块内；生命期：程序生命期</li>
<li>静态本地变量只会在第一次进入函数时初始化一次</li>
<li>离开函数时，静态本地变量会继续存在并保持其值</li>
<li>特殊的全局变量，创建于全局数据区</li>
</ul>
</li>
<li>静态全局变量
<ul>
<li>作用域：文件作用域；生命期：程序生命期</li>
</ul>
</li>
</ul>
</li>
<li>使用全局变量和静态本地变量的函数是线程不安全的</li>
</ul>
</li>
<li>
<p>作用域：变量定义后的可访问范围</p>
<ul>
<li>局部变量：定义开始到代码块结束</li>
<li>全局变量：程序的任何地方</li>
</ul>
</li>
<li>
<p>生命期：变量从创建到销毁的时间</p>
<ul>
<li>局部变量：进入作用域时创建，离开作用域时自动销毁</li>
<li>全局变量：程序开始运行时创建，程序结束时自动销毁</li>
</ul>
</li>
<li>
<p>调用函数里的<code v-pre>,</code>不是运算符</p>
</li>
<li>
<p>C语言不允许函数嵌套定义，可以放声明</p>
</li>
<li>
<p>C语言程序的入口：<code v-pre>main</code>函数</p>
<ul>
<li><code v-pre>main()</code>是应用程序与操作系统的“约定”</li>
</ul>
</li>
<li>
<p>C语言可以定义参数可变的函数</p>
<ul>
<li>参数可变函数的实现依赖于<code v-pre>stdarg.h</code></li>
<li><code v-pre>va_list</code>：参数集合</li>
<li><code v-pre>va_arg</code>：取具体参数值</li>
<li><code v-pre>va_start</code>：标识参数访问的开始</li>
<li><code v-pre>va_end</code>：标识参数访问的结束</li>
<li>可变参数必须从头到尾按照顺序逐个访问</li>
<li>参数列表中至少要存在一个确定的命名参数</li>
<li>可变参数函数无法确定实际存在的参数的数量</li>
<li>可变参数函数无法确定参数的实际类型</li>
</ul>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-c"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">#include</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> &#x3C;stdio.h></span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">#include</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> &#x3C;stdarg.h></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">float</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> average</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> ...</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    va_list args;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> i </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    float</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> sum </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    va_start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(args, n);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(i</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; i</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">&#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">n; i</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">++</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        sum </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">+=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> va_arg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(args, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    va_end</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(args);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> sum </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> n;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    printf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">%f</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">average</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">));</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    printf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">%f</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">average</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">));</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>函数设计原则</p>
<ul>
<li>函数从意义上应该是一个独立的功能模块</li>
<li>函数名要在一定程度上反映函数的功能</li>
<li>函数参数名要能够体现参数的意义</li>
<li>尽量避免在函数中使用全局变量</li>
<li>当函数参数不应该在函数体内部被修改时，应该加上<code v-pre>const</code>声明</li>
<li>如果参数是指针，且仅作输入参数，则应加上<code v-pre>const</code>声明</li>
<li>不能省略返回值的类型</li>
<li>对参数进行有效性检查，对指针参数的检查尤为重要</li>
<li>函数体的规模要小，尽量控制在80行代码之内</li>
<li>相同的输入对应相同的输出，避免有状态函数</li>
<li>避免函数有过多的参数，尽量控制在4个以内
<ul>
<li>太多可以考虑结构体</li>
</ul>
</li>
<li>有时候函数不需要返回值，但为了增加灵活性，如支持链式表达，可以附加返回值</li>
</ul>
</li>
</ul>
<hr>
<h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组"><span>数组</span></a></h2>
<ul>
<li>数组是相同数据类型变量的有序集合</li>
<li>数组定义：<code v-pre>&lt;type&gt; identifier[size];</code></li>
<li>数组类型：<code v-pre>&lt;type&gt;[size]</code></li>
<li>元素数量必须是整数，必须是编译时刻确定的字面量
<ul>
<li><strong><code v-pre>C99</code>之后可以使用变量</strong></li>
</ul>
</li>
<li>数组在计算机内是一片连续的内存</li>
<li>数组一旦创建，<strong>不能改变大小</strong></li>
<li>数组访问：<code v-pre>identifier[index]</code>
<ul>
<li>数组下标从<code v-pre>0</code>开始</li>
<li>可以使用变量作为下标</li>
<li>编译器和运行环境都不会检查数组下标是否越界，无论读写</li>
<li>一旦程序运行，数组越界<strong>可能</strong>造成问题，导致程序崩溃</li>
<li>不同机器上无法复现程序的一大问题：没有考虑数组越界</li>
</ul>
</li>
<li>长度为0数组可以定义，但是无用，自然越界</li>
<li>数组初始化
<ol>
<li><code v-pre>&lt;type&gt; identifier[N] = {v0, v1, ..., vn-1};</code> 不初始化是随机值</li>
<li>自动确定数组大小：<code v-pre>&lt;type&gt; identifier[] = {v0, v1, ..., vn-1};</code></li>
<li>部分初始化：<code v-pre>&lt;type&gt; identifier[N] = {[0] = 2, [2] = 3, 6, };</code>
<ul>
<li>用<code v-pre>[n]</code>在初始化数据中给出定位</li>
<li>没有定位的数据姐在前面的位置后面</li>
<li>其他位置补零</li>
<li>适合初始数据稀疏的数组</li>
</ul>
</li>
</ol>
</li>
<li>数组大小：<code v-pre>sizeof(identifier)</code></li>
<li>数组个数：<code v-pre>sizeof(identifier) / sizeof(identifier[0])</code></li>
<li>数组变量本身不能被赋值。要想拷贝一个数组，只能遍历</li>
<li>数组作为函数参数时，往往必须再用另一个参数来传入数组的大小</li>
<li>数组变量本身表达地址，无需用<code v-pre>&amp;</code>取地址；数组单元表达的是变量</li>
<li>二维数组
<ul>
<li><code v-pre>&lt;type&gt; identifier[M][N];</code></li>
<li>通常理解为M行N列的矩阵，或者M个大小为N的一维数组</li>
<li>二维数组初始化列数必须给出，行数可以自动确定</li>
<li>检查行</li>
<li>检查列</li>
<li>检查对角线，反对角线</li>
</ul>
</li>
<li><code v-pre>const</code>数组
<ul>
<li><code v-pre>const &lt;type&gt; identifier[] = {0, };</code></li>
<li>表明每个数组单元都是<code v-pre>const</code></li>
<li>必须通过初始化进行赋值</li>
<li><strong>保护数组</strong>不被函数破坏</li>
</ul>
</li>
</ul>
<hr>
<h2 id="指针" tabindex="-1"><a class="header-anchor" href="#指针"><span>指针</span></a></h2>
<ul>
<li>
<p><code v-pre>&amp;</code>运算符：获得变量的地址，他的操作数必须是变量</p>
<ul>
<li>格式化输出：<code v-pre>%p</code></li>
<li>地址的大小与编译器有关</li>
<li>内存地址本质上是一个无符号整数</li>
</ul>
</li>
<li>
<p>指针变量：保存地址的变量</p>
<ul>
<li>普通变量放的是值</li>
<li>禁止将普通数值当作地址赋值给指针变量，除非你知道自己在干什么</li>
</ul>
</li>
<li>
<p>指针定义：<code v-pre>&lt;type&gt; *p;</code>或者<code v-pre>&lt;type&gt;* p;</code></p>
<ul>
<li>
<p><code v-pre>&lt;type&gt;</code>决定<strong>访问内存时的长度范围</strong></p>
<blockquote>
<p>个人理解，指针类型也是个数据类型</p>
</blockquote>
</li>
</ul>
</li>
<li>
<p>访问指针地址上的变量：<code v-pre>*p</code></p>
<ul>
<li>可以做右值也可以做左值</li>
<li>没有赋值前不要访问</li>
</ul>
</li>
<li>
<p>指针应用场景</p>
<ul>
<li>交换变量</li>
<li>函数返回多个值，某些值就只能通过指针返回
<ul>
<li>传入的参数实际上是需要保存结果的变量的地址</li>
</ul>
</li>
<li>函数返回运算的状态<code v-pre>(0, 1)</code>，结果通过指针返回
<ul>
<li>可能会出错的运算</li>
<li>后续语言（<code v-pre>C++</code>，<code v-pre>Java</code>）采用了异常机制来解决这个问题</li>
</ul>
</li>
</ul>
</li>
<li>
<p>指针与数组</p>
<ul>
<li>
<p>函数参数表中的数组实际上是指针，但是可以用数组的运算符<code v-pre>[]</code>进行计算，不再含有数组长度信息</p>
</li>
<li>
<p><code v-pre>void func(int a[]);</code>和<code v-pre>void func(int* a);</code>作为函数原型是等价的</p>
</li>
<li>
<p><strong>数组类型和指针类型不是等价的</strong></p>
</li>
<li>
<p><code v-pre>[]</code>运算符可以对数组做，也可以对指针做</p>
</li>
<li>
<p><code v-pre>*</code>运算符可以对指针做，也可以对数组做</p>
</li>
<li>
<p><code v-pre>array</code>, <code v-pre>&amp;array</code>, <code v-pre>&amp;array[0]</code>区别</p>
<ul>
<li>
<p><code v-pre>array</code>可以<strong>当作</strong>一个<strong>指针常量</strong>，指向<strong>数组第一个元素</strong></p>
<ul>
<li>两种情况数组名不是用指针常量来表示
<ol>
<li><code v-pre>sizeof(array)</code>：返回整个数组的长度，而不是指针的长度</li>
<li><code v-pre>&amp;array</code>：返回一个指向数组的指针，而不是一个指向指针的指针</li>
</ol>
</li>
</ul>
</li>
<li>
<p><code v-pre>&amp;array</code>是一个<strong>指针值</strong>，指向<strong>整个数组</strong></p>
</li>
<li>
<p><code v-pre>&amp;array[0]</code>是一个<strong>指针值</strong>，指向<strong>数组的第一个元素</strong></p>
</li>
<li>
<p>三者值相同，但意义不同</p>
<blockquote>
<p><a href="https://blog.csdn.net/jingzi123456789/article/details/66478310" target="_blank" rel="noopener noreferrer">这是一个很好的解释</a></p>
</blockquote>
</li>
</ul>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-c"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> array</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">] </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">};</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">p)[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">] </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> &#x26;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">array;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	// pointer to whole array</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // ERROR</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // Because array is a const pointer</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // array = 5345454;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	printf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"        array = </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">%p</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, array);</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	printf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"       &#x26;array = </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">%p</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">&#x26;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">array);</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	printf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"    &#x26;array[0] = </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">%p</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">&#x26;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">array</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]);</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	printf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"    array + 1 = </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">%p</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, array </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	printf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"&#x26;array[0] + 1 = </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">%p</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">&#x26;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">array</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">] </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	printf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"   &#x26;array + 1 = </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">%p</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">&#x26;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">array </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	printf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	printf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">" sizeof(array) = </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">%d</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">sizeof</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(array));</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	printf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"sizeof(&#x26;array) = </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">%d</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">sizeof</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">&#x26;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">array));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	printf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">Output:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        array </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:white;--shiki-dark:#FFFFFF"> 0061FEEC</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">       &#x26;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">array </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:white;--shiki-dark:#FFFFFF"> 0061FEEC</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    &#x26;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">array</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">] </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:white;--shiki-dark:#FFFFFF"> 0061FEEC</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    array </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> =</span><span style="--shiki-light:white;--shiki-dark:#FFFFFF"> 0061FEF0</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">&#x26;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">array</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">] </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> =</span><span style="--shiki-light:white;--shiki-dark:#FFFFFF"> 0061FEF0</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">   &#x26;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">array </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> =</span><span style="--shiki-light:white;--shiki-dark:#FFFFFF"> 0061FF00</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">sizeof</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(array) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 20</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">sizeof</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">&#x26;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">array) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 4</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>指针与<code v-pre>const</code></p>
<ul>
<li>指针是<code v-pre>const</code>：
<ul>
<li><code v-pre>&lt;type&gt;* const p;</code></li>
<li>该指针变量一旦得到了地址值，不能再指向其他变量</li>
</ul>
</li>
<li>指针所指的是<code v-pre>const</code>：
<ul>
<li><code v-pre>&lt;type&gt; const* p;</code>，<code v-pre>const &lt;type&gt;* p;</code></li>
<li>表示不能通过这个指针去修改指向的变量，<strong>并不能</strong>使得那个变量成为<code v-pre>const</code></li>
</ul>
</li>
<li>总是可以把一个非<code v-pre>const</code>的值转换成<code v-pre>const</code>
<ul>
<li>当要传递的参数类型比地址大的时候，这是一种常用的手段：既能用较少的字节数传递值给参数，又能避免函数修改外面的变量</li>
</ul>
</li>
</ul>
</li>
<li>
<p>指针运算</p>
<ul>
<li>
<p>给指针加，减一个整数</p>
<ul>
<li><strong>偏移量</strong></li>
<li><code v-pre>p + n -&gt; (unsigned int) p + n * sizeof(*p)</code></li>
<li>如果指针不是指向一片连续分配的空间，如数组，则这种计算没有意义</li>
</ul>
</li>
<li>
<p>递增递减</p>
</li>
<li>
<p>两个指针相减</p>
<ul>
<li>结果也是偏移量</li>
</ul>
</li>
<li>
<p><code v-pre>*p++</code></p>
<ul>
<li>
<p>取出<code v-pre>p</code>所指的数据，然后把<code v-pre>p</code>移到下一个位置去</p>
</li>
<li>
<p><code v-pre>*</code>的优先级低于<code v-pre>++ --</code></p>
</li>
<li>
<p>常用于数组类的连续空间操作</p>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-c"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">char</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> array</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">[]</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">};</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">char*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> p </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> array;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">while</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">p </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">!=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> -</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    printf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">%d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">p</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">++</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>在某些CPU上，这可以直接被翻译成一条汇编指令</p>
</li>
</ul>
</li>
<li>
<p>比较</p>
</li>
</ul>
</li>
<li>
<p>0地址</p>
<ul>
<li>所有程序都有0地址，通常不能随意读写</li>
<li><code v-pre>NULL</code>是一个预定义的符号，表示0地址</li>
<li>可以用0地址来表示特殊的事情
<ul>
<li>返回的指针是无效的</li>
<li>指针没有被真正初始化（<strong>先初始化为0</strong>）</li>
</ul>
</li>
</ul>
</li>
<li>
<p>指针的类型转换</p>
<ul>
<li><code v-pre>void*</code>表示不知道指向什么的指针
<ul>
<li>不能访问数据</li>
<li>计算与<code v-pre>char*</code>相同（不相通）</li>
<li>往往用在底层程序中</li>
</ul>
</li>
<li><code v-pre>(&lt;type&gt;*) identifier;</code></li>
<li>并不改变指向变量的类型</li>
</ul>
</li>
<li>
<p>动态内存分配</p>
<ul>
<li>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-c"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">#include</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> &#x3C;stdlib.h></span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">&#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">type</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">>*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> p </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">&#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">type</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">>*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">malloc</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">n </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">*</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> sizeof</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">&#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">type</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">));</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(p </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">!=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> NULL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // statement</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">free</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">p </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> NULL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 动态分配内存的基本操作架构</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>C99</code>可以直接用变量定义数组大小</p>
</li>
<li>
<p><code v-pre>void* malloc(size_t size);</code></p>
<ul>
<li>申请的空间大小是以字节为单位的</li>
<li>需要自己将返回结果转换成自己需要的类型</li>
<li>申请失败返回<code v-pre>0(NULL)</code></li>
</ul>
</li>
<li>
<p><code v-pre>free()</code></p>
<ul>
<li>把申请的来的空间还给系统</li>
<li>只能还<strong>申请</strong>来的空间的<strong>首地址</strong></li>
<li><code v-pre>free(NULL)</code>不会出错</li>
</ul>
</li>
</ul>
</li>
<li>
<p>指针与函数</p>
<ul>
<li>
<p>函数名就是函数体代码的起始地址</p>
</li>
<li>
<p>通过函数名调用函数，本质为指定具体地址的跳转执行</p>
</li>
<li>
<p>可以定义指针保存函数入口地址</p>
</li>
<li>
<p><code v-pre>&lt;type&gt; (*pFunc)(&lt;type1&gt;, &lt;type2&gt;) = func;</code></p>
</li>
<li>
<p><code v-pre>&amp;func</code>和<code v-pre>func</code>数值相同，意义相同</p>
</li>
<li>
<p>调用函数：<code v-pre>pFunc(par);</code>或<code v-pre>*pFunc(par);</code></p>
</li>
<li>
<p>不能进行指针运算</p>
</li>
<li>
<p>应用：</p>
<ul>
<li>让程序跳转到固定地址执行，多用于嵌入式开发</li>
<li>回调函数（监听器模式的基础）
<ul>
<li>调用者<strong>不知道</strong>具体事件发生时需要的调用函数</li>
<li>被调函数<strong>不知道</strong>何时被调用，只知道需要完成的任务</li>
<li>当具体时间发生时，调用者通过函数指针调用具体函数</li>
<li>回调机制中调用者和被调函数<strong>互不依赖</strong></li>
</ul>
</li>
</ul>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-c"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">#include</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> &#x3C;stdio.h></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">typedef</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">Weapon)(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> fight</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">Weapon </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">wp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> arg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> result </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    printf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Fight boss!</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    result </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> wp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(arg);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    printf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Boss loss: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">%d</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, result);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> knife</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> ret </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> i </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(i</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; i</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">&#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">n; i</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">++</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        printf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Knife attack: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">%d</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        ret</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">++</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> ret;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> sword</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> ret </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> i </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(i</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; i</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">&#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">n; i</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">++</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        printf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Sword attack: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">%d</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        ret </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">+=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> ret;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> gun</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> ret </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> i </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(i</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; i</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">&#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">n; i</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">++</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        printf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Gun attack: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">%d</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        ret </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">+=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> ret;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    fight</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(knife, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    fight</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(sword, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    fight</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(gun, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>返回指针的函数</p>
<ul>
<li>返回本地变量的地址是危险的</li>
<li>返回全局变量或静态本地变量的地址是安全的</li>
<li>返回在函数内<code v-pre>malloc</code>的内存是安全的，但是容易造成问题</li>
<li>最好的做法是返回传入的指针</li>
</ul>
</li>
</ul>
</li>
<li>
<p>数组参数退化</p>
<table>
<thead>
<tr>
<th>数组参数</th>
<th>等效的指针参数</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>&lt;type&gt; a[size]</code></td>
<td><code v-pre>&lt;type&gt;* a</code></td>
</tr>
<tr>
<td><code v-pre>&lt;type&gt;* a[size]</code></td>
<td><code v-pre>&lt;type&gt;** a</code></td>
</tr>
<tr>
<td><code v-pre>&lt;type&gt; a[m][n]</code></td>
<td><code v-pre>&lt;type&gt; (*a)[n]</code></td>
</tr>
</tbody>
</table>
</li>
</ul>
<hr>
<h2 id="字符数组和字符串" tabindex="-1"><a class="header-anchor" href="#字符数组和字符串"><span>字符数组和字符串</span></a></h2>
<ul>
<li>
<p>字符数组：<code v-pre>char word[] = {'H', 'E', 'L', 'L', 'O'};</code></p>
</li>
<li>
<p>C语言实际上没有字符串概念，用字符数组模拟</p>
</li>
<li>
<p><code v-pre>char word[] = {'H', 'E', 'L', 'L', 'O', '\0'};</code></p>
</li>
<li>
<p>以<code v-pre>0</code>（整数0）结尾的一串字符</p>
</li>
<li>
<p><code v-pre>0</code>或<code v-pre>\0</code>是一样的（字节大小不同，4：1），但是和<code v-pre>'0'</code>不同</p>
</li>
<li>
<p><code v-pre>0</code>表示字符串的结束，但它不是字符串的一部分，计算长度时不包含这个<code v-pre>0</code></p>
</li>
<li>
<p>字符串以数组形式存在，以数组或指针的形式访问，更多的是以指针的形式</p>
</li>
<li>
<p><code v-pre>string.h</code></p>
</li>
<li>
<p>字符串常量（字面量）</p>
<ul>
<li><code v-pre>&quot;string&quot;</code></li>
<li>会被编译器变成一个字符数组放在<strong>全局只读代码段</strong>，数组长度是<code v-pre>字符个数+1</code>，结尾有表示结束的<code v-pre>0</code></li>
<li>两个相邻的字符串常量会连接起来</li>
<li>可以当作常量指针</li>
</ul>
</li>
<li>
<p>字符串变量</p>
<ul>
<li><code v-pre>char* str = &quot;Hello&quot;;</code>
<ul>
<li><code v-pre>str</code>是一个指针，初始化为指向一个字符串常量</li>
<li>因为字符串常量不能被修改，所以实际上<code v-pre>str</code>是<code v-pre>const char*</code>类型</li>
<li>历史原因，编译器接受不带<code v-pre>const</code>的写法</li>
<li>试图对<code v-pre>str</code>所指的字符串做写入会导致程序崩溃</li>
</ul>
</li>
<li><code v-pre>char word[] = &quot;Hello&quot;;</code>
<ul>
<li>定义为数组类型可以修改内部的字符串</li>
<li>实际上编译器隐式地将字符串常量拷贝到定义的数组空间</li>
</ul>
</li>
<li>指针还是数组？
<ul>
<li><strong>构造</strong>字符串：数组</li>
<li><strong>处理</strong>字符串：指针</li>
</ul>
</li>
<li><code v-pre>char line[10] = &quot;Hello&quot;;</code></li>
</ul>
</li>
<li>
<p>字符串赋值：<code v-pre>char* str1 = &quot;hello&quot;;    char* str2 = str1;</code></p>
<ul>
<li>并没有产生新的字符串，只是让<code v-pre>str2</code>指向了<code v-pre>str1</code>所指的字符串</li>
</ul>
</li>
<li>
<p>字符串输入输出：<code v-pre>%s</code></p>
<ul>
<li><code v-pre>scanf</code>读入一个单词（到空格，tab或回车为止）</li>
<li><code v-pre>scanf</code>是不安全的，因为不知道要读入的内容的长度</li>
<li><code v-pre>%7s</code>：安全的输入，数字表示最多允许读入的字符数量。如果输入的长度超过指定长度，下一次的<code v-pre>scanf</code>会在上一次读入的终点接着读</li>
</ul>
</li>
<li>
<p>空字符串</p>
<ul>
<li>只有一个<code v-pre>\0</code>的字符串</li>
<li><code v-pre>char buffer[100] = &quot;&quot;;</code>
<ul>
<li>一个空字符串，<code v-pre>buffer[0] == '\0'</code></li>
</ul>
</li>
<li><code v-pre>char buffer[] = &quot;&quot;;</code>
<ul>
<li>这个数组长度只有1</li>
</ul>
</li>
</ul>
</li>
<li>
<p>字符串数组</p>
<ul>
<li>
<p><code v-pre>char** a</code></p>
<ul>
<li><code v-pre>a</code>是一个指针，指向另一个指针，那个指针指向一个字符（串）</li>
<li>也可以<strong>看成</strong>一个指针数组，前提访问合法</li>
</ul>
</li>
<li>
<p><code v-pre>char a[][size]</code></p>
<ul>
<li>可以表示一个字符串数组，但是里面的字符串大小有限制</li>
</ul>
</li>
<li>
<p><code v-pre>char* a[]</code></p>
<ul>
<li>
<p>也可以表示一个字符串数组，里面是一个个指向字符串的指针</p>
</li>
<li>
<p><code v-pre>&lt;type&gt; (*p1)[size]</code>和<code v-pre>&lt;type&gt;* p2[size]</code>的区别</p>
<blockquote>
<p><a href="https://www.geeksforgeeks.org/difference-between-int-p3-and-int-p3/" target="_blank" rel="noopener noreferrer">一个很好的解释</a></p>
<p>一个是指向整个数组的指针，一个是数据元素是指针的数组</p>
<p><code v-pre>*p1</code>返回的是指向的数组的首地址</p>
<p><code v-pre>*p2</code>返回的是指针数组里第一个指针元素的值</p>
</blockquote>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>程序参数</p>
<ul>
<li><code v-pre>int main(int argc, char const *argv[])</code></li>
<li><code v-pre>argv[0]</code>是命令本身，当使用<code v-pre>Unix</code>的符号链接时，反应符号链接的名字</li>
</ul>
</li>
<li>
<p><code v-pre>putchar</code></p>
<ul>
<li><code v-pre>int putchar(int c);</code></li>
<li>向标准输出写一个字符</li>
<li>返回写了几个字符，<code v-pre>EOF(-1)</code>表示写失败</li>
</ul>
</li>
<li>
<p><code v-pre>getchar</code></p>
<ul>
<li><code v-pre>int getchar(void);</code></li>
<li>从标准输入读入一个字符</li>
<li>返回读到的字符</li>
<li>返回<code v-pre>EOF</code>
<ul>
<li>Windows：<code v-pre>Ctrl + Z</code></li>
<li>Unix：<code v-pre>Ctrl + D</code></li>
</ul>
</li>
<li><code v-pre>shell</code>进行行编辑，然后程序从缓冲区读入数据</li>
</ul>
</li>
<li>
<p>字符串函数</p>
<ul>
<li>
<p><code v-pre>strlen</code></p>
<ul>
<li><code v-pre>size_t strlen(const char *s);</code></li>
<li>返回字符串的长度</li>
</ul>
</li>
<li>
<p><code v-pre>strcmp</code></p>
<ul>
<li><code v-pre>int strcmp(const char *s1, const char *s2);</code></li>
<li>比较两个字符串，返回：
<ul>
<li><code v-pre>0</code>：<code v-pre>s1 == s2</code></li>
<li><code v-pre>s1[idx] - s2[idx]</code>：<code v-pre>s1 != s2</code>，<code v-pre>idx</code>是第一个不相等字符的下标</li>
</ul>
</li>
</ul>
</li>
<li>
<p><code v-pre>strcpy</code></p>
<ul>
<li>
<p><code v-pre>char* strcpy(char* restrict dst, const char* restrict src);</code></p>
</li>
<li>
<p>把<code v-pre>src</code>的字符串拷贝到<code v-pre>dst</code>，返回<code v-pre>dst</code></p>
</li>
<li>
<p><code v-pre>restrict</code>关键字：表明不重叠（<code v-pre>C99</code>）</p>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-c"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">char*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> dst </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">char*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">malloc</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">strlen</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> +</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">strcpy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">dst</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p><code v-pre>strcat</code></p>
<ul>
<li><code v-pre>char* strcat(char* restrict s1, const char* restrict s2);</code></li>
<li>把<code v-pre>s2</code>拷贝到<code v-pre>s1</code>的后面，接成一个长的字符串，返回<code v-pre>s1</code></li>
<li><code v-pre>s1</code>必须有足够的空间</li>
</ul>
</li>
<li>
<p><code v-pre>strcpy</code>和<code v-pre>strcat</code>都可能出现安全问题，即目标没有足够的空间。尽可能不要使用这两个函数</p>
</li>
<li>
<p>安全版本</p>
<ul>
<li><code v-pre>char* strncpy(char* restrict dst, const char* restrict src, size_t n);</code></li>
<li><code v-pre>char* strncat(char* restrict s1, const char* restrict s2, size_t n);</code></li>
</ul>
</li>
<li>
<p><code v-pre>strncmp</code></p>
<ul>
<li><code v-pre>int strncmp(const char *s1, const char *s2, size_t n);</code></li>
<li>比较前n个字符</li>
</ul>
</li>
<li>
<p><code v-pre>strchr</code>，<code v-pre>strrchr</code></p>
<ul>
<li>
<p>字符串中找字符，一个从左开始，一个从右开始</p>
</li>
<li>
<p><code v-pre>char* strchr(const char* s, int c);</code></p>
</li>
<li>
<p><code v-pre>char* strrchr(const char* s, int c);</code></p>
</li>
<li>
<p>返回指针，返回<code v-pre>NULL</code>表示没有找到</p>
</li>
<li>
<p>找第二个</p>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-c"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">char</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> s</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">[]</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "Hello"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">char*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> p </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> strchr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'l'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">p </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> strchr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">p </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'l'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>找到后拷贝</p>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-c"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">char</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> s</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">[]</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "Hello"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">char*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> p </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> strchr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'l'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 拷贝后一段</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    char*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> t </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">char*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">malloc</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">strlen</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(p) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	strcpy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(t, p);</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    printf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">%s</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, t);</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    free</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(t);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 拷贝前一段</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    char</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> c </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> *</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">p;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    *</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">p </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    char*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> t </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">char*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">malloc</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">strlen</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(s) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    strcpy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(t, s);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    *</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">p </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> c;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    printf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">%s</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, t);</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    free</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(t);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p><code v-pre>strstr</code>，<code v-pre>strcasestr</code></p>
<ul>
<li>字符串中找字符串，<code v-pre>strcasestr</code>忽略大小写</li>
<li><code v-pre>char* strstr(const char* s1, const char* s2);</code></li>
<li><code v-pre>char* strcasestr(const char* s1, const char* s2);</code></li>
</ul>
</li>
<li>
<p><code v-pre>strtok</code></p>
</li>
</ul>
</li>
</ul>
<hr>
<h2 id="枚举" tabindex="-1"><a class="header-anchor" href="#枚举"><span>枚举</span></a></h2>
<ul>
<li>常量符号化：<code v-pre>const</code></li>
<li>枚举是一种用户定义的数据类型，意义是给一些可以排列起来的常量值名字</li>
<li><code v-pre>enum typeName {name 1, name 2, ..., name n};</code></li>
<li>枚举类型本质上是<strong>整型</strong></li>
<li>声明枚举量可以指定值</li>
<li>枚举类型名字通常并不真的使用，要用的是大括号里的名字，因为它们就是常量符号，类型是<code v-pre>int</code>，值则依次从<code v-pre>0</code>到<code v-pre>n</code></li>
<li>类型名字可以省略</li>
<li>定义枚举变量：<code v-pre>enum typeName var = name 1;</code></li>
<li>枚举变量本质上是<strong>整型变量</strong></li>
<li>套路：自动计数的枚举 <code v-pre>enum COLOR {RED, YELLOW, GREEN, NumCOLORS};</code></li>
<li>虽然枚举可以当作类型使用，但实际上很少用</li>
<li>如果有意义上排比的名字，用枚举比<code v-pre>const int</code>方便</li>
<li>枚举比宏好，因为枚举量有<code v-pre>int</code>类型</li>
</ul>
<hr>
<h2 id="自定义数据类型" tabindex="-1"><a class="header-anchor" href="#自定义数据类型"><span>自定义数据类型</span></a></h2>
<h3 id="结构体" tabindex="-1"><a class="header-anchor" href="#结构体"><span>结构体</span></a></h3>
<ul>
<li>
<p>结构体变量的本质是变量的集合</p>
</li>
<li>
<p>结构体变量中的成员占用独立的内存</p>
</li>
<li>
<p>结构类型声明，定义结构体变量，访问成员变量，初始化</p>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-c"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// First form</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">struct</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> &#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">yourType</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    &#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">type</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> var1;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    &#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">type</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> var2;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    &#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">type</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> var3;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">struct</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> &#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">yourType</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> yourVar;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// Second form</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">struct</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    &#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">type</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> var1;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    &#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">type</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> var2;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    &#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">type</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> var3;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}yourVar1, yourVar2;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// Third form</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">struct</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> &#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">yourType</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    &#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">type</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> var1;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    &#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">type</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> var2;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    &#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">type</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> var3;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}yourVar1, yourVar2;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// access</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">yourVar.var1 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> &#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">value</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// Initialisation</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">struct</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> &#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">yourType</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> yourVar1 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">&#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">value1</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">&#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">value2</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">&#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">value3</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">};</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">struct</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> &#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">yourType</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> yourVar1 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {.var1 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> &#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">value1</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, .var2 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> &#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">value2</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">};</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	// yourVar1.var3 == 0</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>在函数内部声明的结构类型只能在函数内部使用</li>
<li>通常在函数外部声明结构类型</li>
<li>不同无名结构体变量，尽管内部成员变量类型都相同，也不是同一数据类型</li>
</ul>
</li>
<li>
<p>结构运算</p>
<ul>
<li>访问整个结构</li>
<li>赋值
<ul>
<li><code v-pre>struct &lt;type&gt; var;	var = (struct &lt;type&gt;){&lt;value&gt;, };</code></li>
<li><code v-pre>var1 = var2;</code></li>
</ul>
</li>
<li>取地址
<ul>
<li>结构变量的名字并不是结构变量的地址，必须使用<code v-pre>&amp;</code>运算符</li>
<li><code v-pre>struct &lt;type&gt;* pVar = &amp;var;</code></li>
<li>用指针变量访问结构成员：<code v-pre>(*p).var</code>或者**<code v-pre>p-&gt;var</code>**</li>
<li><code v-pre>.</code>，<code v-pre>-&gt;</code>优先级高于<code v-pre>&amp;</code></li>
</ul>
</li>
<li>传给函数参数</li>
</ul>
</li>
<li>
<p>结构与函数</p>
<ul>
<li>整个结构作为参数的值传入函数</li>
<li>函数内新建一个结构变量，复制调用结构变量的值</li>
<li>可以返回一个结构</li>
</ul>
</li>
<li>
<p>输入结构</p>
<ul>
<li>没有直接的方式可以一次<code v-pre>scanf</code>一个结构</li>
<li>可以自己写一个函数
<ul>
<li><code v-pre>struct &lt;type&gt; getStruct(void);</code></li>
<li><code v-pre>struct &lt;type&gt;* getStruct(struct &lt;type&gt;* p);</code>
<ul>
<li>返回传进来的指针的好处是可以把程序连起来</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>结构数组</p>
</li>
<li>
<p>结构中的结构</p>
</li>
<li>
<p>位域：利用结构体类型指定成员变量占用内存的比特位宽度</p>
<ul>
<li>某些特殊场合，远古代码中可能被使用</li>
<li>位域成员必须是整型，占用位数不能超过类型宽度</li>
<li>当存储位不足时，自动启用新存储单元</li>
<li>可以舍弃当前未使用的位，重新启用存储单元</li>
</ul>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-c"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">struct</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> BW {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    unsigned</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> char</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> a : </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	// a 占用一个字节的4位宽度</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    unsigned</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> char</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> b : </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	// b 占用一个字节的5位宽度</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    unsigned</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> char</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">   : </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	// 重启一个存储单元表示新的成员</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    unsigned</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> char</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> c : </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	// c 占用一个字节的2位宽度</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="typedef" tabindex="-1"><a class="header-anchor" href="#typedef"><span><code v-pre>typedef</code></span></a></h3>
<ul>
<li>
<p>声明一个已有数据类型的新名字</p>
</li>
<li>
<p>没有创建新类型，只是创建了类型别名</p>
</li>
<li>
<p><code v-pre>typedef &lt;type&gt; &lt;newTypeName&gt;;</code></p>
</li>
<li>
<p>改善了程序的可读性</p>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-c"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// typedef basic data type</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">typedef</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> unsigned</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> char</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> byte;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// typedef function type</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> func</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">pFunc)(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> func;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">typedef</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(IFuncI)(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">IFuncI</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> pFunc </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> func;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// typedef array type</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">float</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> array</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">float</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">pArray)[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">] </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> &#x26;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">array;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">typedef</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> float</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(FArr5)[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">FArr5</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> pArray </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> &#x26;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">array;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// typedef struct type</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">typedef</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> struct</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    double</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> x;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    double</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> y;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">} Node;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">Node aNode </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0.0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0.0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">};</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	// rather than struct Node aNode;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="联合" tabindex="-1"><a class="header-anchor" href="#联合"><span>联合</span></a></h3>
<ul>
<li>
<p><code v-pre>union</code></p>
</li>
<li>
<p>语法上和<code v-pre>struct</code>一样</p>
</li>
<li>
<p><code v-pre>sizeof(union &lt;name&gt;) == sizeof(每个成员)的最大值</code></p>
</li>
<li>
<p>所有成员共享一个空间</p>
</li>
<li>
<p>同一时间只有一个成员是有效的</p>
</li>
<li>
<p><code v-pre>union</code>类型的变量只能以第一个成员类型的有效值进行初始化</p>
</li>
<li>
<p>应用</p>
<ul>
<li>
<p>判断系统大小端</p>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-c"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> isLittleEndian</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    union</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> i;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        char</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }test;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">    test</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">i</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">test</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">] </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<hr>
<h2 id="宏" tabindex="-1"><a class="header-anchor" href="#宏"><span>宏</span></a></h2>
<ul>
<li>
<p>编译预处理指令：<code v-pre>#</code>开头</p>
</li>
<li>
<p>预处理指令不是C语言的成分</p>
</li>
<li>
<p>宏定义：<code v-pre>#define &lt;name&gt; &lt;value&gt;</code></p>
</li>
<li>
<p>没有<code v-pre>;</code>因为不是C语句</p>
</li>
<li>
<p>名字必须是单词，值可以是各种东西</p>
</li>
<li>
<p>在C语言的编译器开始编译之前，编译预处理程序（The C Preprocessor）会把程序中的名字换成值</p>
</li>
<li>
<p>预处理宏：<strong>简单的文本替换</strong></p>
</li>
<li>
<p>预处理器不会对宏定义进行语法检查</p>
</li>
<li>
<p>如果一个宏的值中有其他宏的名字，也会被替换</p>
</li>
<li>
<p>如果一个宏的值超过一行，最后一行之前的行末需要加<code v-pre>\</code></p>
</li>
<li>
<p>宏的值后面出现的注释不会被当作宏的值的一部分</p>
</li>
<li>
<p>宏定义之后，后面代码可以随意使用，<strong>没有作用域的概念</strong></p>
</li>
<li>
<p>没有值的宏</p>
<ul>
<li>例：<code v-pre>#define _DEBUG</code></li>
<li>这类宏是用于条件编译的，后面有其他的编译预处理指令来检查这个宏是否已经被定义过了</li>
<li>定义宏编译指令：<code v-pre>gcc -DMACRO=1 file.c</code></li>
</ul>
</li>
<li>
<p>预定义的宏</p>
<ul>
<li><code v-pre>__LINE__</code>：当前所在行的行号</li>
<li><code v-pre>__FILE__</code>：源代码文件的文件名</li>
<li><code v-pre>__DATE__</code>：编译时的日期</li>
<li><code v-pre>__TIME__</code>：编译时的时间</li>
<li><code v-pre>__STDC__</code>：编译器是否遵循标准C规范，值为<code v-pre>1</code>或<code v-pre>0</code></li>
</ul>
</li>
<li>
<p>带参数的宏</p>
<ul>
<li>类似函数的宏</li>
<li><code v-pre>()</code>的原则
<ul>
<li>一切都要带括号</li>
<li>整个值要括号</li>
<li>参数出现的地方要括号</li>
</ul>
</li>
<li>宏表达式中不能出现递归定义</li>
</ul>
</li>
<li>
<p>宏和函数</p>
<ul>
<li>
<p>宏是由预处理器直接替换展开的，编译器不知道宏的存在，所以不安全</p>
<p>函数是由编译器直接编译的实体，调用行为由编译器决定</p>
</li>
<li>
<p>多次使用宏会导致最终可执行程序的体积增大</p>
<p>函数是跳转执行的，内存中只有一份函数体存在</p>
</li>
<li>
<p>宏的效率比函数要高，因为直接展开，无调用开销</p>
<p>函数调用时会创建活动记录，效率不如宏</p>
</li>
<li>
<p>使用原则</p>
<ul>
<li>
<p>能用函数实现的使用函数</p>
</li>
<li>
<p>宏可以用于生成一些常规性的代码；封装函数，加上类型信息</p>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-c"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 函数封装</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">#define</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> MALLOC</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">x</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)   (type</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">malloc</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">sizeof</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> *</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> x)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">#define</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> FREE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)           (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">free</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(p)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, p </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> NULL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">#define</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> LOG_INT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)     </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">printf</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">%s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> = </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">%d</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> #i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> i)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">#define</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> LOG_CHAR</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">c</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)    </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">printf</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">%s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> = </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">%c</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> #c</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> c)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">#define</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> LOG_STRING</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)  </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">printf</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">%s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> = </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">%s</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> #s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> s)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">#define</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> FOREACH</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)	 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> i </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; i </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">&#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> n; i</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">++</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">#define</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> BEGIN</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">			{</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">#define</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> END</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">				}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
</li>
</ul>
<hr>
<h2 id="多文件程序设计" tabindex="-1"><a class="header-anchor" href="#多文件程序设计"><span>多文件程序设计</span></a></h2>
<ul>
<li>
<p>一个源代码文件太长了适合分成几个文件</p>
</li>
<li>
<p>工程项目 -&gt; 功能X，Y，Z...</p>
</li>
<li>
<p>编译和链接</p>
<ul>
<li>
<p>一个<code v-pre>.c</code>文件是一个编译单元</p>
</li>
<li>
<p>编译器每次编译只处理一个编译单元</p>
</li>
<li>
<p>编译完形成<code v-pre>.o</code>文件，目标代码文件</p>
<blockquote>
<p>A file ending in .o is an <em>object file</em>. The compiler creates an object file for each source file, before linking them together, into the final executable.</p>
</blockquote>
</li>
<li>
<p>多个<code v-pre>.o</code>文件链接起来得到可执行文件<code v-pre>.exe</code></p>
</li>
</ul>
</li>
<li>
<p>文件可以定义为功能接口（可被其他文件的函数或数据）</p>
<ul>
<li>源文件：<strong>代码实现</strong>文件，<code v-pre>.c</code>
<ul>
<li>标准库的函数代码实现在某个<code v-pre>.lib</code>（Windows）或<code v-pre>.a</code>（Unix）中</li>
</ul>
</li>
<li>头文件：源文件的<strong>接口</strong>定义文件，<code v-pre>.h</code></li>
</ul>
</li>
<li>
<p>声明和定义</p>
<ul>
<li>声明是不产生代码的东西，意义是告诉编译器程序单元的存在
<ul>
<li>C语言中通过<code v-pre>extern</code>进行程序单元的声明，一些程序单元可以省略该关键字</li>
<li>函数原型</li>
<li>变量声明</li>
<li>结构声明</li>
<li>宏声明</li>
<li>枚举声明</li>
<li>类型声明</li>
<li><code v-pre>inline</code>函数</li>
</ul>
</li>
<li>定义是产生代码的东西，意义是指示程序单元的意义</li>
</ul>
</li>
<li>
<p>头文件<code v-pre>.h</code></p>
<ul>
<li>存放声明
<ul>
<li>规矩上，只有声明可以被放在头文件中</li>
<li>如果放定义，会造成一个项目中多个编译单元里有重名的实体</li>
<li>某些编译器允许几个编译单元中存在同名函数，或者用<code v-pre>weak</code>修饰符来强调这种存在</li>
</ul>
</li>
<li>在需要调用头文件中的函数的源代码文件<code v-pre>.c</code>中<code v-pre>#include</code>这个头文件，就能让编译器在编译的时候知道这个函数的原型，<strong>保证你调用时给出的参数值和返回值是正确的类型</strong></li>
<li><code v-pre>#include</code>是一个编译预处理指令，会把那个文件的全部文本内容<strong>原封不动</strong>地插入到他所在的地方</li>
<li><code v-pre>#include</code>的两种形式
<ul>
<li><code v-pre>&quot;&quot;</code>：要求编译器首先在当前目录中（<code v-pre>.c</code>文件所在的目录）寻找这个文件，如果没有，到编译器指定的目录去找</li>
<li><code v-pre>&lt;&gt;</code>：让编译器只在指定的目录去找</li>
</ul>
</li>
<li>编译器自己知道自己的标准库的头文件在哪里，环境变量和编译器命令行参数也可以指定寻找头文件的目录</li>
<li>现在的C语言编译器默认会引入所有的标准库</li>
<li>在使用和定义函数的地方都应该<code v-pre>#include</code>这个头文件
<ul>
<li>使用：编译器可以检查函数调用的正确性</li>
<li>定义：编译器可以检查对外宣称的函数原型和实际定义是否一致</li>
<li>一般的做法是任何的<code v-pre>.c</code>都有对应的同名<code v-pre>.h</code>（<code v-pre>main.c</code>除外），把所有对外公开的函数的原型和全局变量的声明都放进去</li>
</ul>
</li>
<li>不对外公开的函数：<code v-pre>static</code>修饰，使得该函数只能在所在的编译单元中被使用</li>
<li>静态全局变量<code v-pre>static</code>修饰，使得它成为只能在所在的编译单元中被使用的全局变量</li>
<li>普通全局变量的<strong>声明</strong>：<code v-pre>extern &lt;type&gt; &lt;identifier&gt;;</code></li>
</ul>
</li>
<li>
<p>标准头文件结构</p>
<ul>
<li>
<p>重复声明问题</p>
<ul>
<li>同一个编译单元里，同名的结构不能被重复声明</li>
<li>如果你的头文件里有结构的声明，很难让这个头文件不会在一个编译单元里被<code v-pre>#include</code>多次</li>
<li>所以需要<strong>标准头文件结构</strong></li>
</ul>
</li>
<li>
<p>运用条件编译和宏，保证这个头文件在一个编译单元中只会被<code v-pre>#include</code>一次</p>
<div class="language-h line-numbers-mode" data-highlighter="shiki" data-ext="h" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-h"><span class="line"><span>#ifndef _LIST_H_</span></span>
<span class="line"><span>#define _LIST_H_</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#include "node.h"</span></span>
<span class="line"><span></span></span>
<span class="line"><span>typedef struct _list {</span></span>
<span class="line"><span>    Node* head;</span></span>
<span class="line"><span>    Node* tail;</span></span>
<span class="line"><span>} List;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#endif</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>#progma once</code>也能起到相同的作用，但不是所有的编译器都支持</p>
</li>
</ul>
</li>
</ul>
<hr>
<h2 id="简论编译和链接" tabindex="-1"><a class="header-anchor" href="#简论编译和链接"><span>简论编译和链接</span></a></h2>
<ul>
<li>
<p>编译器（广义）</p>
<ul>
<li>
<p>预处理器</p>
</li>
<li>
<p>编译器</p>
</li>
<li>
<p>汇编器</p>
</li>
<li>
<p>链接器</p>
<div class="language-mermaid line-numbers-mode" data-highlighter="shiki" data-ext="mermaid" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-mermaid"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">graph LR;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">A((file.c))</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">B((file.h))</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">C(预处理器)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">A --> C</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">B --> C</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">D((file.i))</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">E(编译器)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">C --> D</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">D --> E</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">F((file.s))</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">G(汇编器)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">E --> F</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">F --> G</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">H((file.o))</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">G --> H</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>预编译</p>
<ul>
<li>生成中间文件<code v-pre>.i</code></li>
<li>处理所有的注释，以空格代替</li>
<li>将所有的<code v-pre>#define</code>删除，并且展开所有的宏定义</li>
<li>处理条件编译指令<code v-pre>#if, #ifdef, #elif, #else, #endif</code></li>
<li>处理<code v-pre>#include</code>，展开被包含的文件</li>
<li>保留编译器需要使用的<code v-pre>#pragma</code>指令</li>
<li>预处理指令：<code v-pre>gcc -E file.c -o file.i</code></li>
</ul>
</li>
<li>
<p>编译</p>
<ul>
<li>对预处理文件进行词法分析，语法分析和语义分析
<ul>
<li>词法分析：分析关键字，标识符，立即数等是否合法</li>
<li>语法分析：分析表达式是否遵循语法规则</li>
<li>语义分析：在语法分析的基础上进一步分析表达式是否合法</li>
</ul>
</li>
<li>分析结束后进行代码优化生成相应的汇编代码文件</li>
<li>编译指令：<code v-pre>gcc -S file.c -o file.s</code></li>
</ul>
</li>
<li>
<p>汇编</p>
<ul>
<li>汇编器将汇编代码转变为机器的可执行指令</li>
<li>生成机器代码目标文件<code v-pre>.o</code></li>
<li>汇编指令：<code v-pre>gcc -c file.s -o file.o</code></li>
</ul>
</li>
<li>
<p>链接</p>
<ul>
<li>
<p>链接器的主要作用是把各个模块之间相互引用的部分处理好，使得各个模块之间能够正确的衔接</p>
</li>
<li>
<p>静态链接：链接器在链接时将库的内容直接加入到可执行程序中，执行时与原来的那些文件没有关系</p>
<div class="language-mermaid line-numbers-mode" data-highlighter="shiki" data-ext="mermaid" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-mermaid"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">graph TB;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">A((file1.o))</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">B((file2.o))</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">C((libc.a))</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">D(链接器)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">E((a.out))</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">A --> D</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">B --> D</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">C --> D</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">D --> E</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>Linux</code>下静态库的创建和使用
<ul>
<li>编译静态库源码：<code v-pre>gcc -c lib.c -o lib.o</code></li>
<li>生成静态库文件：<code v-pre>ar -q lib.a lib.o</code></li>
<li>使用静态库编译：<code v-pre>gcc main.c lib.a -o main.out</code></li>
</ul>
</li>
</ul>
</li>
<li>
<p>动态链接：可执行程序在运行时才动态加载库进行链接，库的内容不会进入可执行程序当中</p>
<div class="language-mermaid line-numbers-mode" data-highlighter="shiki" data-ext="mermaid" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-mermaid"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">graph LR;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">A((lib1.so))</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">B((lib2.so))</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">C[stub1]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">D[stub2]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">E(链接器)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">F((a.out))</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">A --- C</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">B --- D</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">C --> E</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">D --> E</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">E --> F</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>Linux</code>下动态库的创建和使用
<ul>
<li>编译动态库源码：<code v-pre>gcc -shared dlib.c -o dlib.so</code></li>
<li>使用动态库编译：<code v-pre>gcc main.c -lbl -o main.out</code></li>
<li>关键系统调用：
<ul>
<li><code v-pre>dlopen</code>：打开动态库文件</li>
<li><code v-pre>dlsym</code>：查找动态库中的函数并返回调用地址</li>
<li><code v-pre>dlclose</code>：关闭动态库文件</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>条件编译</p>
<ul>
<li>
<p>条件编译是<strong>预编译</strong>指示命令，用于控制是否编译某段代码</p>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-c"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">#if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">C</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> ==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/*</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#ifdef C</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#ifndef C</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">*/</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	// statements</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">#else</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	//statements</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">#endif</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>实际工程中条件编译主要用于以下两种情况：</p>
<ul>
<li>不同产品线共用一份代码</li>
<li>区分编译产品的调试版和发布版</li>
</ul>
</li>
</ul>
</li>
<li>
<p><code v-pre>#error</code>，<code v-pre>#warning</code></p>
<ul>
<li>
<p>用于生成一个自定义的编译错误消息/警告</p>
</li>
<li>
<p>用法：<code v-pre>#error message</code>，<code v-pre>message</code>不需要双引号</p>
</li>
<li>
<p>是一个预编译器指示字</p>
</li>
<li>
<p>可用于提示编译条件是否满足</p>
<p>例：</p>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-c"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">#ifndef</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> __cplusplus</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">	#error</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> This file should be processed with C++ compiler.</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">#endif</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>编译过程中的任意错误信息意味着无法生成最终的可执行程序</p>
</li>
</ul>
</li>
<li>
<p><code v-pre>#pragma</code></p>
<ul>
<li>
<p>用于指示编译器完成一些特定的动作</p>
</li>
<li>
<p><code v-pre>#pragma</code>所定义的很多指示字是编译器特有的</p>
</li>
<li>
<p>在不同的编译器间是不可移植的</p>
<ul>
<li>预处理器将忽略它不认识的<code v-pre>#pragma</code>指令</li>
<li>不同的编译器可能以不同的方式解释同一条<code v-pre>#pragma</code>指令</li>
</ul>
</li>
<li>
<p>用法：<code v-pre>#pragma parameter</code></p>
<ul>
<li><code v-pre>#pragma message</code>
<ul>
<li><code v-pre>message</code>参数在大多数的编译器中都有相似的实现</li>
<li>在编译时输出消息到编译输出窗口中</li>
<li>可以用于条件编译中提示代码的版本信息</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<hr>
<h2 id="输入输出" tabindex="-1"><a class="header-anchor" href="#输入输出"><span>输入输出</span></a></h2>
<ul>
<li>
<p>格式化输入输出</p>
<ul>
<li>
<p><code v-pre>printf</code>：<code v-pre>%[flag][width][.prec][hIL]type</code></p>
<table>
<thead>
<tr>
<th><code v-pre>Flag</code></th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>-</code></td>
<td>左对齐</td>
</tr>
<tr>
<td><code v-pre>+</code></td>
<td>在前面放<code v-pre>+</code>或<code v-pre>-</code></td>
</tr>
<tr>
<td><code v-pre>(space)</code></td>
<td>正数留空</td>
</tr>
<tr>
<td><code v-pre>0</code></td>
<td>0填充</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><code v-pre>width</code>, <code v-pre>prec</code></th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>number</code></td>
<td>最小字符数</td>
</tr>
<tr>
<td><code v-pre>*</code></td>
<td>指代参数是字符数</td>
</tr>
<tr>
<td><code v-pre>.number</code></td>
<td>小数点后的位数</td>
</tr>
<tr>
<td><code v-pre>.*</code></td>
<td>指代参数是小数点后的位数</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><code v-pre>hIL</code></th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>hh</code></td>
<td>单个字节</td>
</tr>
<tr>
<td><code v-pre>h</code></td>
<td><code v-pre>short</code></td>
</tr>
<tr>
<td><code v-pre>l</code></td>
<td><code v-pre>long</code></td>
</tr>
<tr>
<td><code v-pre>ll</code></td>
<td><code v-pre>long long</code></td>
</tr>
<tr>
<td><code v-pre>L</code></td>
<td><code v-pre>long double</code></td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><code v-pre>type</code></th>
<th>用于</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>i / d</code></td>
<td>int</td>
</tr>
<tr>
<td><code v-pre>u / U</code></td>
<td>unsigned int</td>
</tr>
<tr>
<td><code v-pre>o / O</code></td>
<td>八进制</td>
</tr>
<tr>
<td><code v-pre>x</code></td>
<td>十六进制</td>
</tr>
<tr>
<td><code v-pre>X</code></td>
<td>字母大写的十六进制</td>
</tr>
<tr>
<td><code v-pre>f / F</code></td>
<td>float，6位</td>
</tr>
<tr>
<td><code v-pre>e / E</code></td>
<td>指数</td>
</tr>
<tr>
<td><code v-pre>g</code></td>
<td>float</td>
</tr>
<tr>
<td><code v-pre>G</code></td>
<td>float</td>
</tr>
<tr>
<td><code v-pre>a / A</code></td>
<td>十六进制浮点</td>
</tr>
<tr>
<td><code v-pre>c</code></td>
<td>char</td>
</tr>
<tr>
<td><code v-pre>s</code></td>
<td>字符串</td>
</tr>
<tr>
<td><code v-pre>p</code></td>
<td>指针</td>
</tr>
<tr>
<td><code v-pre>n</code></td>
<td>读入/写出的个数</td>
</tr>
</tbody>
</table>
</li>
<li>
<p><code v-pre>scanf</code>：<code v-pre>%[flag]type</code></p>
<table>
<thead>
<tr>
<th><code v-pre>Flag</code></th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>*</code></td>
<td>跳过</td>
</tr>
<tr>
<td><code v-pre>number</code></td>
<td>读入最大字符数</td>
</tr>
<tr>
<td><code v-pre>hh</code></td>
<td><code v-pre>char</code></td>
</tr>
<tr>
<td><code v-pre>h</code></td>
<td><code v-pre>short</code></td>
</tr>
<tr>
<td><code v-pre>l</code></td>
<td><code v-pre>long, double</code></td>
</tr>
<tr>
<td><code v-pre>ll</code></td>
<td><code v-pre>long long</code></td>
</tr>
<tr>
<td><code v-pre>L</code></td>
<td><code v-pre>long double</code></td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><code v-pre>type</code></th>
<th>用于</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>d</code></td>
<td><code v-pre>int</code></td>
</tr>
<tr>
<td><code v-pre>i</code></td>
<td><code v-pre>int</code>，可以接受十六进制或八进制</td>
</tr>
<tr>
<td><code v-pre>u</code></td>
<td><code v-pre>unsigned int</code></td>
</tr>
<tr>
<td><code v-pre>o</code></td>
<td>八进制</td>
</tr>
<tr>
<td><code v-pre>x</code></td>
<td>十六进制</td>
</tr>
<tr>
<td><code v-pre>a, e, f, g</code></td>
<td>float</td>
</tr>
<tr>
<td><code v-pre>c</code></td>
<td>char</td>
</tr>
<tr>
<td><code v-pre>s</code></td>
<td>字符串</td>
</tr>
<tr>
<td><code v-pre>[...]</code></td>
<td>所允许的字符</td>
</tr>
<tr>
<td><code v-pre>p</code></td>
<td>指针</td>
</tr>
</tbody>
</table>
</li>
<li>
<p><code v-pre>printf</code>返回输出的字符数，<code v-pre>scanf</code>返回读入的项目数</p>
</li>
</ul>
</li>
<li>
<p>文件输入输出</p>
<ul>
<li>
<p>程序运行重定向：<code v-pre>&lt;</code>， <code v-pre>&gt;</code></p>
</li>
<li>
<p><code v-pre>FILE</code></p>
<ul>
<li>
<p>标准库里声明的类型</p>
</li>
<li>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-c"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">FILE</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">*</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> fopen</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> char*</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> restrict</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> path</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> const</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> char*</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> restrict</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> mode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> fclose</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">FILE</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">*</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> stream</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">fscanf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">FILE</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> ...</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">fprintf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">FILE</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> ...</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 打开文件的标准代码</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">FILE</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> fp </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> fopen</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"file"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "r"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(fp) {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    fscanf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(fp, ...);</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    fclose</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(fp);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // ...</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/*</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	r:		打开只读</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	r+:		打开读写，从文件头开始</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	w:		打开只写。如果不存在则新建，如果存在则清空</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	w+:		打开读写。如果不存在则新建，如果存在则清空</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	a:		打开追加。如果不存在则新建，如果存在则从文件尾开始</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	..x:	只新建，如果文件已存在则不能打开</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">*/</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
</li>
<li>
<p>文本文件 vs 二进制文件</p>
<ul>
<li>
<p>本质上，所有文件都是二进制文件</p>
</li>
<li>
<p>文本文件无非是用最简单的方式可以读写的文件</p>
</li>
<li>
<p>二进制文件是需要专门的程序来读写的文件</p>
</li>
<li>
<p>文本文件的输入输出是格式化，可能经过转码</p>
</li>
<li>
<p><code v-pre>Unix</code>喜欢用文本文件来做数据存储和程序配置；<code v-pre>Windows</code>喜欢用二进制文件</p>
</li>
<li>
<p>文本的优点是方便人类读写，而且跨平台；缺点是输入输出要经过格式化，开销大</p>
<p>二进制的优点是程序读写快，缺点是人类读写困难，而且不跨平台</p>
</li>
<li>
<p>程序为什么要文件</p>
<ul>
<li>配置：<code v-pre>Unix</code>用文本，<code v-pre>Windows</code>用注册表</li>
<li>数据：稍微有点量的数据都放数据库了</li>
<li>媒体：只能是二进制</li>
</ul>
</li>
<li>
<p>现实是，程序通过第三方库来读写文件，很少直接读写二进制文件做底层操作</p>
</li>
</ul>
</li>
</ul>
<hr>
<h2 id="程序的基本数据区" tabindex="-1"><a class="header-anchor" href="#程序的基本数据区"><span>程序的基本数据区</span></a></h2>
<ul>
<li>栈
<ul>
<li>用于维护函数调用上下文
<ul>
<li>保存了参数，返回地址，<code v-pre>old ebp</code>，寄存器信息，局部变量，其他数据信息</li>
</ul>
</li>
<li>后进先出，栈底栈顶</li>
<li>每次函数调用都对应着栈上的一个活动记录
<ul>
<li>调用函数的活动记录位于栈的中部</li>
<li>被调函数的活动记录位于栈的顶部</li>
</ul>
</li>
<li>函数调用时，对应的栈空间在函数返回前是专用的</li>
<li>函数调用结束后，栈空间将被释放，数据不再有效；在调用下一个函数前数据仍然存在</li>
</ul>
</li>
<li>堆
<ul>
<li>堆是程序中一块预留的内存空间，可由程序自由使用</li>
<li>堆中被程序申请的内存在被主动释放前将一直有效</li>
<li>为什么有了栈还需要堆？
<ul>
<li>栈上的数据在函数返回后就会被释放掉，无法传递到函数外部</li>
</ul>
</li>
<li>系统对堆空间的管理方式：空闲链表法，位图法，对象池法等</li>
</ul>
</li>
<li>静态存储区
<ul>
<li>随着程序的运行而分配空间</li>
<li>生命周期直到程序运行结束</li>
<li>在程序的编译期静态存储区的大小就已经确定</li>
<li>主要用于保存全局变量和静态局部变量</li>
<li>静态存储区的信息最终会保存到可执行程序中</li>
</ul>
</li>
<li>程序的内存布局
<ul>
<li>可执行文件的布局：<code v-pre>File Header | .text | .data | .bss</code></li>
<li>映射到进程的地址空间：<code v-pre>stack | heap | .bss | .data | .text | 未映射区域</code></li>
<li>堆栈段在程序运行后才正式存在</li>
<li><code v-pre>.bss</code>段存放的是未初始化的全局变量和静态变量</li>
<li><code v-pre>.data</code>段保存的是已经初始化了的全局变量和静态变量</li>
<li><code v-pre>.rodata</code>段存放程序中的常量值，如字符串常量</li>
<li><code v-pre>.text</code>段存放的是程序中的可执行代码</li>
<li>静态存储区通常指程序中的<code v-pre>.bss</code>和<code v-pre>.data</code>段</li>
<li>只读存储区通常指程序中的<code v-pre>.rodata</code>段</li>
</ul>
</li>
</ul>
</div></template>


