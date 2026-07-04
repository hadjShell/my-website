---
title: Spring AOP
order: 6
category:
  - Note
tag:
  - Framework
  - Spring
  - Backend
footer: false
editLink: false
---

### AOP Concepts

- Aspect Oriented Programming
- AOP **complements** OOP by providing another way of thinking about program structure
- The key unit of modularity in OOP is the class, whereas in AOP the unit of modularity is the aspect
- Spring IoC container does not depend on AOP (meaning you do not need to use AOP if you don't want to)
- The problem trying to solve - **Crosscutting concerns**
  - Service layer can be lengthy due to extra functionalities such as logging, security, validation, etc. instead of fully focusing on business logic
  - **Separate those functionalities from business logic into other classes**, framework decides when and where to call them automatically

- Terminologies
  - **Aspect (Where-Conceptual)**: A modularization of a concern that cuts across multiple classes
  - **Joint point (When)**: A point during the execution of a program, such as the excution of a method or the handling of an exception
  - **Advice (What)**: logics taken by an aspect at a particular joint point
  - **Pointcut (Where-Operational)**: Advice is associated with a pointcut expression and runs at any joint point matched by the pointcut
    - Spring uses the **AspectJ** pointcut expression language by default

  - **Target object (Whom)**: An object being advised by one or more aspects
    - Since Spring AOP is implemented by using runtime proxies, this object is always a proxied object

  - **Proxy**: An object created by the AOP framework in order to implement the aspect contracts (advice method executions and so on)
  - **Weaving (How)**: Linking aspects with other application types or objects to create a proxy
    - Spring AOP performs weaving at runtime

  - **Type of Advice**
    - **Before**: Advice that runs before a join point but that does not have the ability to prevent execution flow proceeding to the join point (unless it throws an exception)
    - **After returning **: Advice to be run after a join point completes normally
    - **After throwing**: Advice to be run if a method exits by throwing an exception
    - **After (finally)**: Advice to be run regardless of the means by which a join point exits (normal or exceptional return)
    - **Around**: Advice that surrounds a join point such as a method invocation
      - Around advice can perform custom behavior before and after the method invocation
      - It is also responsible for choosing whether to proceed to the join point or to shortcut the advised method execution by returning its own return value or throwing an exception

### How to use AOP

1. Enabling `@ASpectJ` support
   - It is included in the Spring Boot Web module

2. Declaring an Aspect
   - In Spring AOP, aspects themselves cannot be the targets of advice from other aspects

3. Declaring a Pointcut
   - Spring AOP only supports method execution join points for Spring beans
   - The method serving as the advice **must have a `void` return type**
   - [A well written pointcut should include at least kinded and scoping designators](https://docs.spring.io/spring-framework/reference/core/aop/ataspectj/pointcuts.html#writing-good-pointcuts)

4. Decalring Advice
   - ```java
     package com.hadjshell.ecom.aop;

     import org.aspectj.lang.JoinPoint;
     import org.aspectj.lang.annotation.*;
     import org.slf4j.Logger;
     import org.slf4j.LoggerFactory;
     import org.springframework.stereotype.Component;

     @Component
     @Aspect
     public class LoggingAspect {

         private static final Logger LOGGER = LoggerFactory.getLogger(LoggingAspect.class);

         // Pointcut expression: designator(return-type class-name.method-name(args))
       	// Pointcut expressions can be combined by using && || !
       	// Pointcut expression may be either an inline pointcut or a reference to a named pointcut
         @Before("within(com.hadjshell.ecom.controller..*) && execution(* com.hadjshell.ecom.controller.ProductController.*(..))")
         public void logMethodCall(JoinPoint jp) {
             LOGGER.info("Method called: " + jp.getSignature().getName());
         }

         // Access current JoinPoint or return value in the advice body
       	// JointPoint must be the first parameter of the advice
       	@AfterReturning(pointcut = "execution(* com.hadjshell.ecom.controller.ProductController.*(..))",
                        returning = "result")
         public void logMethodExecution(JoinPoint jp, Object result) {
             LOGGER.info("Method executed successfully: " + jp.getSignature().getName());
           	LOGGER.info(result.toString());
         }

         // Access exception in the advice body
       	@AfterThrowing(pointcut = "com.hadjshell.aop.CommonPointCuts.loggingOperation()",
                       throwing = "e")
         public void logMethodCrash(JoinPoint jp, Exception e) {
             LOGGER.info("Method has some issues: " + jp.getSignature().getName());
           	LOGGER>info(e.getMessage());
         }
     }
     ```

   - ```java
     package com.hadjshell.ecom.aop;

     import org.aspectj.lang.ProceedingJoinPoint;
     import org.aspectj.lang.annotation.Around;
     import org.aspectj.lang.annotation.Aspect;
     import org.slf4j.Logger;
     import org.slf4j.LoggerFactory;
     import org.springframework.stereotype.Component;

     @Component
     @Aspect
     public class PerformanceMonitorAspect {

         private static final Logger LOGGER = LoggerFactory.getLogger(PerformanceMonitorAspect.class);

         // Around advice should declare Object as its return type, and the first parameter of the method must be of type ProceedingJoinPoint
       	// Within the advice body, you must invoke proceed() on that object in order for the underlying method to run
       	// The value returned by the around advice is the return value seen by the caller of the method
       	@Around("execution(* com.hadjshell.ecom.controller.ProductController.*(..))")
         public Object monitorTime(ProceedingJoinPoint jp) throws Throwable {
             long startTime = System.currentTimeMillis();
             Object obj = jp.proceed();
             long endTime = System.currentTimeMillis();
             LOGGER.info("Execution time: " + (endTime - startTime) + "ms");
             return obj;
         }
     }
     ```

   - ```java
     @Component
     @Aspect
     public class ValidationAspect {

     	public static final Logger LOGGER = LoggerFactory.getLogger(ValidationAspect.class);

     	// Access arguments in the advice body
       @Around("execution (* com.hadjshell.ecom.service.ProductService.findProductById(..)) && args(id)")
     	public Object validateAndUpdate(ProceedingJoinPoint jp, int id) throws Throwable {
         if (id < 0) {
           LOGGER.info("ID is negative, updating it");
           id = -id;
           LOGGER.info("New Value: " + id);
         }
     		Object obj = jp.proceed(new Object[] {postId});
     		return obj;
     	}
     }
     ```
