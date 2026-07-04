<template><div><ul>
<li>
<p>The problem</p>
<ul>
<li><strong>Make your project which is working on your machine work on other people's machines</strong></li>
</ul>
</li>
<li>
<p>Solution one: <strong>Virtualization</strong></p>
<ul>
<li>Add a layer - virtual machine between host OS and guest OS</li>
<li>Deliver the whole OS image including your software to other teams</li>
<li>It can also help isolate different applications running on the same large-scale server back in 1960s - 1970s</li>
<li>But this solution is very costly</li>
</ul>
</li>
<li>
<p>Solution two: <strong>Containerization</strong></p>
<ul>
<li>Instead running your application on the OS, you run it inside the container</li>
<li>Deliver the container</li>
</ul>
</li>
<li>
<p><a href="https://docs.docker.com/get-started/docker-overview/" target="_blank" rel="noopener noreferrer">What is Docker</a></p>
</li>
<li>
<p>Basics</p>
<ul>
<li>
<p><strong>Container</strong></p>
<ul>
<li>Containers are <strong>isolated processes</strong> for each of your app's components. Each components (frontend, backend, database) runs in its own isolated environment, completely isolated from everything on your machine</li>
<li>Self-contained</li>
<li>Isolated</li>
<li>Independent</li>
<li>Portable</li>
</ul>
</li>
<li>
<p><strong>Image</strong></p>
<ul>
<li>A container image is a standardized package that includes all of the files, binaries, libraries, and configurations to run a container</li>
<li>One container has one image</li>
<li>Images are <strong>immutable</strong>. Once an image is created, it can't be modified. You can only make a new image or add changes on top of it</li>
<li>Container images are <strong>composed of layers</strong>. Each layer represents a set of file system changes that add, remove, or modify files</li>
<li><strong>Docker Hub</strong> is the default global marketplace for storing and distributing images</li>
</ul>
</li>
<li>
<p><strong>Registry</strong></p>
<ul>
<li>An image registry is a centralized location for storing and sharing your container images</li>
<li>It can be either public or private</li>
<li>Registry can have multiple repositories; repository can have multiple images</li>
</ul>
</li>
<li>
<p><strong>Docker compose</strong></p>
<ul>
<li>One best practice for containers is that each container should do one thing and do it well</li>
<li>With Docker Compose, you can define all of your containers and their configurations in a single YAML file, running a <strong>multi-container application</strong></li>
<li><code v-pre>docker compose up</code></li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>Building images</strong></p>
<ol>
<li>
<p><strong>Image layers</strong></p>
<ul>
<li><a href="https://docs.docker.com/reference/cli/docker/image/history/" target="_blank" rel="noopener noreferrer"><code v-pre>docker image history</code></a></li>
<li><a href="https://docs.docker.com/reference/cli/docker/container/commit/" target="_blank" rel="noopener noreferrer"><code v-pre>docker container commit</code></a></li>
</ul>
</li>
<li>
<p><strong>Writing a Dockerfile</strong></p>
<ul>
<li>
<p>A Dockerfile is a text-based document that's used to create a container image</p>
</li>
<li>
<p>It provides instructions to the image builder on the commands to run, files to copy, startup command, and more</p>
</li>
<li>
<div class="language-dockerfile line-numbers-mode" data-highlighter="shiki" data-ext="dockerfile" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-dockerfile"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> python:3.12</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">WORKDIR</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /usr/local/app</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Install the application dependencies</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">COPY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> requirements.txt ./</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">RUN</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> pip install --no-cache-dir -r requirements.txt</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Copy in the source code</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">COPY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> src ./src</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">EXPOSE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> 5000</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Setup an app user so the container doesn't run as the root user</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">RUN</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> useradd app</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">USER</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> app</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">CMD</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"uvicorn"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"app.main:app"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"--host"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"0.0.0.0"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"--port"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"8080"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>Common instructions</strong></p>
<ul>
<li><code v-pre>FROM &lt;image&gt;</code> - this specifies the base image that the build will extend.</li>
<li><code v-pre>WORKDIR &lt;path&gt;</code> - this instruction specifies the &quot;working directory&quot; or the path in the image where files will be copied and commands will be executed.</li>
<li><code v-pre>COPY &lt;host-path&gt; &lt;image-path&gt;</code> - this instruction tells the builder to copy files from the host and put them into the container image.</li>
<li><code v-pre>RUN &lt;command&gt;</code> - this instruction tells the builder to run the specified command.</li>
<li><code v-pre>ENV &lt;name&gt; &lt;value&gt;</code> - this instruction sets an environment variable that a running container will use.</li>
<li><code v-pre>EXPOSE &lt;port-number&gt;</code> - this instruction sets configuration on the image that indicates a port the image would like to expose.</li>
<li><code v-pre>USER &lt;user-or-uid&gt;</code> - this instruction sets the default user for all subsequent instructions.</li>
<li><code v-pre>CMD [&quot;&lt;command&gt;&quot;, &quot;&lt;arg1&gt;&quot;]</code> - this instruction sets the default command a container using this image will run.</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>Build, tag, and publish an image</strong></p>
<ul>
<li>Building images - the process of building an image based on a <code v-pre>Dockerfile</code>
<ul>
<li><code v-pre>docker build .</code></li>
<li>When you run a build, the builder pulls the base image, if needed, and then runs the instructions specified in the Dockerfile</li>
</ul>
</li>
<li>Tagging images - the process of giving an image a name, which also determines where the image can be distributed
<ul>
<li><strong>Image name structure</strong>: <code v-pre>[HOST[:PORT_NUMBER]/]PATH[:TAG]</code></li>
<li><code v-pre>HOST</code>: The optional registry hostname where the image is located. If no host is specified, Docker's public registry at <code v-pre>docker.io</code> is used by default.</li>
<li><code v-pre>PORT_NUMBER</code>: The registry port number if a hostname is provided</li>
<li><code v-pre>PATH</code>: The path of the image, consisting of slash-separated components. For Docker Hub, the format follows <code v-pre>[NAMESPACE/]REPOSITORY</code>, where namespace is either a user's or organization's name. If no namespace is specified, <code v-pre>library</code> is used, which is the namespace for Docker Official Images.</li>
<li><code v-pre>TAG</code>: A custom, human-readable identifier that's typically used to identify different versions or variants of an image. If no tag is specified, <code v-pre>latest</code> is used by default.</li>
<li><code v-pre>docker build -t my-username/my-image .</code></li>
<li><code v-pre>docker image tag my-username/my-image another-username/another-image:v1</code></li>
</ul>
</li>
<li>Publishing images - the process to distribute or share the newly created image using a container registry
<ul>
<li><code v-pre>docker push my-username/my-image</code></li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>Using the build cache</strong></p>
</li>
<li>
<p><strong>Multi-stage builds</strong></p>
<ul>
<li>
<div class="language-dockerfile line-numbers-mode" data-highlighter="shiki" data-ext="dockerfile" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-dockerfile"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Stage 1: Build Environment</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> builder-image </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">AS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> build-stage</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Install build tools (e.g., Maven, Gradle)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Copy source code</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Build commands (e.g., compile, package)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Stage 2: Runtime environment</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> runtime-image </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">AS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> final-stage</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#  Copy application artifacts from the build stage (e.g., JAR file)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">COPY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> --from=build-stage /path/in/build/stage /path/to/place/in/final/stage</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Define runtime configuration (e.g., CMD, ENTRYPOINT)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ol>
</li>
<li>
<p><strong>Running containers</strong></p>
<ul>
<li>
<p>Publishing and exposing ports</p>
<ul>
<li>Publishing a port provides the ability to break through a little bit of networking isolation by setting up a forwarding rule</li>
<li><code v-pre>docker run -d -p HOST_PORT:CONTAINER_PORT nginx</code></li>
</ul>
</li>
<li>
<p>Overriding container defaults</p>
</li>
<li>
<p>Persisting container data</p>
<ul>
<li><strong>Volumes</strong> are a storage mechanism that provide the ability to persist data beyond the lifecycle of an individual container</li>
</ul>
</li>
<li>
<p>Sharing local files with containers</p>
</li>
<li>
<p>Multi-container applications</p>
</li>
</ul>
</li>
<li>
<hr>
</li>
</ul>
</div></template>


