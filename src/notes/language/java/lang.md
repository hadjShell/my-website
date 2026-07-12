---
title: java.lang
category:
  - Note
tag:
  - Language
  - Java
footer: false
editLink: false
---

`java.lang` is a default package which will be automatically imported

## `Object`

- The root of the class hierarchy

- Every class is a subclass, direct or indirect, of the `Object` class

- [Interfaces](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html)
  - ```java
    /**
     * native 方法，用于返回当前运行时对象的 Class 对象，使用了 final 关键字修饰，故不允许子类重写。
     */
    public final native Class<?> getClass()
    /**
     * native 方法，用于返回对象的哈希码，主要使用在哈希表中，比如 JDK 中的HashMap。
     */
    public native int hashCode()
    /**
     * 用于比较 2 个对象的内存地址是否相等，String 类对该方法进行了重写以用于比较字符串的值是否相等。
     */
    public boolean equals(Object obj)
    /**
     * native 方法，用于创建并返回当前对象的一份拷贝。
     */
    protected native Object clone() throws CloneNotSupportedException
    /**
     * 返回类的名字实例的哈希码的 16 进制的字符串。建议 Object 所有的子类都重写这个方法。
     */
    public String toString()
    /**
     * native 方法，并且不能重写。唤醒一个在此对象监视器上等待的线程(监视器相当于就是锁的概念)。如果有多个线程在等待只会任意唤醒一个。
     */
    public final native void notify()
    /**
     * native 方法，并且不能重写。跟 notify 一样，唯一的区别就是会唤醒在此对象监视器上等待的所有线程，而不是一个线程。
     */
    public final native void notifyAll()
    /**
     * native方法，并且不能重写。暂停线程的执行。注意：sleep 方法没有释放锁，而 wait 方法释放了锁 ，timeout 是等待时间。
     */
    public final native void wait(long timeout) throws InterruptedException
    /**
     * 多了 nanos 参数，这个参数表示额外时间（以纳秒为单位，范围是 0-999999）。 所以超时的时间还需要加上 nanos 纳秒。。
     */
    public final void wait(long timeout, int nanos) throws InterruptedException
    /**
     * 跟之前的2个wait方法一样，只不过该方法一直等待，没有超时时间这个概念
     */
    public final void wait() throws InterruptedException
    /**
     * 实例被垃圾回收器回收的时候触发的操作
     */
    protected void finalize() throws Throwable { }
    ```

- Override `equals()` and `hashcode()`
  - If two objects are equal according to the `equals()` method, then calling the `hashCode` method on each of the two objects must produce the same integer result
  - **If two objects are equivalent then their hashcode must be equal; if two objects' hashcode are equal, it doesn't mean that these two objects are necessarily equivalent**
  - Default implementation of `equals()` simply tests `this == obj`
  - If logical equivalent is important, override `equals()`
  - **Principles**
    - Reflexive
    - Symmetric
    - Transitive
    - Consistent
    - For non-null reference `x`, `x.equals(null) == false`

## Wrapper Class

- Java supports primitive types using classes

- Wrapper objects are **immutable**

- Initialisation
  - `Integer myInteger = new Integer(56);`
  - `Integer myInteger = 56;`
    - Will be converted to `Integer myInteger = Integer.valueOf(56);` at compile time
  - `int myInt = myInteger`
    - Will be converted to `int myInt = myInteger.intValue()`

- **It's a good practice using `equals()` method to compare wrapper class objects**

- Interfaces
  - Autoboxing --- `Integer.valueOf(int)`

  - Unboxing --- `intValue()`

  - Parsing values from a string

    ```java
    String strNum = "2048";
    int num = Integer.parseInt(strNum);
    ```

- `BigDecimal`
  - Constructor
    - `BigDecimal(String value)`
    - `BigDecimal.valueOf(double value)`
  - Methods
    - `BigDecimal add(BigDecimal val)`
    - `BigDecimal substract(BigDecimal val)`
    - `BigDecimal multiply(BigDecimal val)`
    - `BigDecimal divide(BigDecimal divisor, int scale, RoundingMode roundingMode)`
    - `int compareTo(BigDecimal val)`
      - Omit comparison on scale
      - DON'T use `equals()`

## `Math`

- All static methods

## `Enum`

- Work like a class with static final fields, each identifier is an object
- It can have a constructor but only `private` or default
- It can also have other members

## `Java.lang.reflect`

- Helpful to get information of a class

- Four ways to get a `Class` object
  - ```java
    Class alunbarClass = TargetObject.class;

    TargetObject o = new TargetObject();
    Class alunbarClass2 = o.getClass();

    // Below two will not initialise the class,
    // static fields and static code blocks will not be executed
    Class alunbarClass1 = Class.forName("cn.javaguide.TargetObject");

    ClassLoader.getSystemClassLoader().loadClass("cn.javaguide.TargetObject");
    ```

- Example
  - ```java
    package cn.javaguide;

    public class TargetObject {
        private String value;

        public TargetObject() {
            value = "JavaGuide";
        }

        public void publicMethod(String s) {
            System.out.println("I love " + s);
        }

        private void privateMethod() {
            System.out.println("value is " + value);
        }
    }

    ```

  - ```java
    package cn.javaguide;

    public class Main {
        public static void main(String[] args) throws ClassNotFoundException, NoSuchMethodException, IllegalAccessException, InstantiationException, InvocationTargetException, NoSuchFieldException {
            Class<?> targetClass = Class.forName("cn.javaguide.TargetObject");
            TargetObject targetObject = (TargetObject) targetClass.newInstance();

            Method[] methods = targetClass.getDeclaredMethods();
            for (Method method : methods) {
                System.out.println(method.getName());
            }

            Method publicMethod = targetClass.getDeclaredMethod("publicMethod",
                    String.class);
            publicMethod.invoke(targetObject, "JavaGuide");

            Field field = targetClass.getDeclaredField("value");
            field.setAccessible(true);
            field.set(targetObject, "JavaGuide");

            Method privateMethod = targetClass.getDeclaredMethod("privateMethod");
            privateMethod.setAccessible(true);
            privateMethod.invoke(targetObject);
        }
    }
    ```

## `Serializable`

- https://javaguide.cn/java/basis/serialization.html
