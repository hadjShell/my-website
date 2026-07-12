---
title: Enum
category:
  - Note
tag:
  - Language
  - Java
footer: false
editLink: false
---

## What Is Enum?

An enum is a special Java type used to represent a fixed set of named values.

```java
public enum OrderStatus { PENDING, PAID, SHIPPED, CANCELLED }
```

Without enum, you might use strings: `String status = "PAID";` Problem may occur: `String status = "PAYED"; // typo`. Java will not catch this mistake at compile time.

With enum: `OrderStatus status = OrderStatus.PAID;` If you write: `OrderStatus status = OrderStatus.PAYED;` Java gives a compile-time error.

Enum helps with:

- Type safety
- Readability
- Avoid magic strings
- Centralizing fixed values
- Switch statements
- Business state modeling

## How to Use Enum

```java
public enum OrderStatus { PENDING, PAID, SHIPPED, CANCELLED }

OrderStatus status = OrderStatus.PAID;

// output: PAID
System.out.println(status);

// comparison: == or equals
// prefer ==
if (status == OrderStatus.PAID) {
  System.out.println("Order has been paid");
}

// switch
public String getStatusMessage(OrderStatus status) {
  return switch (status) {
    case PENDING -> "Order is waiting for payment";
    case PAID -> "Order has been paid";
    case SHIPPED -> "Order has been shipped";
    case CANCELLED -> "Order was cancelled";
  };
}
```

## Fields

Enum can have fields.

```java
public enum OrderStatus {
  PENDING("Pending payment"),
  PAID("Paid successfully"),
  SHIPPED("Shipped to customer"),
  CANCELLED("Order cancelled");

  private final String description;

  // enum constructors are implicitly private
  // public constructor is not allowed
  // because enum constants are created only by Java
  OrderStatus(String description) { this.description = description; }

  public String getDescription() { return description; }
}

// output: Paid successfully
OrderStatus status = OrderStatus.PAID;
System.out.println(status.getDescription());
```

Enum can have multiple fields.

```java
public enum ErrorCode {

  USER_NOT_FOUND(404, "User not found"),
  EMAIL_ALREADY_USED(409, "Email already used"),
  INTERNAL_ERROR(500, "Internal server error");

  private final int statusCode;
  private final String message;

  ErrorCode(int statusCode, String message) {
    this.statusCode = statusCode;
    this.message = message;
  }

  public int getStatusCode() {
    return statusCode;
  }

  public String getMessage() {
    return message;
  }
}

ErrorCode error = ErrorCode.USER_NOT_FOUND;

System.out.println(error.getStatusCode());
System.out.println(error.getMessage());
```

## Methods

Enum can have methods. This keeps status-related logic close to enum.

```java
public enum OrderStatus {

  PENDING,
  PAID,
  SHIPPED,
  CANCELLED;

  public boolean isFinalStatus() {
    return this == SHIPPED || this == CANCELLED;
  }
}

OrderStatus status = OrderStatus.CANCELLED;

if (status.isFinalStatus()) {
  System.out.println("Order is finished");
}
```

Each enum constant can override a method.

```java
public enum DiscountType {
  FIXED {
    @Override public BigDecimal apply(BigDecimal price, BigDecimal discount) {
      return price.subtract(discount);
    }
  },
  PERCENTAGE {
    @Override public BigDecimal apply(BigDecimal price, BigDecimal discount) {
      return price.multiply(
        BigDecimal.ONE.subtract(discount.divide(BigDecimal.valueOf(100)))
      );
    }
  };

  public abstract BigDecimal apply(BigDecimal price, BigDecimal discount);
}

BigDecimal finalPrice = DiscountType.FIXED.apply(
  new BigDecimal("100"),
  new BigDecimal("20")
);
```

This can be useful when each enum value has different behavior. However, do not overuse this. If the logic becomes complex, consider a strategy class instead.

## `values()`

Every enum automatically gets a `values()` method. Common use cases:

- Loop through all enum values
- Build dropdown options
- Validate allowed values
- Generate API responses

```java
public List<String> getAllStatuses() {
  return Arrays
    .stream(OrderStatus.values())
    .map(Enum::name)
    .toList();
}
```

## `valueOf()`

`valueOf()` converts a string into an enum.

`OrderStatus status = OrderStatus.valueOf("PAID");`

Result: `OrderStatus.PAID`

But this is **case-sensitive**.

`OrderStatus.valueOf("paid"); // throws IllegalArgumentException`

## `name()` and `toString()`

- Use `name()` for stable technical values.
- Use custom fields for display labels.
- Avoid relying on `toString()` for persistence.

```java
public enum OrderStatus {
  PENDING("Pending payment"),
  PAID("Paid successfully");

  private final String displayName;

  OrderStatus(String displayName) { this.displayName = displayName; }

  @Override public String toString() { return displayName; }
}

// output PAID
System.out.println(OrderStatus.PAID.name());

// output Paid successfully
System.out.println(OrderStatus.PAID.toString());
```

## `ordinal()`

Every enum has `ordinal()`, which returns the position of the enum position.

```java
System.out.println(OrderStatus.PENDING.ordinal());  // 0
System.out.println(OrderStatus.PAID.ordinal());     // 1
System.out.println(OrderStatus.SHIPPED.ordinal());  // 2
```

But be careful. If you reorder the enum, the ordinal values change.

- Do not store ordinal values in database.
- Do not use ordinal as business code.
- Use explicit fields instead.

## Enum Under the Hood

Under the hood, a Java enum is basically a special class where **each enum constant is a public static final singleton object**.

for example,

```java
public enum OrderStatus {
  PENDING,
  PAID,
  SHIPPED,
  CANCELLED
}
```

is roughly compiled into something like this:

```java
public final class OrderStatus extends Enum<OrderStatus> {

  public static final OrderStatus PENDING =
    new OrderStatus("PENDING", 0);

  public static final OrderStatus PAID =
    new OrderStatus("PAID", 1);

  public static final OrderStatus SHIPPED =
    new OrderStatus("SHIPPED", 2);

  public static final OrderStatus CANCELLED =
    new OrderStatus("CANCELLED", 3);

  private static final OrderStatus[] $VALUES = {
    PENDING,
    PAID,
    SHIPPED,
    CANCELLED
  };

  private OrderStatus(String name, int ordinal) {
    super(name, ordinal);
  }

  public static OrderStatus[] values() {
    return $VALUES.clone();
  }

  public static OrderStatus valueOf(String name) {
    return Enum.valueOf(OrderStatus.class, name);
  }
}
```
