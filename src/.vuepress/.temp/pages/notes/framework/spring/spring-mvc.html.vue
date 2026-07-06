<template><div><div class="hint-container note">
<p class="hint-container-title">Note</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> To be continued</label></li>
</ul>
</div>
<p>Spring MVC Framework is a Java-based web framework built on the Model-View-Controller design pattern. It is part of the Spring Framework and is used to develop flexible and loosely coupled web applications.</p>
<ul>
<li>It uses <code v-pre>DispatcherServlet</code> as the front controller to handle all incoming requests and route them to appropriate controllers.</li>
<li>It separates application logic into Model (data), View (UI), and Controller (request handling) for better organization.</li>
<li>It supports features like form handling, validation, and RESTful web services for building modern web applications.</li>
</ul>
<h2 id="dispatcherservlet" tabindex="-1"><a class="header-anchor" href="#dispatcherservlet"><span><code v-pre>DispatcherServlet</code></span></a></h2>
<p><code v-pre>DispatcherServlet</code> in Spring is the central component of the Spring MVC framework that acts as the front controller. It receives all incoming HTTP requests, forwards them to the appropriate controllers, and manages the response generation process including handler mapping and view resolution.</p>
<figure><img src="/assets/image/spring/spring_mvc_architecture.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>Work flow:</p>
<ol>
<li><strong><code v-pre>DispatcherServlet</code></strong>: The HTTP request is received by the <code v-pre>DispatcherServlet</code>.</li>
<li><strong>Handler Mapping</strong>: The <code v-pre>DispatcherServlet</code> consults the Handler Mapping to determine which controller should handle the request based on the URL pattern.</li>
<li><strong>Controller</strong>: The Controller processes the request and returns a <code v-pre>ModelAndView</code> object, which contains the model data and the view name.</li>
<li><strong>Model and View</strong>: The <code v-pre>ModelAndView</code> object holds the model data (business logic result) and the view name (which view to render).</li>
<li><strong>View Resolver</strong>: The <code v-pre>ViewResolver</code> resolves the logical view name to a physical view (e.g., a JSP page).</li>
<li><strong>View</strong>: The <code v-pre>View</code> (usually a JSP, HTML, etc.) is rendered and populated with the model data.</li>
<li><strong>Response</strong>: The rendered view is sent back as the HTTP response to the client.</li>
</ol>
<h2 id="servlet" tabindex="-1"><a class="header-anchor" href="#servlet"><span>Servlet</span></a></h2>
<p>A Servlet is a Java-based server-side class used to handle requests and generate dynamic responses for web applications. The servlet must be run on the <strong>servlet container</strong> (e.g., Apache Tomcat) instead of directly on JVM. So an External or embedded server is needed.</p>
<h3 id="servlet-lifecycle" tabindex="-1"><a class="header-anchor" href="#servlet-lifecycle"><span>Servlet Lifecycle</span></a></h3>
<ol>
<li>
<p><strong>Loading and initialisation</strong></p>
<ul>
<li>When a servlet is requested for the first time or after a container restart, the servlet container loads the servlet class into memory.</li>
<li>The container calls the <code v-pre>init()</code> method, which is used to initialize the servlet.</li>
<li><code v-pre>init()</code> is called only once during the servlet’s lifecycle and is used to perform any initializations required for the servlet.</li>
</ul>
</li>
<li>
<p><strong>Request handling</strong></p>
<ul>
<li><code v-pre>service()</code> method is called for each request made to the servlet.</li>
<li>It is responsible for processing the client request and generating the response.</li>
<li>The container calls <code v-pre>service()</code> whenever it receives an HTTP request (usually via <code v-pre>doGet()</code>, <code v-pre>doPost()</code>, etc.).</li>
<li>In the case of <code v-pre>HttpServlet</code>, the <code v-pre>service()</code> method delegates the request to specific methods based on the HTTP method (GET, POST, etc.):
<ul>
<li><strong><code v-pre>doGet()</code></strong>: Handles HTTP GET requests (commonly used for retrieving data from the server).</li>
<li><strong><code v-pre>doPost()</code></strong>: Handles HTTP POST requests (commonly used for submitting data to the server).</li>
<li><strong><code v-pre>doPut()</code>, <code v-pre>doDelete()</code></strong>: Handle PUT and DELETE requests, respectively.</li>
<li><strong><code v-pre>doHead()</code>, <code v-pre>doOptions()</code></strong>: Handle other HTTP request types like HEAD and OPTIONS.</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>Destroying the servlet</strong></p>
<ul>
<li>When the servlet container decides to unload the servlet (typically when the server shuts down or the servlet is no longer needed), it calls the <code v-pre>destroy()</code> method.</li>
<li>This is where cleanup tasks such as releasing resources (like database connections or file handles) should be done.</li>
</ul>
</li>
</ol>
<h3 id="how-to-create-servlet" tabindex="-1"><a class="header-anchor" href="#how-to-create-servlet"><span>How to Create Servlet</span></a></h3>
<ol>
<li>Extend <code v-pre>HttpServlet</code></li>
<li>Override <code v-pre>doGet()</code>, <code v-pre>doPOst()</code>, etc.</li>
<li>Configure using <code v-pre>web.xml</code> or <code v-pre>WebServlet</code> annotation</li>
</ol>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> java.io.IOException</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> javax.servlet.ServletException</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> javax.servlet.annotation.WebServlet</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> javax.servlet.http.HttpServlet</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> javax.servlet.http.HttpServletRequest</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> javax.servlet.http.HttpServletResponse</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// Annotation-based servlet mapping</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">WebServlet</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"/hello"</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> HelloServlet</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> extends</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> HttpServlet</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">Override</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> init</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> throws</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> ServletException</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Servlet Initialized"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">Override</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    protected</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> doGet</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">HttpServletRequest</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> request</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">HttpServletResponse</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> response</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">            throws</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> ServletException</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> IOException</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        response</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">setContentType</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"text/html"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        response</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">getWriter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"&#x3C;h1>Hello, Servlet!&#x3C;/h1>"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">Override</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    protected</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> doPost</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">HttpServletRequest</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> request</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">HttpServletResponse</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> response</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">            throws</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> ServletException</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> IOException</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">        // Handle POST request</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">        String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> data</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> request</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">getParameter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"data"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        response</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">getWriter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">write</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Received POST data: "</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> +</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> data);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">Override</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> destroy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Servlet Destroyed"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="viewresolver" tabindex="-1"><a class="header-anchor" href="#viewresolver"><span><code v-pre>ViewResolver</code></span></a></h2>
<p>ViewResolver in Spring MVC is a component responsible for mapping logical view names returned by controllers to actual view resources like JSP or HTML files. It helps in separating business logic from the presentation layer by handling view resolution automatically. This makes the application more flexible and easier to maintain.</p>
<h2 id="webapplicationcontext" tabindex="-1"><a class="header-anchor" href="#webapplicationcontext"><span><code v-pre>WebApplicationContext</code></span></a></h2>
<p>WebApplicationContext is a specialized container in Spring MVC used for web applications. It provides configuration and manages web-related beans while also giving access to the ServletContext. Each DispatcherServlet creates its own WebApplicationContext to handle request processing independently.</p>
</div></template>


