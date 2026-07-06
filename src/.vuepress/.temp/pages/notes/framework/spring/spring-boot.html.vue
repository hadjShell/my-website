<template><div><p>Spring is one of the most popular frameworks for building enterprise applications, but traditional Spring projects require heavy XML configuration, making them complex for beginners. Spring Boot solves this problem by providing a ready-to-use, production-grade framework on top of Spring, eliminating boilerplate configuration and enabling rapid development.</p>
<p>Spring Boot provides all the features of Spring while being significantly easier to use. Here are its key features:</p>
<ul>
<li><strong>Auto-Configuration</strong>: Spring Boot automatically configures the application based on the dependencies present in the project.</li>
<li><strong>Embedded Server</strong>: Spring Boot includes embedded servers like Tomcat, Jetty, or Undertow, allowing applications to run without external server installation.</li>
<li><strong>Easy Deployment</strong>: Spring Boot applications can be packaged as JAR or WAR files and deployed directly to servers or cloud environments. It offers seamless integration with Docker and Kubernetes for easier cloud-native deployment and scaling.</li>
<li><strong>Standalone Application</strong>: Applications can run as executable JAR files using a simple main() method.</li>
<li><strong>Microservice-Based Architecture</strong>: Spring Boot supports building independent, modular services instead of a monolithic application, improving scalability, maintainability, and deployment flexibility.</li>
</ul>
<h2 id="spring-vs-spring-boot" tabindex="-1"><a class="header-anchor" href="#spring-vs-spring-boot"><span>Spring vs. Spring Boot</span></a></h2>
<table>
<thead>
<tr>
<th>Feature</th>
<th>Spring Framework</th>
<th>Spring Boot</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Definition</strong></td>
<td>A comprehensive framework for Java enterprise applications.</td>
<td>A framework built on top of Spring that simplifies application setup and development.</td>
</tr>
<tr>
<td><strong>Configuration</strong></td>
<td>Requires a lot of <strong>manual</strong> XML or Java-based configuration.</td>
<td>Comes with <strong>auto-configuration</strong> to reduce boilerplate code.</td>
</tr>
<tr>
<td><strong>Standalone Applications</strong></td>
<td>Needs an <strong>external server</strong> (e.g., Tomcat, Jetty) for deployment.</td>
<td><strong>Embedded servers</strong> (Tomcat, Jetty, Undertow) allow applications to run standalone.</td>
</tr>
<tr>
<td><strong>Dependency Management</strong></td>
<td>Requires developers to manually manage dependencies.</td>
<td>Provides &quot;starters&quot; (e.g., <code v-pre>spring-boot-starter-web</code>) to simplify dependency management.</td>
</tr>
<tr>
<td><strong>Complexity</strong></td>
<td>More flexible but requires more setup and understanding of components.</td>
<td><strong>Opinionated defaults</strong> make development faster and easier.</td>
</tr>
<tr>
<td><strong>Microservices</strong></td>
<td>Can be used for microservices but requires additional configuration.</td>
<td>Designed with microservices in mind, making development smoother.</td>
</tr>
<tr>
<td><strong>Production Readiness</strong></td>
<td>Requires additional setup for metrics, logging, and monitoring.</td>
<td>Includes built-in support for monitoring, metrics, and externalized configuration.</td>
</tr>
</tbody>
</table>
<h2 id="spring-boot-architecture" tabindex="-1"><a class="header-anchor" href="#spring-boot-architecture"><span>Spring Boot Architecture</span></a></h2>
<figure><img src="/assets/image/spring/spring-boot-architecture.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol>
<li><strong>Client Layer</strong></li>
</ol>
<ul>
<li>The external user or system that sends HTTP/HTTPS requests to interact with the application.</li>
</ul>
<ol start="2">
<li><strong>Controller Layer (Presentation Layer)</strong></li>
</ol>
<ul>
<li>Handles HTTP methods such as GET, POST, PUT, DELETE</li>
<li>Exposes RESTful APIs using controllers</li>
<li>Performs request validation</li>
<li>Manages authentication entry points</li>
<li>Converts Java objects to JSON and vice versa</li>
<li>Forwards validated requests to the Business Layer</li>
</ul>
<ol start="3">
<li><strong>Service Layer (Business Logic Layer)</strong></li>
</ol>
<ul>
<li>Implements business rules and workflows</li>
<li>Processes and validates data</li>
<li>Handles authentication and authorization logic (using Spring Security if required)</li>
<li>Manages transactions using @Transactional</li>
<li>Communicates with the Persistence Layer to retrieve or store data</li>
</ul>
<ol start="4">
<li><strong>Persistence Layer</strong></li>
</ol>
<ul>
<li>Maps Java objects to database tables using ORM frameworks</li>
<li>Performs CRUD (Create, Read, Update, Delete) operations</li>
<li>Manages database transactions</li>
<li>Supports both relational and NoSQL databases</li>
</ul>
<ol start="5">
<li><strong>Database Layer</strong></li>
</ol>
<ul>
<li>The storage system where application data is permanently stored and retrieved.</li>
</ul>
<p>Request flow in spring boot: <code v-pre>Client -&gt;Controller -&gt;Service -&gt;Repository -&gt;Database -&gt;Response</code>.</p>
<ul>
<li>A Client makes an HTTPS request (GET/POST/PUT/DELETE).</li>
<li>The request is handled by the Controller, which is mapped to the corresponding route.</li>
<li>If business logic is required, the Controller calls the Service Layer.</li>
<li>The Service Layer processes the logic and interacts with the Repository Layer to retrieve or modify data in the Database.</li>
<li>The data is mapped using JPA with the corresponding Model/Entity class.</li>
<li>The response is sent back to the client. If using Spring MVC with JSP, a JSP page may be returned as the response if no errors occur.</li>
</ul>
<h2 id="auto-configuration" tabindex="-1"><a class="header-anchor" href="#auto-configuration"><span>Auto-Configuration</span></a></h2>
<p>Auto-configuration works using the <code v-pre>@EnableAutoConfiguration</code> annotation. Spring Boot tries to automatically configure your Spring application based on</p>
<ul>
<li>Dependencies on your classpath</li>
<li>Existing beans in the application context</li>
<li>Application properties</li>
</ul>
<p>For example, if a database library is on the classpath and you have not manually defined a <code v-pre>DataSource</code>, Spring Boot may configure one for you. Spring Boot’s official docs describe auto-configuration as automatically configuring your application based on the JAR dependencies you have added.</p>
<h3 id="why-auto-configuration-exists" tabindex="-1"><a class="header-anchor" href="#why-auto-configuration-exists"><span>Why Auto Configuration Exists</span></a></h3>
<p>Without Spring Boot, you often need a lot of manual configuration:</p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">Configuration</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> WebConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">Bean</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    public</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> DispatcherServlet</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> dispatcherServlet</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        return</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> DispatcherServlet</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">Bean</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    public</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> TomcatServletWebServerFactory</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> servletContainer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        return</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> TomcatServletWebServerFactory</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>With Spring Boot, you can often just add a starter:</p>
<div class="code-block-with-title">
  <div class="code-block-title-bar" data-title="pom.xml">
    <span>pom.xml</span>
  </div>
  <div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-xml"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>org.springframework.boot&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>spring-boot-starter-web&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>
</div><p>and write:</p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">SpringBootApplication</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> DemoApplication</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">    SpringApplication</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">run</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">DemoApplication</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, args);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Spring Boot sees <code v-pre>spring-boot-starter-web</code>, detects web-related classes on the classpath, and auto-configures the web application infrastructure.</p>
<h3 id="springbootapplication" tabindex="-1"><a class="header-anchor" href="#springbootapplication"><span><code v-pre>@SpringBootApplication</code></span></a></h3>
<p>Most Spring Boot applications start with <code v-pre>@SpringBootApplication</code>, it includes several important behaviors:</p>
<ol>
<li><code v-pre>@Configuration</code></li>
</ol>
<ul>
<li>Tags the class as a source of bean definitions for the application context.</li>
</ul>
<ol start="2">
<li><code v-pre>@EnableAutoConfiguration</code></li>
</ol>
<ul>
<li>Tells Spring Boot to start adding beans based on classpath settings, other beans, and various property settings. For example, if <code v-pre>spring-webmvc</code> is on the classpath, this annotation flags the application as a web application and activates key behaviors, such as setting up a <code v-pre>DispatcherServlet</code>.</li>
</ul>
<ol start="3">
<li><code v-pre>@ComponentScan</code></li>
</ol>
<ul>
<li>Tells Spring to look for other components, configurations, and services in the <code v-pre>com/example</code> package, letting it find the controllers.</li>
</ul>
<h3 id="how-does-auto-configuration-work" tabindex="-1"><a class="header-anchor" href="#how-does-auto-configuration-work"><span>How Does Auto Configuration Work</span></a></h3>
<p>Auto configuration is <strong>conditional</strong>. Spring Boot does not blindly create every possible bean. It asks questions like:</p>
<ul>
<li>Is this class on the classpath?</li>
<li>Is this property enabled?</li>
<li>Has the user already defined this bean?</li>
<li>Is this a web application?</li>
<li>Is this a servlet app or reactive app?</li>
</ul>
<p>Auto-configuration classes usually use <code v-pre>@ConditionalOnClass</code> and <code v-pre>@ConditionalOnMissingBean</code>, so they apply only when relevant classes are found and when the user has not declared their own configuration. <strong>Auto-configuration provides defaults, but your own configuration wins.</strong></p>
<p>The workflow:</p>
<ol>
<li>Load your application configuration.</li>
<li>Register your <code v-pre>@Bean</code> methods and <code v-pre>@Component</code> classes.</li>
<li>Consider auto-configuration classes.</li>
<li>Apply only auto-configurations whose conditions match.</li>
<li>Back away when your beans already exist.</li>
</ol>
<h3 id="best-practice" tabindex="-1"><a class="header-anchor" href="#best-practice"><span>Best Practice</span></a></h3>
<ol>
<li><strong>Trust auto-configuration first</strong></li>
</ol>
<p>Start simple:</p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">SpringBootApplication</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> DemoApplication</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Add dependencies and properties. Only customize when necessary.</p>
<ol start="2">
<li><strong>Use properties before custom beans</strong></li>
</ol>
<ul>
<li>Prefer: <code v-pre>server.port=9090</code> over manually customizing the embedded server.</li>
<li>Prefer: <code v-pre>spring.jackson.default-property-inclusion=non_null</code> over creating a full custom <code v-pre>ObjectMapper</code>, unless you need more control.</li>
</ul>
<ol start="3">
<li><strong>Define your own bean when behavior truly needs customization</strong></li>
</ol>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">Bean</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> PaymentClient</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> paymentClient</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> PaymentClient</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"custom"</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This is clean because it uses Spring Boot’s “back away” design.</p>
<ol start="4">
<li><strong>Use exclusions carefully</strong></li>
</ol>
<p>Excluding auto-configuration is useful, but it is more aggressive. Use it when you are sure you do not want that whole auto-configuration.</p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">SpringBootApplication</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">exclude</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> DataSourceAutoConfiguration</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">class</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">)`</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="5">
<li><strong>Use <code v-pre>/actuator/conditions</code> or <code v-pre>--debug</code> to understand decisions</strong></li>
</ol>
<p>Do not guess why a bean exists or does not exist. Check the conditions report.</p>
<h2 id="starter-dependencies" tabindex="-1"><a class="header-anchor" href="#starter-dependencies"><span>Starter Dependencies</span></a></h2>
<p>A Spring Boot starter is a convenient <strong>dependency bundle</strong>. Instead of manually adding many related dependencies one by one, you add one starter, and it brings the common libraries needed for that feature.</p>
<p>For example, instead of manually adding:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>spring-web</span></span>
<span class="line"><span>spring-webmvc</span></span>
<span class="line"><span>jackson</span></span>
<span class="line"><span>tomcat</span></span>
<span class="line"><span>validation</span></span>
<span class="line"><span>logging</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>you usually add:</p>
<div class="code-block-with-title">
  <div class="code-block-title-bar" data-title="pom.xml">
    <span>pom.xml</span>
  </div>
  <div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-xml"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>org.springframework.boot&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>spring-boot-starter-web&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>
</div><p>Spring Boot manages dependency versions for you through a curated dependency list, and in practice you do not need to provide versions for those dependencies because Boot manages them. When you upgrade Spring Boot, those dependencies are upgraded consistently. Especially avoid manually specifying Spring Framework versions in a Boot project unless you have a strong reason.</p>
<h3 id="starter-vs-auto-configuration" tabindex="-1"><a class="header-anchor" href="#starter-vs-auto-configuration"><span>Starter vs. Auto-configuration</span></a></h3>
<p>The starter itself is not magic. The real mechanism is:</p>
<ul>
<li>Add starter.</li>
<li>Starter adds dependencies.</li>
<li>Dependencies put classes on the classpath.</li>
<li>Auto-configuration sees those classes.</li>
<li>Conditions match.</li>
<li>Spring Boot creates useful default beans.</li>
</ul>
<h3 id="common-spring-boot-starters" tabindex="-1"><a class="header-anchor" href="#common-spring-boot-starters"><span>Common Spring Boot Starters</span></a></h3>
<table>
<thead>
<tr>
<th>Starter</th>
<th>What it is for</th>
<th>Common use case</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>spring-boot-starter</code></td>
<td>Core Spring Boot starter</td>
<td>Basic Spring Boot app with auto-configuration and logging</td>
</tr>
<tr>
<td><code v-pre>spring-boot-starter-web</code></td>
<td>Spring MVC + embedded servlet server</td>
<td>REST APIs, traditional web apps</td>
</tr>
<tr>
<td><code v-pre>spring-boot-starter-webflux</code></td>
<td>Reactive web stack</td>
<td>Reactive REST APIs, WebClient, non-blocking services</td>
</tr>
<tr>
<td><code v-pre>spring-boot-starter-data-jpa</code></td>
<td>Spring Data JPA + Hibernate</td>
<td>Relational database apps using entities/repositories</td>
</tr>
<tr>
<td><code v-pre>spring-boot-starter-data-jdbc</code></td>
<td>Spring Data JDBC</td>
<td>Simpler relational persistence without full JPA/Hibernate</td>
</tr>
<tr>
<td><code v-pre>spring-boot-starter-jdbc</code></td>
<td>JDBC support</td>
<td>Direct SQL using <code v-pre>JdbcTemplate</code></td>
</tr>
<tr>
<td><code v-pre>spring-boot-starter-data-mongodb</code></td>
<td>Spring Data MongoDB</td>
<td>Document database applications</td>
</tr>
<tr>
<td><code v-pre>spring-boot-starter-data-redis</code></td>
<td>Redis support</td>
<td>Cache, session storage, distributed locks, fast key-value access</td>
</tr>
<tr>
<td><code v-pre>spring-boot-starter-security</code></td>
<td>Spring Security</td>
<td>Authentication, authorization, password protection, API security</td>
</tr>
<tr>
<td><code v-pre>spring-boot-starter-oauth2-client</code></td>
<td>OAuth2 client support</td>
<td>Login with Google, GitHub, or SSO providers</td>
</tr>
<tr>
<td><code v-pre>spring-boot-starter-oauth2-resource-server</code></td>
<td>OAuth2 resource server support</td>
<td>JWT-protected REST APIs</td>
</tr>
<tr>
<td><code v-pre>spring-boot-starter-validation</code></td>
<td>Bean Validation support</td>
<td>Validate request DTOs with <code v-pre>@Valid</code>, <code v-pre>@NotBlank</code>, <code v-pre>@Email</code>, etc.</td>
</tr>
<tr>
<td><code v-pre>spring-boot-starter-test</code></td>
<td>Testing support</td>
<td>Unit tests, integration tests, Spring Boot tests</td>
</tr>
<tr>
<td><code v-pre>spring-boot-starter-actuator</code></td>
<td>Production monitoring and management</td>
<td>Health checks, metrics, info endpoints, operational visibility</td>
</tr>
<tr>
<td><code v-pre>spring-boot-starter-cache</code></td>
<td>Spring cache abstraction</td>
<td><code v-pre>@Cacheable</code>, <code v-pre>@CacheEvict</code>, <code v-pre>@CachePut</code></td>
</tr>
<tr>
<td><code v-pre>spring-boot-starter-aop</code></td>
<td>Aspect-oriented programming</td>
<td>Logging, auditing, metrics, cross-cutting concerns</td>
</tr>
<tr>
<td><code v-pre>spring-boot-starter-amqp</code></td>
<td>RabbitMQ / AMQP support</td>
<td>Message queues, async event processing</td>
</tr>
<tr>
<td><code v-pre>spring-boot-starter-mail</code></td>
<td>Email support</td>
<td>Sending emails through SMTP</td>
</tr>
<tr>
<td><code v-pre>spring-boot-starter-thymeleaf</code></td>
<td>Thymeleaf template engine</td>
<td>Server-side rendered HTML pages</td>
</tr>
<tr>
<td><code v-pre>spring-boot-starter-websocket</code></td>
<td>WebSocket support</td>
<td>Real-time communication, chat, notifications</td>
</tr>
<tr>
<td><code v-pre>spring-boot-starter-json</code></td>
<td>JSON serialization support</td>
<td>Jackson-based JSON handling</td>
</tr>
<tr>
<td><code v-pre>spring-boot-starter-logging</code></td>
<td>Logging with Logback</td>
<td>Application logging</td>
</tr>
<tr>
<td><code v-pre>spring-boot-starter-log4j2</code></td>
<td>Logging with Log4j2</td>
<td>Replace default Logback with Log4j2</td>
</tr>
<tr>
<td><code v-pre>spring-boot-starter-quartz</code></td>
<td>Quartz scheduler support</td>
<td>Scheduled jobs with persistence or more control</td>
</tr>
<tr>
<td><code v-pre>spring-boot-starter-batch</code></td>
<td>Spring Batch support</td>
<td>Batch jobs, ETL, large data processing</td>
</tr>
<tr>
<td><code v-pre>spring-boot-starter-rsocket</code></td>
<td>RSocket support</td>
<td>Reactive messaging over TCP/WebSocket</td>
</tr>
<tr>
<td><code v-pre>spring-boot-starter-graphql</code></td>
<td>Spring GraphQL support</td>
<td>GraphQL APIs</td>
</tr>
</tbody>
</table>
<h2 id="application-properties-application-yml" tabindex="-1"><a class="header-anchor" href="#application-properties-application-yml"><span><code v-pre>application.properties</code> &amp; <code v-pre>application.yml</code></span></a></h2>
<p>In Spring Boot, <code v-pre>application.properties</code> and <code v-pre>application.yml</code> are the main configuration files for your application.</p>
<p>They let you <strong>externalize configuration</strong> so that the same code can run in different environments, such as local, dev, test, staging, and production. Spring Boot supports many external configuration sources, including Java properties files, YAML files, environment variables, and command-line arguments. Values can be injected with @Value, accessed through <code v-pre>Environment</code>, or bound to structured objects with <code v-pre>@ConfigurationProperties</code>.</p>
<h3 id="where-should-these-files-be-placed" tabindex="-1"><a class="header-anchor" href="#where-should-these-files-be-placed"><span>Where Should These Files Be Placed</span></a></h3>
<p>Most commonly: <code v-pre>src/main/resources/application.properties</code>, or: <code v-pre>src/main/resources/application.yml</code>.</p>
<p>Spring Boot automatically looks for <code v-pre>application.properties</code> and <code v-pre>application.yml</code> from several locations, including the classpath root, classpath <code v-pre>/config</code>, the current directory, <code v-pre>./config/</code>, and immediate child directories of <code v-pre>./config/</code>. Later locations can override earlier ones.</p>
<h3 id="application-properties-syntax" tabindex="-1"><a class="header-anchor" href="#application-properties-syntax"><span><code v-pre>application.properties</code> Syntax</span></a></h3>
<p><code v-pre>application.properties</code> uses flat key-value pairs.</p>
<div class="code-block-with-title">
  <div class="code-block-title-bar" data-title="application.properties">
    <span>application.properties</span>
  </div>
  <div class="language-properties line-numbers-mode" data-highlighter="shiki" data-ext="properties" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-properties"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD">server.port</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379">8080</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD">spring.application.name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379">order-service</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD">spring.datasource.url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379">jdbc:postgresql://localhost:5432/orders</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD">spring.datasource.username</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379">postgres</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD">spring.datasource.password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379">password</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>
</div><h3 id="application-yml-syntax" tabindex="-1"><a class="header-anchor" href="#application-yml-syntax"><span><code v-pre>application.yml</code> Syntax</span></a></h3>
<p>The application.properties file is not very readable when dealing with complex configurations. Most developers prefer using <code v-pre>application.yml</code> (YAML format) instead. YAML is a superset of JSON and provides a more structured and readable way to define hierarchical configuration data. (<strong>Indentation-sensitive</strong>)</p>
<div class="code-block-with-title">
  <div class="code-block-title-bar" data-title="application.yml">
    <span>application.yml</span>
  </div>
  <div class="language-yml line-numbers-mode" data-highlighter="shiki" data-ext="yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yml"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">server</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  port</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">8080</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">spring</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  application</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">order-service</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  datasource</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">jdbc:postgresql://localhost:5432/orders</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    username</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">postgres</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">password</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">logging</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  level</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    org.springframework.web</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">DEBUG</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>
</div><p>Spring Boot recommends sticking with one format for the whole application. If both <code v-pre>.properties</code> and YAML files exist in the same location, <code v-pre>.properties</code> takes precedence.</p>
<p>Best practice:</p>
<ul>
<li>Use <code v-pre>application.properties</code> for small demos.</li>
<li>Use <code v-pre>application.yml</code> for larger real-world applications with nested configuration.</li>
</ul>
<h3 id="reading-properties" tabindex="-1"><a class="header-anchor" href="#reading-properties"><span>Reading Properties</span></a></h3>
<ol>
<li>With <code v-pre>@Value</code></li>
</ol>
<p>For a small number of simple properties, use <code v-pre>@Value</code></p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">Component</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> AppInfo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">Value</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"${app.name}"</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  private</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> appName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">Value</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"${app.timeout}"</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  private</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> timeout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">Value</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"${app.region:us-east}"</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  private</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> region</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>With <code v-pre>Environment</code></li>
</ol>
<p>Use <code v-pre>Environment</code> when you need dynamic property lookup by key.</p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">Component</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> AppInfo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  private</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> final</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Environment</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> environment</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  public</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> AppInfo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Environment</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> environment</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">    this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">environment</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> environment;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> printConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">    String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> appName</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> environment</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">getProperty</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"spring.application.name"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">    String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> port</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> environment</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">getProperty</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"server.port"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>With <code v-pre>@ConfigurationProperties</code></li>
</ol>
<p>For real projects, prefer <code v-pre>@ConfigurationProperties</code> when you have grouped config.</p>
<CodeTabs :data='[{"id":"application.yml"},{"id":"Java Bean"},{"id":"Application class"},{"id":"Service"}]'>
<template #title0="{ value, isActive }">application.yml</template>
<template #title1="{ value, isActive }">Java Bean</template>
<template #title2="{ value, isActive }">Application class</template>
<template #title3="{ value, isActive }">Service</template>
<template #tab0="{ value, isActive }">
<div class="language-yml line-numbers-mode" data-highlighter="shiki" data-ext="yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yml"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">payment</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  provider</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">stripe</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  timeout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">3s</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  retry-count</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">3</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  supported-currencies</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">GBP</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">USD</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">EUR</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> java.time.Duration</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> java.util.List</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> org.springframework.boot.context.properties.ConfigurationProperties</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">ConfigurationProperties</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">prefix</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "payment"</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> PaymentProperties</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  private</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> provider</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  private</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Duration</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> timeout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  private</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> retryCount</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  private</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> List</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">String</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">></span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> supportedCurrencies</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  public</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> String</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> getProvider</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> { </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> provider; }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> setProvider</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">String</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> provider</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">provider</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> provider; }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  public</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Duration</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> getTimeout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> { </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> timeout; }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> setTimeout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Duration</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> timeout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">timeout</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> timeout; }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> getRetryCount</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> { </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> retryCount; }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> setRetryCount</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> retryCount</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">retryCount</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> retryCount; }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  public</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> List</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> getSupportedCurrencies</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> { </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> supportedCurrencies; }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> setSupportedCurrencies</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">List</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">supportedCurrencies</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">supportedCurrencies</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> supportedCurrencies; }</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> }</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// Enabling scanning</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">SpringBootApplication</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">ConfigurationPropertiesScan</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> OrderApplication</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">    SpringApplication</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">run</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">OrderApplication</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, args);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab3="{ value, isActive }">
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// Use it in a service</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">Service</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> PaymentService</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  private</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> final</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> PaymentProperties</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> properties</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  public</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> PaymentService</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">PaymentProperties</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> properties</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">properties</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> properties; }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> pay</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">properties</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">getProvider</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()); }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<p>Spring Boot supports relaxed binding for <code v-pre>@ConfigurationProperties</code>. That means property names do not need to exactly match Java field names. For example, <code v-pre>context-path</code> can bind to <code v-pre>contextPath</code>, and uppercase environment variables such as <code v-pre>PORT</code> can bind to <code v-pre>port</code>. <strong>We recommend kebab-case for <code v-pre>.properties</code> and YAML files, such as <code v-pre>my.main-project.person.first-name</code>.</strong></p>
<h3 id="profile-specific-config" tabindex="-1"><a class="header-anchor" href="#profile-specific-config"><span>Profile-specific Config</span></a></h3>
<p>Profiles let you use different config in different environments. Base file: <code v-pre>application.yml</code>. Profile-specific files: <code v-pre>application-dev.yml, application-test.yml, application-prod.yml</code>.</p>
<p>Activate profile:</p>
<ul>
<li><code v-pre>java -jar app.jar --spring.profiles.active=dev</code></li>
<li><code v-pre>mvn spring-boot:run -Dspring-boot.run.profiles=dev</code></li>
</ul>
<h3 id="configuration-precesence" tabindex="-1"><a class="header-anchor" href="#configuration-precesence"><span>Configuration Precesence</span></a></h3>
<ol>
<li>Command-line arguments</li>
<li>Java system properties</li>
<li>OS environment variables</li>
<li>External <code v-pre>application-prod.yml</code></li>
<li>External <code v-pre>application.yml</code></li>
<li>Packaged <code v-pre>application-prod.yml</code></li>
<li>Packaged <code v-pre>application.yml</code></li>
<li>Default properties</li>
</ol>
<h3 id="environment-variables" tabindex="-1"><a class="header-anchor" href="#environment-variables"><span>Environment Variables</span></a></h3>
<p>In production, configuration often comes from environment variables. Spring Boot’s relaxed binding supports environment variable naming conventions. Because most operating systems do not allow period-separated environment variable names, you can use underscores instead, such as SPRING_CONFIG_NAME for <code v-pre>spring.config.name</code>.</p>
<div class="code-block-with-title">
  <div class="code-block-title-bar" data-title="application.yml">
    <span>application.yml</span>
  </div>
  <div class="language-yml line-numbers-mode" data-highlighter="shiki" data-ext="yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yml"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">spring</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  datasource</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">jdbc:postgresql://localhost:5432/orders</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    username</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">${DB_USERNAME}</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">${DB_PASSWORD}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>
</div><p>Then set environment variables:</p>
<div class="code-block-with-title">
  <div class="code-block-title-bar" data-title=".env">
    <span>.env</span>
  </div>
  <div class="language-env line-numbers-mode" data-highlighter="shiki" data-ext="env" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-env"><span class="line"><span>DB_USERNAME=postgres</span></span>
<span class="line"><span>DB_PASSWORD=secret</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div>
</div><p><strong>Avoid this in Git</strong>:</p>
<div class="language-yml line-numbers-mode" data-highlighter="shiki" data-ext="yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yml"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">spring</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  datasource</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">real-production-password</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>File type</th>
<th>Where to place it</th>
<th style="text-align:right">Commit to Git?</th>
<th>Purpose</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>application.yml</code></td>
<td><code v-pre>src/main/resources/application.yml</code></td>
<td style="text-align:right">Yes</td>
<td>Safe default config</td>
</tr>
<tr>
<td><code v-pre>application-dev.yml</code></td>
<td><code v-pre>src/main/resources/application-dev.yml</code></td>
<td style="text-align:right">Yes, if no secrets</td>
<td>Local/dev profile defaults</td>
</tr>
<tr>
<td><code v-pre>application-test.yml</code></td>
<td><code v-pre>src/test/resources/application-test.yml</code> or <code v-pre>src/main/resources</code></td>
<td style="text-align:right">Yes</td>
<td>Test config</td>
</tr>
<tr>
<td><code v-pre>application-prod.yml</code></td>
<td>Usually external to the JAR, or safe defaults only in <code v-pre>src/main/resources</code></td>
<td style="text-align:right">Usually no, if it contains secrets</td>
<td>Production config</td>
</tr>
<tr>
<td><code v-pre>.env</code></td>
<td>Project root for local development</td>
<td style="text-align:right">No</td>
<td>Local environment variables</td>
</tr>
<tr>
<td><code v-pre>.env.example</code></td>
<td>Project root</td>
<td style="text-align:right">Yes</td>
<td>Documents required to know what env vars are included, only store keys</td>
</tr>
<tr>
<td><code v-pre>secrets.yml</code> / <code v-pre>secrets.properties</code></td>
<td>Outside project root, or ignored local file</td>
<td style="text-align:right">No</td>
<td>Local secret values</td>
</tr>
<tr>
<td>Kubernetes Secrets / cloud secret manager</td>
<td>Deployment platform</td>
<td style="text-align:right">No</td>
<td>Production secrets</td>
</tr>
</tbody>
</table>
<h3 id="validating-configuration" tabindex="-1"><a class="header-anchor" href="#validating-configuration"><span>Validating Configuration</span></a></h3>
<p>You can validate configuration at startup. If required config is missing, the application fails fast at startup.</p>
<p>Spring Boot validates <code v-pre>@ConfigurationProperties</code> classes when they are annotated with <code v-pre>@Validated</code>, and you can use Jakarta validation constraints directly on the configuration class.</p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">ConfigurationProperties</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">prefix</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "payment"</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">Validated</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> PaymentProperties</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">NotBlank</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  private</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> provider</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">NotBlank</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  private</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> apiKey</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  // getters and setters</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="where-to-find-properties" tabindex="-1"><a class="header-anchor" href="#where-to-find-properties"><span>Where to Find Properties</span></a></h3>
<table>
<thead>
<tr>
<th>Source</th>
<th>What to look for</th>
<th>When to use it</th>
</tr>
</thead>
<tbody>
<tr>
<td>Official Spring Boot Common Application Properties</td>
<td>Built-in properties like <code v-pre>server.port</code>, <code v-pre>spring.datasource.url</code>, <code v-pre>logging.level.*</code>, <code v-pre>management.endpoints.*</code></td>
<td>First place to check for standard Spring Boot config</td>
</tr>
<tr>
<td>Your starter dependency documentation</td>
<td>Properties introduced by specific starters, e.g. JPA, Redis, Security, Actuator</td>
<td>When you add a new starter</td>
</tr>
<tr>
<td>IDE autocomplete</td>
<td>Property suggestions inside <code v-pre>application.properties</code> / <code v-pre>application.yml</code></td>
<td>Fastest daily-development method</td>
</tr>
<tr>
<td>Your own <code v-pre>@ConfigurationProperties</code> classes</td>
<td>Custom project-specific properties such as <code v-pre>payment.provider</code>, <code v-pre>app.upload-limit</code></td>
<td>When defining your own app config</td>
</tr>
</tbody>
</table>
<h2 id="actuator" tabindex="-1"><a class="header-anchor" href="#actuator"><span>Actuator</span></a></h2>
<p>Spring Boot Actuator is a Spring Boot module that provides production-ready monitoring and management features for your application.</p>
<p>Spring Boot describes Actuator as a set of production-ready features that help you monitor and manage applications through HTTP endpoints or JMX, with support for health checks, metrics, and auditing.</p>
<p>The main dependency is:</p>
<div class="code-block-with-title">
  <div class="code-block-title-bar" data-title="pom.xml">
    <span>pom.xml</span>
  </div>
  <div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-xml"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>org.springframework.boot&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>spring-boot-starter-actuator&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>
</div><h3 id="why-do-we-need-actuator" tabindex="-1"><a class="header-anchor" href="#why-do-we-need-actuator"><span>Why Do We Need Actuator</span></a></h3>
<p>In real projects, writing business logic is not enough. Once the app is deployed, we need to observe and manage it.</p>
<p>Common production questions:</p>
<table>
<thead>
<tr>
<th>Question</th>
<th>Actuator feature</th>
</tr>
</thead>
<tbody>
<tr>
<td>Is the app alive?</td>
<td><code v-pre>/actuator/health</code></td>
</tr>
<tr>
<td>What version/build is running?</td>
<td><code v-pre>/actuator/info </code></td>
</tr>
<tr>
<td>How many requests are coming in?</td>
<td><code v-pre>/actuator/metrics</code></td>
</tr>
<tr>
<td>What beans exist in the container?</td>
<td><code v-pre>/actuator/beans</code></td>
</tr>
<tr>
<td>Which properties are active?</td>
<td><code v-pre>/actuator/env</code></td>
</tr>
<tr>
<td>Why did auto-configuration happen?</td>
<td><code v-pre>/actuator/conditions</code></td>
</tr>
<tr>
<td>What loggers are active?</td>
<td><code v-pre>/actuator/loggers</code></td>
</tr>
<tr>
<td>Can Prometheus scrape metrics?</td>
<td><code v-pre>/actuator/prometheus</code></td>
</tr>
</tbody>
</table>
<p>Actuator endpoints let you monitor and interact with your application, and Spring Boot includes built-in endpoints while also allowing custom endpoints.</p>
<h3 id="endpoint-availability" tabindex="-1"><a class="header-anchor" href="#endpoint-availability"><span>Endpoint Availability</span></a></h3>
<p>There are two states of Actuator endpoints availability:</p>
<ul>
<li>Enabled: Whether the endpoint exists inside the application</li>
<li>Exposed: Whether the endpoint is accessible through web/JMX</li>
</ul>
<p>An endpoint can be enabled but not exposed over HTTP.</p>
<p>To expose more endpoints:</p>
<div class="code-block-with-title">
  <div class="code-block-title-bar" data-title="application.yml">
    <span>application.yml</span>
  </div>
  <div class="language-yml line-numbers-mode" data-highlighter="shiki" data-ext="yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yml"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">management</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  endpoints</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    web</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      exposure</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        include</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">health,info,metrics,beans,env,conditions,loggers</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>
</div><p>But avoid exposing all endpoints in production unless they are properly secured.</p>
<h2 id="devtools" tabindex="-1"><a class="header-anchor" href="#devtools"><span>DevTools</span></a></h2>
<p>Spring Boot DevTools is a module provided by Spring Boot to enhance the developer experience during application development. It helps improve productivity by reducing manual effort and speeding up the development cycle.</p>
<div class="code-block-with-title">
  <div class="code-block-title-bar" data-title="pom.xml">
    <span>pom.xml</span>
  </div>
  <div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-xml"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>org.springframework.boot&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>spring-boot-devtools&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">optional</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>true&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">optional</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>
</div><table>
<thead>
<tr>
<th>Feature</th>
<th>What it does</th>
<th>Common use case</th>
</tr>
</thead>
<tbody>
<tr>
<td>Automatic restart</td>
<td>Restarts the app when classpath files change</td>
<td>Backend code changes</td>
</tr>
<tr>
<td>Property defaults</td>
<td>Applies development-friendly defaults</td>
<td>Disable template/static cache</td>
</tr>
<tr>
<td>LiveReload</td>
<td>Refreshes browser after resource changes</td>
<td>HTML/CSS/template development</td>
</tr>
<tr>
<td>Global settings</td>
<td>Shared DevTools settings across projects</td>
<td>Same trigger file for all projects</td>
</tr>
<tr>
<td>Restart exclusions</td>
<td>Avoid full restart for static/template resources</td>
<td>Faster frontend changes</td>
</tr>
<tr>
<td>Additional paths</td>
<td>Watch files outside classpath</td>
<td>Monorepo or generated resources</td>
</tr>
<tr>
<td>Remote support</td>
<td>DevTools connection to remote app</td>
<td>Rare; trusted environments only</td>
</tr>
</tbody>
</table>
<blockquote>
<p>LiveReload is marked as deprecated as of Spring Boot 4.1.0 with no replacement.</p>
</blockquote>
</div></template>


