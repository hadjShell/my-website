---
title: Spring Annotations
category:
  - Note
tag:
  - Framework
  - Spring
  - Backend
footer: false
editLink: false
---

Spring Annotations are metadata in Java used to provide configuration and behavior information to the Spring Framework. They eliminate the need for XML-based configuration, making Spring applications more concise, readable, and easier to maintain. In essence, annotations tell the Spring Container how to create, configure, and manage application components (beans).

## Types of Spring Framework Annotations

- **Spring Core Annotations**: Dependency injection, bean lifecycle, and context configuration.
- **Spring Web Annotations**: Used for building web and RESTful services.
- **Spring Boot Annotations**: Simplify auto-configuration and bootstrapping.
- **Spring Scheduling Annotations**: For task scheduling and asynchronous execution.
- **Spring Data Annotations**: For JPA, repositories, and data persistence.
- **Spring Bean Annotations**: For defining and managing beans.

## How does Spring Annotations Work

## Spring Core Annotations

Annotations in the `org.springframework.beans.factory.annotation` and `org.springframework.context.annotation` packages are collectively called Spring Core Annotations.

They can be divided into two main categories:

- Dependency Injection (DI)-Related Annotations
- Context Configuration Annotations

1. **DI-related Annotations**

| Annotation   | What it does                                                         | Common use case                                                            | Example                                                      |
| ------------ | -------------------------------------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------ |
| `@Autowired` | Asks Spring to inject a matching bean automatically.                 | Constructor, setter, field, or method injection.                           | `public OrderService(PaymentService paymentService) { ... }` |
| `@Qualifier` | Chooses a specific bean when multiple beans of the same type exist.  | Choosing `stripe` instead of `paypal`.                                     | `@Qualifier("stripe") PaymentService paymentService`         |
| `@Primary`   | Marks one bean as the default choice when multiple candidates exist. | Default payment provider, default repository, default strategy.            | `@Primary @Service class StripePaymentService ...`           |
| `@Value`     | Injects property values or SpEL expressions.                         | Reading config values from `application.properties` / `application.yml`.   | `@Value("${server.port}") private int port;`                 |
| `@Inject`    | Standard Jakarta DI alternative to `@Autowired`.                     | Projects that prefer standard DI annotations.                              | `@Inject public OrderService(...)`                           |
| `@Named`     | Standard Jakarta DI alternative to `@Qualifier`.                     | Naming or selecting a specific dependency.                                 | `@Named("stripe") PaymentService paymentService`             |
| `@Resource`  | Injects by name first, then type.                                    | Legacy code or Java EE-style injection.                                    | `@Resource(name = "stripePaymentService")`                   |
| `@Lazy`      | Delays bean creation or dependency resolution.                       | Avoiding expensive initialization or resolving circular dependency issues. | `public OrderService(@Lazy PaymentService paymentService)`   |
| `@Lookup`    | Lets Spring override a method to return a bean dynamically.          | Injecting prototype beans into singleton beans.                            | `@Lookup public PrototypeBean getBean() { return null; }`    |

2. **Context Configuration Annotations**

| Annotation        | What it does                                                     | Common use case                                               | Example                                                |
| ----------------- | ---------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------ |
| `@Configuration`  | Marks a class as a Spring Java configuration class.              | Defining beans manually with methods.                         | `@Configuration public class AppConfig { ... }`        |
| `@Bean`           | Declares that a method returns a Spring-managed bean.            | Manual bean creation for third-party classes or custom setup. | `@Bean public PaymentService paymentService() { ... }` |
| `@Component`      | Marks a class as a Spring-managed component.                     | Generic Spring bean detected by component scanning.           | `@Component public class EmailClient { ... }`          |
| `@Service`        | Specialized `@Component` for service-layer classes.              | Business logic classes.                                       | `@Service public class OrderService { ... }`           |
| `@Repository`     | Specialized `@Component` for persistence-layer classes.          | DAO/repository classes.                                       | `@Repository public class UserRepository { ... }`      |
| `@Controller`     | Specialized `@Component` for MVC controller classes.             | Web controllers in Spring MVC.                                | `@Controller public class UserController { ... }`      |
| `@ComponentScan`  | Tells Spring where to scan for annotated components.             | Discovering `@Component`, `@Service`, `@Repository`, etc.     | `@ComponentScan("com.example")`                        |
| `@Import`         | Imports other configuration classes.                             | Splitting configuration into modules.                         | `@Import(DatabaseConfig.class)`                        |
| `@ImportResource` | Imports XML configuration into Java config.                      | Mixing old XML config with modern Java config.                | `@ImportResource("classpath:beans.xml")`               |
| `@PropertySource` | Adds a property file to Spring’s `Environment`.                  | Loading custom `.properties` files.                           | `@PropertySource("classpath:app.properties")`          |
| `@Profile`        | Registers beans only under certain active profiles.              | Different beans for `dev`, `test`, or `prod`.                 | `@Profile("dev")`                                      |
| `@Scope`          | Defines bean scope.                                              | Singleton, prototype, request/session-scoped beans.           | `@Scope("prototype")`                                  |
| `@Conditional`    | Registers a bean only if a condition matches.                    | Conditional configuration.                                    | `@Conditional(MyCondition.class)`                      |
| `@DependsOn`      | Forces one bean to initialize after another.                     | Startup-order dependency.                                     | `@DependsOn("dataSource")`                             |
| `@Order`          | Defines ordering for injected collections or ordered components. | Ordering filters, handlers, strategies, etc.                  | `@Order(1)`                                            |

## Spring Web Annotations

| Annotation              | What it does                                                       | Common use case                                   | Example                                           |
| ----------------------- | ------------------------------------------------------------------ | ------------------------------------------------- | ------------------------------------------------- |
| `@Controller`           | Marks a class as a Spring MVC controller                           | Returning views/templates such as Thymeleaf pages | `@Controller`                                     |
| `@RestController`       | Combines `@Controller` + `@ResponseBody`                           | Building REST APIs that return JSON/text directly | `@RestController`                                 |
| `@RequestMapping`       | Maps HTTP requests to controller classes or methods                | Base path or flexible request mapping             | `@RequestMapping("/api/users")`                   |
| `@GetMapping`           | Maps HTTP `GET` requests                                           | Fetching data                                     | `@GetMapping("/{id}")`                            |
| `@PostMapping`          | Maps HTTP `POST` requests                                          | Creating data                                     | `@PostMapping`                                    |
| `@PutMapping`           | Maps HTTP `PUT` requests                                           | Replacing/updating a whole resource               | `@PutMapping("/{id}")`                            |
| `@PatchMapping`         | Maps HTTP `PATCH` requests                                         | Partially updating a resource                     | `@PatchMapping("/{id}")`                          |
| `@DeleteMapping`        | Maps HTTP `DELETE` requests                                        | Deleting a resource                               | `@DeleteMapping("/{id}")`                         |
| `@PathVariable`         | Binds a URI path variable to a method parameter                    | Getting `/users/{id}` value                       | `getUser(@PathVariable Long id)`                  |
| `@RequestParam`         | Binds query parameters or form parameters                          | Reading `/users?page=1&size=10`                   | `list(@RequestParam int page)`                    |
| `@RequestBody`          | Binds the HTTP request body to a Java object                       | Reading JSON request body                         | `create(@RequestBody UserRequest request)`        |
| `@ResponseBody`         | Writes method return value directly to HTTP response body          | Returning JSON/text from `@Controller`            | `@ResponseBody`                                   |
| `@ResponseStatus`       | Sets a fixed HTTP response status                                  | Return `201 CREATED`, `204 NO_CONTENT`, etc.      | `@ResponseStatus(HttpStatus.CREATED)`             |
| `@RequestHeader`        | Binds an HTTP header to a method parameter                         | Reading `Authorization`, `User-Agent`, etc.       | `@RequestHeader("Authorization") String token`    |
| `@CookieValue`          | Binds a cookie value to a method parameter                         | Reading session/tracking cookies                  | `@CookieValue("SESSION") String sessionId`        |
| `@ModelAttribute`       | Binds request parameters to an object; also exposes model data     | Form submissions in MVC apps                      | `@ModelAttribute UserForm form`                   |
| `@SessionAttributes`    | Stores model attributes in HTTP session                            | Multi-step forms or wizard-style flows            | `@SessionAttributes("cart")`                      |
| `@CrossOrigin`          | Enables CORS for controller/method                                 | Allow frontend app from another origin            | `@CrossOrigin("http://localhost:3000")`           |
| `@ExceptionHandler`     | Handles exceptions thrown by controller methods                    | Custom error response for specific exception      | `@ExceptionHandler(UserNotFoundException.class)`  |
| `@ControllerAdvice`     | Applies controller-wide/global exception handling or model binding | Centralized exception handling                    | `@ControllerAdvice`                               |
| `@RestControllerAdvice` | Combines `@ControllerAdvice` + `@ResponseBody`                     | Global REST API error handling                    | `@RestControllerAdvice`                           |
| `@InitBinder`           | Customizes request parameter binding                               | Date formatting, validation binding rules         | `@InitBinder`                                     |
| `@Validated`            | Enables Spring validation on method parameters/classes             | Validating path/query params or request DTOs      | `@Validated`                                      |
| `@Valid`                | Triggers Jakarta Bean Validation                                   | Validate `@RequestBody` DTO                       | `create(@Valid @RequestBody UserRequest request)` |
| `@RequestPart`          | Binds part of a multipart request                                  | File upload with JSON metadata                    | `@RequestPart MultipartFile file`                 |
| `@MatrixVariable`       | Binds matrix variables from URI path segments                      | Less common URI parameter style                   | `/cars;color=red;year=2024`                       |

## Spring Boot Annotations

1. **Application startup and configuration annotations**

| Annotation                       | What it does                                                                                                                 | Common use case                                                    | Example                                                   |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | --------------------------------------------------------- |
| `@SpringBootApplication`         | Main annotation for a Spring Boot app; combines `@SpringBootConfiguration`, `@EnableAutoConfiguration`, and `@ComponentScan` | Mark the main application class                                    | `@SpringBootApplication`                                  |
| `@SpringBootConfiguration`       | Specialized Spring Boot version of `@Configuration`                                                                          | Usually used indirectly through `@SpringBootApplication`           | `@SpringBootConfiguration`                                |
| `@EnableAutoConfiguration`       | Enables Spring Boot auto-configuration                                                                                       | Usually used indirectly through `@SpringBootApplication`           | `@EnableAutoConfiguration`                                |
| `@ConfigurationPropertiesScan`   | Scans for `@ConfigurationProperties` classes                                                                                 | Automatically register typed config classes                        | `@ConfigurationPropertiesScan`                            |
| `@EnableConfigurationProperties` | Explicitly enables one or more `@ConfigurationProperties` classes                                                            | Enable config property binding manually                            | `@EnableConfigurationProperties(PaymentProperties.class)` |
| `@ConfigurationProperties`       | Binds external config to a Java class                                                                                        | Type-safe config from `application.yml` / `application.properties` | `@ConfigurationProperties(prefix = "payment")`            |
| `@AutoConfiguration`             | Marks a class as a Spring Boot auto-configuration class                                                                      | Creating custom starters / libraries                               | `@AutoConfiguration`                                      |

2. **Auto-configuration condition annotations**

| Annotation                        | What it does                                                              | Common use case                                        | Example                                                                              |
| --------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `@ConditionalOnClass`             | Applies config only if a class exists on the classpath                    | Enable config only when a library is present           | `@ConditionalOnClass(ObjectMapper.class)`                                            |
| `@ConditionalOnMissingClass`      | Applies config only if a class is missing                                 | Alternative config when dependency is absent           | `@ConditionalOnMissingClass("com.foo.Client")`                                       |
| `@ConditionalOnBean`              | Applies config only if a specific bean exists                             | Configure feature only after another bean is available | `@ConditionalOnBean(DataSource.class)`                                               |
| `@ConditionalOnMissingBean`       | Applies config only if a bean does not already exist                      | Provide default bean but let user override it          | `@ConditionalOnMissingBean(PaymentClient.class)`                                     |
| `@ConditionalOnProperty`          | Applies config based on an application property                           | Feature flags / enable-disable config                  | `@ConditionalOnProperty(prefix = "payment", name = "enabled", havingValue = "true")` |
| `@ConditionalOnResource`          | Applies config only if a resource exists                                  | Enable config when a file is present                   | `@ConditionalOnResource(resources = "classpath:schema.sql")`                         |
| `@ConditionalOnWebApplication`    | Applies config only in a web application                                  | Web MVC / servlet-specific config                      | `@ConditionalOnWebApplication`                                                       |
| `@ConditionalOnNotWebApplication` | Applies config only in a non-web application                              | CLI/background worker config                           | `@ConditionalOnNotWebApplication`                                                    |
| `@ConditionalOnExpression`        | Applies config based on a SpEL expression                                 | Advanced conditional config                            | `@ConditionalOnExpression("${feature.enabled:true}")`                                |
| `@ConditionalOnJava`              | Applies config based on Java version                                      | Java-version-specific configuration                    | `@ConditionalOnJava(JavaVersion.SEVENTEEN)`                                          |
| `@ConditionalOnCloudPlatform`     | Applies config based on detected cloud platform                           | Kubernetes/cloud-specific config                       | `@ConditionalOnCloudPlatform(CloudPlatform.KUBERNETES)`                              |
| `@ConditionalOnSingleCandidate`   | Applies config if there is exactly one candidate bean or one primary bean | Auto-config that needs one clear dependency            | `@ConditionalOnSingleCandidate(DataSource.class)`                                    |

3. **Web and REST annotations**

| Annotation              | What it does                               | Common use case                     | Example                                          |
| ----------------------- | ------------------------------------------ | ----------------------------------- | ------------------------------------------------ |
| `@RestController`       | Combines `@Controller` and `@ResponseBody` | REST API controller                 | `@RestController`                                |
| `@RequestMapping`       | Maps HTTP requests to classes or methods   | Base path or generic mapping        | `@RequestMapping("/api/users")`                  |
| `@GetMapping`           | Maps HTTP GET requests                     | Fetch resource                      | `@GetMapping("/{id}")`                           |
| `@PostMapping`          | Maps HTTP POST requests                    | Create resource                     | `@PostMapping`                                   |
| `@PutMapping`           | Maps HTTP PUT requests                     | Replace/update resource             | `@PutMapping("/{id}")`                           |
| `@PatchMapping`         | Maps HTTP PATCH requests                   | Partial update                      | `@PatchMapping("/{id}")`                         |
| `@DeleteMapping`        | Maps HTTP DELETE requests                  | Delete resource                     | `@DeleteMapping("/{id}")`                        |
| `@PathVariable`         | Binds path variable to method parameter    | Read `/users/{id}`                  | `@PathVariable Long id`                          |
| `@RequestParam`         | Binds query parameter to method parameter  | Read `/users?page=1`                | `@RequestParam int page`                         |
| `@RequestBody`          | Binds request body JSON to Java object     | Read request DTO                    | `@RequestBody CreateUserRequest request`         |
| `@ResponseStatus`       | Sets fixed HTTP response status            | Return `201 CREATED` after creation | `@ResponseStatus(HttpStatus.CREATED)`            |
| `@RestControllerAdvice` | Global REST exception handling             | Centralized API error responses     | `@RestControllerAdvice`                          |
| `@ExceptionHandler`     | Handles specific exceptions                | Convert exception to response       | `@ExceptionHandler(UserNotFoundException.class)` |
| `@CrossOrigin`          | Enables CORS                               | Allow frontend from another domain  | `@CrossOrigin("http://localhost:3000")`          |

4. **Validation annotations**

| Annotation      | What it does                                 | Common use case                                 | Example                                         |
| --------------- | -------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `@Valid`        | Triggers Jakarta Bean Validation             | Validate request body DTO                       | `@Valid @RequestBody CreateUserRequest request` |
| `@Validated`    | Enables Spring method/class-level validation | Validate path/query params or config properties | `@Validated`                                    |
| `@NotNull`      | Value cannot be null                         | Required field                                  | `@NotNull private Long userId;`                 |
| `@NotBlank`     | String cannot be null or blank               | Required text field                             | `@NotBlank private String username;`            |
| `@Email`        | Must be valid email format                   | User email field                                | `@Email private String email;`                  |
| `@Size`         | Checks string/collection size                | Username/password length                        | `@Size(min = 3, max = 20)`                      |
| `@Min` / `@Max` | Checks numeric range                         | Age, page size, quantity                        | `@Min(1) private int quantity;`                 |
| `@Pattern`      | Checks regex pattern                         | Phone number, custom code                       | `@Pattern(regexp = "...")`                      |

5. **Test annotations**

| Annotation                   | What it does                                  | Common use case                   | Example                                              |
| ---------------------------- | --------------------------------------------- | --------------------------------- | ---------------------------------------------------- |
| `@SpringBootTest`            | Loads full Spring Boot application context    | Integration tests                 | `@SpringBootTest`                                    |
| `@WebMvcTest`                | Loads only Spring MVC layer                   | Controller tests without full app | `@WebMvcTest(UserController.class)`                  |
| `@DataJpaTest`               | Loads JPA/repository layer                    | Repository tests                  | `@DataJpaTest`                                       |
| `@JdbcTest`                  | Loads JDBC-related components                 | `JdbcTemplate` tests              | `@JdbcTest`                                          |
| `@JsonTest`                  | Tests JSON serialization/deserialization      | Jackson tests                     | `@JsonTest`                                          |
| `@RestClientTest`            | Tests REST client components                  | Test clients using mock server    | `@RestClientTest`                                    |
| `@AutoConfigureMockMvc`      | Adds `MockMvc` support                        | Test MVC endpoints                | `@AutoConfigureMockMvc`                              |
| `@AutoConfigureTestDatabase` | Configures test database replacement behavior | Use embedded DB or real test DB   | `@AutoConfigureTestDatabase(replace = Replace.NONE)` |
| `@TestConfiguration`         | Extra test-only configuration                 | Define beans only for tests       | `@TestConfiguration`                                 |

6. **Actuator and monitoring-related annotations**

| Annotation         | What it does                          | Common use case                   | Example                       |
| ------------------ | ------------------------------------- | --------------------------------- | ----------------------------- |
| `@Endpoint`        | Defines a custom Actuator endpoint    | Custom management endpoint        | `@Endpoint(id = "business")`  |
| `@WebEndpoint`     | Defines a web-only Actuator endpoint  | HTTP-only management endpoint     | `@WebEndpoint(id = "custom")` |
| `@ReadOperation`   | Defines read operation for endpoint   | `GET`-style actuator operation    | `@ReadOperation`              |
| `@WriteOperation`  | Defines write operation for endpoint  | `POST`-style actuator operation   | `@WriteOperation`             |
| `@DeleteOperation` | Defines delete operation for endpoint | `DELETE`-style actuator operation | `@DeleteOperation`            |
