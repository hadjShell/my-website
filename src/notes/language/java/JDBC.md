---
title: JDBC
category:
  - Note
tag:
  - Language
  - Java
footer: false
editLink: false
---

## What is JDBC

- JDBC is an API used in java programming to interact with databases.

![](/assets/image/java/JDBC.png)

- Steps
  1. Import packages
  2. Load driver
  3. Register driver
  4. Create connection
  5. Create statement
  6. Execute statement
  7. Close

## JDBC Drivers

- Establish connection

- Convert data types from Java language to database data types

- Type-1 driver
  - JDBC-ODBC bridge
  - Open Database Connectivity (ODBC) is an open standard API that allows application programmers to access any database
  - A layer between different program languages and different database systems
  - Partial driver (not fully written in Java)

- Type-2 driver
  - Native-API
  - API sitting on the database system
  - Partial

- Type-3 driver
  - Java-Net protocol driver
  - Use a server to talk to database
  - Pure

- Type-4 driver
  - Thin driver
  - Direct driver written in Java
  - Pure

## Example

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class Sample
{
  public static void main(String[] args)
  {
    // Connection and Statement are AutoClosable.
    // Don't forget to close them both in order to avoid leaks.
    try (
      // create a database connection
      Connection connection = DriverManager.getConnection("jdbc:sqlite:sample.db");
      Statement statement = connection.createStatement()
    ) {
      statement.setQueryTimeout(30);  // set timeout to 30 sec.

      statement.executeUpdate("drop table if exists person");
      statement.executeUpdate("create table person (id integer, name string)");
      statement.executeUpdate("insert into person values(1, 'leo')");
      statement.executeUpdate("insert into person values(2, 'yui')");
      ResultSet rs = statement.executeQuery("select * from person");
      while (rs.next()) {
        // read the result set
        System.out.println("name = " + rs.getString("name"));
        System.out.println("id = " + rs.getInt("id"));
      }
    }
    catch (SQLException e) {
      // if the error message is "out of memory",
      // it probably means no database file is found
      e.printStackTrace(System.err);
    }
  }
}
```
