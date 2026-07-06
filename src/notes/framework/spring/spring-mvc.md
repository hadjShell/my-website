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

`DispatcherServlet` in Spring is the central component of the Spring MVC framework that acts as the front controller. It receives all incoming HTTP requests, forwards them to the appropriate controllers, and manages the response generation process including handler mapping and view resolution.

![](/assets/image/spring/spring_mvc_architecture.webp)

Work flow:

1. **`DispatcherServlet`**: The HTTP request is received by the `DispatcherServlet`.
2. **Handler Mapping**: The `DispatcherServlet` consults the Handler Mapping to determine which controller should handle the request based on the URL pattern.
3. **Controller**: The Controller processes the request and returns a `ModelAndView` object, which contains the model data and the view name.
4. **Model and View**: The `ModelAndView` object holds the model data (business logic result) and the view name (which view to render).
5. **View Resolver**: The `ViewResolver` resolves the logical view name to a physical view (e.g., a JSP page).
6. **View**: The `View` (usually a JSP, HTML, etc.) is rendered and populated with the model data.
7. **Response**: The rendered view is sent back as the HTTP response to the client.

## Servlet

A Servlet is a Java-based server-side class used to handle requests and generate dynamic responses for web applications. The servlet must be run on the **servlet container** (e.g., Apache Tomcat) instead of directly on JVM. So an External or embedded server is needed.

### Servlet Lifecycle

1. **Loading and initialisation**
   - When a servlet is requested for the first time or after a container restart, the servlet container loads the servlet class into memory.
   - The container calls the `init()` method, which is used to initialize the servlet.
   - `init()` is called only once during the servlet’s lifecycle and is used to perform any initializations required for the servlet.

2. **Request handling**
   - `service()` method is called for each request made to the servlet.
   - It is responsible for processing the client request and generating the response.
   - The container calls `service()` whenever it receives an HTTP request (usually via `doGet()`, `doPost()`, etc.).
   - In the case of `HttpServlet`, the `service()` method delegates the request to specific methods based on the HTTP method (GET, POST, etc.):
     - **`doGet()`**: Handles HTTP GET requests (commonly used for retrieving data from the server).
     - **`doPost()`**: Handles HTTP POST requests (commonly used for submitting data to the server).
     - **`doPut()`, `doDelete()`**: Handle PUT and DELETE requests, respectively.
     - **`doHead()`, `doOptions()`**: Handle other HTTP request types like HEAD and OPTIONS.

3. **Destroying the servlet**
   - When the servlet container decides to unload the servlet (typically when the server shuts down or the servlet is no longer needed), it calls the `destroy()` method.
   - This is where cleanup tasks such as releasing resources (like database connections or file handles) should be done.

### How to Create Servlet

1. Extend `HttpServlet`
2. Override `doGet()`, `doPOst()`, etc.
3. Configure using `web.xml` or `WebServlet` annotation

```java
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

## `ViewResolver`

ViewResolver in Spring MVC is a component responsible for mapping logical view names returned by controllers to actual view resources like JSP or HTML files. It helps in separating business logic from the presentation layer by handling view resolution automatically. This makes the application more flexible and easier to maintain.

## `WebApplicationContext`

WebApplicationContext is a specialized container in Spring MVC used for web applications. It provides configuration and manages web-related beans while also giving access to the ServletContext. Each DispatcherServlet creates its own WebApplicationContext to handle request processing independently.
