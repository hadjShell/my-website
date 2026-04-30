<template><div><h2 id="system-call" tabindex="-1"><a class="header-anchor" href="#system-call"><span>System Call</span></a></h2>
<p>Below are Xv6 system calls. If not otherwise stated, these calls return 0 for no error, and -1 if there's an error.</p>
<table>
<thead>
<tr>
<th style="text-align:left">System call</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">int fork()</td>
<td style="text-align:left">Create a process, return child’s PID.</td>
</tr>
<tr>
<td style="text-align:left">int exit(int status)</td>
<td style="text-align:left">Terminate the current process; status reported to wait(). No return.</td>
</tr>
<tr>
<td style="text-align:left">int wait(int *status)</td>
<td style="text-align:left">Wait for a child to exit; exit status in *status; returns child PID.</td>
</tr>
<tr>
<td style="text-align:left">int kill(int pid)</td>
<td style="text-align:left">Terminate process PID. Returns 0, or -1 for error.</td>
</tr>
<tr>
<td style="text-align:left">int getpid()</td>
<td style="text-align:left">Return the current process’s PID.</td>
</tr>
<tr>
<td style="text-align:left">int sleep(int n)</td>
<td style="text-align:left">Pause for n clock ticks.</td>
</tr>
<tr>
<td style="text-align:left">int exec(char *file, char *argv[])</td>
<td style="text-align:left">Load a file and execute it with arguments; only returns if error.</td>
</tr>
<tr>
<td style="text-align:left">char *sbrk(int n)</td>
<td style="text-align:left">Grow process’s memory by n bytes. Returns start of new memory.</td>
</tr>
<tr>
<td style="text-align:left">int open(char *file, int flags)</td>
<td style="text-align:left">Open a file; flags indicate read/write; returns an fd (file descriptor).</td>
</tr>
<tr>
<td style="text-align:left">int write(int fd, char *buf, int n)</td>
<td style="text-align:left">Write n bytes from buf to file descriptor fd; returns n.</td>
</tr>
<tr>
<td style="text-align:left">int read(int fd, char *buf, int n)</td>
<td style="text-align:left">Read n bytes into buf; returns number read; or 0 if end of file.</td>
</tr>
<tr>
<td style="text-align:left">int close(int fd)</td>
<td style="text-align:left">Release open file fd.</td>
</tr>
<tr>
<td style="text-align:left">int dup(int fd)</td>
<td style="text-align:left">Return a new file descriptor referring to the same file as fd.</td>
</tr>
<tr>
<td style="text-align:left">int pipe(int p[])</td>
<td style="text-align:left">Create a pipe, put read/write file descriptors in p[0] and p[1].</td>
</tr>
<tr>
<td style="text-align:left">int chdir(char *dir)</td>
<td style="text-align:left">Change the current directory.</td>
</tr>
<tr>
<td style="text-align:left">int mkdir(char *dir)</td>
<td style="text-align:left">Create a new directory.</td>
</tr>
<tr>
<td style="text-align:left">int mknod(char *file, int, int)</td>
<td style="text-align:left">Create a device file.</td>
</tr>
<tr>
<td style="text-align:left">int fstat(int fd, struct stat *st)</td>
<td style="text-align:left">Place info about an open file into *st.</td>
</tr>
<tr>
<td style="text-align:left">int stat(char *file, struct stat *st)</td>
<td style="text-align:left">Place info about a named file into *st.</td>
</tr>
<tr>
<td style="text-align:left">int link(char *file1, char *file2)</td>
<td style="text-align:left">Create another name (file2) for the file file1.</td>
</tr>
<tr>
<td style="text-align:left">int unlink(char *file)</td>
<td style="text-align:left">Remove a file.</td>
</tr>
</tbody>
</table>
<ul>
<li>A process may create a new process using the <code v-pre>fork</code> syscall. <code v-pre>fork</code> creates a new process, called the <em>child process</em>, with exactly the same memory contents as the calling process, called the <em>parent process</em>. <code v-pre>fork</code> returns in the both the parent and the child. In the parent, <code v-pre>fork</code> returns the child's <code v-pre>PID</code>; in the child, <code v-pre>fork</code> returns 0.</li>
<li>The <code v-pre>exit</code> system call causes the calling process to stop executing and to release resources such as memory and open files <code v-pre>exit</code> takes an integer status argument, conventionally 0 to indicate success and 1 to indicate failure.</li>
<li>The <code v-pre>wait</code> system call returns the <code v-pre>PID</code> of an exited (or killed) child of the current process and copies the exit status of the child to the address passed to <code v-pre>wait</code>; if none of the caller’s children has exited, <code v-pre>wait</code> waits for one to do so. If the caller has no children, <code v-pre>wait</code> immediately returns -1. If the parent doesn’t care about the exit status of a child, it can pass a 0 address to <code v-pre>wait</code>.</li>
</ul>
<h2 id="shell" tabindex="-1"><a class="header-anchor" href="#shell"><span>Shell</span></a></h2>
<p>The shell is an ordinary user program, not a part of kernel, that reads commands from the user and executes them.</p>
</div></template>


