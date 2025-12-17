<template><div><h1 id="react-js-note" tabindex="-1"><a class="header-anchor" href="#react-js-note"><span>React.js Note</span></a></h1>
<hr>
<h2 id="intro" tabindex="-1"><a class="header-anchor" href="#intro"><span>Intro</span></a></h2>
<ul>
<li>React is a JavaScript library for rendering UI</li>
</ul>
<hr>
<h2 id="components" tabindex="-1"><a class="header-anchor" href="#components"><span>Components</span></a></h2>
<ul>
<li>React is all about <em>Components</em></li>
<li>A component is a piece of the UI that has its own logic and appearance</li>
<li>We don't have to manipulate DOM manually anymore with components</li>
<li><strong>A component is just a JavaScript function</strong>
<ul>
<li>Their names always begin with a capital letter</li>
<li>They return JSX markup</li>
</ul>
</li>
<li>React application begins at a &quot;root&quot; component</li>
</ul>
<h3 id="jsx" tabindex="-1"><a class="header-anchor" href="#jsx"><span>JSX</span></a></h3>
<ul>
<li>JavaScript XML</li>
<li>A syntax extension for JavaScript that lets you write HTML-like markup inside a <code v-pre>.js</code> file</li>
<li>Rules of JSX
<ul>
<li>Return a single root element
<ul>
<li><code v-pre>React.createElement()</code> is invoked behind the scene</li>
<li>Built-in tag <code v-pre>&lt;Fragment&gt;</code>
<ul>
<li>Alternatively written as <code v-pre>&lt;&gt;...&lt;/&gt;</code></li>
<li>It's an empty tag</li>
<li>Let you group things without leaving any trace in the browser HTML tree</li>
</ul>
</li>
</ul>
</li>
<li>All tags must be closed</li>
<li><code v-pre>camelCase </code><s>all</s> most of the things
<ul>
<li>HTML and SVG attributes are written in <code v-pre>camelCase</code></li>
<li>For historical reasons, <a href="https://developer.mozilla.org/docs/Web/Accessibility/ARIA" target="_blank" rel="noopener noreferrer"><code v-pre>aria-*</code></a> and <a href="https://developer.mozilla.org/docs/Learn/HTML/Howto/Use_data_attributes" target="_blank" rel="noopener noreferrer"><code v-pre>data-*</code></a> attributes are written as in HTML with dashes</li>
</ul>
</li>
</ul>
</li>
<li>Dynamic data: <code v-pre>{}</code>
<ul>
<li><strong>As text</strong> directly inside a JSX tag</li>
<li><strong>As attributes</strong> immediately following the <code v-pre>=</code> sign</li>
<li>Any JavaScript expression will work between curly braces, including function calls</li>
</ul>
</li>
<li>Fundamentally, JSX just provides a syntactic sugar for the <code v-pre>React.createElement</code> function</li>
</ul>
<h3 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span><code v-pre>props</code></span></a></h3>
<ul>
<li>
<p><code v-pre>props</code> are the information that you pass to a JSX tag</p>
</li>
<li>
<p>Process</p>
<ul>
<li>Set <code v-pre>props</code>: Add <strong>custom attributes</strong> onto the custom HTML elements (components)</li>
<li>Merge into object: React merges all <code v-pre>props</code> into a single object</li>
<li>Receive <code v-pre>props</code>: Components (the function) will accept the <code v-pre>props</code> as the first argument</li>
</ul>
</li>
<li>
<p>Conventionally the parameter is named with <code v-pre>props</code></p>
</li>
<li>
<p>Usually you don't need the whole <code v-pre>props</code> object itself, so destruct it into individual <code v-pre>prop</code></p>
</li>
<li>
<p>Pass <code v-pre>props</code> through multiple components</p>
<div class="language-jsx line-numbers-mode" data-highlighter="shiki" data-ext="jsx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-jsx"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Profile</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">props</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> className</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"card"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      &#x3C;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Avatar</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD"> {</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">...</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">props</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  );</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>De-constructing or setting default values on <code v-pre>props</code>: <code v-pre>...</code></li>
</ul>
</li>
<li>
<p>Composition of components</p>
<ul>
<li>
<p>When you nest component in another component, the parent component will receive that content in <code v-pre>props</code></p>
</li>
<li>
<p><code v-pre>{props.children}</code></p>
</li>
<li>
<p>Like a wrapper</p>
<div class="language-jsx line-numbers-mode" data-highlighter="shiki" data-ext="jsx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-jsx"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> Avatar</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> './Avatar.js'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Card</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({ </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">children</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> }) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> className</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"card"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">      {</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">children</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  );</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD"> default</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Profile</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Card</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      &#x3C;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Avatar</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic">        size</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">{</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">100</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">}</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic">        person</span><span style="--shiki-light:white;--shiki-dark:#FFFFFF">={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      /></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;/</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Card</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  );</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<blockquote>
<p><strong>Trick</strong>: Pass a component identifier as a value for a <code v-pre>prop</code> to dynamically render different components inside a component</p>
<ul>
<li>That <code v-pre>prop</code> should be named with a start of capital letter</li>
<li>The value: default element: <Default>; customised element: <ComponentName></li>
</ul>
</blockquote>
<ul>
<li><code v-pre>props</code> are <strong>immutable</strong>
<ul>
<li>When a component needs to change its props (for example, in response to a user interaction or new data), it will have to “ask” its parent component to pass it different <code v-pre>props</code>— <em>a new object</em></li>
</ul>
</li>
</ul>
<h3 id="conditional-rendering" tabindex="-1"><a class="header-anchor" href="#conditional-rendering"><span>Conditional Rendering</span></a></h3>
<ul>
<li>Shortcuts: <code v-pre>&lt;condition&gt; ? &lt;content1&gt; : &lt;content2&gt;</code>, <code v-pre>&lt;condition&gt; &amp;&amp; &lt;content&gt;</code></li>
</ul>
<h3 id="rendering-lists" tabindex="-1"><a class="header-anchor" href="#rendering-lists"><span>Rendering Lists</span></a></h3>
<ul>
<li>
<p><code v-pre>map</code>, <code v-pre>filter</code>: array of objects to array of JSX markup</p>
</li>
<li>
<p><strong><code v-pre>key</code></strong></p>
<ul>
<li>You need to give each array item a <code v-pre>key</code></li>
<li>A string or a number that uniquely identifies it among other items in that array</li>
<li>Useful for future manipulations</li>
<li>Do <strong>NOT</strong> generate <code v-pre>key</code> on the fly, instead you should include them in your data</li>
<li>Where to get your <code v-pre>key</code>
<ul>
<li>Data from a database or API: use their keys</li>
<li>Locally generated data: use an incrementing counter <a href="https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID" target="_blank" rel="noopener noreferrer"><code v-pre>crypto.randomUUID()</code></a> or a package like <a href="https://www.npmjs.com/package/uuid" target="_blank" rel="noopener noreferrer"><code v-pre>uuid</code></a> when creating items</li>
</ul>
</li>
<li><strong>The components won't receive <code v-pre>key</code> as a <code v-pre>prop</code></strong>, it's only used as a hint by React itself</li>
</ul>
<div class="language-jsx line-numbers-mode" data-highlighter="shiki" data-ext="jsx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-jsx"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD"> default</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> List</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({ </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">people</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> }) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> listItems</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> people</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">map</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">person</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> =></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">li</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> key</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">{</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">person</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">id</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">{</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">person</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  );</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">ul</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD">{</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">listItems</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD">}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">ul</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="keep-components-pure" tabindex="-1"><a class="header-anchor" href="#keep-components-pure"><span>Keep Components <strong>Pure</strong></span></a></h3>
<ul>
<li>
<p>Components should only return their JSX, and not change any objects or variables that existed before rendering</p>
<ul>
<li>It's totally okay to change variables and objects that you've just created while rendering inside the component functions</li>
</ul>
</li>
<li>
<p>React offers a &quot;Strict mode&quot; in which it calls each component's function twice during development</p>
</li>
<li>
<p>By calling the component functions twice, strict mode helps find components that break these rules</p>
</li>
<li>
<p>Strict mode has no effect in production</p>
</li>
<li>
<p><a href="#dealing-with-effects">Side effects</a></p>
<ul>
<li>In React, <strong>side effects usually belong inside event handlers</strong></li>
<li>Even though event handlers are defined <em>inside</em> your component, they don’t run <em>during</em> rendering! <strong>So event handlers don’t need to be pure</strong></li>
<li>As a last resort, use <code v-pre>useEffect</code></li>
</ul>
</li>
</ul>
<hr>
<h2 id="interactivity" tabindex="-1"><a class="header-anchor" href="#interactivity"><span>Interactivity</span></a></h2>
<h3 id="event-handlers" tabindex="-1"><a class="header-anchor" href="#event-handlers"><span>Event Handlers</span></a></h3>
<ul>
<li>
<p>You can respond to events by declaring event handler functions <strong>inside the components</strong></p>
<div class="language-jsx line-numbers-mode" data-highlighter="shiki" data-ext="jsx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-jsx"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD"> default</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Button</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> handleClick</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    alert</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'You clicked me!'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">button</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> onClick</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">{</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">handleClick</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      Click me</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">button</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  );</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// if the handler accept parameters, a common pattern for using it is:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// &#x3C;button onClick={() => handleClick(params)}>Click me&#x3C;/button></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Often you'll want the parent component to specify a child's event handler and pass it to the child as a <code v-pre>prop</code></p>
</li>
<li>
<p>By convention, handlers should start with <code v-pre>handle</code>; handlers <code v-pre>prop</code> should start with <code v-pre>on</code></p>
</li>
<li>
<p>On all built-in HTML elements we have full access to all native DOM events</p>
</li>
<li>
<p>Built-in components only support browser event names</p>
</li>
<li>
<p>Custom components can have custom handler name</p>
</li>
<li>
<p>Event handlers receive an <strong>event object</strong> as their only argument. By convention, it’s usually called <code v-pre>e</code></p>
</li>
<li>
<p>All events propagate in React except <code v-pre>onScroll</code>, which only works on the JSX tag you attach it to</p>
<ul>
<li>Stop propagation: <code v-pre>e.stopPropagation()</code></li>
</ul>
</li>
<li>
<p><code v-pre>e.preventDefault()</code></p>
</li>
</ul>
<h3 id="state" tabindex="-1"><a class="header-anchor" href="#state"><span><code v-pre>state</code></span></a></h3>
<ul>
<li>
<p>Why local variable isn't enough</p>
<ul>
<li><strong>Local variables don’t persist between renders.</strong> When React renders this component a second time, it renders it from scratch—it doesn’t consider any changes to the local variables</li>
<li><strong>Changes to local variables won’t trigger renders.</strong> React doesn’t realize it needs to render the component again with the new data</li>
</ul>
</li>
<li>
<p>To update a component with new data, two things need to happen:</p>
<ul>
<li><strong>Retain</strong> the data between renders</li>
<li><strong>Trigger</strong> React to render the component with new data (re-rendering)</li>
</ul>
</li>
<li>
<p><code v-pre>state</code> is the component-specific memory</p>
</li>
<li>
<p><code v-pre>useState(initialState)</code></p>
<ul>
<li>A React Hook that lets you add a state variable to your component</li>
<li><code v-pre>initialState</code>
<ul>
<li>The value you want the <code v-pre>state</code> to be initially</li>
</ul>
</li>
<li>Returns
<ul>
<li>The current <code v-pre>state</code> variable to retain data between renders</li>
<li>The <code v-pre>set</code> function that lets you update the state to a different value and trigger a re-render
<ul>
<li>The <code v-pre>set</code> function <strong>only updates the state variable for the next render</strong></li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-react"><span class="line"><span>import { useState } from "react";</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function Component(props) {</span></span>
<span class="line"><span>    const [title, setTitle] = useState(props.title);</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>Avoid recreating the initial state</p>
<ul>
<li>
<p>React saves the initial state once and ignores it on the next renders.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-javascript"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> TodoList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  const</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B">todos</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B">setTodos</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">] </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> useState</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">createInitialTodos</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">());</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  // ...</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Although the result of <code v-pre>createInitialTodos()</code> is only used for the initial render, you’re still calling this function on every render. This can be wasteful if it’s creating large arrays or performing expensive calculations.</p>
</li>
<li>
<p>To solve this, you may <strong>pass it as an initializer function</strong> to <code v-pre>useState</code> instead:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-javascript"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> TodoList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  const</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B">todos</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B">setTodos</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">] </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> useState</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">createInitialTodos</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  // ...</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Notice that you’re passing <code v-pre>createInitialTodos</code>, which is the <em>function itself</em>, and not <code v-pre>createInitialTodos()</code>, which is the result of calling it. If you pass a function to <code v-pre>useState</code>, React will only call it during initialization.</p>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>You can have as many state variables of as many types as you like in one component</p>
</li>
<li>
<p><code v-pre>state</code> is isolated and private</p>
<ul>
<li>If you render the same component multiple times, each will get its own state</li>
<li>State is fully private to the component declaring it, the parent component cannot change it</li>
</ul>
</li>
<li>
<p><strong>A <code v-pre>state</code> variable's value never changes within a render, even if its event handler's code is asynchronous</strong></p>
</li>
<li>
<p><strong><code v-pre>props</code> vs. <code v-pre>state</code></strong></p>
<ul>
<li><a href="https://react.dev/learn/passing-props-to-a-component" target="_blank" rel="noopener noreferrer"><strong>Props</strong> are like arguments you pass</a> to a function. They let a parent component pass data to a child component and customize its appearance. For example, a <code v-pre>Form</code> can pass a <code v-pre>color</code> <code v-pre>prop</code> to a <code v-pre>Button</code></li>
<li><a href="https://react.dev/learn/state-a-components-memory" target="_blank" rel="noopener noreferrer"><strong>State</strong> is like a component’s memory.</a> It lets a component keep track of some information and change it in response to interactions. For example, a <code v-pre>Button</code> might keep track of <code v-pre>isHovered</code> state</li>
</ul>
</li>
</ul>
<h3 id="trigger-render-and-commit" tabindex="-1"><a class="header-anchor" href="#trigger-render-and-commit"><span>Trigger, Render and Commit</span></a></h3>
<ul>
<li>The process of requesting and serving UI
<ol>
<li>Triggering a render
<ul>
<li>Component's initial render, or</li>
<li>The component's (or one of its ancestors) <code v-pre>state</code> has been updated</li>
</ul>
</li>
<li>Rendering the component (<strong>Calling your component function</strong>)
<ul>
<li>On initial render, React will call the root component <code v-pre>root.render()</code></li>
<li>For <strong>subsequent renders</strong>, React will call the function component whose <code v-pre>state</code> update triggered the render (this process is recursive)
<blockquote>
<p>You may have thought about the performance issue, look at the <a href="https://legacy.reactjs.org/docs/optimizing-performance.html" target="_blank" rel="noopener noreferrer">Performance section</a></p>
</blockquote>
</li>
</ul>
</li>
<li>Committing to the DOM
<ul>
<li>For the initial render, React will use <code v-pre>appendChild()</code> DOM API to put all the DOM nodes it has created on the screen</li>
<li>For re-renders, React will apply the **minimal **necessary operations to make the DOM match the latest rendering output
<ul>
<li>With the help of a virtual DOM</li>
</ul>
</li>
</ul>
</li>
<li>Browser paint the screen</li>
</ol>
</li>
<li>Optimisation by avoiding unnecessary component function execution
<ul>
<li>
<p><code v-pre>memo()</code></p>
<ul>
<li>Wrap the component function as a parameter of <code v-pre>memo()</code></li>
<li>Component function won't execute if the <code v-pre>props</code> value are the same</li>
<li>Blocking a component execution will also block all children components execution</li>
<li>However,
<ul>
<li>Don't overuse <code v-pre>memo()</code></li>
<li>Use it as high up in the component tree as possible</li>
<li>Checking <code v-pre>props</code> with <code v-pre>memo()</code> costs performance</li>
<li>Don't use it on components where <code v-pre>props</code> change frequently</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Refactor your project to a clever structure</p>
</li>
</ul>
</li>
</ul>
<h3 id="queueing-a-series-of-state-updates" tabindex="-1"><a class="header-anchor" href="#queueing-a-series-of-state-updates"><span>Queueing a series of <code v-pre>state</code> updates</span></a></h3>
<ul>
<li>
<p>Batching</p>
<ul>
<li>React waits until all code in the event handlers or <code v-pre>useEffect()</code> has run before processing your state updates</li>
</ul>
</li>
<li>
<p>Update <code v-pre>state</code> <strong>based on its previous value</strong></p>
<ul>
<li>
<p>Pass <strong>a function</strong> to <code v-pre>setSomething</code> as <code v-pre>nextState</code>, which will be treated as an <strong>updater function</strong></p>
</li>
<li>
<p><a href="https://react.dev/reference/react/useState#setstate" target="_blank" rel="noopener noreferrer">Reference</a></p>
</li>
<li>
<p>Updater functions must be <strong>pure</strong> and only <strong>return the result</strong></p>
</li>
<li>
<p><strong>React queues this function to be processed after all the other code in the event handler has run</strong></p>
</li>
<li>
<p>During the next render, React goes through the queue and gives you <strong>the latest updated <code v-pre>state</code></strong></p>
</li>
<li>
<p>By convention, name the updater function argument by the first letters of the corresponding <code v-pre>state</code> variable</p>
<div class="language-jsx line-numbers-mode" data-highlighter="shiki" data-ext="jsx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-jsx"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">useState</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'react'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD"> default</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Counter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  const</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B">number</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B">setNumber</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">] </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> useState</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD">{</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">number</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD">}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">button</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> onClick</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">{</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        setNumber</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">n</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> =></span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> n</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> +</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        setNumber</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">n</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> =></span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> n</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> +</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        setNumber</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">n</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> =></span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> n</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> +</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      }</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>+3&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">button</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;/></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  )</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>Update the DOM synchronously</p>
<div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-react"><span class="line"><span>flushSync(() => {</span></span>
<span class="line"><span>  setTodos([ ...todos, newTodo]);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>listRef.current.lastChild.scrollIntoView();</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>This will instruct React to update the DOM synchronously right after the code wrapped in <code v-pre>flushSync</code> executes</li>
</ul>
<blockquote>
<p>Using <code v-pre>flushSync</code> is uncommon and can hurt the performance of your app</p>
</blockquote>
</li>
</ul>
<h3 id="updating-objects-or-arrays-in-state" tabindex="-1"><a class="header-anchor" href="#updating-objects-or-arrays-in-state"><span>Updating Objects or Arrays in <code v-pre>state</code></span></a></h3>
<ul>
<li>You shouldn't change objects or arrays that you hold in the <code v-pre>state</code> directly</li>
<li>Instead, when you want to update it, you need to create a new one (or make a copy of an existing one), and then set the <code v-pre>state</code> to use the copy</li>
<li>Treat <code v-pre>state</code> as <strong>immutable</strong></li>
<li>Updating a nested object or array of objects: <a href="https://github.com/immerjs/use-immer" target="_blank" rel="noopener noreferrer">Immer</a>
<ul>
<li>To achieve deep clone</li>
<li>How to use Immer
<ul>
<li>Run <code v-pre>npm install use-immer</code> to add Immer as a dependency</li>
<li>Replace <code v-pre>import { useState } from 'react'</code> with <code v-pre>import { useImmer } from 'use-immer'</code></li>
<li>Now you can change the <code v-pre>state</code> directly inside the updater function (<strong>syntax sugar</strong>)</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="component-lifecycle" tabindex="-1"><a class="header-anchor" href="#component-lifecycle"><span>Component Lifecycle</span></a></h3>
<ul>
<li>A component <em>mounts</em> when it’s added to the screen</li>
<li>A component <em>updates</em> when it receives new <code v-pre>props</code> or <code v-pre>state</code>, usually in response to an interaction</li>
<li>A component <em>unmounts</em> when it’s removed from the screen</li>
<li>All values declare in the component body are reactive</li>
</ul>
<hr>
<h2 id="managing-state" tabindex="-1"><a class="header-anchor" href="#managing-state"><span>Managing <code v-pre>state</code></span></a></h2>
<h3 id="thinking-about-ui-declaratively" tabindex="-1"><a class="header-anchor" href="#thinking-about-ui-declaratively"><span>Thinking about UI declaratively</span></a></h3>
<ul>
<li>
<p>Identify component's different visual states</p>
<ul>
<li>Treat component as a <em><strong>state machine</strong></em></li>
<li>Have a <code v-pre>state</code> variable - <code v-pre>status</code>, and let it decide how the component should look like (return different markup)</li>
</ul>
</li>
<li>
<p>Determine the human or computer events that trigger those state changes</p>
<ul>
<li>Set <code v-pre>state</code> variables to update UI</li>
</ul>
</li>
<li>
<p>Represent the <code v-pre>state</code> in memory with <code v-pre>useState</code></p>
</li>
<li>
<p>Remove any non-essential <code v-pre>state</code></p>
<ul>
<li>Derive values from essential <code v-pre>states</code></li>
</ul>
</li>
<li>
<p>Connect the event handlers to <code v-pre>setState</code></p>
<blockquote>
<p>Components wrap controller and view together, but make them much easier to code and much less fragile</p>
</blockquote>
</li>
</ul>
<h3 id="principle-for-structuring-state" tabindex="-1"><a class="header-anchor" href="#principle-for-structuring-state"><span>Principle for structuring <code v-pre>state</code></span></a></h3>
<ul>
<li>Group related state</li>
<li>Avoid contradiction</li>
<li>Avoid redundancy</li>
<li>Avoid duplication</li>
<li>Avoid deeply nested <code v-pre>state</code></li>
</ul>
<h3 id="sharing-state-between-components" tabindex="-1"><a class="header-anchor" href="#sharing-state-between-components"><span>Sharing  <code v-pre>state</code> between components</span></a></h3>
<ul>
<li><strong>Lifting <code v-pre>state</code> up</strong>
<ul>
<li>Sometimes, you want the <code v-pre>state</code> of two components to always change together. To do it, remove <code v-pre>state</code> from both of them, move it to their closest common parent, and then pass <code v-pre>state</code> and <code v-pre>setState</code> down to them <strong>via <code v-pre>props</code></strong></li>
</ul>
</li>
<li>Uncontrolled components: components with local <code v-pre>state</code></li>
<li>Controlled component: the important information in it is driven by <code v-pre>props</code> rather than its own local <code v-pre>state</code></li>
<li>When writing a component, consider which information in it should be controlled (<em>via <code v-pre>props</code></em>), and which information should be uncontrolled (<em>via <code v-pre>state</code></em>)</li>
<li><strong>Single source of truth</strong></li>
</ul>
<h3 id="react-maintain-an-ui-tree-like-dom" tabindex="-1"><a class="header-anchor" href="#react-maintain-an-ui-tree-like-dom"><span>React maintain an UI tree (like DOM)</span></a></h3>
<ul>
<li>
<p><code v-pre>state</code> is tied to a <em><strong>position</strong></em> and <em><strong>component type</strong></em> in the tree</p>
<ul>
<li><strong><code v-pre>state</code> is held inside React instead of &quot;living&quot; inside the component</strong></li>
<li>React preserves a component’s <code v-pre>state</code> for as long as it’s being rendered at its position in the UI tree. If it gets removed, or a different component gets rendered at the same position, React discards its <code v-pre>state</code></li>
<li><strong>It's the position in the UI tree</strong> - not in the JSX markup
<ul>
<li>Same components at the same position preserves <code v-pre>state</code></li>
<li>Different components at the same position reset <code v-pre>state</code></li>
</ul>
</li>
</ul>
</li>
<li>
<p><code v-pre>key</code> can be used to make React distinguish between any components</p>
<ul>
<li>
<p><code v-pre>key</code> isn't just for lists</p>
</li>
<li>
<p><code v-pre>key</code> is not globally unique, they only specify the position within the parent</p>
<blockquote>
<p><strong>Trick</strong>: Use <code v-pre>key</code> for <strong>resetting components at the same position</strong></p>
<ul>
<li>React will destroy the old component instance if the value of <code v-pre>key</code> has changed</li>
<li>Unmount and remount the component</li>
</ul>
</blockquote>
</li>
</ul>
</li>
</ul>
<h3 id="context-api" tabindex="-1"><a class="header-anchor" href="#context-api"><span>Context API</span></a></h3>
<ul>
<li>
<p>Prop drilling: passing shared data through multiple components layers</p>
<ul>
<li>
<p>It can be a problem when you have too many <code v-pre>state</code> to manage</p>
</li>
<li>
<p>Solution 1: Component Composition</p>
</li>
</ul>
</li>
<li>
<p><strong><code v-pre>Context</code></strong></p>
<ul>
<li>
<p>Lets the parent component make some information available to any component in the tree below it—no matter how deep—without passing it explicitly through <code v-pre>props</code></p>
</li>
<li>
<p><strong>How to use <code v-pre>Context</code></strong></p>
<ol>
<li>
<p>Create the context</p>
<ul>
<li>
<p>Create a context in a new file and export it</p>
<div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-react"><span class="line"><span>// LevelContext.js</span></span>
<span class="line"><span>import { createContext } from 'react';</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const LevelContext = createContext(1);</span></span>
<span class="line"><span>// note: the value cannot only be states</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>The only argument to <code v-pre>createContext</code> is the <em>default</em> value</p>
</li>
</ul>
</li>
<li>
<p>Provide the context</p>
<ul>
<li>
<p>If you don’t provide the context, React will use the default value</p>
</li>
<li>
<p>Wrap the component who provide context with a context provider</p>
<div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-react"><span class="line"><span>// Section.js</span></span>
<span class="line"><span>import { LevelContext } from './LevelContext.js';</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default function Section({ level, children }) {</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &#x3C;section className="section"></span></span>
<span class="line"><span>      &#x3C;LevelContext.Provider value={level}></span></span>
<span class="line"><span>      {/* This tells React:</span></span>
<span class="line"><span>      		If any component inside &#x3C;Section> ask for `LevelContext,</span></span>
<span class="line"><span>      		give them this `level`.</span></span>
<span class="line"><span>      		The component will use the value of the nearest</span></span>
<span class="line"><span>      		&#x3C;LevelContext.Provider> in the UI tree above it</span></span>
<span class="line"><span>      */}</span></span>
<span class="line"><span>        {children}</span></span>
<span class="line"><span>      &#x3C;/LevelContext.Provider></span></span>
<span class="line"><span>    &#x3C;/section></span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>Outsourcing <code v-pre>context</code> and <code v-pre>state</code> into a separate Provider component is a common pattern</p>
</blockquote>
</li>
</ul>
</li>
<li>
<p>Consume the context</p>
<div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-react"><span class="line"><span>// Heading.js</span></span>
<span class="line"><span>import { useContext } from 'react';</span></span>
<span class="line"><span>import { LevelContext } from './LevelContext.js';</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default function Heading({ children }) {</span></span>
<span class="line"><span>  const level = useContext(LevelContext);</span></span>
<span class="line"><span>  // `useContext` tells React that the `Heading`component wants to </span></span>
<span class="line"><span>  // read the `LevelContext`</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // ...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// App.js</span></span>
<span class="line"><span>&#x3C;Section level={4}></span></span>
<span class="line"><span>  &#x3C;Heading>Sub-sub-heading&#x3C;/Heading></span></span>
<span class="line"><span>  &#x3C;Heading>Sub-sub-heading&#x3C;/Heading></span></span>
<span class="line"><span>  &#x3C;Heading>Sub-sub-heading&#x3C;/Heading></span></span>
<span class="line"><span>&#x3C;/Section></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>React will re-execute the component function if the context value changes</p>
<blockquote>
<p>You can also outsource <code v-pre>useContext(LevelContext)</code> into the Provider component</p>
<div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-react"><span class="line"><span>// LevelContext.js</span></span>
<span class="line"><span>export function useLevel() {</span></span>
<span class="line"><span>  return useContext(LevelContext);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Heading.js</span></span>
<span class="line"><span>import { useLevel } from "./LevelContext.js";</span></span>
<span class="line"><span>const level = useContext();</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
</li>
</ul>
</li>
</ol>
</li>
<li>
<p><strong>Context lets you write components that “adapt to their surroundings” and display themselves differently depending on <em>where</em> (or, in other words, <em>in which context</em>) they are being rendered</strong></p>
</li>
<li>
<p>In React, the only way to override some context coming from above is to wrap children into a context provider with a different value</p>
</li>
<li>
<p>Different React contexts don't override each other</p>
</li>
<li>
<p>One component may use or provide many different contexts without a problem</p>
</li>
<li>
<p><strong>Use case for <code v-pre>context</code></strong></p>
<ul>
<li><strong>Theming:</strong> If your app lets the user change its appearance (e.g. dark mode), you can put a context provider at the top of your app, and use that context in components that need to adjust their visual look</li>
<li><strong>Current account:</strong> Many components might need to know the currently logged in user. Putting it in context makes it convenient to read it anywhere in the tree. Some apps also let you operate multiple accounts at the same time (e.g. to leave a comment as a different user). In those cases, it can be convenient to wrap a part of the UI into a nested provider with a different current account value</li>
<li><strong>Routing:</strong> Most routing solutions use context internally to hold the current route. This is how every link “knows” whether it’s active or not. If you build your own router, you might want to do it too</li>
<li><strong>Managing state:</strong> As your app grows, you might end up with a lot of state closer to the top of your app. Many distant components below may want to change it. It is common to <a href="https://react.dev/learn/scaling-up-with-reducer-and-context" target="_blank" rel="noopener noreferrer">use a reducer together with context</a> to manage complex state and pass it down to distant components without too much hassle</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="reducer" tabindex="-1"><a class="header-anchor" href="#reducer"><span>Reducer</span></a></h3>
<ul>
<li>
<p>A reducer in React or JavaScript programming is a function that reduce one or more complex values to a simpler one</p>
</li>
<li>
<p>You can consolidate <em>state update logic</em> with a reducer outside your component in a single function, called <code v-pre>reducer</code></p>
</li>
<li>
<p>How to use Reducer</p>
<ol>
<li>
<p>Move from setting <code v-pre>state</code> to dispatch <code v-pre>actions</code></p>
<div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-react"><span class="line"><span>// From this</span></span>
<span class="line"><span>function handleAddTask(text) {</span></span>
<span class="line"><span>  setTasks([</span></span>
<span class="line"><span>    ...tasks,</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      id: nextId++,</span></span>
<span class="line"><span>      text: text,</span></span>
<span class="line"><span>      done: false,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  ]);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function handleChangeTask(task) {</span></span>
<span class="line"><span>  setTasks(</span></span>
<span class="line"><span>    tasks.map((t) => {</span></span>
<span class="line"><span>      if (t.id === task.id) {</span></span>
<span class="line"><span>        return task;</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        return t;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function handleDeleteTask(taskId) {</span></span>
<span class="line"><span>  setTasks(tasks.filter((t) => t.id !== taskId));</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// To this</span></span>
<span class="line"><span>function handleAddTask(text) {</span></span>
<span class="line"><span>  dispatch(</span></span>
<span class="line"><span>    // "action" object</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      type: 'ADD',</span></span>
<span class="line"><span>      payload: {</span></span>
<span class="line"><span>        id: nextId++,</span></span>
<span class="line"><span>      	text: text,</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>  	}</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function handleChangeTask(task) {</span></span>
<span class="line"><span>  dispatch({</span></span>
<span class="line"><span>    type: 'CHANGE',</span></span>
<span class="line"><span>    payload: task,</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function handleDeleteTask(taskId) {</span></span>
<span class="line"><span>  dispatch({</span></span>
<span class="line"><span>    type: 'DELETE',</span></span>
<span class="line"><span>    payload: taskId,</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>An action object can have any shapes, by convention it's common to give a string <code v-pre>type</code> that describes what happened, and pass any additional information in an object <code v-pre>payload</code></li>
</ul>
</li>
<li>
<p>Write a reducer function</p>
<ol>
<li>Declare the current <code v-pre>state</code> as the first argument</li>
<li>Declare the <code v-pre>action</code> object as the second argument</li>
<li>Return the next <code v-pre>state</code> from the reducer</li>
</ol>
<div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-react"><span class="line"><span>function yourReducer(state, action) {</span></span>
<span class="line"><span>  // return next state for React to set</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-react"><span class="line"><span>function tasksReducer(tasks, action) {</span></span>
<span class="line"><span>  switch (action.type) {</span></span>
<span class="line"><span>    case 'ADD': {</span></span>
<span class="line"><span>      return [</span></span>
<span class="line"><span>        ...tasks,</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>          id: action.payload.id,</span></span>
<span class="line"><span>          text: action.payload.text,</span></span>
<span class="line"><span>          done: false,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      ];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    case 'CHANGE': {</span></span>
<span class="line"><span>      return tasks.map((t) => {</span></span>
<span class="line"><span>        if (t.id === action.payload.id) {</span></span>
<span class="line"><span>          return action.payload;</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>          return t;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    case 'DELETE': {</span></span>
<span class="line"><span>      return tasks.filter((t) => t.id !== action.payload);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    default: {</span></span>
<span class="line"><span>      throw Error('Unknown action: ' + action.type);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>It is recommend wrapping each <code v-pre>case</code> block into the <code v-pre>{</code> and <code v-pre>}</code> curly braces so that variables declared inside of different <code v-pre>case</code> don’t clash with each other</li>
<li>Reducer function is declared <strong>outside the component function</strong> so that it won't be re-created every time the component gets updated</li>
</ul>
</li>
<li>
<p>Use the reducer from your component</p>
<div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-react"><span class="line"><span>import {useReducer} from 'react';</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// From this</span></span>
<span class="line"><span>const [tasks, setTasks] = useState(initialTasks);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// To this </span></span>
<span class="line"><span>const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>The <code v-pre>useReducer()</code> Hook takes two arguments:
<ol>
<li>A reducer function</li>
<li>An initial state</li>
</ol>
</li>
<li>And it returns:
<ol>
<li>A stateful value</li>
<li>A dispatch function (to “dispatch” user actions to the reducer)</li>
</ol>
</li>
<li>If you want, you can even move the reducer to a different file</li>
</ul>
</li>
</ol>
</li>
<li>
<p><strong>Reducer must be pure</strong></p>
</li>
<li>
<p>Each action describes a single user interaction, even if that leads to multiple changes in the data</p>
</li>
<li>
<p>Writing concise reducer with <code v-pre>immer</code></p>
<ul>
<li><code v-pre>useImmerReducer</code></li>
<li>Reducers managed by <code v-pre>useImmerReducer</code> can mutate their first argument <code v-pre>state</code> and don’t need to return the new state (<strong>remember to <code v-pre>break</code></strong>)</li>
</ul>
</li>
</ul>
<hr>
<h2 id="refs" tabindex="-1"><a class="header-anchor" href="#refs"><span><code v-pre>refs</code></span></a></h2>
<h3 id="what-is-refs" tabindex="-1"><a class="header-anchor" href="#what-is-refs"><span>What is <code v-pre>refs</code></span></a></h3>
<ul>
<li>
<p>When you want a component to store some information, but you don't want to that information to trigger new renders, you can use a <code v-pre>ref</code></p>
</li>
<li>
<p>Adding a <code v-pre>ref</code> to your component</p>
<div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-react"><span class="line"><span>import { useRef } from 'react';</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const ref = useRef(0);</span></span>
<span class="line"><span>// useRef returns an object like this:</span></span>
<span class="line"><span>// { current: 0 }</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>You can mutate <code v-pre>ref</code> instead of using a set function, just change the value of <code v-pre>ref.current</code></p>
</li>
<li>
<p><strong><code v-pre>ref</code> is mutable; <code v-pre>state</code> is immutable</strong></p>
</li>
<li>
<p>When to use <code v-pre>refs</code></p>
<ul>
<li>Storing <code v-pre>timeout</code> IDs</li>
<li>Storing and manipulating DOM elements</li>
<li>Storing other objects that aren't necessary to calculate the JSX</li>
</ul>
</li>
</ul>
<h3 id="manipulating-dom-with-refs" tabindex="-1"><a class="header-anchor" href="#manipulating-dom-with-refs"><span>Manipulating DOM with <code v-pre>refs</code></span></a></h3>
<ul>
<li>
<p>DOM manipulation is the most common use case for <code v-pre>refs</code></p>
</li>
<li>
<p>Getting a <code v-pre>ref</code> to the node</p>
<div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-react"><span class="line"><span>const myRef = useRef(null);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#x3C;div ref={myRef}>&#x3C;/div></span></span>
<span class="line"><span></span></span>
<span class="line"><span>myRef.current.scrollIntoView();</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>Accessing another component's DOM nodes</strong></p>
<ul>
<li>
<p>By default. React does not let a component access the DOM nodes of other components</p>
</li>
<li>
<p>A component can specify that it &quot;forwards&quot; its <code v-pre>ref</code> to one of <strong>its children</strong></p>
<div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-react"><span class="line"><span>const MyInput = forwardRef((props, ref) => {</span></span>
<span class="line"><span>  return &#x3C;input {...props} ref={ref} />;</span></span>
<span class="line"><span>});</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>&lt;MyInput ref={inputRef} /&gt;</code> tells React to put the corresponding DOM node into <code v-pre>inputRef.current</code>. However, it’s up to the <code v-pre>MyInput</code> component to opt into that—by default, it doesn’t</li>
<li>The <code v-pre>MyInput</code> component is declared using <code v-pre>forwardRef()</code>. <strong>This opts it into receiving the <code v-pre>inputRef</code> from above as the second <code v-pre>ref</code> argument</strong> which is declared after <code v-pre>props</code></li>
<li><code v-pre>MyInput</code> itself passes the <code v-pre>ref</code> it received to the <code v-pre>&lt;input&gt;</code> inside of it</li>
</ul>
<blockquote>
<p>In design systems, it is a common pattern for low-level components like buttons, inputs, and so on, to forward their refs to their DOM nodes</p>
</blockquote>
</li>
</ul>
</li>
<li>
<p>You can expose component APIs via <a href="https://react.dev/reference/react/useImperativeHandle" target="_blank" rel="noopener noreferrer"><code v-pre>useImperativeHandle()</code></a></p>
</li>
<li>
<p>Avoid changing DOM nodes managed by React</p>
</li>
</ul>
<hr>
<h2 id="dealing-with-effects" tabindex="-1"><a class="header-anchor" href="#dealing-with-effects"><span>Dealing with <code v-pre>Effects</code></span></a></h2>
<h3 id="what-is-effects" tabindex="-1"><a class="header-anchor" href="#what-is-effects"><span>What is <code v-pre>Effects</code></span></a></h3>
<ul>
<li>
<p>Two types of logic inside React components</p>
<ul>
<li><strong>Rendering code</strong>
<ul>
<li>Where you take the <code v-pre>props</code> and <code v-pre>state</code>, transform them, and return the JSX you want to see on the screen</li>
<li>Renderer must be pure</li>
</ul>
</li>
<li><strong>Event handlers</strong>
<ul>
<li>Nested functions inside your components that do things rather than just calculate them</li>
<li>Event handlers contain <a href="https://en.wikipedia.org/wiki/Side_effect_(computer_science)" target="_blank" rel="noopener noreferrer">“side effects”</a> (they change the program’s state) caused by a specific user action</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Sometimes it isn't enough</p>
</li>
<li>
<p><code v-pre>effects</code> let you specify side effects are <strong>caused by rendering itself, or parent components' <code v-pre>state</code> change (<em>which is, essentially, re-rendering itself</em>), rather than by a particular event</strong></p>
<blockquote>
<p><em>For example, a <code v-pre>state</code> change in the event handler of a component can cause some side effects that need to be handled in the <code v-pre>useEffect</code> inside the child component</em></p>
</blockquote>
</li>
<li>
<p><code v-pre>effects</code> run <strong>at the end of a <a href="#render-and-commit">commit</a> after the screen updates</strong>. This is a good time to synchronize the React components with some <strong>external system</strong> (like network or a third-party library or browser APIs)</p>
</li>
</ul>
<h3 id="effects-dependencies" tabindex="-1"><a class="header-anchor" href="#effects-dependencies"><span><code v-pre>effects</code> &amp; <code v-pre>dependencies</code></span></a></h3>
<ul>
<li>
<p>How to write an <code v-pre>effect</code></p>
<ol>
<li>
<p>Declare an <code v-pre>effect</code></p>
<ul>
<li>By default, your <code v-pre>effect</code> will run every render</li>
</ul>
<div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-react"><span class="line"><span>useEffect(() => {</span></span>
<span class="line"><span>  // Code here will run</span></span>
<span class="line"><span>});</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Specify the <code v-pre>dependencies</code></p>
<ul>
<li>Most <code v-pre>effects</code> should only re-run when needed rather than after every render</li>
<li>You can tell React to skip unnecessary re-running the <code v-pre>effect</code> by specifying an <strong>array</strong> of <code v-pre>dependencies</code> as the second argument to the <code v-pre>useEffect</code> call</li>
<li>The <code v-pre>dependencies</code> array can contain multiple dependencies. <strong>React will only skip re-running the <code v-pre>effect</code> if <em>all</em> of the dependencies you specify have exactly the same values as they had during the previous render</strong></li>
<li>You can't &quot;choose&quot; your dependencies, linter does</li>
</ul>
<div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-react"><span class="line"><span>useEffect(() => {</span></span>
<span class="line"><span>  // This runs after every render</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>useEffect(() => {</span></span>
<span class="line"><span>  // This runs only on mount (when the component appears)</span></span>
<span class="line"><span>}, []);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>useEffect(() => {</span></span>
<span class="line"><span>  // This runs on mount and also if either a or b have changed since the last render</span></span>
<span class="line"><span>}, [a, b]);</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>React compares the dependency values using the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is" target="_blank" rel="noopener noreferrer"><code v-pre>Object.is</code></a> comparison</li>
<li>The problem with object or function dependencies: infinite loop
<ul>
<li><code v-pre>effect</code> execute even if the dependencies are logically equivalent (<em>with different pointers</em>)</li>
<li><a href="https://react.dev/reference/react/useCallback" target="_blank" rel="noopener noreferrer"><strong><code v-pre>useCallback()</code></strong></a> to solve this problem
<ul>
<li>Cache the function definition between re-renders</li>
</ul>
</li>
<li>Or, try to avoid them</li>
</ul>
</li>
<li>Mutable values (including global variables) aren’t reactive, so they shouldn't be dependencies
<ul>
<li>A mutable value like <code v-pre>location.pathname</code> can’t be a dependency</li>
<li>A mutable value like <code v-pre>ref.current</code> or things you read from it also can’t be a dependency</li>
<li><code v-pre>ref</code> can be listed in dependencies but no point to do it because it's never changed</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Add cleanup if needed</p>
<ul>
<li>Some <code v-pre>effects</code> need to specify how to stop, undo, or clean up whatever they were doing</li>
<li>Return a cleanup function from your <code v-pre>useEffect()</code></li>
<li>React will call your cleanup function <strong>each time before the <code v-pre>useEffect()</code> runs again</strong>, and one final time when <strong>the component unmounts</strong></li>
</ul>
<div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-react"><span class="line"><span>  useEffect(() => {</span></span>
<span class="line"><span>    const connection = createConnection();</span></span>
<span class="line"><span>    connection.connect();</span></span>
<span class="line"><span>    return () => {</span></span>
<span class="line"><span>      connection.disconnect();</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  }, []);</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
</li>
<li>
<p>A potential problem with <code v-pre>effects</code> and <code v-pre>setState</code>: an infinte loop</p>
<ul>
<li><code v-pre>effect</code> execute after rendering, <code v-pre>setState</code> inside <code v-pre>effect</code> re-trigger the rendering</li>
<li>Solution: remove <code v-pre>state</code> from dependencies and pass updater function to <code v-pre>setState</code> in <code v-pre>useEffect()</code></li>
</ul>
</li>
<li>
<p>React will remount the <code v-pre>effects</code> whenever you save a file in development</p>
</li>
</ul>
<h3 id="when-not-to-use-useeffect" tabindex="-1"><a class="header-anchor" href="#when-not-to-use-useeffect"><span>When NOT to use <code v-pre>useEffect()</code></span></a></h3>
<ul>
<li>Some logic should only run once when the application starts. You can put it outside your components
<ul>
<li><strong>Those codes wil execute once the first time the file is imported</strong></li>
</ul>
</li>
<li>Updating state based on <code v-pre>props</code> and <code v-pre>state</code>
<ul>
<li>Calculate the value inside the component</li>
</ul>
</li>
<li><a href="https://react.dev/learn/you-might-not-need-an-effect#initializing-the-application" target="_blank" rel="noopener noreferrer">Etc.</a></li>
</ul>
<hr>
<h2 id="react-hooks" tabindex="-1"><a class="header-anchor" href="#react-hooks"><span>React Hooks</span></a></h2>
<ul>
<li><strong>Hooks are functions that let you &quot;hook into&quot; React state and features from function components</strong></li>
<li>Functions starting with <code v-pre>use</code></li>
<li>Can only be called at the top level of your components or your own Hooks</li>
<li>Can only call Hooks on the top level</li>
</ul>
<h3 id="usecallback" tabindex="-1"><a class="header-anchor" href="#usecallback"><span><a href="https://react.dev/reference/react/useCallback" target="_blank" rel="noopener noreferrer"><code v-pre>useCallback()</code></a></span></a></h3>
<ul>
<li>
<p>Let you cache a function definition between re-renders</p>
<div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-react"><span class="line"><span>const cachedFn = useCallback(fn, dependencies);</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>Return</p>
<ul>
<li>On the initial render, <code v-pre>useCallback</code> returns the <code v-pre>fn</code> function you have passed</li>
<li>During subsequent renders, it will either return an already stored <code v-pre>fn</code>  function from the last render (if the dependencies haven’t changed), or return the <code v-pre>fn</code> function you have passed during this render</li>
</ul>
</li>
<li>
<p>Usage</p>
<ul>
<li>You pass it as a prop to a component wrapped in <code v-pre>memo()</code>. You want to skip re-rendering if the value hasn’t changed. Memoization lets your component re-render only if dependencies changed</li>
<li>The function you’re passing is later used as a dependency of some Hook. For example, another function wrapped in <code v-pre>useCallback()</code> depends on it, or you depend on this function from <code v-pre>useEffect()</code></li>
</ul>
</li>
</ul>
<h3 id="usememo" tabindex="-1"><a class="header-anchor" href="#usememo"><span><a href="https://react.dev/reference/react/useMemo" target="_blank" rel="noopener noreferrer"><code v-pre>useMemo()</code></a></span></a></h3>
<ul>
<li>
<p>Let you cache the result of a calculation between re-renders</p>
<div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-react"><span class="line"><span>const cachedValue = useMemo(calcValue, dependencies);</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>Parameters</p>
<ul>
<li><code v-pre>calculateValue</code>: <strong>The function calculating the value</strong> that you want to cache. It should be pure, should take no arguments, and should return a value of any type. React will call your function during the initial render. On next renders, React will return the same value again if the <code v-pre>dependencies</code> have not changed since the last render. Otherwise, it will call <code v-pre>calculateValue</code>, return its result, and store it so it can be reused later</li>
</ul>
</li>
<li>
<p>Return</p>
<ul>
<li>On the initial render, <code v-pre>useMemo</code> returns the result of calling <code v-pre>calculateValue</code> with no arguments</li>
<li>During next renders, it will either return an already stored value from the last render (if the dependencies haven’t changed), or call <code v-pre>calculateValue</code> again, and return the result that <code v-pre>calculateValue</code> has returned</li>
</ul>
</li>
<li>
<p>Usage</p>
<ul>
<li><strong>You should only rely on <code v-pre>useMemo()</code> as a performance optimization</strong></li>
<li>Skipping expensive recalculations</li>
</ul>
</li>
</ul>
<h3 id="custom-hooks" tabindex="-1"><a class="header-anchor" href="#custom-hooks"><span>Custom Hooks</span></a></h3>
<ul>
<li>Share logic between components</li>
<li>Hook names always start with <code v-pre>use</code></li>
<li>Custom hooks let you share stateful logic, not <code v-pre>state</code> itself; each call to a Hook is completely independent from every other call to the same Hook</li>
<li>When to use custom hook
<ul>
<li>
<p>With time, most of your app's <code v-pre>effect</code> will be in custom Hooks</p>
<ul>
<li>You make the data flow to and from your Effects very explicit</li>
<li>You let your components focus on the intent rather than on the exact implementation of your Effects</li>
<li>When React adds new features, you can remove those Effects without changing any of your components</li>
</ul>
</li>
<li>
<p>Keep custom Hooks focused on concrete high-level use cases</p>
</li>
<li>
<p>A good custom Hook makes the calling code more declarative by constraining what it does</p>
</li>
</ul>
</li>
</ul>
<hr>
<h2 id="debugging-react-apps" tabindex="-1"><a class="header-anchor" href="#debugging-react-apps"><span>Debugging React Apps</span></a></h2>
<ul>
<li>Error messages</li>
<li>Browser debugger</li>
<li>&quot;strict mode&quot;
<ul>
<li>A React component <code v-pre>StrictMode</code> as an wrapper for other components</li>
</ul>
</li>
<li>React DevTools</li>
</ul>
<hr>
<h2 id="class-based-components" tabindex="-1"><a class="header-anchor" href="#class-based-components"><span>Class-Based Components</span></a></h2>
<h3 id="what-why" tabindex="-1"><a class="header-anchor" href="#what-why"><span>What &amp; Why</span></a></h3>
<ul>
<li>Functional component is the default and most modern approach</li>
<li>Traditionally, which means before React 16.8, you had to use class-based components to manage <code v-pre>state</code></li>
<li>React 16.8 introduced <em>React Hooks</em> for functional components</li>
<li>Class-based components <strong>CAN'T</strong> use React Hooks</li>
</ul>
<h3 id="working-with-class-based-components" tabindex="-1"><a class="header-anchor" href="#working-with-class-based-components"><span>Working with Class-Based Components</span></a></h3>
<div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-react"><span class="line"><span>import { Component } from 'react';</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class User extends Component {</span></span>
<span class="line"><span>  static contextType = UsersContext;</span></span>
<span class="line"><span>  // pitfall: can only link to one context</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  constructor() {</span></span>
<span class="line"><span>    super();</span></span>
<span class="line"><span>    // For class-based component, state is always an object</span></span>
<span class="line"><span>    // And it also has to be a property named "state"</span></span>
<span class="line"><span>    this.state = {</span></span>
<span class="line"><span>      showUsers: true,</span></span>
<span class="line"><span>      more: "test",</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  toggleUsersHandler() {</span></span>
<span class="line"><span>    // React will merge the new state object with the old one</span></span>
<span class="line"><span>    // this.setState({showUsers: false});</span></span>
<span class="line"><span>    this.setStae((curState) => {return {showUsers: !curState.showUsers};});</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    const usersList = (</span></span>
<span class="line"><span>      &#x3C;ul></span></span>
<span class="line"><span>      	{this.context.users.map(user => &#x3C;User key={user.id} name={user.name} />)}</span></span>
<span class="line"><span>      &#x3C;/ul></span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>      &#x3C;div className={classes.user}></span></span>
<span class="line"><span>        &#x3C;button onClick={this.toggleUsersHandler.bind(this)}></span></span>
<span class="line"><span>        	{this.state.showUsers ? "Hide" : "Show"} Users</span></span>
<span class="line"><span>        &#x3C;/button></span></span>
<span class="line"><span>        {this.state.showUsers &#x26;&#x26; usersList}</span></span>
<span class="line"><span>      &#x3C;/div></span></span>
<span class="line"><span>  	);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Component lifecycle methods</span></span>
<span class="line"><span>// A more imperative way, you have to add if block to specify when you want to skip the execution</span></span>
<span class="line"><span>componentDidMount() === useEffect(fn, []);							// Called once a component mounted</span></span>
<span class="line"><span>componentDidUpdate() === useEffect(fn, [someValue]);		// Called once a component updated</span></span>
<span class="line"><span>componentWillUnmount() === //cleanup function						// Called once a component unmounted</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="error-boundaries" tabindex="-1"><a class="header-anchor" href="#error-boundaries"><span>Error Boundaries</span></a></h3>
<ul>
<li>
<p>Right now (Nov 17 2023) this feature can only be used in class-based component</p>
</li>
<li>
<p>An error generated inside a component cannot be handled inside it, it should be treated as an information, and be catched and handled in the parent component</p>
</li>
<li>
<div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-react"><span class="line"><span>import { Component } from 'react';</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Wrap this error handler component around components should be protected by it</span></span>
<span class="line"><span>export default class ErrorBoundary extends Component {</span></span>
<span class="line"><span>  constructor() {</span></span>
<span class="line"><span>    super();</span></span>
<span class="line"><span>    this.state = {hasError: false};</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  componentDidCatch(error) {</span></span>
<span class="line"><span>    this.setState({hasError: true});</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    if(hasError)</span></span>
<span class="line"><span>      return &#x3C;p>Something went wrong!&#x3C;/p>;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    return this.props.children</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<hr>
<h2 id="handling-http-request" tabindex="-1"><a class="header-anchor" href="#handling-http-request"><span>Handling HTTP Request</span></a></h2>
<h3 id="how-to-connect-a-back-end-database" tabindex="-1"><a class="header-anchor" href="#how-to-connect-a-back-end-database"><span>How to Connect a Back-end / Database</span></a></h3>
<ul>
<li>Not all operations can be performed in the browser
<ul>
<li>Cannot connect to a database directly</li>
<li>Cannot access a file system</li>
<li>Etc.</li>
</ul>
</li>
<li>Browser &lt;-&gt; Back Server &lt;-&gt; Database via HTTP</li>
</ul>
<h3 id="fetching-data" tabindex="-1"><a class="header-anchor" href="#fetching-data"><span>Fetching Data</span></a></h3>
<ul>
<li><code v-pre>useEffect()</code> + <code v-pre>fetch()</code></li>
<li>Handle loading status</li>
<li>Handle HTTP errors</li>
<li>Outsource <code v-pre>AJAX(url, config, initialData)</code> helper function</li>
</ul>
<div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-react"><span class="line"><span>useEffect(() => {</span></span>
<span class="line"><span>  (async function () {</span></span>
<span class="line"><span>    setIsFetching(true);</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>      const response = await fetch("http://localhost:3000/places");</span></span>
<span class="line"><span>    	if(!response.ok) {</span></span>
<span class="line"><span>      	throw new Error(`💥 Failed to fetch data! ${response.status}`);</span></span>
<span class="line"><span>    	}</span></span>
<span class="line"><span>      const data = await response.json();</span></span>
<span class="line"><span>      setPlaces(data.places);</span></span>
<span class="line"><span>    } catch(err) {</span></span>
<span class="line"><span>      setError(true);</span></span>
<span class="line"><span>      console.error(error.message);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    setIsFetching(false);</span></span>
<span class="line"><span>  })();</span></span>
<span class="line"><span>}, []);</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sending-data" tabindex="-1"><a class="header-anchor" href="#sending-data"><span>Sending Data</span></a></h3>
<div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-react"><span class="line"><span>export async function updateUserPlaces(places) {</span></span>
<span class="line"><span>  const response = await fetch("http://localhost:3000/user-places", {</span></span>
<span class="line"><span>    method: "PUT",</span></span>
<span class="line"><span>    body: JSON.stringify({ places }),</span></span>
<span class="line"><span>    headers: {</span></span>
<span class="line"><span>      "Content-Type": "application/json"</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>  const data = await response.json();</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  if(!response.ok)	throw new Error("Failed to update user data!");</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  return data.message;</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Handler functions can be <code v-pre>async</code></li>
<li>Optimistic updating
<ul>
<li>Change the UI immediately before sending data behind the screen</li>
<li>Rollback the change if HTTP request fail</li>
</ul>
</li>
</ul>
<hr>
<h2 id="working-with-forms-user-input" tabindex="-1"><a class="header-anchor" href="#working-with-forms-user-input"><span>Working with Forms &amp; User Input</span></a></h2>
<h3 id="what-is-form" tabindex="-1"><a class="header-anchor" href="#what-is-form"><span>What is Form</span></a></h3>
<ul>
<li><a href="https://www.w3schools.com/html/html_forms.asp" target="_blank" rel="noopener noreferrer">HTML Forms</a></li>
<li>The <code v-pre>for</code> attribute of the <code v-pre>&lt;label&gt;</code> tag should be equal to the <code v-pre>id</code> attribute of the <code v-pre>&lt;input&gt;</code> element to bind them together
<ul>
<li>In JSX it's named <code v-pre>htmlFor</code></li>
</ul>
</li>
<li>Each input field must have a <code v-pre>name</code> attribute to be submitted. If the <code v-pre>name</code> attribute is omitted, the value of the input field will not be sent at all</li>
<li>Validating user input is the trickier part</li>
</ul>
<h3 id="handling-form-submission" tabindex="-1"><a class="header-anchor" href="#handling-form-submission"><span>Handling Form Submission</span></a></h3>
<ul>
<li>
<p>Form submission</p>
<ul>
<li>By default, the browser sends a HTTP request to the server when a button inside <code v-pre>form</code> has been clicked; therefore, the page will reload</li>
<li>This can be a problem when there is no handler for this request on the server (React app)</li>
<li>Solution
<ul>
<li><code v-pre>&lt;button type=&quot;button&quot;&gt;&lt;/button&gt;</code></li>
<li>Refactor from <code v-pre>&lt;button onClick={handler}&gt;&lt;/button&gt;</code> to <code v-pre>&lt;form onSubmit={handler}&gt;&lt;/form&gt;</code> + <code v-pre>e.preventDefault()</code>
<ul>
<li>Suggested way</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Getting user input via <code v-pre>state</code></p>
<ul>
<li>Two-way binding for updating inputs: <code v-pre>onChange={handler}</code> + <code v-pre>setState(e.targer.value)</code></li>
<li>Make it generic by creating object <code v-pre>state</code> and refactoring to one handler <code v-pre>handlerInputChange(identifier, e)</code></li>
</ul>
</li>
<li>
<p>Getting user input via <code v-pre>ref</code></p>
<ul>
<li>Link <code v-pre>refs</code> to <code v-pre>input</code> elements</li>
<li>Have to use <code v-pre>ref</code> to manipulate DOM directly which is not recommended</li>
<li>Cannot bundle <code v-pre>refs</code> into one object</li>
</ul>
</li>
<li>
<p>Getting user input via <code v-pre>FormData</code> &amp; native Browser APIs</p>
<ul>
<li>Useful for handling form that has lots of inputs</li>
<li>Example</li>
</ul>
<div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-react"><span class="line"><span>function handleSubmit(e) {</span></span>
<span class="line"><span>  e.preventDefault();</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  const fd = new FormData(e.target);</span></span>
<span class="line"><span>  const acquisition = fd.getAll("acquisition");			// get all values asscoiated with a given input name</span></span>
<span class="line"><span>  const data = Object.fromEntries(fd.entries());</span></span>
<span class="line"><span>  data.acquisition = acquisition;</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Resetting Form</p>
<ul>
<li><code v-pre>&lt;button type=&quot;reset&quot;&gt;Reset&lt;/button&gt;</code>; or,</li>
<li>Reset <code v-pre>state</code>; or,</li>
<li><code v-pre>ref.current.value = &quot;&quot;</code>; or,</li>
<li><code v-pre>e.target.reset()</code>
<ul>
<li><code v-pre>e.target</code> is the form element</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="validating-user-input" tabindex="-1"><a class="header-anchor" href="#validating-user-input"><span>Validating User Input</span></a></h3>
<ul>
<li>
<p>Compute the <code v-pre>isValid</code> logic and render conditionally</p>
</li>
<li>
<p>Always add <code v-pre>onSubmit</code> validation</p>
</li>
<li>
<p>Validating input on every key stoke via <code v-pre>state</code></p>
<ul>
<li>Errors may be shown too early</li>
</ul>
</li>
<li>
<p>Validating input upon lost focus</p>
<ul>
<li><code v-pre>OnBlur={handleInputBlur}</code></li>
<li>Errors may not disappear when the user starts to type again</li>
</ul>
<blockquote>
<p>Combining validating on key stoke and lost focus is a good pattern</p>
</blockquote>
</li>
<li>
<p>Validating input upon form submission</p>
</li>
<li>
<p>Validating input via built-in validation <code v-pre>props</code></p>
<ul>
<li><code v-pre>type</code>, <code v-pre>required</code>, etc.</li>
</ul>
<blockquote>
<p>Combining custom and built-in validation logic is also a good pattern</p>
</blockquote>
</li>
</ul>
<h3 id="building-custom-solutions" tabindex="-1"><a class="header-anchor" href="#building-custom-solutions"><span>Building Custom Solutions</span></a></h3>
<ul>
<li>Custom <code v-pre>Input</code> Component</li>
<li>Custom <code v-pre>useInput</code> Hook</li>
<li>Outsource validation logic</li>
<li>Use third-party form libraries</li>
</ul>
<hr>
<h2 id="redux" tabindex="-1"><a class="header-anchor" href="#redux"><span>Redux</span></a></h2>
<h3 id="what-is-redux" tabindex="-1"><a class="header-anchor" href="#what-is-redux"><span>What is Redux</span></a></h3>
<ul>
<li>
<p>Redux is a state management system for <em>cross-component</em> or <em>app-wide</em> state</p>
</li>
<li>
<p>Redux can be used anywhere without React</p>
</li>
<li>
<p>Core concept of Redux</p>
<figure><img src="@source/notes/framework/img/Redux-Concept.png" alt="Redux-Concept" tabindex="0" loading="lazy"><figcaption>Redux-Concept</figcaption></figure>
</li>
<li>
<p>Redux Toolkit</p>
<ul>
<li>
<p><a href="https://redux-toolkit.js.org/" target="_blank" rel="noopener noreferrer"><strong>Redux Toolkit</strong></a> (also known as <strong>&quot;RTK&quot;</strong> for short) is the official recommended approach for writing Redux logic</p>
</li>
<li>
<p>The <code v-pre>@reduxjs/toolkit</code> package wraps around the core <code v-pre>redux</code> package, and contains API methods and common dependencies that are essential for building a Redux app</p>
</li>
<li>
<p><strong>If you are writing any Redux logic today, you should be using Redux Toolkit to write that code!</strong></p>
</li>
</ul>
</li>
</ul>
<h3 id="why-using-redux" tabindex="-1"><a class="header-anchor" href="#why-using-redux"><span>Why using Redux</span></a></h3>
<ul>
<li>Potential problems of <code v-pre>context</code>
<ul>
<li>Deeply nested components</li>
<li>Complex providers</li>
<li>Performance issue from high-frequency changes</li>
</ul>
</li>
<li><strong>Redux is most useful in cases when</strong>:
<ul>
<li>You have large amounts of application state that are needed in many places in the app</li>
<li>The app state is updated frequently</li>
<li>The logic to update that state may be complex</li>
<li>The app has a medium or large-sized codebase, and might be worked on by many people</li>
<li>You need to see how that state is being updated over time</li>
</ul>
</li>
<li><a href="https://changelog.com/posts/when-and-when-not-to-reach-for-redux" target="_blank" rel="noopener noreferrer">When(and when not) to reach for Redux by Mark Erikson</a></li>
<li>In a nutshell, use the tool when you need it</li>
</ul>
<h3 id="how-to-use-redux" tabindex="-1"><a class="header-anchor" href="#how-to-use-redux"><span>How to use Redux</span></a></h3>
<h4 id="redux-core" tabindex="-1"><a class="header-anchor" href="#redux-core"><span>Redux Core</span></a></h4>
<ul>
<li>
<p><strong>Store</strong></p>
<ul>
<li>
<p>The current Redux application state lives in an object called <strong>store</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-javascript"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> redux</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> require</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"redux"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> store</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> redux</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">createStore</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">counterReducer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">store</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">getState</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">())</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// {value: 0}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p><strong>Subscriber</strong></p>
<div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-react"><span class="line"><span>const state = store.getState();</span></span>
<span class="line"><span>store.subscribe(render);</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>Selector</strong></p>
<div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-react"><span class="line"><span>const selectCounterValue = state => state.value</span></span>
<span class="line"><span>const currentValue = selectCounterValue(store.getState())</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>Dispatch</strong></p>
<ul>
<li>
<p>The Redux <code v-pre>store</code> has a method called <code v-pre>dispatch</code></p>
</li>
<li>
<p><strong>The only way to update the <code v-pre>state</code> is to call <code v-pre>store.dispatch(action)</code></strong></p>
</li>
<li>
<p>The <code v-pre>store</code> will run its <code v-pre>slice reducer</code> function and save the new <code v-pre>state</code> value inside</p>
<div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-react"><span class="line"><span>store.dispatch({ type: 'counter/increment' })</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>Typically we call <code v-pre>actionCreator</code> to dispatch the right <code v-pre>action</code></p>
<div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-react"><span class="line"><span>const increment = () => {</span></span>
<span class="line"><span>  return {</span></span>
<span class="line"><span>    type: 'counter/increment'</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>store.dispatch(increment())</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(store.getState())</span></span>
<span class="line"><span>// {value: 1}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p><strong>Reducer</strong></p>
<ul>
<li>
<p>Reducer is a function that receives the current <code v-pre>state</code> and an <code v-pre>action</code> object, decide how to update the <code v-pre>state</code> id necessary, and return the new <code v-pre>state</code></p>
</li>
<li>
<p><strong>You can think of a <code v-pre>reducer</code> as an event listener which handles events based on the received action (event) type</strong></p>
</li>
<li>
<p>Reducer should be a <strong>pure function</strong></p>
<ul>
<li>They must not do any asynchronous logic, calculate random values, or cause other &quot;side effects&quot;</li>
</ul>
</li>
<li>
<p>State should be <strong>immutable</strong></p>
<div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-react"><span class="line"><span>const initialState = { value: 0 }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function counterReducer(state = initialState, action) {</span></span>
<span class="line"><span>  // Check to see if the reducer cares about this action</span></span>
<span class="line"><span>  if (action.type === 'counter/increment') {</span></span>
<span class="line"><span>    // If so, make a copy of `state`</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      ...state,</span></span>
<span class="line"><span>      // and update the copy with the new value</span></span>
<span class="line"><span>      value: state.value + 1</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // otherwise return the existing state unchanged</span></span>
<span class="line"><span>  return state</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p><strong>Action</strong></p>
<ul>
<li>
<p>An <code v-pre>action</code> is a plain JavaScript object that has a <code v-pre>type</code> field</p>
</li>
<li>
<p><strong>You can think of an action as an event that describes something that happened in the application</strong></p>
</li>
<li>
<p>The <code v-pre>type</code> field should be a string that gives this action a descriptive name. We usually write that type string like <code v-pre>&quot;domain/eventName&quot;</code>, where the first part is the feature or category that this action belongs to, and the second part is the specific thing that happened</p>
</li>
<li>
<p>An action object can have other fields with additional information about what happened. By convention, we put that information in a field called <code v-pre>payload</code></p>
<div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-react"><span class="line"><span>const addTodoAction = {</span></span>
<span class="line"><span>  type: 'todos/todoAdded',</span></span>
<span class="line"><span>  payload: 'Buy milk'</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p><strong>Action Creators</strong></p>
<ul>
<li>
<p>An action creator is a function that creates and return <code v-pre>action</code> object</p>
</li>
<li>
<p>It is typically used so we don't have to write the <code v-pre>action</code> object by hand everytime</p>
<div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-react"><span class="line"><span>const addTodo = text => {</span></span>
<span class="line"><span>  return {</span></span>
<span class="line"><span>    type: 'todos/todoAdded',</span></span>
<span class="line"><span>    payload: text</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<h4 id="react-redux-application-contents-modern-way" tabindex="-1"><a class="header-anchor" href="#react-redux-application-contents-modern-way"><span><strong>React-Redux Application Contents (Modern way)</strong></span></a></h4>
<ul>
<li>Redux allows <code v-pre>store</code> setup to be customised with different plugins (<code v-pre>middleware</code> and <code v-pre>enhancers</code>)</li>
</ul>
<div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-react"><span class="line"><span>// store.js</span></span>
<span class="line"><span>import { configureStore } from '@reduxjs/toolkit'</span></span>
<span class="line"><span>import counterReducer from '../store/counterSlice'</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default configureStore({</span></span>
<span class="line"><span>  // root reducer</span></span>
<span class="line"><span>  reducer: {</span></span>
<span class="line"><span>    // slice reducer</span></span>
<span class="line"><span>    counter: counterReducer</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>// When we pass in an object like {counter: counterReducer}, that says that </span></span>
<span class="line"><span>// we want to have a state.counter section of our Redux state object, and that </span></span>
<span class="line"><span>// we want the counterReducer function to be in charge of deciding if and </span></span>
<span class="line"><span>// how to update the state.counter section whenever an action is dispatched.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>A &quot;redux slice&quot; is a collection of Redux reducer logic and actions for a single feature in your app</strong>, typically defined together in a single file. The name comes from splitting up the root Redux state object into multiple &quot;slices&quot; of state</li>
</ul>
<div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-react"><span class="line"><span>// counterSlice.js</span></span>
<span class="line"><span>import { createSlice } from '@reduxjs/toolkit'</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const counterSlice = createSlice({</span></span>
<span class="line"><span>  name: 'counter',</span></span>
<span class="line"><span>  initialState: {</span></span>
<span class="line"><span>    value: 0</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  reducers: {</span></span>
<span class="line"><span>    increment: state => {</span></span>
<span class="line"><span>      // Redux Toolkit allows us to write "mutating" logic in reducers. It</span></span>
<span class="line"><span>      // doesn't actually mutate the state because it uses the immer library,</span></span>
<span class="line"><span>      // which detects changes to a "draft state" and produces a brand new</span></span>
<span class="line"><span>      // immutable state based off those changes</span></span>
<span class="line"><span>      state.value += 1</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    decrement: state => {</span></span>
<span class="line"><span>      state.value -= 1</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    incrementByAmount: (state, action) => {</span></span>
<span class="line"><span>      state.value += action.payload</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// action creators</span></span>
<span class="line"><span>export const { increment, decrement, incrementByAmount } = counterSlice.actions</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// reducer function</span></span>
<span class="line"><span>export default counterSlice.reducer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// selector</span></span>
<span class="line"><span>export const selectCount = state => state.counter.value</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>The <code v-pre>React-Redux</code> library has a set of custom Hooks that allow your React component to interact with a Redux <code v-pre>store</code></li>
<li>React components can't talk to the Redux <code v-pre>store</code> directly, because we're not allowed to import it into component files</li>
</ul>
<div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-react"><span class="line"><span>// Counter.jsx</span></span>
<span class="line"><span>import React, { useState } from 'react'</span></span>
<span class="line"><span>import { useSelector, useDispatch } from 'react-redux'</span></span>
<span class="line"><span>import {</span></span>
<span class="line"><span>  decrement,</span></span>
<span class="line"><span>  increment,</span></span>
<span class="line"><span>  incrementByAmount,</span></span>
<span class="line"><span>  selectCount</span></span>
<span class="line"><span>} from './counterSlice'</span></span>
<span class="line"><span>import styles from './Counter.module.css'</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export function Counter() {</span></span>
<span class="line"><span>  // Reading data with useSelector</span></span>
<span class="line"><span>  const count = useSelector(selectCount)</span></span>
<span class="line"><span>  // Dispatch actions</span></span>
<span class="line"><span>  const dispatch = useDispatch()</span></span>
<span class="line"><span>  const [incrementAmount, setIncrementAmount] = useState('2')</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &#x3C;div></span></span>
<span class="line"><span>      &#x3C;div className={styles.row}></span></span>
<span class="line"><span>        &#x3C;button</span></span>
<span class="line"><span>          className={styles.button}</span></span>
<span class="line"><span>          aria-label="Increment value"</span></span>
<span class="line"><span>          onClick={() => dispatch(increment())}</span></span>
<span class="line"><span>        ></span></span>
<span class="line"><span>          +</span></span>
<span class="line"><span>        &#x3C;/button></span></span>
<span class="line"><span>        &#x3C;span className={styles.value}>{count}&#x3C;/span></span></span>
<span class="line"><span>        &#x3C;button</span></span>
<span class="line"><span>          className={styles.button}</span></span>
<span class="line"><span>          aria-label="Decrement value"</span></span>
<span class="line"><span>          onClick={() => dispatch(decrement())}</span></span>
<span class="line"><span>        ></span></span>
<span class="line"><span>          -</span></span>
<span class="line"><span>        &#x3C;/button></span></span>
<span class="line"><span>        &#x3C;button</span></span>
<span class="line"><span>          className={styles.button}</span></span>
<span class="line"><span>          aria-label="Increment value by amount"</span></span>
<span class="line"><span>          onClick={() => dispatch(incrementByAmount(incrementAmount))}</span></span>
<span class="line"><span>        ></span></span>
<span class="line"><span>          -</span></span>
<span class="line"><span>        &#x3C;/button></span></span>
<span class="line"><span>      &#x3C;/div></span></span>
<span class="line"><span>      {/* omit additional rendering output here */}</span></span>
<span class="line"><span>    &#x3C;/div></span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Providing the <code v-pre>store</code></li>
</ul>
<div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-react"><span class="line"><span>// index.js or main.jsx</span></span>
<span class="line"><span>import React from 'react'</span></span>
<span class="line"><span>import ReactDOM from 'react-dom'</span></span>
<span class="line"><span>import './index.css'</span></span>
<span class="line"><span>import App from './App'</span></span>
<span class="line"><span>import store from './app/store'</span></span>
<span class="line"><span>import { Provider } from 'react-redux'</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ReactDOM.render(</span></span>
<span class="line"><span>  &#x3C;Provider store={store}></span></span>
<span class="line"><span>    &#x3C;App /></span></span>
<span class="line"><span>  &#x3C;/Provider>,</span></span>
<span class="line"><span>  document.getElementById('root')</span></span>
<span class="line"><span>)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>Writing async logic</p>
<ul>
<li>
<p>Inside <code v-pre>useEffect()</code>, listening to <code v-pre>state</code> change</p>
<ul>
<li>A potential problem
<ul>
<li><code v-pre>useEffect()</code> send the initial (i.e. empty) data to our backend and overwrite any data stored there</li>
<li>Use an if block to skip the first execution</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Using <code v-pre>thunk</code></p>
<ul>
<li><code v-pre>thunk</code> is a programming term that means <em>&quot;a piece of code that does some delayed work&quot;</em></li>
<li>Using thunks requires the <code v-pre>redux-thunk</code> middleware to be added to the Redux store as part of its configuration</li>
<li><strong>A <code v-pre>thunk</code> function is a function that accept two arguments: Redux <code v-pre>store</code> <code v-pre>dispatch()</code> method and <code v-pre>getState()</code> method</strong></li>
<li><code v-pre>thunk</code> function are not directly called by application code, instead, they are passed to <code v-pre>store.dispatch()</code></li>
<li>We normally use custom action creator to generate <code v-pre>thunk</code> function</li>
<li>A <strong><code v-pre>thunk action creator</code></strong> is a function that may have some arguments, and returns a <code v-pre>thunk</code> function</li>
<li><strong><code v-pre>thunk</code> gives us a place to put side effects</strong></li>
</ul>
<div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-react"><span class="line"><span>// the outside "thunk creator" function</span></span>
<span class="line"><span>const fetchUserById = userId => {</span></span>
<span class="line"><span>  // the inside "thunk function"</span></span>
<span class="line"><span>  return async (dispatch, getState) => {</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>      // make an async call in the thunk</span></span>
<span class="line"><span>      const user = await userAPI.fetchById(userId)</span></span>
<span class="line"><span>      // dispatch an action when we get the response back</span></span>
<span class="line"><span>      dispatch(userLoaded(user))</span></span>
<span class="line"><span>    } catch (err) {</span></span>
<span class="line"><span>      // If something went wrong, handle it here</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// use arrow function</span></span>
<span class="line"><span>export const fetchUserById = userId => async dispatch => {</span></span>
<span class="line"><span>  const user = await userAPI.fetchById(userId);</span></span>
<span class="line"><span>  dispatch(userLoaded(user))</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<h3 id="redux-application-data-flow" tabindex="-1"><a class="header-anchor" href="#redux-application-data-flow"><span>Redux Application Data Flow</span></a></h3>
<ul>
<li>Redux data flow is one-way</li>
<li>Initial setup:
<ul>
<li>A Redux store is created using a root reducer function</li>
<li>The store calls the root reducer once, and saves the return value as its initial <code v-pre>state</code></li>
<li>When the UI is first rendered, UI components access the current state of the Redux store, and use that data to decide what to render. They also subscribe to any future store updates so they can know if the state has changed.</li>
</ul>
</li>
<li>Updates:
<ul>
<li>Something happens in the app, such as a user clicking a button</li>
<li>The app code dispatches an action to the Redux store, like <code v-pre>dispatch({type: 'counter/increment'})</code></li>
<li>The store runs the reducer function again with the previous <code v-pre>state</code> and the current <code v-pre>action</code>, and saves the return value as the new <code v-pre>state</code></li>
<li>The store notifies all parts of the UI that are subscribed that the store has been updated</li>
<li>Each UI component that needs data from the store checks to see if the parts of the state they need have changed.</li>
<li>Each component that sees its data has changed forces a re-render with the new data, so it can update what's shown on the screen</li>
</ul>
</li>
</ul>
<hr>
<h2 id="react-router" tabindex="-1"><a class="header-anchor" href="#react-router"><span>React Router</span></a></h2>
<ul>
<li>
<p>React is a single page application (SPA)</p>
</li>
<li>
<p>Client-side code simply watches url changes and then loads different React components, instead of fetching new html files</p>
</li>
<li>
<p>Application content</p>
<ol>
<li>
<p><code v-pre>npm install react-router-dom</code></p>
</li>
<li>
<p>Adding a router</p>
<div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-react"><span class="line"><span>// index.js</span></span>
<span class="line"><span>import * as React from "react";</span></span>
<span class="line"><span>import * as ReactDOM from "react-dom/client";</span></span>
<span class="line"><span>import {</span></span>
<span class="line"><span>  createBrowserRouter,</span></span>
<span class="line"><span>  RouterProvider,</span></span>
<span class="line"><span>} from "react-router-dom";</span></span>
<span class="line"><span>import "./index.css";</span></span>
<span class="line"><span>import HomePage from './pages/Home';</span></span>
<span class="line"><span>import ProductsPage from './pages/Products';</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const router = createBrowserRouter([</span></span>
<span class="line"><span>  { path: "/", element: &#x3C;HomePage />, },</span></span>
<span class="line"><span>  { path: "/products", element: &#x3C;ProductsPage />, },</span></span>
<span class="line"><span>]);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ReactDOM.createRoot(document.getElementById("root")).render(</span></span>
<span class="line"><span>  &#x3C;React.StrictMode></span></span>
<span class="line"><span>    &#x3C;RouterProvider router={router} /></span></span>
<span class="line"><span>  &#x3C;/React.StrictMode></span></span>
<span class="line"><span>);</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Due to the decoupling of fetching and rendering in the design of the data APIs, you should create your router outside of the React tree with a statically defined set of routes</li>
<li><a href="https://reactrouter.com/en/main/routers/create-browser-router" target="_blank" rel="noopener noreferrer"><code v-pre>createBrowserRouter()</code></a></li>
</ul>
</li>
<li>
<p>Navigating between Pages with Links</p>
<ul>
<li>Prevent default behavior that sending request to the server and restart the React application</li>
</ul>
<div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-react"><span class="line"><span>// Home.jsx</span></span>
<span class="line"><span>import { Link } from 'react-router-dom';</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// omitted</span></span>
<span class="line"><span>&#x3C;Link to={"/products"}>Products&#x3C;/Link></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><a href="https://reactrouter.com/en/main/components/link" target="_blank" rel="noopener noreferrer">Link</a></p>
</li>
<li>
<p>Under the hood, <code v-pre>Link</code> renders a <code v-pre>&lt;a&gt;&lt;/a&gt;</code> elememnt</p>
</li>
<li>
<p><a href="https://reactrouter.com/en/main/components/nav-link" target="_blank" rel="noopener noreferrer">NavLink</a></p>
<div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-react"><span class="line"><span>&#x3C;NavLink</span></span>
<span class="line"><span>  to="/messages"</span></span>
<span class="line"><span>  className={({ isActive, isPending, isTransitioning }) =></span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>      isPending ? "pending" : "",</span></span>
<span class="line"><span>      isActive ? "active" : "",</span></span>
<span class="line"><span>      isTransitioning ? "transitioning" : "",</span></span>
<span class="line"><span>    ].join(" ") </span></span>
<span class="line"><span>   end</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>></span></span>
<span class="line"><span>  Messages</span></span>
<span class="line"><span>&#x3C;/NavLink></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>Navigating programmatically</p>
<ul>
<li><a href="https://reactrouter.com/en/main/hooks/use-navigate" target="_blank" rel="noopener noreferrer"><code v-pre>useNavigate()</code></a></li>
</ul>
</li>
<li>
<p>Nested Routes</p>
<ul>
<li>Wrapper page that wraps other pages</li>
</ul>
<div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-react"><span class="line"><span>// Root.js</span></span>
<span class="line"><span>import { Outlet } from 'react-router-dom';</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default Root() {</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &#x3C;></span></span>
<span class="line"><span>    	&#x3C;Navbar /></span></span>
<span class="line"><span>    	&#x3C;Outlet /></span></span>
<span class="line"><span>    &#x3C;/></span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// index.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// omitted</span></span>
<span class="line"><span>const router = createBrowserRouter([</span></span>
<span class="line"><span>  { </span></span>
<span class="line"><span> 		path: "/",</span></span>
<span class="line"><span>  	element: &#x3C;Root />,</span></span>
<span class="line"><span>    children: [</span></span>
<span class="line"><span>      { index: true, element: &#x3C;HomePage />, },</span></span>
<span class="line"><span>  		{ path: "/products", element: &#x3C;ProductsPage />, },</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>]);</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Index routes
<ul>
<li>When a route has children, and you're at the parent route's path, the <code v-pre>&lt;Outlet&gt;</code> has nothing to render because no children match</li>
<li>You can think of index routes as the default child route to fill in that space</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Dynamic Routes</p>
<div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-react"><span class="line"><span>// index.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// omitted</span></span>
<span class="line"><span>const router = createBrowserRouter([</span></span>
<span class="line"><span>  { </span></span>
<span class="line"><span> 		path: "/",</span></span>
<span class="line"><span>  	element: &#x3C;Root />,</span></span>
<span class="line"><span>    children: [</span></span>
<span class="line"><span>      { index: true, element: &#x3C;HomePage />, },</span></span>
<span class="line"><span>  		{ path: "products", element: &#x3C;ProductsPage />, },</span></span>
<span class="line"><span>      { path: "products/:id", element: &#x3C;ProductDetailPage /> },</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>]);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// ProductDetail.jsx</span></span>
<span class="line"><span>import { useParams } from 'react-router-dom';</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default function ProductDetailPage() {</span></span>
<span class="line"><span>  const { id } = useParams();</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>  	&#x3C;></span></span>
<span class="line"><span>    	&#x3C;p>{id}&#x3C;/p></span></span>
<span class="line"><span>    &#x3C;/></span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Dynamic Segments
<ul>
<li>If a path segment starts with <code v-pre>:</code> then it becomes a &quot;dynamic segment&quot;</li>
<li>When the route matches the URL, the dynamic segment will be parsed from the URL and provided as <code v-pre>params</code> to other router APIs</li>
</ul>
</li>
<li><a href="https://reactrouter.com/en/main/hooks/use-params" target="_blank" rel="noopener noreferrer"><code v-pre>useParams()</code></a></li>
</ul>
</li>
<li>
<p>Handling error pages</p>
<div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-react"><span class="line"><span>// Error.jsx</span></span>
<span class="line"><span>import { useRouteError } from "react-router-dom";</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default function ErrorPage() {</span></span>
<span class="line"><span>  const error = useRouteError();</span></span>
<span class="line"><span>  console.error(error);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &#x3C;div id="error-page"></span></span>
<span class="line"><span>      &#x3C;h1>Oops!&#x3C;/h1></span></span>
<span class="line"><span>      &#x3C;p>Sorry, an unexpected error has occurred.&#x3C;/p></span></span>
<span class="line"><span>      &#x3C;p></span></span>
<span class="line"><span>        &#x3C;i>{error.statusText || error.message}&#x3C;/i></span></span>
<span class="line"><span>      &#x3C;/p></span></span>
<span class="line"><span>    &#x3C;/div></span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// index.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// omitted</span></span>
<span class="line"><span>const router = createBrowserRouter([</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    path: "/",</span></span>
<span class="line"><span>    element: &#x3C;Root />,</span></span>
<span class="line"><span>    errorElement: &#x3C;ErrorPage />,</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>]);</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>404 NOT FOUND</li>
</ul>
</li>
</ol>
</li>
<li>
<p>Relative &amp; Absolute Paths</p>
<ul>
<li>Absolute path
<ul>
<li>Path starts with <code v-pre>/</code></li>
<li>Describes the location from the root directory</li>
</ul>
</li>
<li>Relative path
<ul>
<li>Describes the location of a file relative to the current (working) directory <code v-pre>*</code></li>
<li>Two dots (<code v-pre>..</code>) represent moving to a parent directory</li>
<li>The single dot indicates your <em>current location</em></li>
</ul>
</li>
</ul>
</li>
</ul>
<hr>
<h2 id="authentication" tabindex="-1"><a class="header-anchor" href="#authentication"><span>Authentication</span></a></h2>
<hr>
<h2 id="styling-react-components" tabindex="-1"><a class="header-anchor" href="#styling-react-components"><span>Styling React Components</span></a></h2>
<h3 id="styling-with-vanilla-css" tabindex="-1"><a class="header-anchor" href="#styling-with-vanilla-css"><span>Styling with vanilla CSS</span></a></h3>
<ul>
<li>Import CSS file into corresponding JSX file</li>
<li>Pros
<ul>
<li>CSS code is decoupled from JSX code</li>
</ul>
</li>
<li>Cons
<ul>
<li>You need to know CSS</li>
<li><strong>CSS is not scoped to components</strong>, CSS rules may clash across components</li>
</ul>
</li>
</ul>
<h3 id="scoping-styles" tabindex="-1"><a class="header-anchor" href="#scoping-styles"><span>Scoping Styles</span></a></h3>
<ul>
<li>Use inline <code v-pre>style</code> attribute
<ul>
<li>The value is an object, not a string</li>
</ul>
</li>
<li>Use CSS modules
<ul>
<li>Change <code v-pre>Component.css</code> to <code v-pre>Component.module.css</code></li>
<li>Change <code v-pre>import &quot;./Component.css&quot;</code> to <code v-pre>import classes from &quot;./Component.module.css&quot;</code></li>
<li><code v-pre>&lt;p className={classes.paragraph}&gt;test&lt;/p&gt;</code></li>
</ul>
</li>
<li>CSS-IN-JS Styling with &quot;Styled Components&quot;
<ul>
<li>Use a package <a href="https://styled-components.com/" target="_blank" rel="noopener noreferrer">Styled components</a></li>
</ul>
</li>
</ul>
<h3 id="styling-with-tailwind-css" tabindex="-1"><a class="header-anchor" href="#styling-with-tailwind-css"><span>Styling with Tailwind CSS</span></a></h3>
<ul>
<li>The main idea of Tailwind: add tiny utility CSS classes to HTML elements</li>
<li><a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwind website</a></li>
</ul>
<h3 id="dynamic-styling" tabindex="-1"><a class="header-anchor" href="#dynamic-styling"><span>Dynamic Styling</span></a></h3>
<ul>
<li>Dynamic inline styling</li>
<li>Dynamic styling by add class name to component dynamically, using template literal</li>
</ul>
<h3 id="animating" tabindex="-1"><a class="header-anchor" href="#animating"><span>Animating</span></a></h3>
<ul>
<li>
<p>Just CSS</p>
<ul>
<li>
<p><code v-pre>transition</code></p>
</li>
<li>
<p><code v-pre>@keyframes</code> and <code v-pre>animation</code></p>
</li>
</ul>
</li>
<li>
<p>Framer Motion</p>
</li>
</ul>
<hr>
<h2 id="testing" tabindex="-1"><a class="header-anchor" href="#testing"><span>Testing</span></a></h2>
<ul>
<li>
<p>Manual testing</p>
<ul>
<li>Write code -&gt; Preview -&gt; Improve code -&gt; Repeat</li>
<li>Error-prone</li>
</ul>
</li>
<li>
<p>Automated testing</p>
<ul>
<li>Write code that automatically tests your code</li>
<li>Unit test
<ul>
<li>Test the individual building blocks in isolation</li>
</ul>
</li>
<li>Integration test
<ul>
<li>Test the combination of multiple building blocks</li>
</ul>
</li>
<li>End-to-End(E2E) test
<ul>
<li>Test the complete scenarios / user flows in your app</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Testing tools (popular) for React</p>
<ul>
<li>Tool for running our tests and asserting the results
<ul>
<li>Jest</li>
</ul>
</li>
<li>Tool for &quot;simulating&quot; our React app
<ul>
<li>React Testing Library</li>
</ul>
</li>
</ul>
</li>
<li>
<p>How to write a test</p>
<ul>
<li>
<p><strong>A</strong>rrange: set up test data, conditions, and environment</p>
</li>
<li>
<p><strong>A</strong>ct: run logic that should be tested</p>
</li>
<li>
<p><strong>A</strong>ssert: compare execution results with ecpected results</p>
</li>
<li>
<div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-react"><span class="line"><span>// Component.test.js</span></span>
<span class="line"><span>describe("Testing suite A", () => {</span></span>
<span class="line"><span>  test("Test A", () => {});</span></span>
<span class="line"><span>  test("Test B", () => {});</span></span>
<span class="line"><span>});</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<hr>
<h2 id="deployment" tabindex="-1"><a class="header-anchor" href="#deployment"><span>Deployment</span></a></h2>
<ul>
<li>Deployment steps
<ol>
<li>Test code</li>
<li>Optimise code</li>
<li>Build app</li>
<li>Upload app</li>
<li>Configure server</li>
</ol>
</li>
<li>Lazy loading
<ul>
<li>Load certain components only when they are needed instead of ahead of time</li>
<li>Refactor from import at the top to <code v-pre>lazy()</code>,  <code v-pre>import()</code>, <code v-pre>&lt;Suspend fallback={}&gt;&lt;/Suspend&gt;</code></li>
</ul>
</li>
<li>Client-side routing &amp; server-side routing</li>
</ul>
<hr>
<h2 id="references" tabindex="-1"><a class="header-anchor" href="#references"><span>References</span></a></h2>
<ul>
<li><a href="https://react.dev/learn" target="_blank" rel="noopener noreferrer">React Tutorial</a></li>
<li><a href="https://redux.js.org/introduction/getting-started" target="_blank" rel="noopener noreferrer">Redux Tutorial</a></li>
<li><a href="https://reactrouter.com/en/main" target="_blank" rel="noopener noreferrer">React Router</a></li>
<li><a href="https://www.framer.com/motion/" target="_blank" rel="noopener noreferrer">Framar Motion</a></li>
</ul>
</div></template>


