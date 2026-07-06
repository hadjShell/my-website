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
<td><code v-pre>@Controller</code></td>
<td>Marks a class as a Spring MVC controller</td>
<td>Returning views/templates such as Thymeleaf pages</td>
<td><code v-pre>@Controller</code></td>
</tr>
<tr>
<td><code v-pre>@RestController</code></td>
<td>Combines <code v-pre>@Controller</code> + <code v-pre>@ResponseBody</code></td>
<td>Building REST APIs that return JSON/text directly</td>
<td><code v-pre>@RestController</code></td>
</tr>
<tr>
<td><code v-pre>@RequestMapping</code></td>
<td>Maps HTTP requests to controller classes or methods</td>
<td>Base path or flexible request mapping</td>
<td><code v-pre>@RequestMapping(&quot;/api/users&quot;)</code></td>
</tr>
<tr>
<td><code v-pre>@GetMapping</code></td>
<td>Maps HTTP <code v-pre>GET</code> requests</td>
<td>Fetching data</td>
<td><code v-pre>@GetMapping(&quot;/{id}&quot;)</code></td>
</tr>
<tr>
<td><code v-pre>@PostMapping</code></td>
<td>Maps HTTP <code v-pre>POST</code> requests</td>
<td>Creating data</td>
<td><code v-pre>@PostMapping</code></td>
</tr>
<tr>
<td><code v-pre>@PutMapping</code></td>
<td>Maps HTTP <code v-pre>PUT</code> requests</td>
<td>Replacing/updating a whole resource</td>
<td><code v-pre>@PutMapping(&quot;/{id}&quot;)</code></td>
</tr>
<tr>
<td><code v-pre>@PatchMapping</code></td>
<td>Maps HTTP <code v-pre>PATCH</code> requests</td>
<td>Partially updating a resource</td>
<td><code v-pre>@PatchMapping(&quot;/{id}&quot;)</code></td>
</tr>
<tr>
<td><code v-pre>@DeleteMapping</code></td>
<td>Maps HTTP <code v-pre>DELETE</code> requests</td>
<td>Deleting a resource</td>
<td><code v-pre>@DeleteMapping(&quot;/{id}&quot;)</code></td>
</tr>
<tr>
<td><code v-pre>@PathVariable</code></td>
<td>Binds a URI path variable to a method parameter</td>
<td>Getting <code v-pre>/users/{id}</code> value</td>
<td><code v-pre>getUser(@PathVariable Long id)</code></td>
</tr>
<tr>
<td><code v-pre>@RequestParam</code></td>
<td>Binds query parameters or form parameters</td>
<td>Reading <code v-pre>/users?page=1&amp;size=10</code></td>
<td><code v-pre>list(@RequestParam int page)</code></td>
</tr>
<tr>
<td><code v-pre>@RequestBody</code></td>
<td>Binds the HTTP request body to a Java object</td>
<td>Reading JSON request body</td>
<td><code v-pre>create(@RequestBody UserRequest request)</code></td>
</tr>
<tr>
<td><code v-pre>@ResponseBody</code></td>
<td>Writes method return value directly to HTTP response body</td>
<td>Returning JSON/text from <code v-pre>@Controller</code></td>
<td><code v-pre>@ResponseBody</code></td>
</tr>
<tr>
<td><code v-pre>@ResponseStatus</code></td>
<td>Sets a fixed HTTP response status</td>
<td>Return <code v-pre>201 CREATED</code>, <code v-pre>204 NO_CONTENT</code>, etc.</td>
<td><code v-pre>@ResponseStatus(HttpStatus.CREATED)</code></td>
</tr>
<tr>
<td><code v-pre>@RequestHeader</code></td>
<td>Binds an HTTP header to a method parameter</td>
<td>Reading <code v-pre>Authorization</code>, <code v-pre>User-Agent</code>, etc.</td>
<td><code v-pre>@RequestHeader(&quot;Authorization&quot;) String token</code></td>
</tr>
<tr>
<td><code v-pre>@CookieValue</code></td>
<td>Binds a cookie value to a method parameter</td>
<td>Reading session/tracking cookies</td>
<td><code v-pre>@CookieValue(&quot;SESSION&quot;) String sessionId</code></td>
</tr>
<tr>
<td><code v-pre>@ModelAttribute</code></td>
<td>Binds request parameters to an object; also exposes model data</td>
<td>Form submissions in MVC apps</td>
<td><code v-pre>@ModelAttribute UserForm form</code></td>
</tr>
<tr>
<td><code v-pre>@SessionAttributes</code></td>
<td>Stores model attributes in HTTP session</td>
<td>Multi-step forms or wizard-style flows</td>
<td><code v-pre>@SessionAttributes(&quot;cart&quot;)</code></td>
</tr>
<tr>
<td><code v-pre>@CrossOrigin</code></td>
<td>Enables CORS for controller/method</td>
<td>Allow frontend app from another origin</td>
<td><code v-pre>@CrossOrigin(&quot;http://localhost:3000&quot;)</code></td>
</tr>
<tr>
<td><code v-pre>@ExceptionHandler</code></td>
<td>Handles exceptions thrown by controller methods</td>
<td>Custom error response for specific exception</td>
<td><code v-pre>@ExceptionHandler(UserNotFoundException.class)</code></td>
</tr>
<tr>
<td><code v-pre>@ControllerAdvice</code></td>
<td>Applies controller-wide/global exception handling or model binding</td>
<td>Centralized exception handling</td>
<td><code v-pre>@ControllerAdvice</code></td>
</tr>
<tr>
<td><code v-pre>@RestControllerAdvice</code></td>
<td>Combines <code v-pre>@ControllerAdvice</code> + <code v-pre>@ResponseBody</code></td>
<td>Global REST API error handling</td>
<td><code v-pre>@RestControllerAdvice</code></td>
</tr>
<tr>
<td><code v-pre>@InitBinder</code></td>
<td>Customizes request parameter binding</td>
<td>Date formatting, validation binding rules</td>
<td><code v-pre>@InitBinder</code></td>
</tr>
<tr>
<td><code v-pre>@Validated</code></td>
<td>Enables Spring validation on method parameters/classes</td>
<td>Validating path/query params or request DTOs</td>
<td><code v-pre>@Validated</code></td>
</tr>
<tr>
<td><code v-pre>@Valid</code></td>
<td>Triggers Jakarta Bean Validation</td>
<td>Validate <code v-pre>@RequestBody</code> DTO</td>
<td><code v-pre>create(@Valid @RequestBody UserRequest request)</code></td>
</tr>
<tr>
<td><code v-pre>@RequestPart</code></td>
<td>Binds part of a multipart request</td>
<td>File upload with JSON metadata</td>
<td><code v-pre>@RequestPart MultipartFile file</code></td>
</tr>
<tr>
<td><code v-pre>@MatrixVariable</code></td>
<td>Binds matrix variables from URI path segments</td>
<td>Less common URI parameter style</td>
<td><code v-pre>/cars;color=red;year=2024</code></td>
</tr>
</tbody>
</table>
<h2 id="spring-boot-annotations" tabindex="-1"><a class="header-anchor" href="#spring-boot-annotations"><span>Spring Boot Annotations</span></a></h2>
<ol>
<li><strong>Application startup and configuration annotations</strong></li>
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
<td><code v-pre>@SpringBootApplication</code></td>
<td>Main annotation for a Spring Boot app; combines <code v-pre>@SpringBootConfiguration</code>, <code v-pre>@EnableAutoConfiguration</code>, and <code v-pre>@ComponentScan</code></td>
<td>Mark the main application class</td>
<td><code v-pre>@SpringBootApplication</code></td>
</tr>
<tr>
<td><code v-pre>@SpringBootConfiguration</code></td>
<td>Specialized Spring Boot version of <code v-pre>@Configuration</code></td>
<td>Usually used indirectly through <code v-pre>@SpringBootApplication</code></td>
<td><code v-pre>@SpringBootConfiguration</code></td>
</tr>
<tr>
<td><code v-pre>@EnableAutoConfiguration</code></td>
<td>Enables Spring Boot auto-configuration</td>
<td>Usually used indirectly through <code v-pre>@SpringBootApplication</code></td>
<td><code v-pre>@EnableAutoConfiguration</code></td>
</tr>
<tr>
<td><code v-pre>@ConfigurationPropertiesScan</code></td>
<td>Scans for <code v-pre>@ConfigurationProperties</code> classes</td>
<td>Automatically register typed config classes</td>
<td><code v-pre>@ConfigurationPropertiesScan</code></td>
</tr>
<tr>
<td><code v-pre>@EnableConfigurationProperties</code></td>
<td>Explicitly enables one or more <code v-pre>@ConfigurationProperties</code> classes</td>
<td>Enable config property binding manually</td>
<td><code v-pre>@EnableConfigurationProperties(PaymentProperties.class)</code></td>
</tr>
<tr>
<td><code v-pre>@ConfigurationProperties</code></td>
<td>Binds external config to a Java class</td>
<td>Type-safe config from <code v-pre>application.yml</code> / <code v-pre>application.properties</code></td>
<td><code v-pre>@ConfigurationProperties(prefix = &quot;payment&quot;)</code></td>
</tr>
<tr>
<td><code v-pre>@AutoConfiguration</code></td>
<td>Marks a class as a Spring Boot auto-configuration class</td>
<td>Creating custom starters / libraries</td>
<td><code v-pre>@AutoConfiguration</code></td>
</tr>
</tbody>
</table>
<ol start="2">
<li><strong>Auto-configuration condition annotations</strong></li>
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
<td><code v-pre>@ConditionalOnClass</code></td>
<td>Applies config only if a class exists on the classpath</td>
<td>Enable config only when a library is present</td>
<td><code v-pre>@ConditionalOnClass(ObjectMapper.class)</code></td>
</tr>
<tr>
<td><code v-pre>@ConditionalOnMissingClass</code></td>
<td>Applies config only if a class is missing</td>
<td>Alternative config when dependency is absent</td>
<td><code v-pre>@ConditionalOnMissingClass(&quot;com.foo.Client&quot;)</code></td>
</tr>
<tr>
<td><code v-pre>@ConditionalOnBean</code></td>
<td>Applies config only if a specific bean exists</td>
<td>Configure feature only after another bean is available</td>
<td><code v-pre>@ConditionalOnBean(DataSource.class)</code></td>
</tr>
<tr>
<td><code v-pre>@ConditionalOnMissingBean</code></td>
<td>Applies config only if a bean does not already exist</td>
<td>Provide default bean but let user override it</td>
<td><code v-pre>@ConditionalOnMissingBean(PaymentClient.class)</code></td>
</tr>
<tr>
<td><code v-pre>@ConditionalOnProperty</code></td>
<td>Applies config based on an application property</td>
<td>Feature flags / enable-disable config</td>
<td><code v-pre>@ConditionalOnProperty(prefix = &quot;payment&quot;, name = &quot;enabled&quot;, havingValue = &quot;true&quot;)</code></td>
</tr>
<tr>
<td><code v-pre>@ConditionalOnResource</code></td>
<td>Applies config only if a resource exists</td>
<td>Enable config when a file is present</td>
<td><code v-pre>@ConditionalOnResource(resources = &quot;classpath:schema.sql&quot;)</code></td>
</tr>
<tr>
<td><code v-pre>@ConditionalOnWebApplication</code></td>
<td>Applies config only in a web application</td>
<td>Web MVC / servlet-specific config</td>
<td><code v-pre>@ConditionalOnWebApplication</code></td>
</tr>
<tr>
<td><code v-pre>@ConditionalOnNotWebApplication</code></td>
<td>Applies config only in a non-web application</td>
<td>CLI/background worker config</td>
<td><code v-pre>@ConditionalOnNotWebApplication</code></td>
</tr>
<tr>
<td><code v-pre>@ConditionalOnExpression</code></td>
<td>Applies config based on a SpEL expression</td>
<td>Advanced conditional config</td>
<td><code v-pre>@ConditionalOnExpression(&quot;${feature.enabled:true}&quot;)</code></td>
</tr>
<tr>
<td><code v-pre>@ConditionalOnJava</code></td>
<td>Applies config based on Java version</td>
<td>Java-version-specific configuration</td>
<td><code v-pre>@ConditionalOnJava(JavaVersion.SEVENTEEN)</code></td>
</tr>
<tr>
<td><code v-pre>@ConditionalOnCloudPlatform</code></td>
<td>Applies config based on detected cloud platform</td>
<td>Kubernetes/cloud-specific config</td>
<td><code v-pre>@ConditionalOnCloudPlatform(CloudPlatform.KUBERNETES)</code></td>
</tr>
<tr>
<td><code v-pre>@ConditionalOnSingleCandidate</code></td>
<td>Applies config if there is exactly one candidate bean or one primary bean</td>
<td>Auto-config that needs one clear dependency</td>
<td><code v-pre>@ConditionalOnSingleCandidate(DataSource.class)</code></td>
</tr>
</tbody>
</table>
<ol start="3">
<li><strong>Web and REST annotations</strong></li>
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
<td><code v-pre>@RestController</code></td>
<td>Combines <code v-pre>@Controller</code> and <code v-pre>@ResponseBody</code></td>
<td>REST API controller</td>
<td><code v-pre>@RestController</code></td>
</tr>
<tr>
<td><code v-pre>@RequestMapping</code></td>
<td>Maps HTTP requests to classes or methods</td>
<td>Base path or generic mapping</td>
<td><code v-pre>@RequestMapping(&quot;/api/users&quot;)</code></td>
</tr>
<tr>
<td><code v-pre>@GetMapping</code></td>
<td>Maps HTTP GET requests</td>
<td>Fetch resource</td>
<td><code v-pre>@GetMapping(&quot;/{id}&quot;)</code></td>
</tr>
<tr>
<td><code v-pre>@PostMapping</code></td>
<td>Maps HTTP POST requests</td>
<td>Create resource</td>
<td><code v-pre>@PostMapping</code></td>
</tr>
<tr>
<td><code v-pre>@PutMapping</code></td>
<td>Maps HTTP PUT requests</td>
<td>Replace/update resource</td>
<td><code v-pre>@PutMapping(&quot;/{id}&quot;)</code></td>
</tr>
<tr>
<td><code v-pre>@PatchMapping</code></td>
<td>Maps HTTP PATCH requests</td>
<td>Partial update</td>
<td><code v-pre>@PatchMapping(&quot;/{id}&quot;)</code></td>
</tr>
<tr>
<td><code v-pre>@DeleteMapping</code></td>
<td>Maps HTTP DELETE requests</td>
<td>Delete resource</td>
<td><code v-pre>@DeleteMapping(&quot;/{id}&quot;)</code></td>
</tr>
<tr>
<td><code v-pre>@PathVariable</code></td>
<td>Binds path variable to method parameter</td>
<td>Read <code v-pre>/users/{id}</code></td>
<td><code v-pre>@PathVariable Long id</code></td>
</tr>
<tr>
<td><code v-pre>@RequestParam</code></td>
<td>Binds query parameter to method parameter</td>
<td>Read <code v-pre>/users?page=1</code></td>
<td><code v-pre>@RequestParam int page</code></td>
</tr>
<tr>
<td><code v-pre>@RequestBody</code></td>
<td>Binds request body JSON to Java object</td>
<td>Read request DTO</td>
<td><code v-pre>@RequestBody CreateUserRequest request</code></td>
</tr>
<tr>
<td><code v-pre>@ResponseStatus</code></td>
<td>Sets fixed HTTP response status</td>
<td>Return <code v-pre>201 CREATED</code> after creation</td>
<td><code v-pre>@ResponseStatus(HttpStatus.CREATED)</code></td>
</tr>
<tr>
<td><code v-pre>@RestControllerAdvice</code></td>
<td>Global REST exception handling</td>
<td>Centralized API error responses</td>
<td><code v-pre>@RestControllerAdvice</code></td>
</tr>
<tr>
<td><code v-pre>@ExceptionHandler</code></td>
<td>Handles specific exceptions</td>
<td>Convert exception to response</td>
<td><code v-pre>@ExceptionHandler(UserNotFoundException.class)</code></td>
</tr>
<tr>
<td><code v-pre>@CrossOrigin</code></td>
<td>Enables CORS</td>
<td>Allow frontend from another domain</td>
<td><code v-pre>@CrossOrigin(&quot;http://localhost:3000&quot;)</code></td>
</tr>
</tbody>
</table>
<ol start="4">
<li><strong>Validation annotations</strong></li>
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
<td><code v-pre>@Valid</code></td>
<td>Triggers Jakarta Bean Validation</td>
<td>Validate request body DTO</td>
<td><code v-pre>@Valid @RequestBody CreateUserRequest request</code></td>
</tr>
<tr>
<td><code v-pre>@Validated</code></td>
<td>Enables Spring method/class-level validation</td>
<td>Validate path/query params or config properties</td>
<td><code v-pre>@Validated</code></td>
</tr>
<tr>
<td><code v-pre>@NotNull</code></td>
<td>Value cannot be null</td>
<td>Required field</td>
<td><code v-pre>@NotNull private Long userId;</code></td>
</tr>
<tr>
<td><code v-pre>@NotBlank</code></td>
<td>String cannot be null or blank</td>
<td>Required text field</td>
<td><code v-pre>@NotBlank private String username;</code></td>
</tr>
<tr>
<td><code v-pre>@Email</code></td>
<td>Must be valid email format</td>
<td>User email field</td>
<td><code v-pre>@Email private String email;</code></td>
</tr>
<tr>
<td><code v-pre>@Size</code></td>
<td>Checks string/collection size</td>
<td>Username/password length</td>
<td><code v-pre>@Size(min = 3, max = 20)</code></td>
</tr>
<tr>
<td><code v-pre>@Min</code> / <code v-pre>@Max</code></td>
<td>Checks numeric range</td>
<td>Age, page size, quantity</td>
<td><code v-pre>@Min(1) private int quantity;</code></td>
</tr>
<tr>
<td><code v-pre>@Pattern</code></td>
<td>Checks regex pattern</td>
<td>Phone number, custom code</td>
<td><code v-pre>@Pattern(regexp = &quot;...&quot;)</code></td>
</tr>
</tbody>
</table>
<ol start="5">
<li><strong>Test annotations</strong></li>
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
<td><code v-pre>@SpringBootTest</code></td>
<td>Loads full Spring Boot application context</td>
<td>Integration tests</td>
<td><code v-pre>@SpringBootTest</code></td>
</tr>
<tr>
<td><code v-pre>@WebMvcTest</code></td>
<td>Loads only Spring MVC layer</td>
<td>Controller tests without full app</td>
<td><code v-pre>@WebMvcTest(UserController.class)</code></td>
</tr>
<tr>
<td><code v-pre>@DataJpaTest</code></td>
<td>Loads JPA/repository layer</td>
<td>Repository tests</td>
<td><code v-pre>@DataJpaTest</code></td>
</tr>
<tr>
<td><code v-pre>@JdbcTest</code></td>
<td>Loads JDBC-related components</td>
<td><code v-pre>JdbcTemplate</code> tests</td>
<td><code v-pre>@JdbcTest</code></td>
</tr>
<tr>
<td><code v-pre>@JsonTest</code></td>
<td>Tests JSON serialization/deserialization</td>
<td>Jackson tests</td>
<td><code v-pre>@JsonTest</code></td>
</tr>
<tr>
<td><code v-pre>@RestClientTest</code></td>
<td>Tests REST client components</td>
<td>Test clients using mock server</td>
<td><code v-pre>@RestClientTest</code></td>
</tr>
<tr>
<td><code v-pre>@AutoConfigureMockMvc</code></td>
<td>Adds <code v-pre>MockMvc</code> support</td>
<td>Test MVC endpoints</td>
<td><code v-pre>@AutoConfigureMockMvc</code></td>
</tr>
<tr>
<td><code v-pre>@AutoConfigureTestDatabase</code></td>
<td>Configures test database replacement behavior</td>
<td>Use embedded DB or real test DB</td>
<td><code v-pre>@AutoConfigureTestDatabase(replace = Replace.NONE)</code></td>
</tr>
<tr>
<td><code v-pre>@TestConfiguration</code></td>
<td>Extra test-only configuration</td>
<td>Define beans only for tests</td>
<td><code v-pre>@TestConfiguration</code></td>
</tr>
</tbody>
</table>
<ol start="6">
<li><strong>Actuator and monitoring-related annotations</strong></li>
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
<td><code v-pre>@Endpoint</code></td>
<td>Defines a custom Actuator endpoint</td>
<td>Custom management endpoint</td>
<td><code v-pre>@Endpoint(id = &quot;business&quot;)</code></td>
</tr>
<tr>
<td><code v-pre>@WebEndpoint</code></td>
<td>Defines a web-only Actuator endpoint</td>
<td>HTTP-only management endpoint</td>
<td><code v-pre>@WebEndpoint(id = &quot;custom&quot;)</code></td>
</tr>
<tr>
<td><code v-pre>@ReadOperation</code></td>
<td>Defines read operation for endpoint</td>
<td><code v-pre>GET</code>-style actuator operation</td>
<td><code v-pre>@ReadOperation</code></td>
</tr>
<tr>
<td><code v-pre>@WriteOperation</code></td>
<td>Defines write operation for endpoint</td>
<td><code v-pre>POST</code>-style actuator operation</td>
<td><code v-pre>@WriteOperation</code></td>
</tr>
<tr>
<td><code v-pre>@DeleteOperation</code></td>
<td>Defines delete operation for endpoint</td>
<td><code v-pre>DELETE</code>-style actuator operation</td>
<td><code v-pre>@DeleteOperation</code></td>
</tr>
</tbody>
</table>
</div></template>


