---
title: Spring Data JPA
order: 5
category:
  - Note
tag:
  - Framework
  - Spring
  - Backend
footer: false
editLink: false
---

### JPA

- Java Persistence API
  - JPA is a Java **specification** that provides an ORM (**Object-Relational-Mapping**) framework to manage data in Java application
  - The common interface for different providers like Hibernate, ExlipseLink, etc.
- JPA architecture
  - ![jpa_architecture](/assets/image/spring/jpa_architecture.png)

### Spring Data JPA

- Spring Data JPA is built as an abstract layer over the JPA

- It has all features of JPA plus the Spring ease of development

- [JPA vs. Spring Data JPA](https://www.baeldung.com/spring-data-jpa-vs-jpa)

- For years, developers have written boilerplate code to create a JPA DAO for basic functionalities. Spring helps to significantly reduce this amount of code by providing minimal interfaces and actual implementations

- Spring Data JPA uses **Hibernate** under the hood

- How to use Spring Data JPA?
  1. Config database in `application.properties`
     - ```properties
       spring.datasource.url=jdbc:postgresql://localhost:5432/jobApp
       spring.datasource.username=postgres
       spring.datasource.password=****
       spring.datasource.driver-class-name=org.postgresql.Driver

       spring.jpa.hibernate.ddl-auto=update
       spring.jpa.show-sql=true
       ```

  2. Define an entity
     - ```java
       package com.hadjshell.JobAd.model;

       import jakarta.persistence.Entity;
       import jakarta.persistence.Id;
       import org.springframework.context.annotation.Scope;
       import org.springframework.stereotype.Component;

       @Component
       @Scope("prototype")
       @Entity
       @Table(name = "jobPost")
       public class JobPost implements Serializable {

           @Id		// primary key
         	// Indicate that ID should be generated automatically
         	@GeneratedValue(strategy=GenerationType.AUTO)
           private int postId;
           private String postProfile;
           private String postDesc;
         	@Column(nullable = false)
           private int reqExperience;
           private List<String> postTechStack;

           public JobPost(int postId, String postProfile, String postDesc, int reqExperience, List<String> postTechStack) {
               this.postId = postId;
               this.postProfile = postProfile;
               this.postDesc = postDesc;
               this.reqExperience = reqExperience;
               this.postTechStack = postTechStack;
           }

           protected JobPost() {
           }

       		// getter and setter
       }
       ```

  3. Build repository layer and create queries
     - ```java
       package com.hadjshell.JobAd.repo;

       import com.hadjshell.JobAd.model.JobPost;
       import org.springframework.data.jpa.repository.JpaRepository;
       import org.springframework.data.jpa.repository.Query;
       import org.springframework.stereotype.Repository;

       import java.util.List;

       @Repository
       // Specify the stored object's type and its pk's type
       public interface JobRepo extends JpaRepository<JobPost, Integer> {

           @Query("SELECT j FROM JobPost j WHERE j.reqExperience >= :year")
           List<JobPost> findByReqExperienceGreaterOrEqualThan(@Param("year") int year);

         	List<JobPost> findByPostProfileContaining(String keyword);
       }

       ```

     - Spring Data JPA uses JPA to store data in a relational database

     - It is able to create repository implementations automatically, at runtime, from a repository interface

     - Spring Data JPA creates a bunch of `findBy_` methods for you behind the scene when you specify them in the `@Repository` without specifying `@Query`

     - `findById` returns an [`Optional`](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Optional.html) object

  4. Build service layer and controller layer
