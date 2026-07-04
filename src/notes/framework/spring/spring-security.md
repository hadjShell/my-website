---
title: Spring Security
order: 7
category:
  - Note
tag:
  - Framework
  - Spring
  - Backend
footer: false
editLink: false
---

### OWASP Top 10 Web Application Security Risks (2021)

- Broken Access Control
- Cryptographic Failures
- Injection
- Insecure Design
- Security Misconfiguration
- Vulnerable and Outdated Components
- Identification and Authentication Failures
- Software and Data Integrity Failures
- Security Logging and Monitoring Failures
- Server-side Request Forgery

### Spring Security

- Security filter chain
  - <img src="/assets/image/spring/filterchain.png" alt="filterchain" style="zoom:75%;" />
  - Adding a custom filter
    1. [`SecurityContext`](https://docs.spring.io/spring-security/reference/servlet/authentication/architecture.html#servlet-authentication-securitycontextholder) is loaded from the session
    2. Request is protected from common exploits; [secure headers](https://docs.spring.io/spring-security/reference/features/exploits/headers.html), [CORS](https://docs.spring.io/spring-security/reference/servlet/integrations/cors.html), [CSRF](https://docs.spring.io/spring-security/reference/servlet/exploits/csrf.html)
    3. Request is [authenticated](https://docs.spring.io/spring-security/reference/servlet/authentication/architecture.html)
    4. Request is [authorized](https://docs.spring.io/spring-security/reference/servlet/authorization/architecture.html)
- What Spring Boot enables in Spring Security by default
  - Requires an authenticated user [for any endpoint](https://docs.spring.io/spring-security/reference/servlet/authorization/authorize-http-requests.html) (including Boot’s `/error` endpoint)
  - [Registers a default user](https://docs.spring.io/spring-security/reference/servlet/authentication/passwords/user-details-service.html) with a generated password at startup (the password is logged to the console; in the preceding example, the password is `8e557245-73e2-4286-969a-ff57fe326336`)
  - Protects [password storage with BCrypt](https://docs.spring.io/spring-security/reference/servlet/authentication/passwords/password-encoder.html) as well as others
  - Provides form-based [login](https://docs.spring.io/spring-security/reference/servlet/authentication/passwords/form.html) and [logout](https://docs.spring.io/spring-security/reference/servlet/authentication/logout.html) flows
  - Authenticates [form-based login](https://docs.spring.io/spring-security/reference/servlet/authentication/passwords/form.html) as well as [HTTP Basic](https://docs.spring.io/spring-security/reference/servlet/authentication/passwords/basic.html)
  - Provides content negotiation; for web requests, redirects to the login page; for service requests, returns a `401 Unauthorized`
  - [Mitigates CSRF](https://docs.spring.io/spring-security/reference/servlet/exploits/csrf.html) attacks
  - [Mitigates Session Fixation](https://docs.spring.io/spring-security/reference/servlet/authentication/session-management.html#ns-session-fixation) attacks
  - Writes [Strict-Transport-Security](https://docs.spring.io/spring-security/reference/servlet/exploits/headers.html#servlet-headers-hsts) to [ensure HTTPS](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)
  - Writes [X-Content-Type-Options](https://docs.spring.io/spring-security/reference/servlet/exploits/headers.html#servlet-headers-content-type-options) to mitigate [sniffing attacks](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html#x-content-type-options)
  - Writes [Cache Control headers](https://docs.spring.io/spring-security/reference/servlet/exploits/headers.html#servlet-headers-cache-control) that protect authenticated resources
  - Writes [X-Frame-Options](https://docs.spring.io/spring-security/reference/servlet/exploits/headers.html#servlet-headers-frame-options) to mitigate [Clickjacking](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html#x-frame-options)
  - Integrates with [`HttpServletRequest`'s authentication methods](https://docs.spring.io/spring-security/reference/servlet/integrations/servlet-api.html)
  - Publishes [authentication success and failure events](https://docs.spring.io/spring-security/reference/servlet/authentication/events.html)

### CSRF

- **C**ross-**S**ite **R**equest **F**orgery
- An attack that forces an end user to execute unwanted actions on a web application in which they’re currently authenticated
- For most sites, browser requests automatically include any credentials associated with the site, such as the user’s **session cookie**, IP address, Windows domain credentials, and so forth. Therefore, if the user is currently authenticated to the site, the site will have no way to distinguish between the forged request sent by the victim and a legitimate request sent by the victim
- Solution one: CSRF token
  - Everytime you send a request which is not a GET request, you have to send a CSRF token with the request
- Solution two: Stateless API
  - EVerytime you send a request, you have to send username and password with it, there is no session then

### Authentication Mechanisms

- Username and Password

- Password storage
  - In memory
    - ```java
      package com.hadjshell.springsecdemo.config;

      import org.springframework.context.annotation.Bean;

      import org.springframework.context.annotation.Configuration;
      import org.springframework.security.config.Customizer;
      import org.springframework.security.config.annotation.web.builders.HttpSecurity;
      import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
      import org.springframework.security.config.http.SessionCreationPolicy;
      import org.springframework.security.core.userdetails.User;
      import org.springframework.security.core.userdetails.UserDetails;
      import org.springframework.security.core.userdetails.UserDetailsService;
      import org.springframework.security.provisioning.InMemoryUserDetailsManager;
      import org.springframework.security.web.SecurityFilterChain;

      @Configuration
      @EnableWebSecurity
      public class SecurityConfig {

      	// Custom security filter chain
        @Bean
      	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

      		http.csrf(customizer -> customizer.disable())
      				.authorizeHttpRequests(request -> request.anyRequest().authenticated())
      				.httpBasic(Customizer.withDefaults())
      				.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

      		return http.build();
      	}

      		@Bean
      		public UserDetailsService userDetailsService() {

      			UserDetails user = User
      					// this method is deprecated
              	.withDefaultPasswordEncoder()		// encrypt password
      					.username("navin")
      					.password("n@123")
      					.roles("USER")
      					.build();

      			UserDetails admin = User
      					.withDefaultPasswordEncoder()
      					.username("admin")
      					.password("admin@789")
      					.roles("ADMIN")
      					.build();

      			return new InMemoryUserDetailsManager(user,admin);
      		}
      }
      ```

  - In database
    - ```java
      package com.telusko.springsecdemo.service;

      import org.springframework.beans.factory.annotation.Autowired;
      import org.springframework.security.core.userdetails.UserDetails;
      import org.springframework.security.core.userdetails.UserDetailsService;
      import org.springframework.security.core.userdetails.UsernameNotFoundException;
      import org.springframework.stereotype.Service;

      import com.hadjshell.springsecdemo.repo.UserRepo;
      import com.hadjshell.springsecdemo.model.User;
      import com.hadjshell.springsecdemo.model.UserPrincipal;

      @Service
      public class MyUserDetailsService implements UserDetailsService {

      	@Autowired
      	private UserRepo repo;

      	@Override
      	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
          User user= repo.findByUsername(username);

          if (user==null) {
            System.out.println("User 404");
            throw new UsernameNotFoundException("User 404");
          }
             return new UserPrincipal(user);
          }
      }
      ```

    - ```java
      package com.hadjshell.springsecdemo.model;

      import java.util.Collection;
      import java.util.Collections;

      import org.springframework.security.core.GrantedAuthority;
      import org.springframework.security.core.authority.SimpleGrantedAuthority;
      import org.springframework.security.core.userdetails.UserDetails;

      public class UserPrincipal implements UserDetails{

      	private static final long serialVersionUID = 1L;
      	private User user;

      	public UserPrincipal(User user) {
      		this.user = user;
      	}

      	@Override
      	public Collection<? extends GrantedAuthority> getAuthorities() {
      		return Collections.singleton(new SimpleGrantedAuthority("USER"));
      	}

      	@Override
      	public String getPassword() {
      		return user.getPassword();
      	}

      	@Override
      	public String getUsername() {
      		return user.getUsername();
      	}

      	@Override
      	public boolean isAccountNonExpired() {
      		return true;
      	}

      	@Override
      	public boolean isAccountNonLocked() {
      		return true;
        }

      	@Override
      	public boolean isCredentialsNonExpired() {
      		return true;
      	}

      	@Override
      	public boolean isEnabled() {
      		return true;
      	}

      }
      ```

    - ```java
      @Configuration
      @EnableWebSecurity
      public class SecurityConfig {

      	@Autowired
      	private UserDetailsService userDetailsService;

      	@Bean
      	public AuthenticationProvider authProvider() {
      		DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
      		provider.setUserDetailsService(userDetailsService);
      		provider.setPasswordEncoder(NoOpPasswordEncoder.getInstance());
      		return provider;
      	}

      	@Bean
      	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

      		http.csrf(customizer -> customizer.disable())
      				.authorizeHttpRequests(request -> request.anyRequest().authenticated())
      				.httpBasic(Customizer.withDefaults())
      				.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

      		return http.build();
      	}

      }
      ```

  - In LDAP

- ## Encrypt password

- OAuth 2.0 Login

- Remember Me

---
