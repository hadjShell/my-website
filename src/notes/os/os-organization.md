---
title: OS Organization
order: 3
category:
  - Note
tag:
  - OS
footer: false
editLink: false
---

## System Call

Below are Xv6 system calls. If not otherwise stated, these calls return 0 for no error, and -1 if there's an error.

| System call                           | Description                                                              |
| :------------------------------------ | :----------------------------------------------------------------------- |
| int fork()                            | Create a process, return child’s PID.                                    |
| int exit(int status)                  | Terminate the current process; status reported to wait(). No return.     |
| int wait(int \*status)                | Wait for a child to exit; exit status in \*status; returns child PID.    |
| int kill(int pid)                     | Terminate process PID. Returns 0, or -1 for error.                       |
| int getpid()                          | Return the current process’s PID.                                        |
| int sleep(int n)                      | Pause for n clock ticks.                                                 |
| int exec(char *file, char *argv[])    | Load a file and execute it with arguments; only returns if error.        |
| char \*sbrk(int n)                    | Grow process’s memory by n bytes. Returns start of new memory.           |
| int open(char \*file, int flags)      | Open a file; flags indicate read/write; returns an fd (file descriptor). |
| int write(int fd, char \*buf, int n)  | Write n bytes from buf to file descriptor fd; returns n.                 |
| int read(int fd, char \*buf, int n)   | Read n bytes into buf; returns number read; or 0 if end of file.         |
| int close(int fd)                     | Release open file fd.                                                    |
| int dup(int fd)                       | Return a new file descriptor referring to the same file as fd.           |
| int pipe(int p[])                     | Create a pipe, put read/write file descriptors in p[0] and p[1].         |
| int chdir(char \*dir)                 | Change the current directory.                                            |
| int mkdir(char \*dir)                 | Create a new directory.                                                  |
| int mknod(char \*file, int, int)      | Create a device file.                                                    |
| int fstat(int fd, struct stat \*st)   | Place info about an open file into \*st.                                 |
| int stat(char *file, struct stat *st) | Place info about a named file into \*st.                                 |
| int link(char *file1, char *file2)    | Create another name (file2) for the file file1.                          |
| int unlink(char \*file)               | Remove a file.                                                           |

- A process may create a new process using the `fork` syscall. `fork` creates a new process, called the _child process_, with exactly the same memory contents as the calling process, called the _parent process_. `fork` returns in the both the parent and the child. In the parent, `fork` returns the child's `PID`; in the child, `fork` returns 0.
- The `exit` system call causes the calling process to stop executing and to release resources such as memory and open files `exit` takes an integer status argument, conventionally 0 to indicate success and 1 to indicate failure.
- The `wait` system call returns the `PID` of an exited (or killed) child of the current process and copies the exit status of the child to the address passed to `wait`; if none of the caller’s children has exited, `wait` waits for one to do so. If the caller has no children, `wait` immediately returns -1. If the parent doesn’t care about the exit status of a child, it can pass a 0 address to `wait`.

## Shell

The shell is an ordinary user program, not a part of kernel, that reads commands from the user and executes them.
