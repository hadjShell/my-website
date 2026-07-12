<template><div><ul>
<li>
<img src="/assets/image/java/Stream.png" alt="Stream" style="zoom:33%;" />
</li>
<li>Stack and method area is the <strong>context</strong> of a program; others are the resources</li>
<li><a href="https://docs.oracle.com/javase%2F9%2Fdocs%2Fapi%2F%2F/java/io/package-tree.html" target="_blank" rel="noopener noreferrer"><code v-pre>java.io</code> package hierarchy</a></li>
<li><a href="https://docs.oracle.com/javase/tutorial/essential/io/index.html" target="_blank" rel="noopener noreferrer">Java Stream Tutorial</a></li>
</ul>
<h2 id="stream" tabindex="-1"><a class="header-anchor" href="#stream"><span>Stream</span></a></h2>
<ul>
<li><em>Stream is a flow of data</em></li>
<li>An <em>I/O Stream</em> represents an input source or an output destination</li>
<li>Streams support many different kinds of data, including simple bytes, primitive data types, localized characters, and objects</li>
<li>Some streams simply pass on data; others manipulate and transform the data in useful ways</li>
<li>The basic principle
<ul>
<li>A stream is a sequence of data</li>
<li>A program uses an <em>input stream</em> to read data from a source, one item at a time</li>
<li>A program uses an <em>output stream</em> to write data to a destination, one item at time</li>
</ul>
</li>
</ul>
<h2 id="byte-streams" tabindex="-1"><a class="header-anchor" href="#byte-streams"><span>Byte Streams</span></a></h2>
<ul>
<li>Handle I/O of raw binary data</li>
<li>All byte stream classes are descended from <code v-pre>InputStream</code>and <code v-pre>OutputStream</code> (abstract class)</li>
<li><code v-pre>InputStream</code> methods
<ul>
<li><code v-pre>int read()</code>
<ul>
<li>Reads the next byte of data from the input stream</li>
<li>The only abstract method</li>
<li>Returns the next byte of data, or <code v-pre>-1</code> if the end of the stream is reached</li>
<li>This method blocks until input data is available, end of file is detected, or an exception is thrown</li>
</ul>
</li>
<li><code v-pre>int read(byte[] b)</code>
<ul>
<li>Reads some number of bytes from the input stream and stores them into the buffer array <code v-pre>b</code></li>
</ul>
</li>
<li><code v-pre>int read(byte[]b, int off, int len)</code>
<ul>
<li>Reads up to <code v-pre>len</code> bytes of data from the input stream into buffer array <code v-pre>b</code></li>
<li>The first byte read is stored into element <code v-pre>b[off]</code>, the next one into <code v-pre>b[off+1]</code>, and so on</li>
</ul>
</li>
<li><code v-pre>byte[] readAllBytes()</code>
<ul>
<li>Reads all remaining bytes from the input stream</li>
</ul>
</li>
<li><code v-pre>long transferTo(OutputStream out)</code>
<ul>
<li>Reads all bytes from this input stream and writes the bytes to the given output stream in the order that they are read</li>
<li>Returns the number of bytes transferred</li>
</ul>
</li>
<li><code v-pre>int available()</code>
<ul>
<li>Returns an estimate of the number of bytes that can be read (or skipped over) from this input stream without blocking or <code v-pre>0</code> when it reaches the end of the input stream</li>
</ul>
</li>
<li><code v-pre>long skip(long n)</code>
<ul>
<li>Skips over and discards <code v-pre>n</code> bytes of data from this input stream</li>
<li>Returns the actual number of bytes skipped</li>
</ul>
</li>
<li><code v-pre>void mark(int limit)</code>
<ul>
<li>Marks the current position in this input stream. A subsequent call to the <code v-pre>reset</code> method repositions this stream at the last marked position so that subsequent reads re-read the same bytes</li>
<li><strong>Only works for buffered streams</strong></li>
</ul>
</li>
<li><code v-pre>void reset()</code>
<ul>
<li>Repositions this stream to the position at the time the <code v-pre>mark</code> method was last called on this input stream</li>
</ul>
</li>
<li><code v-pre>boolean markSupported()</code>
<ul>
<li>Tests if this input stream supports the <code v-pre>mark</code> and <code v-pre>reset</code> methods</li>
</ul>
</li>
<li><code v-pre>void close()</code>
<ul>
<li>Closes this input stream and releases any system resources associated with the stream</li>
</ul>
</li>
</ul>
</li>
<li><code v-pre>OutputStream</code> methods
<ul>
<li><code v-pre>void write(int b)</code>
<ul>
<li>Writes the specified byte to this output stream</li>
<li>The byte to be written is the eight low-order bits of the argument <code v-pre>b</code>. The 24 high-order bits of <code v-pre>b</code> are ignored</li>
<li>The only abstract method</li>
</ul>
</li>
<li><code v-pre>void write(byte[] b)</code>
<ul>
<li>Writes <code v-pre>b.length</code> bytes from the specified byte array to this output stream</li>
</ul>
</li>
<li><code v-pre>void write(byte[] b, int off, int len)</code>
<ul>
<li>Writes <code v-pre>len</code> bytes from the specified byte array starting at offset <code v-pre>off</code> to this output stream</li>
</ul>
</li>
<li><code v-pre>void flush()</code>
<ul>
<li>Flushes this output stream and forces any buffered output bytes to be written out</li>
<li><strong>Only works for buffered streams</strong></li>
</ul>
</li>
<li><code v-pre>void close()</code>
<ul>
<li>Closes this output stream and releases any system resources associated with this stream</li>
</ul>
</li>
</ul>
</li>
<li>Hierarchy of byte streams
<ul>
<li><img src="/assets/image/java/java.io.png" alt="java.io" tabindex="0" loading="lazy"><figcaption><a href="http://java.io" target="_blank" rel="noopener noreferrer">java.io</a></figcaption></li>
</ul>
</li>
<li><code v-pre>ByteArrayInputStream</code>
<ul>
<li><code v-pre>ByteArrayInputStream(byte[] buf)</code>
<ul>
<li>Creates a <code v-pre>ByteArrayInputStream</code> so that it uses <code v-pre>buf</code> as its buffer array</li>
</ul>
</li>
<li><code v-pre>ByteArrayInputStream(byte[] buf, int offset, int length)</code></li>
</ul>
</li>
<li><code v-pre>ByteArrayOutputStream</code>
<ul>
<li><code v-pre>ByteArrayOutputStream()</code></li>
<li><code v-pre>ByteArrayOutputStream(int size)</code></li>
<li><code v-pre>byte[] toByteArray()</code></li>
<li><code v-pre>void writeTo(OutputStream out)</code>
<ul>
<li>Writes the complete contents of this byte array output stream to the specified output stream argument</li>
</ul>
</li>
</ul>
</li>
<li><code v-pre>FileInputStream</code> and <code v-pre>FileOutputStream</code></li>
</ul>
<h2 id="character-streams" tabindex="-1"><a class="header-anchor" href="#character-streams"><span>Character Streams</span></a></h2>
<ul>
<li>Working with that Java stores character in 2 bytes</li>
<li>Character streams are often &quot;wrappers&quot; for byte streams</li>
<li>The character stream uses the byte stream to perform the physical I/O, while the character stream handles translation between characters and bytes</li>
<li><code v-pre>Reader</code> methods
<ul>
<li>Similar to <code v-pre>InputStream</code></li>
<li>Don't have <code v-pre>available()</code></li>
</ul>
</li>
<li><code v-pre>Writer</code> methods
<ul>
<li><code v-pre>Writer append(char c)</code>
<ul>
<li>Appends the specified character to this writer</li>
<li><code v-pre>out.append(c)</code> behaves exactly the same as <code v-pre>out.write(c)</code></li>
</ul>
</li>
<li><code v-pre>Writer append(CharSequence csq)</code></li>
<li><code v-pre>Writer append(CharSequence csq, int start, int end)</code></li>
</ul>
</li>
<li>Hierarchy of character stream
<ul>
<li><img src="/assets/image/java/reader_writer.jpg" alt="reader_writer" tabindex="0" loading="lazy"><figcaption>reader_writer</figcaption></li>
</ul>
</li>
<li><code v-pre>CharArrayReader</code> and <code v-pre>CharArrayWriter</code></li>
<li><code v-pre>FileReader</code> and <code v-pre>FileWriter</code></li>
</ul>
<h2 id="buffered-streams" tabindex="-1"><a class="header-anchor" href="#buffered-streams"><span>Buffered Streams</span></a></h2>
<ul>
<li>
<p>For unbuffered steams, each read or write request is handled directly by the underlying OS</p>
</li>
<li>
<p>This can make a program much less efficient, since each such request often triggers disk access, network activity, or some other operation that is relatively expensive</p>
</li>
<li>
<p>Buffer</p>
<ul>
<li>A temporary memory object for holding the data</li>
<li>The native input and output APIs are called only when the buffer is <strong>empty or full</strong></li>
<li>It often makes sense to write out a buffer at critical points, without waiting for it to fill. This is known as <em>flushing</em> the buffer</li>
</ul>
</li>
<li>
<p>A program can convert an unbuffered stream into a buffered stream using the <em>wrapping idiom</em></p>
<ul>
<li>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">in </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> BufferedReader</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> FileReader</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"xanadu.txt"</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">))</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">out </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> BufferedWriter</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> FileWriter</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"characteroutput.txt"</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">))</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p><code v-pre>BufferedInputStream</code> and <code v-pre>BufferedOutputStream</code></p>
</li>
<li>
<p><code v-pre>BufferedReader</code> and <code v-pre>BufferedWriter</code></p>
</li>
</ul>
<h2 id="formatting-streams" tabindex="-1"><a class="header-anchor" href="#formatting-streams"><span>Formatting Streams</span></a></h2>
<ul>
<li><code v-pre>PrintWriter</code>, <code v-pre>PrintStream</code>
<ul>
<li>The only <code v-pre>PrintStream</code> objects you are likely to need are <code v-pre>System.out</code> and <code v-pre>System.error</code></li>
<li>When you need to create a formatted output stream, instantiate <code v-pre>PrintWriter</code>, not <code v-pre>PrintStream</code></li>
<li><code v-pre>PrintStream</code> never throws an <code v-pre>IOException</code></li>
<li><code v-pre>PrintStream</code> can be created so as to flush automatically; this means that the <code v-pre>flush</code> method of the underlying output stream is automatically invoked after a byte array is written, one of the <code v-pre>println</code> methods is invoked, or a newline character or byte (<code v-pre>'\n'</code>) is written</li>
<li><code v-pre>void print()</code>
<ul>
<li><code v-pre>String.valueOf()</code> is invoked, and then the string's characters are converted into bytes according to the default charset, and these bytes are written in exactly the manner of the <code v-pre>write(int)</code>.</li>
</ul>
</li>
<li><code v-pre>void println()</code></li>
<li><code v-pre>PrintStream printf()</code>, <code v-pre>PrintStream format()</code>
<ul>
<li>They behave the same</li>
</ul>
</li>
</ul>
</li>
<li><code v-pre>Scanner</code>
<ul>
<li>Useful for breaking down formatted input into tokens and translating individual tokens according to their data type</li>
<li>By default, a scanner uses white space (<em>include blanks, tabs, and line terminators</em>) to separate tokens
<ul>
<li><code v-pre>Scanner useDelimiter(String pattern)</code></li>
<li><code v-pre>Scanner useDelimiter(Pattern pattern)</code></li>
</ul>
</li>
<li>A scanning operation (<code v-pre>next()</code> or <code v-pre>hasNext()</code>) may block waiting for input</li>
<li>Even though a scanner is not a stream, you need to close it to indicate that you're done with its underlying stream</li>
</ul>
</li>
</ul>
<h2 id="data-streams" tabindex="-1"><a class="header-anchor" href="#data-streams"><span>Data Streams</span></a></h2>
<ul>
<li><code v-pre>DataInputStream</code>, <code v-pre>DataOutputStream</code></li>
<li>Created as a wrapper for an existing byte stream object</li>
<li>The input stream consists of simple binary data, with nothing to indicate the type of individual values, or where they begin in the stream (not readable)</li>
<li>Each specialized <code v-pre>write</code> in <code v-pre>DataStreams</code> is exactly matched by the corresponding specialized <code v-pre>read</code>. It is up to the programmer to make sure that output types and input types are matched in this way</li>
<li><code v-pre>DataStreams</code> uses one very bad programming technique: it uses floating point numbers to represent monetary values</li>
</ul>
<h2 id="object-streams" tabindex="-1"><a class="header-anchor" href="#object-streams"><span>Object Streams</span></a></h2>
<ul>
<li>Serialisation and deserialisation
<ul>
<li>Serialization in Java is a mechanism of writing the state of an object into a byte stream</li>
<li>Storing and retrieving the state of an object</li>
<li>Most, but not all, standard classes support serialization of their objects</li>
<li>Rules
<ul>
<li><strong>Implement the marker interface <code v-pre>Serializable</code></strong></li>
<li><strong>There must be a non-parametarized constructor</strong></li>
<li><strong><code v-pre>static</code> or <code v-pre>transient</code> members will not be serialised</strong></li>
</ul>
</li>
</ul>
</li>
<li><code v-pre>ObjectInputStream</code>, <code v-pre>ObjectOutputStream</code>
<ul>
<li>A single invocation of <code v-pre>writeObject()</code> can cause a large number of objects to be written to the stream</li>
<li>A stream can only contain one copy of an object, though it can contain any number of references to it</li>
<li>If a single object is written to two different streams, it is effectively duplicated</li>
<li>Type casting after <code v-pre>readObject()</code> is needed</li>
</ul>
</li>
</ul>
<h2 id="randomaccessfile" tabindex="-1"><a class="header-anchor" href="#randomaccessfile"><span><code v-pre>RandomAccessFile</code></span></a></h2>
<ul>
<li>
<p>A random access file behaves like a large array of bytes stored in the file system</p>
</li>
<li>
<p>There is a kind of cursor, or index into the implied array, called the <em>file pointer</em></p>
</li>
<li>
<p>Implements <code v-pre>DataInput</code> and <code v-pre>DataOutput</code></p>
</li>
<li>
<p>Constructor</p>
<ul>
<li>
<p><code v-pre>RandomAccessFile(File file, String mode)</code></p>
</li>
<li>
<p><code v-pre>RandomAccessFile(String name, String mode)</code></p>
</li>
<li>
<table>
<thead>
<tr>
<th style="text-align:left">Value</th>
<th style="text-align:left">Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>&quot;r&quot;</code></td>
<td style="text-align:left">Open for reading only. Invoking any of the <code v-pre>write</code> methods of the resulting object will cause an <code v-pre>IOException</code> to be thrown.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>&quot;rw&quot;</code></td>
<td style="text-align:left">Open for reading and writing. If the file does not already exist then an attempt will be made to create it.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>&quot;rws&quot;</code></td>
<td style="text-align:left">Open for reading and writing, as with <code v-pre>&quot;rw&quot;</code>, and also require that every update to the file's content or metadata be written synchronously to the underlying storage device.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>&quot;rwd&quot;</code></td>
<td style="text-align:left">Open for reading and writing, as with <code v-pre>&quot;rw&quot;</code>, and also require that every update to the file's content be written synchronously to the underlying storage device.</td>
</tr>
</tbody>
</table>
</li>
</ul>
</li>
<li>
<p>Methods</p>
<ul>
<li><code v-pre>long getFilePointer()</code>
<ul>
<li>Returns the current offset in this file</li>
</ul>
</li>
<li><code v-pre>void seek(long pos)</code>
<ul>
<li>Sets the file-pointer offset, measured from the beginning of this file, at which the next read or write occurs</li>
</ul>
</li>
<li><code v-pre>long length()</code>
<ul>
<li>Returns the length of this file, measured in bytes</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="piped-streams" tabindex="-1"><a class="header-anchor" href="#piped-streams"><span>Piped Streams</span></a></h2>
<ul>
<li>Communicate producer and consumer instead of using shared objects</li>
<li>Typically, data is written to a <code v-pre>PipedOutputStream</code> object by one thread and data is read from the connected <code v-pre>PipedInputStream</code> by some other thread</li>
<li><code v-pre>connect()</code></li>
</ul>
<h2 id="file-i-o" tabindex="-1"><a class="header-anchor" href="#file-i-o"><span>File I/O</span></a></h2>
<ul>
<li>
<p><code v-pre>Path</code></p>
<ul>
<li>
<p>A <code v-pre>Path</code> is <strong>NOT</strong> system independent</p>
</li>
<li>
<p>You can think of the <code v-pre>Path</code> as storing these name elements as a sequence</p>
</li>
<li>
<p><code v-pre>Paths.get(String first, String... more)</code></p>
<ul>
<li>
<p>Creating a <code v-pre>Path</code></p>
</li>
<li>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Path</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> p1 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> Paths</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"/tmp/foo"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// Paths.get() is a shorthand of</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Path</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> p2 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> FileSystems</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">getDefault</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">getPath</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"/tmp/foo"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p><code v-pre>Path getFileName()</code></p>
</li>
<li>
<p><code v-pre>Path getName(int index)</code></p>
</li>
<li>
<p><code v-pre>int getNameCount()</code></p>
</li>
<li>
<p><code v-pre>Path subpath(int beginIndex, int endIndex)</code></p>
<ul>
<li>Not including a root element</li>
</ul>
</li>
<li>
<p><code v-pre>Path getParent()</code></p>
</li>
<li>
<p><code v-pre>Path getRoot()</code></p>
</li>
<li>
<p><code v-pre>URI toUri()</code></p>
</li>
<li>
<p><code v-pre>Path toAbsolutePath()</code></p>
<ul>
<li>The file does not need to exist for this method to work</li>
</ul>
</li>
<li>
<p><code v-pre>Path toRealPath(LinkOption... option)</code></p>
<ul>
<li>If <code v-pre>true</code> is passed to this method and the file system supports symbolic links, this method resolves any symbolic links in the path</li>
<li>If the <code v-pre>Path</code> is relative, it returns an absolute path</li>
<li>If the <code v-pre>Path</code> contains any redundant elements, it returns a path with those elements removed</li>
<li>This method throws an exception if the file does not exist or cannot be accessed</li>
</ul>
</li>
<li>
<p><code v-pre>Path resolve(Path p)</code></p>
</li>
<li>
<p><code v-pre>Path resolve(String s)</code></p>
<ul>
<li>Join two paths</li>
</ul>
</li>
<li>
<p><code v-pre>Path relativize(Path other)</code></p>
<ul>
<li>Constructs a relative path between this path and a given path</li>
</ul>
</li>
</ul>
</li>
<li>
<p><code v-pre>File</code></p>
</li>
<li>
<p><code v-pre>Files</code></p>
</li>
</ul>
</div></template>


