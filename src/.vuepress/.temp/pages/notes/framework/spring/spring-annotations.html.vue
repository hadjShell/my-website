<template><div><p>Spring Annotations are metadata in Java used to provide configuration and behavior information to the Spring Framework. They eliminate the need for XML-based configuration, making Spring applications more concise, readable, and easier to maintain. In essence, annotations tell the Spring Container how to create, configure, and manage application components (beans).</p>
<h2 id="types-of-spring-framework-annotations" tabindex="-1"><a class="header-anchor" href="#types-of-spring-framework-annotations"><span>Types of Spring Framework Annotations</span></a></h2>
<ul>
<li><strong>Spring Core Annotations</strong>: Dependency injection, bean lifecycle, and context configuration.</li>
<li><strong>Spring Web Annotations</strong>: Used for building web and RESTful services.</li>
<li><strong>Spring Boot Annotations</strong>: Simplify auto-configuration and bootstrapping.</li>
<li><strong>Spring Scheduling Annotations</strong>: For task scheduling and asynchronous execution.</li>
<li><strong>Spring Data Annotations</strong>: For JPA, repositories, and data persistence.</li>
<li><strong>Spring Bean Annotations</strong>: For defining and managing beans.</li>
</ul>
<h2 id="how-does-spring-annotations-work" tabindex="-1"><a class="header-anchor" href="#how-does-spring-annotations-work"><span>How does Spring Annotations Work</span></a></h2>
<h2 id="spring-core-annotations" tabindex="-1"><a class="header-anchor" href="#spring-core-annotations"><span>Spring Core Annotations</span></a></h2>
<p>Annotations in the <code v-pre>org.springframework.beans.factory.annotation</code> and <code v-pre>org.springframework.context.annotation</code> packages are collectively called Spring Core Annotations.</p>
<p>They can be divided into two main categories:</p>
<ul>
<li>Dependency Injection (DI)-Related Annotations</li>
<li>Context Configuration Annotations</li>
</ul>
<ol>
<li><strong>DI-related Annotations</strong></li>
</ol>
<table>
<thead>
<tr>
<th>Annotation</th>
<th>What it does</th>
<th>Common use case</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>@Autowired</code></td>
<td>Asks Spring to inject a matching bean automatically.</td>
<td>Constructor, setter, field, or method injection.</td>
<td><code v-pre>public OrderService(PaymentService paymentService) { ... }</code></td>
</tr>
<tr>
<td><code v-pre>@Qualifier</code></td>
<td>Chooses a specific bean when multiple beans of the same type exist.</td>
<td>Choosing <code v-pre>stripe</code> instead of <code v-pre>paypal</code>.</td>
<td><code v-pre>@Qualifier(&quot;stripe&quot;) PaymentService paymentService</code></td>
</tr>
<tr>
<td><code v-pre>@Primary</code></td>
<td>Marks one bean as the default choice when multiple candidates exist.</td>
<td>Default payment provider, default repository, default strategy.</td>
<td><code v-pre>@Primary @Service class StripePaymentService ...</code></td>
</tr>
<tr>
<td><code v-pre>@Value</code></td>
<td>Injects property values or SpEL expressions.</td>
<td>Reading config values from <code v-pre>application.properties</code> / <code v-pre>application.yml</code>.</td>
<td><code v-pre>@Value(&quot;${server.port}&quot;) private int port;</code></td>
</tr>
<tr>
<td><code v-pre>@Inject</code></td>
<td>Standard Jakarta DI alternative to <code v-pre>@Autowired</code>.</td>
<td>Projects that prefer standard DI annotations.</td>
<td><code v-pre>@Inject public OrderService(...)</code></td>
</tr>
<tr>
<td><code v-pre>@Named</code></td>
<td>Standard Jakarta DI alternative to <code v-pre>@Qualifier</code>.</td>
<td>Naming or selecting a specific dependency.</td>
<td><code v-pre>@Named(&quot;stripe&quot;) PaymentService paymentService</code></td>
</tr>
<tr>
<td><code v-pre>@Resource</code></td>
<td>Injects by name first, then type.</td>
<td>Legacy code or Java EE-style injection.</td>
<td><code v-pre>@Resource(name = &quot;stripePaymentService&quot;)</code></td>
</tr>
<tr>
<td><code v-pre>@Lazy</code></td>
<td>Delays bean creation or dependency resolution.</td>
<td>Avoiding expensive initialization or resolving circular dependency issues.</td>
<td><code v-pre>public OrderService(@Lazy PaymentService paymentService)</code></td>
</tr>
<tr>
<td><code v-pre>@Lookup</code></td>
<td>Lets Spring override a method to return a bean dynamically.</td>
<td>Injecting prototype beans into singleton beans.</td>
<td><code v-pre>@Lookup public PrototypeBean getBean() { return null; }</code></td>
</tr>
</tbody>
</table>
<ol start="2">
<li><strong>Context Configuration Annotations</strong></li>
</ol>
<table>
<thead>
<tr>
<th>Annotation</th>
<th>What it does</th>
<th>Common use case</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>@Configuration</code></td>
<td>Marks a class as a Spring Java configuration class.</td>
<td>Defining beans manually with methods.</td>
<td><code v-pre>@Configuration public class AppConfig { ... }</code></td>
</tr>
<tr>
<td><code v-pre>@Bean</code></td>
<td>Declares that a method returns a Spring-managed bean.</td>
<td>Manual bean creation for third-party classes or custom setup.</td>
<td><code v-pre>@Bean public PaymentService paymentService() { ... }</code></td>
</tr>
<tr>
<td><code v-pre>@Component</code></td>
<td>Marks a class as a Spring-managed component.</td>
<td>Generic Spring bean detected by component scanning.</td>
<td><code v-pre>@Component public class EmailClient { ... }</code></td>
</tr>
<tr>
<td><code v-pre>@Service</code></td>
<td>Specialized <code v-pre>@Component</code> for service-layer classes.</td>
<td>Business logic classes.</td>
<td><code v-pre>@Service public class OrderService { ... }</code></td>
</tr>
<tr>
<td><code v-pre>@Repository</code></td>
<td>Specialized <code v-pre>@Component</code> for persistence-layer classes.</td>
<td>DAO/repository classes.</td>
<td><code v-pre>@Repository public class UserRepository { ... }</code></td>
</tr>
<tr>
<td><code v-pre>@Controller</code></td>
<td>Specialized <code v-pre>@Component</code> for MVC controller classes.</td>
<td>Web controllers in Spring MVC.</td>
<td><code v-pre>@Controller public class UserController { ... }</code></td>
</tr>
<tr>
<td><code v-pre>@ComponentScan</code></td>
<td>Tells Spring where to scan for annotated components.</td>
<td>Discovering <code v-pre>@Component</code>, <code v-pre>@Service</code>, <code v-pre>@Repository</code>, etc.</td>
<td><code v-pre>@ComponentScan(&quot;com.example&quot;)</code></td>
</tr>
<tr>
<td><code v-pre>@Import</code></td>
<td>Imports other configuration classes.</td>
<td>Splitting configuration into modules.</td>
<td><code v-pre>@Import(DatabaseConfig.class)</code></td>
</tr>
<tr>
<td><code v-pre>@ImportResource</code></td>
<td>Imports XML configuration into Java config.</td>
<td>Mixing old XML config with modern Java config.</td>
<td><code v-pre>@ImportResource(&quot;classpath:beans.xml&quot;)</code></td>
</tr>
<tr>
<td><code v-pre>@PropertySource</code></td>
<td>Adds a property file to Spring’s <code v-pre>Environment</code>.</td>
<td>Loading custom <code v-pre>.properties</code> files.</td>
<td><code v-pre>@PropertySource(&quot;classpath:app.properties&quot;)</code></td>
</tr>
<tr>
<td><code v-pre>@Profile</code></td>
<td>Registers beans only under certain active profiles.</td>
<td>Different beans for <code v-pre>dev</code>, <code v-pre>test</code>, or <code v-pre>prod</code>.</td>
<td><code v-pre>@Profile(&quot;dev&quot;)</code></td>
</tr>
<tr>
<td><code v-pre>@Scope</code></td>
<td>Defines bean scope.</td>
<td>Singleton, prototype, request/session-scoped beans.</td>
<td><code v-pre>@Scope(&quot;prototype&quot;)</code></td>
</tr>
<tr>
<td><code v-pre>@Conditional</code></td>
<td>Registers a bean only if a condition matches.</td>
<td>Conditional configuration.</td>
<td><code v-pre>@Conditional(MyCondition.class)</code></td>
</tr>
<tr>
<td><code v-pre>@DependsOn</code></td>
<td>Forces one bean to initialize after another.</td>
<td>Startup-order dependency.</td>
<td><code v-pre>@DependsOn(&quot;dataSource&quot;)</code></td>
</tr>
<tr>
<td><code v-pre>@Order</code></td>
<td>Defines ordering for injected collections or ordered components.</td>
<td>Ordering filters, handlers, strategies, etc.</td>
<td><code v-pre>@Order(1)</code></td>
</tr>
</tbody>
</table>
<h2 id="spring-web-annotations" tabindex="-1"><a class="header-anchor" href="#spring-web-annotations"><span>Spring Web Annotations</span></a></h2>
<h2 id="spring-boot-annotations" tabindex="-1"><a class="header-anchor" href="#spring-boot-annotations"><span>Spring Boot Annotations</span></a></h2>
</div></template>


