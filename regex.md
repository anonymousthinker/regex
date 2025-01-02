const extractNumbersRegex = /[-]_\d+[.]_\d+/g;

Use
`-?\d+(\.\d+)?` instead of `[-]_\d+[.]_\d+.`

Explanation:
-? matches an optional negative sign.
\d+ matches one or more digits for the integer part.
(\.\d+)? matches an optional decimal point followed by one or more digits.

```
regex uses * (zero or more) for both the minus sign ([-]*) and the decimal point ([.]*).
This means that:
The [-]* allows for zero or more negative signs. This could theoretically match things like --89.99, which isn't a valid number format.
The [.]* allows for zero or more decimal points, which could theoretically match 45..99, 1200.., or 100.—none of these are valid numbers.
```
