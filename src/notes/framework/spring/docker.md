---
title: Docker
order: 8
category:
  - Note
tag:
  - Framework
  - Spring
  - Backend
footer: false
editLink: false
---

- The problem
  - **Make your project which is working on your machine work on other people's machines**

- Solution one: **Virtualization**
  - Add a layer - virtual machine between host OS and guest OS
  - Deliver the whole OS image including your software to other teams
  - It can also help isolate different applications running on the same large-scale server back in 1960s - 1970s
  - But this solution is very costly

- Solution two: **Containerization**
  - Instead running your application on the OS, you run it inside the container
  - Deliver the container

- [What is Docker](https://docs.docker.com/get-started/docker-overview/)

- Basics
  - **Container**
    - Containers are **isolated processes** for each of your app's components. Each components (frontend, backend, database) runs in its own isolated environment, completely isolated from everything on your machine
    - Self-contained
    - Isolated
    - Independent
    - Portable

  - **Image**
    - A container image is a standardized package that includes all of the files, binaries, libraries, and configurations to run a container
    - One container has one image
    - Images are **immutable**. Once an image is created, it can't be modified. You can only make a new image or add changes on top of it
    - Container images are **composed of layers**. Each layer represents a set of file system changes that add, remove, or modify files
    - **Docker Hub** is the default global marketplace for storing and distributing images

  - **Registry**
    - An image registry is a centralized location for storing and sharing your container images
    - It can be either public or private
    - Registry can have multiple repositories; repository can have multiple images

  - **Docker compose**
    - One best practice for containers is that each container should do one thing and do it well
    - With Docker Compose, you can define all of your containers and their configurations in a single YAML file, running a **multi-container application**
    - `docker compose up`

- **Building images**
  1. **Image layers**
     - [`docker image history`](https://docs.docker.com/reference/cli/docker/image/history/)
     - [`docker container commit`](https://docs.docker.com/reference/cli/docker/container/commit/)

  2. **Writing a Dockerfile**
     - A Dockerfile is a text-based document that's used to create a container image

     - It provides instructions to the image builder on the commands to run, files to copy, startup command, and more

     - ```dockerfile
       FROM python:3.12
       WORKDIR /usr/local/app

       # Install the application dependencies
       COPY requirements.txt ./
       RUN pip install --no-cache-dir -r requirements.txt

       # Copy in the source code
       COPY src ./src
       EXPOSE 5000

       # Setup an app user so the container doesn't run as the root user
       RUN useradd app
       USER app

       CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8080"]
       ```

     - **Common instructions**
       - `FROM <image>` - this specifies the base image that the build will extend.
       - `WORKDIR <path>` - this instruction specifies the "working directory" or the path in the image where files will be copied and commands will be executed.
       - `COPY <host-path> <image-path>` - this instruction tells the builder to copy files from the host and put them into the container image.
       - `RUN <command>` - this instruction tells the builder to run the specified command.
       - `ENV <name> <value>` - this instruction sets an environment variable that a running container will use.
       - `EXPOSE <port-number>` - this instruction sets configuration on the image that indicates a port the image would like to expose.
       - `USER <user-or-uid>` - this instruction sets the default user for all subsequent instructions.
       - `CMD ["<command>", "<arg1>"]` - this instruction sets the default command a container using this image will run.

  3. **Build, tag, and publish an image**
     - Building images - the process of building an image based on a `Dockerfile`
       - `docker build .`
       - When you run a build, the builder pulls the base image, if needed, and then runs the instructions specified in the Dockerfile
     - Tagging images - the process of giving an image a name, which also determines where the image can be distributed
       - **Image name structure**: `[HOST[:PORT_NUMBER]/]PATH[:TAG]`
       - `HOST`: The optional registry hostname where the image is located. If no host is specified, Docker's public registry at `docker.io` is used by default.
       - `PORT_NUMBER`: The registry port number if a hostname is provided
       - `PATH`: The path of the image, consisting of slash-separated components. For Docker Hub, the format follows `[NAMESPACE/]REPOSITORY`, where namespace is either a user's or organization's name. If no namespace is specified, `library` is used, which is the namespace for Docker Official Images.
       - `TAG`: A custom, human-readable identifier that's typically used to identify different versions or variants of an image. If no tag is specified, `latest` is used by default.
       - `docker build -t my-username/my-image .`
       - `docker image tag my-username/my-image another-username/another-image:v1`
     - Publishing images - the process to distribute or share the newly created image using a container registry
       - `docker push my-username/my-image`

  4. **Using the build cache**

  5. **Multi-stage builds**
     - ```dockerfile
       # Stage 1: Build Environment
       FROM builder-image AS build-stage
       # Install build tools (e.g., Maven, Gradle)
       # Copy source code
       # Build commands (e.g., compile, package)

       # Stage 2: Runtime environment
       FROM runtime-image AS final-stage
       #  Copy application artifacts from the build stage (e.g., JAR file)
       COPY --from=build-stage /path/in/build/stage /path/to/place/in/final/stage
       # Define runtime configuration (e.g., CMD, ENTRYPOINT)
       ```

- **Running containers**
  - Publishing and exposing ports
    - Publishing a port provides the ability to break through a little bit of networking isolation by setting up a forwarding rule
    - `docker run -d -p HOST_PORT:CONTAINER_PORT nginx`

  - Overriding container defaults
  - Persisting container data
    - **Volumes** are a storage mechanism that provide the ability to persist data beyond the lifecycle of an individual container

  - Sharing local files with containers
  - Multi-container applications

- ***
