---
title: Spring Boot with REST API
category:
  - Note
tag:
  - Framework
  - Spring
  - Backend
footer: false
editLink: false
---



### Spring MVC with Spring Boot

- MVC (**Model-View-Controller**)
  - **View**
    - Displays data received from the Controller
    - **UI presentation**
    - JSP, Thymeleaf, React, Angular, etc.
  - **Controller**
    - **Maps** HTTP requests to specific handler methods
    - **Validates** input data (optional, but often delegated to validation mechanisms)
    - **Calls the service** layer for business logic execution
    - **Returns responses** (JSON, XML, View)
  - **Model**
    - **`@Service`**
      - Implements **business logic**
      - **Calls data access layer** (repository/DAO)
      - Ensures transaction management (e.g., `@Transactional`)
    - **`@Repository`**
      - Interacting with the database
      - Spring JDBC, Hibernate, Spring Data JPA, etc.
    - **`@Component`**
      - Representing and managing **application data**
- Spring Boot MVC has an embedded Tomcat server

- Work flow
  - ```css
    [Client] → [DispatcherServlet] → [Controller] → [Service] → [DAO] → [Database]
                  ↓
          [View Resolver] → [View]
    ```

- | Annotation                 | Description              |
  | -------------------------- | ------------------------ |
  | `@Controller`              | Defines a web controller |
  | `@RestController`          | Handles RESTful APIs     |
  | `@RequestMapping("/path")` | Maps request URLs        |
  | `@GetMapping("/path")`     | Maps GET requests        |
  | `@PostMapping("/path")`    | Maps POST requests       |
  | `@PutMapping("/path")`     | Maps PUT requests        |
  | `@DeleteMapping("/path")`  | Maps DELETE requests     |
  | `@RequestParam`            | Gets request parameters  |
  | `@PathVariable`            | Extracts values from URL |
  | `@ResponseBody`            | Sends data as JSON       |

- Controller for view (skipped)
  - `ModelAndView` class
  - JSP is a servlet in the end

### REST API

- **RE**presentational **S**tate **T**ransfer

- [REST API article written by Postman](https://blog.postman.com/rest-api-examples/)

- A key difference between a traditional MVC controller and the RESTful web service controller is the way that the **HTTP response body** is created

- Rather than relying on a view technology to perform server-side rendering of the greeting data to HTML, this RESTful web service controller populates and returns an object. The object data will be written directly to the HTTP response as **JSON**

- `jackson` library converts **Java objects to JSON**

- [URI syntax](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier#syntax)

- ```java
  @RestController
  @RequestMapping("/posts")		// Base URI for all endpoints
  @CrossOrigin(origins = "http://localhost:3000")
  public class JobController {

      private JobService service;

      @Autowired
      public JobController(JobService service) {
          this.service = service;
      }

      public JobController() {
      }

    	@GetMapping
      public List<JobPost> getAllJobs() {
          return service.getAllJobs();
      }

      // You can specify which format you want to produce or consume
      @GetMapping(path = "/{postId}", produces = {"application/json"})
    	// @PathVariable indicates that a method parameter should be bound to a URI template variable
    	// If the path variable name is the same as the parameter name, you don't have to specify it
      public ResponseEntity<JobPost> getJobById(@PathVariable int postId) {
          JobPost job = service.getJobById(postId);
        	return job != null ? new ResponseEntity<JobPost>(job, HttpStatus.OK) :
                                  new ResponseEntity<>(HttpStatus.NOT_FOUND);
      }

    	// If @GetMapping is differentiated by @RequestParam only, then add params element specifying which query parameters are gonna be received
    	@GetMapping(params = "keyword")
      public List<JobPost> searchJob(@RequestParam(name = "keyword", defaultValue = "nothing") String keyword) {
          return service.search(keyword);
      }

      @PostMapping(consumes = {"application/json"})
      public JobPost addJob(@RequestBody JobPost job) {
          service.addJob(job);
          return job;
      }

      // @RequestBody read the request body and deserialised it into an Object
    	@PutMapping("/{postId}")
      public JobPost updateJob(@RequestBody JobPost job) {
          service.updateJob(job);
          return service.getJobById(job.getPostId());
      }

      // @RequestParam binds the value of the query String parameter into the method parameter
    	// If the query parameter is absent in the request, then defaultValue is used
    	// Type conversion is automatically applied if the target method parameter type is not String
    	// If the conversion is falied, then respond bad request
    	@DeleteMapping
      public void deleteJob(@RequestParam(name = "id", defaultValue = "1") int jobId) {
          service.deleteJob(jobId);
      }
  }
  ```
