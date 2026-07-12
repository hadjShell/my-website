---
title: Hibernate
category:
  - Note
tag:
  - Language
  - Java
footer: false
editLink: false
---

- A Java-based ORM framework (Object-Ralational Mapping)
- [Quick tutorial](https://docs.jboss.org/hibernate/orm/6.6/quickstart/html_single/)

## Key Concepts

- `Entity` class
  - An entity class is a Java class that is mapped to a table in a database

  - Each instance of the entity class represents a row in the table

  - ```java
    @Entity
    @Table(name = "new_table_name")
    public class Student {
        @Id		// primary key
        @GeneratedValue(strategy = GenerationType.IDENTITY)			// surrogate primary key
        private int id;
        @Column(name = "product_name")
        private String name;
        private int age;
      	@Transient		// this field will not be stored in the database
      	private String university;
      	private Address address;

        // Getters and Setters
    }

    // Embed those columns into Student table
    @Embeddable
    public class Address {
      	private int roomNo;
      	private String street;
      	private String city;
    }
    ```

- `SessionFactory`
  - The `SessionFactory` is the main interface to interact with Hibernate

  - It is responsible for creating `Session` objects that are used to perform operations on the database

  - The `SessionFactory` is usually created once during application startup and is used throughout the lifetime of the application (it is a heavyweight class)

  - ```java
    SessionFactory sessionFactory = new
    Configuration().configure("hibernate.cfg.xml").addAnnotatedClass(Product.class).buildSessionFactory();
    ```

- `Session`
  - A `Session` is a single-threaded unit of work in Hibernate

  - It allows you to create, read, update, and delete objects from the database. You perform all database operations within the `Session`

  - ```java
    Session session = sessionFactory.getCurrentSession();
    // or
    Session session = sessionFactory.openSession()
    ```

  - Difference
    - | **Feature**                | **`getCurrentSession()`**                                                                | **`openSession()`**                                                                 |
      | -------------------------- | ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
      | **Session Lifecycle**      | Tied to the current request or transaction context.                                      | Creates a new session each time it is called.                                       |
      | **Transaction Management** | Automatically associates with the ongoing transaction (if one exists).                   | Transaction must be manually managed (begin, commit, rollback).                     |
      | **Session Closing**        | The session is automatically closed at the end of the transaction.                       | The session must be explicitly closed by the developer.                             |
      | **Common Use Case**        | Typically used in web applications (e.g., within a request/response lifecycle).          | Used in more flexible, manual session management contexts (e.g., batch processing). |
      | **Contextual Binding**     | Uses a session-per-request or session-per-operation pattern.                             | Can be used independently of the request/transaction lifecycle.                     |
      | **Transaction Handling**   | Managed by the container, typically no need to manually start or commit the transaction. | Developer is responsible for managing transactions.                                 |

- `Transaction`
  - Hibernate uses transactions to ensure the consistency and integrity of the database

  - Transactions are started using `beginTransaction()`, and after performing the necessary operations, they are committed or rolled back

  - ```java
    session.beginTransaction();
    // Operations like save, update, delete
    session.getTransaction().commit();
    ```

- HQL (Hibernate Query Language)

- Criteria API

- Lazy vs Eager loading
  - **Lazy Loading:** Associated entities are loaded only when they are accessed for the first time

  - **Eager Loading:** Associated entities are loaded immediately when the parent entity is loaded

  - Lazy loading can improve performance by fetching data only when needed, but it can cause issues with `LazyInitializationException` if an entity is accessed outside the session context

  - ```java
    @Entity
    public class Order {
        @OneToMany(fetch = FetchType.LAZY)
        private List<Product> products;
    }
    ```

## Configuration

- `hibernate.cfg.xml`
  - The main configuration file for Hibernate, where you specify the database connection properties, dialect, and other Hibernate settings

  - ```xml
    <hibernate-configuration>
        <session-factory>
            <property name="hibernate.dialect">org.hibernate.dialect.MySQLDialect</property>
            <property name="hibernate.connection.driver_class">com.mysql.cj.jdbc.Driver</property>
            <property name="hibernate.connection.url">jdbc:mysql://localhost:3306/yourdb</property>
            <property name="hibernate.connection.username">root</property>
            <property name="hibernate.connection.password">password</property>
          	<!--Create the table when it is not there and update it instead of recreating it-->
            <property name="hibernate.hbm2ddl.auto">update</property>
          	<!--Print the sql on the console-->
            <property name="hibernate.show_sql">true</property>
          <property name="hibernate.format_sql">true</property>
        </session-factory>
    </hibernate-configuration>
    ```

- Mapping files
  - Define the relationship between entities and the database tables
  - Nowadays we use annotations

## Features

- CRUD methods
  - ```java
    session.beginTransaction();
    // create
    session.persist(s1);

    // read
    Student s2 = session.get(Student.class, 101);

    // update
    // Merge a detached entity (assuming it's not currently attached to the session)
    Student s3 = new Student();
    s3.setId(101);
    s3.setName("John");
    s3.setAge(20);
    // Merge the entity with the current session
    session.merge(product);

    // delete
    if (s2 != null) {
        // Delete the student
        session.remove(s2);
    } else {
        System.out.println("Student not found.");
    }

    s.getTransaction().commit();
    s.close();
    ```

- Mapping relationships
  - One to One
    - `@OneToOne`
  - One to Many & Many to One
    - `@OneToMany`, `ManyToOne`
    - Create a third join table by default
  - Many to Many
    - `@ManyToMany(mappedBy = "")`

- Caching
  - Hibernate provides caching mechanisms to reduce database access and improve performance. It supports both first-level cache (Session cache) and second-level cache (across Sessions)
    - **First-level cache** is enabled by default, and it stores objects within the current session
    - **Second-level cache** is an optional cache that works across sessions, and can be configured using cache providers like EHCache
