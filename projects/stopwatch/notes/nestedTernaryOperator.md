
# Nested ternary operators in JavaScript

The ? operator is used in JavaScript for ternary (or conditional) operations. A ternary operation is a compact way to write an if-else statement. The syntax for a ternary operation is:

```
condition ? expressionIfTrue : expressionIfFalse

```

### In the following function code, the ternary operator is nestedt twice
```

function formatTime(elapsedTime) {
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  return (
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    "." +
    (milliseconds > 9 ? milliseconds : "0" + milliseconds)
  );
}
```
**In the formatTime function, the ternary operator is used to format the time components (hours, minutes, seconds, and milliseconds) to ensure they are always two digits. Here's a breakdown of the usage:**

1. **Formatting hours:**

```
hours ? (hours > 9 ? hours : "0" + hours) : "00"

```
- `hours ? ... : "00" `: If `hours` is non-zero, the part before the colon (:) is executed; otherwise, "00" is returned.
-  `hours > 9 ? hours : "0" + hours`: If hours is greater than 9, it returns `hours`; otherwise, it adds a leading zero by concatenating "0" and hours.

2. **Formatting minutes:**

```
minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00"
```

- `minutes ? ... : "00"`: If minutes is non-zero, the part before the colon (:) is executed; otherwise, "00" is returned.
- `minutes > 9 ? minutes : "0" + minutes`: If minutes is greater than 9, it returns minutes; otherwise, it adds a leading zero by concatenating "0" and minutes.