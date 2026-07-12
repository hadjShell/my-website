---
title: Java IO Streams
category:
  - Note
tag:
  - Language
  - Java
footer: false
editLink: false
---

- <img src="/assets/image/java/Stream.png" alt="Stream" style="zoom:33%;" />
- Stack and method area is the **context** of a program; others are the resources
- [`java.io` package hierarchy](https://docs.oracle.com/javase%2F9%2Fdocs%2Fapi%2F%2F/java/io/package-tree.html)
- [Java Stream Tutorial](https://docs.oracle.com/javase/tutorial/essential/io/index.html)

## Stream

- _Stream is a flow of data_
- An _I/O Stream_ represents an input source or an output destination
- Streams support many different kinds of data, including simple bytes, primitive data types, localized characters, and objects
- Some streams simply pass on data; others manipulate and transform the data in useful ways
- The basic principle
  - A stream is a sequence of data
  - A program uses an _input stream_ to read data from a source, one item at a time
  - A program uses an _output stream_ to write data to a destination, one item at time

## Byte Streams

- Handle I/O of raw binary data
- All byte stream classes are descended from `InputStream`and `OutputStream` (abstract class)
- `InputStream` methods
  - `int read()`
    - Reads the next byte of data from the input stream
    - The only abstract method
    - Returns the next byte of data, or `-1` if the end of the stream is reached
    - This method blocks until input data is available, end of file is detected, or an exception is thrown
  - `int read(byte[] b)`
    - Reads some number of bytes from the input stream and stores them into the buffer array `b`
  - `int read(byte[]b, int off, int len)`
    - Reads up to `len` bytes of data from the input stream into buffer array `b`
    - The first byte read is stored into element `b[off]`, the next one into `b[off+1]`, and so on
  - `byte[] readAllBytes()`
    - Reads all remaining bytes from the input stream
  - `long transferTo(OutputStream out)`
    - Reads all bytes from this input stream and writes the bytes to the given output stream in the order that they are read
    - Returns the number of bytes transferred
  - `int available()`
    - Returns an estimate of the number of bytes that can be read (or skipped over) from this input stream without blocking or `0` when it reaches the end of the input stream
  - `long skip(long n)`
    - Skips over and discards `n` bytes of data from this input stream
    - Returns the actual number of bytes skipped
  - `void mark(int limit)`
    - Marks the current position in this input stream. A subsequent call to the `reset` method repositions this stream at the last marked position so that subsequent reads re-read the same bytes
    - **Only works for buffered streams**
  - `void reset()`
    - Repositions this stream to the position at the time the `mark` method was last called on this input stream
  - `boolean markSupported()`
    - Tests if this input stream supports the `mark` and `reset` methods
  - `void close()`
    - Closes this input stream and releases any system resources associated with the stream
- `OutputStream` methods
  - `void write(int b)`
    - Writes the specified byte to this output stream
    - The byte to be written is the eight low-order bits of the argument `b`. The 24 high-order bits of `b` are ignored
    - The only abstract method
  - `void write(byte[] b)`
    - Writes `b.length` bytes from the specified byte array to this output stream
  - `void write(byte[] b, int off, int len)`
    - Writes `len` bytes from the specified byte array starting at offset `off` to this output stream
  - `void flush()`
    - Flushes this output stream and forces any buffered output bytes to be written out
    - **Only works for buffered streams**
  - `void close()`
    - Closes this output stream and releases any system resources associated with this stream
- Hierarchy of byte streams
  - ![java.io](/assets/image/java/java.io.png)
- `ByteArrayInputStream`
  - `ByteArrayInputStream(byte[] buf)`
    - Creates a `ByteArrayInputStream` so that it uses `buf` as its buffer array
  - `ByteArrayInputStream(byte[] buf, int offset, int length)`
- `ByteArrayOutputStream`
  - `ByteArrayOutputStream()`
  - `ByteArrayOutputStream(int size)`
  - `byte[] toByteArray()`
  - `void writeTo(OutputStream out)`
    - Writes the complete contents of this byte array output stream to the specified output stream argument
- `FileInputStream` and `FileOutputStream`

## Character Streams

- Working with that Java stores character in 2 bytes
- Character streams are often "wrappers" for byte streams
- The character stream uses the byte stream to perform the physical I/O, while the character stream handles translation between characters and bytes
- `Reader` methods
  - Similar to `InputStream`
  - Don't have `available()`
- `Writer` methods
  - `Writer append(char c)`
    - Appends the specified character to this writer
    - `out.append(c)` behaves exactly the same as `out.write(c)`
  - `Writer append(CharSequence csq)`
  - `Writer append(CharSequence csq, int start, int end)`
- Hierarchy of character stream
  - ![reader_writer](/assets/image/java/reader_writer.jpg)
- `CharArrayReader` and `CharArrayWriter`
- `FileReader` and `FileWriter`

## Buffered Streams

- For unbuffered steams, each read or write request is handled directly by the underlying OS

- This can make a program much less efficient, since each such request often triggers disk access, network activity, or some other operation that is relatively expensive

- Buffer
  - A temporary memory object for holding the data
  - The native input and output APIs are called only when the buffer is **empty or full**
  - It often makes sense to write out a buffer at critical points, without waiting for it to fill. This is known as _flushing_ the buffer

- A program can convert an unbuffered stream into a buffered stream using the _wrapping idiom_
  - ```java
    in = new BufferedReader(new FileReader("xanadu.txt"));
    out = new BufferedWriter(new FileWriter("characteroutput.txt"));
    ```

- `BufferedInputStream` and `BufferedOutputStream`

- `BufferedReader` and `BufferedWriter`

## Formatting Streams

- `PrintWriter`, `PrintStream`
  - The only `PrintStream` objects you are likely to need are `System.out` and `System.error`
  - When you need to create a formatted output stream, instantiate `PrintWriter`, not `PrintStream`
  - `PrintStream` never throws an `IOException`
  - `PrintStream` can be created so as to flush automatically; this means that the `flush` method of the underlying output stream is automatically invoked after a byte array is written, one of the `println` methods is invoked, or a newline character or byte (`'\n'`) is written
  - `void print()`
    - `String.valueOf()` is invoked, and then the string's characters are converted into bytes according to the default charset, and these bytes are written in exactly the manner of the `write(int)`.
  - `void println()`
  - `PrintStream printf()`, `PrintStream format()`
    - They behave the same
- `Scanner`
  - Useful for breaking down formatted input into tokens and translating individual tokens according to their data type
  - By default, a scanner uses white space (_include blanks, tabs, and line terminators_) to separate tokens
    - `Scanner useDelimiter(String pattern)`
    - `Scanner useDelimiter(Pattern pattern)`
  - A scanning operation (`next()` or `hasNext()`) may block waiting for input
  - Even though a scanner is not a stream, you need to close it to indicate that you're done with its underlying stream

## Data Streams

- `DataInputStream`, `DataOutputStream`
- Created as a wrapper for an existing byte stream object
- The input stream consists of simple binary data, with nothing to indicate the type of individual values, or where they begin in the stream (not readable)
- Each specialized `write` in `DataStreams` is exactly matched by the corresponding specialized `read`. It is up to the programmer to make sure that output types and input types are matched in this way
- `DataStreams` uses one very bad programming technique: it uses floating point numbers to represent monetary values

## Object Streams

- Serialisation and deserialisation
  - Serialization in Java is a mechanism of writing the state of an object into a byte stream
  - Storing and retrieving the state of an object
  - Most, but not all, standard classes support serialization of their objects
  - Rules
    - **Implement the marker interface `Serializable`**
    - **There must be a non-parametarized constructor**
    - **`static` or `transient` members will not be serialised**
- `ObjectInputStream`, `ObjectOutputStream`
  - A single invocation of `writeObject()` can cause a large number of objects to be written to the stream
  - A stream can only contain one copy of an object, though it can contain any number of references to it
  - If a single object is written to two different streams, it is effectively duplicated
  - Type casting after `readObject()` is needed

## `RandomAccessFile`

- A random access file behaves like a large array of bytes stored in the file system

- There is a kind of cursor, or index into the implied array, called the _file pointer_

- Implements `DataInput` and `DataOutput`

- Constructor
  - `RandomAccessFile(File file, String mode)`

  - `RandomAccessFile(String name, String mode)`

  - | Value   | Meaning                                                                                                                                                                       |
    | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `"r"`   | Open for reading only. Invoking any of the `write` methods of the resulting object will cause an `IOException` to be thrown.                                                  |
    | `"rw"`  | Open for reading and writing. If the file does not already exist then an attempt will be made to create it.                                                                   |
    | `"rws"` | Open for reading and writing, as with `"rw"`, and also require that every update to the file's content or metadata be written synchronously to the underlying storage device. |
    | `"rwd"` | Open for reading and writing, as with `"rw"`, and also require that every update to the file's content be written synchronously to the underlying storage device.             |

- Methods
  - `long getFilePointer()`
    - Returns the current offset in this file
  - `void seek(long pos)`
    - Sets the file-pointer offset, measured from the beginning of this file, at which the next read or write occurs
  - `long length()`
    - Returns the length of this file, measured in bytes

## Piped Streams

- Communicate producer and consumer instead of using shared objects
- Typically, data is written to a `PipedOutputStream` object by one thread and data is read from the connected `PipedInputStream` by some other thread
- `connect()`

## File I/O

- `Path`
  - A `Path` is **NOT** system independent

  - You can think of the `Path` as storing these name elements as a sequence

  - `Paths.get(String first, String... more)`
    - Creating a `Path`

    - ```java
      Path p1 = Paths.get("/tmp/foo");
      // Paths.get() is a shorthand of
      Path p2 = FileSystems.getDefault().getPath("/tmp/foo");
      ```

  - `Path getFileName()`

  - `Path getName(int index)`

  - `int getNameCount()`

  - `Path subpath(int beginIndex, int endIndex)`
    - Not including a root element

  - `Path getParent()`

  - `Path getRoot()`

  - `URI toUri()`

  - `Path toAbsolutePath()`
    - The file does not need to exist for this method to work

  - `Path toRealPath(LinkOption... option)`
    - If `true` is passed to this method and the file system supports symbolic links, this method resolves any symbolic links in the path
    - If the `Path` is relative, it returns an absolute path
    - If the `Path` contains any redundant elements, it returns a path with those elements removed
    - This method throws an exception if the file does not exist or cannot be accessed

  - `Path resolve(Path p)`

  - `Path resolve(String s)`
    - Join two paths

  - `Path relativize(Path other)`
    - Constructs a relative path between this path and a given path

- `File`

- `Files`
