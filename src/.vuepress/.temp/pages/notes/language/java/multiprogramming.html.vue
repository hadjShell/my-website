<template><div><ul>
<li>Multiprogramming
<ul>
<li>
<p>Running more than one programs on a single computer</p>
</li>
<li>
<Mermaid code="eJxLL0osyFAIceFyjPYtzSnJLCjKBwrl5mbmpccq6Orq2ik4QSR0S4tTi4pjuRwhos4Q0ZLE4myQUi5niLALVDijKDUxBSwBADvqIEU="></Mermaid></li>
</ul>
</li>
</ul>
<blockquote>
<p>Go read the Concurrency chapter of Thinking in Java</p>
</blockquote>
<ul>
<li>By multiprogramming CPU's idle time is minimised</li>
<li>A Thread of execution is the smallest sequence of programmed instructions that can be managed independently</li>
<li>In many cases, a thread is a component of a process</li>
<li>Useful for web server, GUI, animation, etc.</li>
</ul>
<h2 id="how-to-implement-multithreading" tabindex="-1"><a class="header-anchor" href="#how-to-implement-multithreading"><span>How to Implement Multithreading</span></a></h2>
<ol>
<li>
<p><code v-pre>extends</code> or <code v-pre>implements</code> or lambda expression</p>
<ul>
<li>Depends on whether the subclass is inherited a superclass or not</li>
<li><code v-pre>Thread</code> class</li>
<li><code v-pre>Runnable</code> interface</li>
</ul>
</li>
<li>
<p>Overriding the <code v-pre>run()</code> method</p>
<ul>
<li><code v-pre>run()</code> is the starting point of a thread</li>
</ul>
</li>
<li>
<p>Start the thread</p>
<ul>
<li>If <code v-pre>implements Runnable</code>, <code v-pre>Thread t = new Thread(new Object()); t.start();</code></li>
<li>If <code v-pre>extends Thread</code>, <code v-pre>o.start();</code></li>
</ul>
</li>
</ol>
<h2 id="thread-class" tabindex="-1"><a class="header-anchor" href="#thread-class"><span><code v-pre>Thread</code> class</span></a></h2>
<ul>
<li>
<p>States of Thread</p>
<ul>
<li><img src="/assets/image/java/thread-states.png" alt="thread-states" tabindex="0" loading="lazy"><figcaption>thread-states</figcaption></li>
</ul>
</li>
<li>
<p>Thread priority</p>
<ul>
<li>Scheduler in JVM maintains a thread ready queue</li>
<li>The exact behaviour depends on the JVM</li>
</ul>
</li>
<li>
<p>Constructors</p>
<ul>
<li><code v-pre>Thread()</code></li>
<li><code v-pre>Thread(Runnable r)</code></li>
<li><code v-pre>Thread(Runnable r, String name)</code></li>
<li><code v-pre>Thread(ThreadGroup g, String name)</code></li>
</ul>
</li>
<li>
<p>Getter and setter</p>
<ul>
<li><code v-pre>long getId()</code></li>
<li><code v-pre>String getName()</code></li>
<li><code v-pre>int getPriority()</code>
<ul>
<li>Default priority of a thread (<code v-pre>NORM_PRIORITY</code>) in Java is 5; <code v-pre>MIN_PRIORITY</code> is 1 and <code v-pre>MAX_PRIORITY</code> is 10</li>
</ul>
</li>
<li><code v-pre>ThreadState getState()</code></li>
<li><code v-pre>ThreadGroup getThreadGroup()</code></li>
<li><code v-pre>void setName(String name)</code></li>
<li><code v-pre>void setPriority(int p)</code></li>
<li><code v-pre>void setDaemon(boolean b)</code>
<ul>
<li>A daemon thread is the background thread with least priority</li>
<li>An example: garbage collector</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Enquiry methods</p>
<ul>
<li><code v-pre>boolean isAlive()</code></li>
<li><code v-pre>boolean isDaemon()</code></li>
<li><code v-pre>boolean isInterrupted()</code></li>
</ul>
</li>
<li>
<p>Instance methods</p>
<ul>
<li>
<p><code v-pre>void inerrupt()</code></p>
</li>
<li>
<p><code v-pre>void join()</code></p>
<ul>
<li>Wait for this thread to die</li>
</ul>
</li>
<li>
<p><code v-pre>void join(long milli)</code></p>
</li>
<li>
<p><code v-pre>void run()</code></p>
</li>
<li>
<p><code v-pre>void start()</code></p>
</li>
</ul>
</li>
<li>
<p>Static methods</p>
<ul>
<li>
<p><code v-pre>int activeCount()</code></p>
<ul>
<li>Returns an estimate of the number of active threads in the current thread's <code v-pre>ThreadGroup</code> and its subgroups</li>
</ul>
</li>
<li>
<p><code v-pre>Thread currentThread()</code></p>
<ul>
<li>Returns a reference to the currently executing thread object.</li>
</ul>
</li>
<li>
<p><code v-pre>void sleep(long milli)</code></p>
<ul>
<li>Causes the currently executing thread to sleep</li>
</ul>
</li>
<li>
<p><code v-pre>void yield()</code></p>
<ul>
<li>A hint to the scheduler that the current thread is willing to yield its current use of a processor</li>
</ul>
</li>
<li>
<p><code v-pre>void dumpStack()</code></p>
<ul>
<li>Prints a stack trace of the current thread to the standard error stream</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="synchronisation" tabindex="-1"><a class="header-anchor" href="#synchronisation"><span>Synchronisation</span></a></h2>
<ul>
<li>Shared resources</li>
<li>Critical section</li>
<li>Mutual exclusion</li>
<li>Locking / mutex</li>
<li>Semaphore</li>
<li>Monitor</li>
<li>Race condition</li>
<li>Inter-thread communication</li>
<li>How Java achieve synchronisation
<ul>
<li>Object monitor</li>
<li><code v-pre>sychronized</code>
<ul>
<li>Guard the critical section</li>
</ul>
</li>
<li>Synchronised method</li>
<li>Synchronised block</li>
</ul>
</li>
<li>How Java achieve ITC
<ul>
<li><code v-pre>wait()</code>, <code v-pre>notify()</code>, <code v-pre>notifyAll()</code></li>
</ul>
</li>
</ul>
</div></template>


