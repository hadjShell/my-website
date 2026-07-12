<template><div><ul>
<li>Starting time: <code v-pre>1 Jan 1970</code>; starting year for a calendar: <code v-pre>1900</code></li>
<li>Old APIs in <code v-pre>java.util</code>
<ul>
<li>Keep timestamp in a <code v-pre>long</code> value in milliseconds</li>
<li>Is mutable</li>
<li><code v-pre>java.util.Date</code> is deprecated</li>
<li><code v-pre>java.util.Calendar</code>
<ul>
<li>An abstract class</li>
<li>The standard calendar: <code v-pre>GregorianCalendar</code></li>
</ul>
</li>
<li><code v-pre>java.util.TimeZone</code>
<ul>
<li>An abstract class</li>
</ul>
</li>
</ul>
</li>
<li>New APIs: Joda Date and Time APIs in <code v-pre>java.time</code>
<ul>
<li>Date and time are separated</li>
<li>Keep timestamp in seconds and nano seconds</li>
<li>Is <strong>immutable</strong></li>
<li><code v-pre>Instant</code>
<ul>
<li>A timestamp</li>
</ul>
</li>
<li><code v-pre>LocalDate</code>, <code v-pre>LocalTime</code>, <code v-pre>LocalDateTime</code>, <code v-pre>ZonedDateTime</code>, <code v-pre>ZoneID</code></li>
<li><code v-pre>Duration</code>, <code v-pre>Period</code>
<ul>
<li>A <code v-pre>Duration</code> is a simple measure of time along the time-line in nanoseconds</li>
<li>A <code v-pre>Period</code> expresses an amount of time in units meaningful to humans, such as years or days</li>
<li><code v-pre>between()</code></li>
</ul>
</li>
<li><code v-pre>Month</code>, <code v-pre>DayOfWeek</code>, <code v-pre>Year</code>, <code v-pre>YearMonth</code>, <code v-pre>MonthDay</code>, <code v-pre>OffsetTime</code>, <code v-pre>OffsetDateTime</code>, <code v-pre>ZoneOffset</code></li>
<li>Methods
<ul>
<li><code v-pre>of</code> - static factory method</li>
<li><code v-pre>now</code> - static factory method</li>
<li><code v-pre>parse</code> - static factory method focused on parsing</li>
<li><code v-pre>get</code> - gets the value of something</li>
<li><code v-pre>is</code> - checks if something is true</li>
<li><code v-pre>with</code> - the immutable equivalent of a setter</li>
<li><code v-pre>plus</code> - adds an amount to an object</li>
<li><code v-pre>minus</code> - subtracts an amount from an object</li>
<li><code v-pre>to</code> - converts this object to another type</li>
<li><code v-pre>at</code> - combines this object with another</li>
</ul>
</li>
<li>All calculations should check for numeric overflow and throw either an <code v-pre>ArithmeticException</code> or a <code v-pre>DateTimeException</code></li>
<li><code v-pre>DateTimeFormatter</code>
<ul>
<li><code v-pre>ofPattern(String pattern)</code></li>
<li><a href="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatter.html" target="_blank" rel="noopener noreferrer">doc</a></li>
</ul>
</li>
<li><code v-pre>ChronoField</code></li>
</ul>
</li>
</ul>
</div></template>


