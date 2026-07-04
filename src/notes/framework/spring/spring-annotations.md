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

## Spring Boot Annotations
