---
title: Spring MVC
category:
  - Note
tag:
  - Framework
  - Spring
  - Backend
footer: false
editLink: false
---

::: note

- [ ] To be continued

:::

Spring MVC Framework is a Java-based web framework built on the Model-View-Controller design pattern. It is part of the Spring Framework and is used to develop flexible and loosely coupled web applications.

- It uses `DispatcherServlet` as the front controller to handle all incoming requests and route them to appropriate controllers.
- It separates application logic into Model (data), View (UI), and Controller (request handling) for better organization.
- It supports features like form handling, validation, and RESTful web services for building modern web applications.

## `DispatcherServlet`

### Servlet (Old way)

- A Servlet is a Java-based server-side class used to handle requests and generate dynamic responses for web applications

- The servlet must be run on the **servlet container** (e.g., Apache Tomcat) instead of directly on JVM

- External or embedded server

- Servlet lifecycle
  1. **Loading and initialisation**
     - When a servlet is requested for the first time or after a container restart, the servlet container loads the servlet class into memory

     - The container calls the `init()` method, which is used to initialize the servlet

     - `init()` is called only once during the servlet’s lifecycle and is used to perform any initializations required for the servlet

  2. **Request handling**
     - `service()` method is called for each request made to the servlet

     - It is responsible for processing the client request and generating the response

     - The container calls `service()` whenever it receives an HTTP request (usually via `doGet()`, `doPost()`, etc.)

     - In the case of `HttpServlet`, the `service()` method delegates the request to specific methods based on the HTTP method (GET, POST, etc.):
       - **`doGet()`**: Handles HTTP GET requests (commonly used for retrieving data from the server).
       - **`doPost()`**: Handles HTTP POST requests (commonly used for submitting data to the server).
       - **`doPut()`, `doDelete()`**: Handle PUT and DELETE requests, respectively.
       - **`doHead()`, `doOptions()`**: Handle other HTTP request types like HEAD and OPTIONS.

  3. **Destroying the servlet**
     - When the servlet container decides to unload the servlet (typically when the server shuts down or the servlet is no longer needed), it calls the `destroy()` method

     - This is where cleanup tasks such as releasing resources (like database connections or file handles) should be done

- How to create a servlet?
  1. Extend `HttpServlet`
  2. Override `doGet()`, `doPOst()`, etc.
  3. Configure using `web.xml` or `WebServlet` annotation

- ```java
  import java.io.IOException;
  import javax.servlet.ServletException;
  import javax.servlet.annotation.WebServlet;
  import javax.servlet.http.HttpServlet;
  import javax.servlet.http.HttpServletRequest;
  import javax.servlet.http.HttpServletResponse;

  // Annotation-based servlet mapping
  @WebServlet("/hello")
  public class HelloServlet extends HttpServlet {

      @Override
      public void init() throws ServletException {
          System.out.println("Servlet Initialized");
      }

    	@Override
      protected void doGet(HttpServletRequest request, HttpServletResponse response)
              throws ServletException, IOException {
          response.setContentType("text/html");
          response.getWriter().println("<h1>Hello, Servlet!</h1>");
      }

    	@Override
    	protected void doPost(HttpServletRequest request, HttpServletResponse response)
        			throws ServletException, IOException {
          // Handle POST request
          String data = request.getParameter("data");
          response.getWriter().write("Received POST data: " + data);
  		}

    	@Override
      public void destroy() {
          System.out.println("Servlet Destroyed");
      }
  }
  ```
