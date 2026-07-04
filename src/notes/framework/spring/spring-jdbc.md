---
title: Spring JDBC
order: 4
category:
  - Note
tag:
  - Framework
  - Spring
  - Backend
footer: false
editLink: false
---

- Spring JDBC is a lightweight module in the Spring Framework that simplifies database interaction using JDBC
- For larger applications, Spring Data JPA (with Hibernate) might be preferable, but for simple use cases, Spring JDBC is lightweight and efficient

### Key Components

- `DataSource`
  - A `DataSource` object provides database connection pooling

  - Instead of creating a new connection for every request, Spring uses a connection pool to reuse existing connections efficiently

  - ```properties
    # application.properties
    spring.datasource.url=jdbc:mysql://localhost:3306/mydb
    spring.datasource.username=root
    spring.datasource.password=secret
    spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
    spring.datasource.hikari.maximum-pool-size=10
    ```

  - ```java
    // or programmatically using DataSource
    @Bean
    public DataSource getDataSource() {
        HikariDataSource dataSource = new HikariDataSource();
        dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
        dataSource.setJdbcUrl("jdbc:mysql://localhost:3306/mydb");
        dataSource.setUsername("root");
        dataSource.setPassword("secret");
        return dataSource;
    }
    ```

- `JdbcTemplate`
  - `JdbcTemplate` is the core class in Spring JDBC that provides methods to execute SQL queries. It internally manages:
    - Connection establish
    - Statement preparation
    - Query execution
    - Exception handling
    - Resource cleanup

### CRUD Operations

- Insert
  - ```java
    public void save(Employee e) {
        String sql = "INSERT INTO employees (id, name, department) VALUES (?, ?, ?)";
        jdbcTemplate.update(sql, e.getId(), e.getName(), e.getDepartment());
    }
    ```

- Select
  - A `RowMapper` is used to map database rows to Java objects

  - `RowMapper` is a functional interface with an abstract method `T mapRow(ResultSet rs, int rowNum)`

  - ```java
    public List<Student> findAll() {
        String sql = "select * from student";
        public class StudentRowMapper implements RowMapper<Student> {
          @Override
          public Student mapRow(ResultSet rs, int rowNum) throws SQLException {
              Student student = new Student();
              student.setRollNo(rs.getInt("rollno"));
              student.setName(rs.getString("name"));
              student.setMarks(rs.getInt("marks"));
              return student;
          }
      	}

        return jdbc.query(sql, new StudentRowMapper());
    }
    ```

    ```java
    // lambda expression
    public List<Student> findAll() {
        String sql = "select * from student";
        return jdbc.query(sql, (rs, rowNum) ->
                new Student(rs.getInt("rollno"),
                            rs.getString("name"),
                            rs.getInt("marks"))
        );
    }
    ```

    ```java
    // query for one object
    public Student find(int no) {
        String sql = "select * from student where rollno = ?";
        return jdbc.queryForObject(sql, (rs, rowNum) ->
                new Student(rs.getInt("rollno"),
                        rs.getString("name"),
                        rs.getInt("marks")),
                no);
    }
    ```

- Update
  - ```java
    public void update(int id, String name, String department) {
        String sql = "UPDATE employees SET name = ?, department = ? WHERE id = ?";
        jdbcTemplate.update(sql, name, department, id);
    }
    ```

- Delete
  - ```java
    public void delete(int id) {
        String sql = "DELETE FROM employees WHERE id = ?";
        jdbcTemplate.update(sql, id);
    }
    ```

### Transaction Management

- `@Transactional`

### Exception Handling

- Spring JDBC translates `SQLExceptions` into **`DataAccessException`**, which is a runtime exception hierarchy

- | Exception                                | Description                                           |
  | ---------------------------------------- | ----------------------------------------------------- |
  | `DataAccessException`                    | Root exception for Spring JDBC                        |
  | `EmptyResultDataAccessException`         | Thrown when `queryForObject()` returns no result      |
  | `IncorrectResultSizeDataAccessException` | Thrown when an unexpected number of rows are returned |
