---
title: Process
order: 2
category:
  - Note
tag:
  - OS
footer: false
editLink: false
---

## The Abstraction: A Process

The OS creates the illusion by virtualizing the CPU. By _running one process, then stopping it and running another_, and so forth, the OS can promote the illusion that many virtual CPUs exist when in fact there is only one physical CPU (or a few). This technique, known as **time sharing** of the CPU, allows users to run as many concurrent processes as they would like; the potential cost is performance, as each will run more slowly if the CPU must be shared.

Each **running program**, called a _process_, has its **machine state**, what a program can read or update when it is running. One component of a process's machine state is **user-space memory** containing instructions, data, and a stack. The instructions implement the program's computation. The data are the variables on which the computation acts. The stack organizes the program's procedure calls. Another part are registers. Finally, programs often access persistent storage devices.

The kernel associates a process identifier, or `PID`, with each process.

## Process API

- **Create**: An operating system must include some method to create new processes. When you type a command into the shell, or double-click on an application icon, the OS is invoked to create a new process to run the program you have indicated.
- **Destroy**: As there is an interface for process creation, systems also provide an interface to destroy processes forcefully. Of course, many processes will run and just exit by themselves when complete; when they don’t, however, the user may wish to kill them, and thus an interface to halt a runaway process is quite useful.
- **Wait**: Sometimes it is useful to wait for a process to stop running; thus some kind of waiting interface is often provided.
- Miscellaneous Control: Other than killing or waiting for a process, there are sometimes other controls that are possible. For example, most operating systems provide some kind of method to **suspend** a process (stop it from running for a while) and then **resume** it (continue it running).
- **Status**: There are usually interfaces to get some status information about a process as well, such as how long it has run for, or what state it is in.

## Process Creation

The first thing that the OS must do to run a program is to **load** its code and any static data (e.g., initialized variables) into memory, into the **address space** of the process. Programs initially reside on disk in some kind of executable format; thus, the process of loading a program and static data into memory requires the OS to read those bytes from disk and place them in memory somewhere.

Once the code and static data are loaded into memory, there are a few other things the OS needs to do before running the process. Some memory must be allocated for the program’s **run-time stack** (or just stack).C programs use the stack for local variables, function parameters, and return addresses; the OS allocates this memory and gives it to the process. The OS will also likely initialize the stack with arguments; specifically, it will fill in the parameters to the `main()` function, i.e., `argc` and the `argv` array.

The OS may also allocate some memory for the program’s **heap**. In C programs, the heap is used for explicitly requested dynamically-allocated data; programs request such space by calling `malloc()` and free it explicitly by calling `free()`. The heap is needed for data structures such as linked lists, hash tables, trees, and other interesting data structures. The heap will be small at first; as the program runs, and requests more memory via the `malloc()` library API, the OS may get involved and allocate more memory to the process to help satisfy such calls.

The OS will also do some other initialization tasks, particularly as related to input/output (I/O). For example, in UNIX systems, **each process by default has three open file descriptors, for standard input, output, and error**; these descriptors let programs easily read input from the terminal as well as print output to the screen.

By loading the code and static data into memory, by creating and initializing a stack, and by doing other work as related to I/O setup, the OS has now (finally) set the stage for program execution. It thus has one last task: to start the program running at the entry point, namely `main()`. By jumping to the `main()` routine, the OS transfers control of the CPU to the newly-created process, and thus the program begins its execution.

## Process State

- **Unused**: The process slot is completely free and not being used by any process.
- **EMBRYO** (胚胎): The state when the process is being created, but not fully initialized yet. The OS has allocated a process slot and a PID has been assigned, but memory is not fully set up yet.
- **Ready**: In the ready state, a process is ready to run but for some reason the OS has chosen not to run it at this given moment.
- **Running**: In the running state, a process is running on a processor. This means it is executing instructions.
- **Blocked**: In the blocked state, a process has performed some kind of operation that makes it not ready to run until some other event takes place. A common example: when a process initiates an I/O request to a disk, it becomes blocked and thus some other process can use the processor.
- **Zombie**: A process has exited but has not yet been cleaned up. This final state can be useful as it allows other processes (usually the **parent process**) to examine the return code of the process abd see if the just-finished process executed successfully.
