---
title: Date and Time API
category:
  - Note
tag:
  - Language
  - Java
footer: false
editLink: false
---

- Starting time: `1 Jan 1970`; starting year for a calendar: `1900`
- Old APIs in `java.util`
  - Keep timestamp in a `long` value in milliseconds
  - Is mutable
  - `java.util.Date` is deprecated
  - `java.util.Calendar`
    - An abstract class
    - The standard calendar: `GregorianCalendar`
  - `java.util.TimeZone`
    - An abstract class
- New APIs: Joda Date and Time APIs in `java.time`
  - Date and time are separated
  - Keep timestamp in seconds and nano seconds
  - Is **immutable**
  - `Instant`
    - A timestamp
  - `LocalDate`, `LocalTime`, `LocalDateTime`, `ZonedDateTime`, `ZoneID`
  - `Duration`, `Period`
    - A `Duration` is a simple measure of time along the time-line in nanoseconds
    - A `Period` expresses an amount of time in units meaningful to humans, such as years or days
    - `between()`
  - `Month`, `DayOfWeek`, `Year`, `YearMonth`, `MonthDay`, `OffsetTime`, `OffsetDateTime`, `ZoneOffset`
  - Methods
    - `of` - static factory method
    - `now` - static factory method
    - `parse` - static factory method focused on parsing
    - `get` - gets the value of something
    - `is` - checks if something is true
    - `with` - the immutable equivalent of a setter
    - `plus` - adds an amount to an object
    - `minus` - subtracts an amount from an object
    - `to` - converts this object to another type
    - `at` - combines this object with another
  - All calculations should check for numeric overflow and throw either an `ArithmeticException` or a `DateTimeException`
  - `DateTimeFormatter`
    - `ofPattern(String pattern)`
    - [doc](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatter.html)
  - `ChronoField`
