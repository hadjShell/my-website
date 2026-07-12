---
title: Multiprogramming
category:
  - Note
tag:
  - Language
  - Java
footer: false
editLink: false
---

- Multiprogramming
  - Running more than one programs on a single computer

  - ```mermaid
    graph TD
    A[Multiprogramming] ---> B[Multi-users]
    A ---> C[Multitasking]
    C ---> D[Multithreading]
    ```

> Go read the Concurrency chapter of Thinking in Java

- By multiprogramming CPU's idle time is minimised
- A Thread of execution is the smallest sequence of programmed instructions that can be managed independently
- In many cases, a thread is a component of a process
- Useful for web server, GUI, animation, etc.

## How to Implement Multithreading

1. `extends` or `implements` or lambda expression
   - Depends on whether the subclass is inherited a superclass or not
   - `Thread` class
   - `Runnable` interface
2. Overriding the `run()` method
   - `run()` is the starting point of a thread

3. Start the thread
   - If `implements Runnable`, `Thread t = new Thread(new Object()); t.start();`
   - If `extends Thread`, `o.start();`

## `Thread` class

- States of Thread
  - ![thread-states](/assets/image/java/thread-states.png)
- Thread priority
  - Scheduler in JVM maintains a thread ready queue
  - The exact behaviour depends on the JVM
- Constructors
  - `Thread()`
  - `Thread(Runnable r)`
  - `Thread(Runnable r, String name)`
  - `Thread(ThreadGroup g, String name)`
- Getter and setter
  - `long getId()`
  - `String getName()`
  - `int getPriority()`
    - Default priority of a thread (`NORM_PRIORITY`) in Java is 5; `MIN_PRIORITY` is 1 and `MAX_PRIORITY` is 10
  - `ThreadState getState()`
  - `ThreadGroup getThreadGroup()`
  - `void setName(String name)`
  - `void setPriority(int p)`
  - `void setDaemon(boolean b)`
    - A daemon thread is the background thread with least priority
    - An example: garbage collector
- Enquiry methods
  - `boolean isAlive()`
  - `boolean isDaemon()`
  - `boolean isInterrupted()`
- Instance methods
  - `void inerrupt()`
  - `void join()`
    - Wait for this thread to die

  - `void join(long milli)`
  - `void run()`
  - `void start()`

- Static methods
  - `int activeCount()`
    - Returns an estimate of the number of active threads in the current thread's `ThreadGroup` and its subgroups

  - `Thread currentThread()`
    - Returns a reference to the currently executing thread object.

  - `void sleep(long milli)`
    - Causes the currently executing thread to sleep

  - `void yield()`
    - A hint to the scheduler that the current thread is willing to yield its current use of a processor

  - `void dumpStack()`
    - Prints a stack trace of the current thread to the standard error stream

## Synchronisation

- Shared resources
- Critical section
- Mutual exclusion
- Locking / mutex
- Semaphore
- Monitor
- Race condition
- Inter-thread communication
- How Java achieve synchronisation
  - Object monitor
  - `sychronized`
    - Guard the critical section
  - Synchronised method
  - Synchronised block
- How Java achieve ITC
  - `wait()`, `notify()`, `notifyAll()`
