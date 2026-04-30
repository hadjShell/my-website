---
title: Introduction
order: 1
category:
  - Note
tag:
  - OS
footer: false
editLink: false
---

## Why to Learn Operating System?

All software applications are built on operating system. The very first idea of operating system was to serve all kinds of applications better and faster. The basic method is to **build abstractions**.

## What is Operating System?

> Operating System: A body of software, in fact, that is responsible for making it easy to run programs (even allowing you to seemingly run many at the same time), allowing programs to share memory, enabling programs to interact with devices, and other fun stuff like that. (OSTEP)

Operating system is a special piece of software that is in charge of making sure the system operates correctly and efficiently in an **easy-to-use** manner. The early name for the OS was _supervisor_ or even the _master control program_, you can feel why do we need it.

In a broad sense, if a particular software possess the above property, we can call it an "operating system". For example, is Wechat an operating sysytem?

The **three easy pieces** of an OS is that: **Virtualization**, **Concurrency**, **Persistence**.

## How does OS Make the System Easy to Use?

### Virtualization

Virtualization, that is, the OS takes a physical resource (such as the CPU, memory, or a disk) and transforms it into a more general, powerful, and easy-to-use **virtual** form of itself. Sometimes we refer to OS as a **virtual machine**.

**Virtualizing the CPU** means that the OS, with some help of hardware, is in charge of the **illusion** that the system has a very large number of virtual CPUs instead of just one CPU, allowing many programs to seemingly run at once.

**Virtualizing memory** means that each process accesses its own **private virtual address space**, which the OS somehow maps onto the physical memory of the machine. A memory reference within one running program does not affect the address space of other processes; as far as the running process is concerned, it has physical memory all to itself. The reality, however, is that physical memory is a shared resource, managed by OS.

The model of physical memory is just an array of bytes. To read memory, one must specify an **address** to be able to access the data stored there; to write memory, one must also specify the **data** to be written to the given address.

### Service Provider

In order to allow users to tell the OS what to do and thus make use of the features of the virtual machine, the OS provides a **standard library** (**system calls**) to applications.

**Every program is a state machine**. It always starts from being loaded by OS, set up to default state through `execve` from another process; and then the state machine operates a bunch of operations (computations + syscalls); finally `_exit` is called.

OS is an API provider providing `syscalls` for softwares.

### Resource Manager

Because virtualization allows many programs to run (**sharing CPU**), and to concurrently access their own instructions and data (**sharing memory**), and to access devices (**sharing disks and so forth**), the OS is known as a **resource manager**.

## Concurrency

The problem of **concurrency** refers to a host of problems that arise, and must be addressed, when working on many things at once in the same program. The problems of concurrency are no longer limited to the OS, The modern **multi-threaded** programs exhibit the same problems.

The following program shows an example of concurrency problem. The reason for the strange behavior relates to how instructions are executed, which is one at a time. The key part of the program `counter++` takes three instructions: one to load the value of the `counter` from memory into a register, one to increment it, and one to store it back into memory. Because these three instructions do not execute **atomically**, problems arise.

::: warning The Problem

When there are many concurrently executing threads within the same memory space, how can we build a correctly working program?
What primitives are needed from the OS?
What mechanisms should be provided by the hardware?
How can we use them to solve the problems of concurrency?

:::

```C
// thread.c
#include <stdio.h>
#include <stdlib.h>
#include "common.h"

volatile int counter = 0;
int loops;

void *worker(void *arg) {
  int i;
  for (i = 0; i < loops; i++) {
    counter++;
  }
  return NULL;
}

int main(int argc, char *argv[]) {
  if (argc != 2) {
    fprintf(stderr, "usage: threads <value>\n");
    exit(1);
  }
  loops = atoi(argv[1]);
  pthread_t p1, p2;
  printf("Initial value : %d\n", counter);

  Pthread_create(&p1, NULL, worker, NULL);
  Pthread_create(&p2, NULL, worker, NULL);
  Pthread_join(p1, NULL);
  Pthread_join(p2, NULL);
  printf("Final value : %d\n", counter);
  return 0;
}
```

```bash
prompt> ./thread 100000
Initial value : 0
Final value   : 143012

prompt> ./thread 100000
Initial value : 0
Final value   : 137298
```

## Persistence

In system memory, data can be easily lost, as devices such as DRAM store values in a volatile manner; when power goes away or the system crashes, any data in memory is lost. Thus, we need hardware and software to be able to store data persistently; such storage is thus critical to any system as users care a great deal about their data.

The hardware comes in the form of some kind of input/output or I/O device; in modern systems, a hard drive is a common repository for long-lived information. The software in the operating system that usually manages the disk is called the **file system**; it is thus responsible for storing any files the user creates in a reliable and efficient manner on the disks of the system. Unlike the abstractions provided by the OS for the CPU and memory, the OS does not create a private, virtualized disk for each application. Rather, it is assumed that often times, users will want to **share** information that is in files.

::: warning The Problem

The file system is the part of the OS in charge of managing persistent data.
What techniques are needed to do so correctly?
What mechanisms and policies are required to do so with high performance?
How is reliability achieved, in the face of failures in hardware and software?

:::

## Design Goals

- Abstraction
- Multiprogramming
- Isolation
- Sharing
- Security
- Performance
- Range of uses
- Reliability
- Balance the trade-offs

Any operating system must multiplex processes onto the underlying hardware, isolate processes from each other, and provide mechanisms for controlled inter-process communication.

## History of Operating System

Batch processing (Just libraries) -> System call (protection) -> Multiprogramming -> PC (networking, windowing systems, user-level threads, drivers. etc.)

> Read Section 2.6 in Chapter Introduction in OSTEP.
