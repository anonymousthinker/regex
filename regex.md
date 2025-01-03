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

### **Type 1: Explanation**

1. What does the expression `"cat, bat, rat".match(/b\w+/)` do?
   => It matches the first word starting with b, ie, bat.

2. What will `"123-456-7890".match(/\d{3}/)` return?
   => It gives the first three digits of the string.

3. What does `"hello\nworld".match(/.\n./)` return?
   => It matches o\nw.

4. What will `"name@example.com".match(/\w+@\w+\.\w+/)` return?
   => It will match the entire string.

5. What does `"file.txt".match(/\.txt/)` do?
   => It will match .txt.

6. What does `"red green blue".match(/green/)` do?
   => It will match green.

7. What will `"abcdef".match(/[a-c]/)` return?
   => The first character a will be matched.

8. What does `"The quick brown fox".match(/q.+?k/)` return?
   => the question mark limits the greedy search for words and returns the first
   word qsomethingk and not qsomethingkandmorek.

9. What does `"apple".match(/a[a-z]+/)` return?
   => It will match apple here, but it will take a followed by only small letters.

10. What will `"a1b2c3".match(/\d+/)` return?
    => This will give 1.

11. What does `"good food mood".match(/o+o/)` do?
    => This will match only oo of good.

12. What does `"@username".match(/@\w+/)` return?
    => This will return @username

13. What does `"path/to/file".match(/\/to\//)` do?
    => this will return only /to/

14. What does `"1.23".match(/\d\.\d+/)` return?
    => this will return digit followed by a point and other digits, so here it
    should be 1.23.

15. What will `"AB123CD".match(/[A-Z]+\d+/)` return?
    => This will return capital letters followed by digits and then stop, so it
    will return AB123

16. What does `"hello_hello_world".match(/\w+_\w+/)` return?
    => This will return the word followed by underscore followed by another word.
    So here the entire string hello_world

17. What does `"123abc456".match(/\d{3}/)` return?
    => This will return the first 3 digits

18. What does `"My name is John".match(/name\s\w+/)` return?
    => This matches the name followed by a space and the next word so this will
    return name is.

19. What will `"https://example.com".match(/https?:\/\/\w+\.\w+/)` return?
    => Here http followed by 0 or 1 s and then the remaining url will be returned
    so here it will be https://example.com.

20. What does `"abcdEFGH".match(/[A-Z]+/)` return?
    => this will return only the first consequtive capital letters so here it
    will be EFGH.

21. What does `"abc123".match(/(\w)(\d)/)` return?
    => this will return the consequtive char and word, also give back the char
    and the digit as a group.

22. What will `"hello world".match(/(\w+)\s(\w+)/)` return?
    => This will return hello world and also returns group of hello and world, ie,
    the two words on either side of the spaces.

23. What does `"1234".match(/\d{2,3}/)` return?
    => this will return 123 as we are matching the digits which are repeated min
    2 to max 3 times.

24. What will `"aaaabbb".match(/a{2,}/)` return?
    => here we are saying get repeated a of min 2 times. So this will return
    all 4 a's.

25. What does `"hello".match(/[aeiou]{2}/)` return?
    => this will return null as there are no consequtive 2 vowels.

26. What does `"ABCD1234".match(/[A-Z]+\d+/)` return?
    => This will return all consequtive capital letters followed by digits. So
    here we will get ABCD1234. If the capital letters and digits are not
    consequtive then we will get null.

27. What does `"file_name.ext".match(/(\w+)\.(\w+)/)` return?
    => This will return the entire string given above and also return the groups
    file_name and ext.

28. What does `"Mississippi".match(/s{2,}/)` return?
    => This will return the first series of s which are repeated for at least 2
    times.

29. What will `"hello world".match(/(\w)(?=\s\w)/)` return?
    => The character is only taken if its followed by a space and another char.
    This lookforward is done by ?=. So here will get o from hello.

30. What does `"2025-01-01".match(/\d{4}-(\d{2})-(\d{2})/)[2]` return?
    => This will return the day section of the date. So the entire str will be
    matched here and two groups of month and day will be returned and from that
    array we will get the

31. What does `"abc123".match(/(\d+)(\w+)/)` return?
    => This will return 123 as the match and 12 and 3 in groups. \w would take 3
    and \d will take 12.

32. What does `"hello123".match(/\D+/)` return?
    => this will return hello and all the character that are not numeric
    consequtively before any number comes.

33. What will `"yes no maybe".match(/(\w+)\s(\w+)\s(\w+)/)` return?
    => this will match yes no maybe, and will give yes, no and maybe in groups

34. What does `"color: #123456".match(/#[0-9a-fA-F]{6}/)` return?
    => this will give the color code and in this case the code for blue.

35. What does `"aaa111bbb222".match(/([a-z]+)(\d+)/)` return?
    => this will match aaa111, and give aaa in group and 111 in group

36. What will `"1,234.56".match(/\d{1,3}(,\d{3})*\.\d{2}/)` return?
    => this will match numbers in international system allowing up to two
    decimal places. So in this case it will give 1,234.56, and the last hundreds
    in the group.

37. What does `"aabbcc".match(/a(b{2})c/)` return?
    => this will give the first match it founds of a followed by 2 b and one c.
    here abbc and in group bb.

38. What does `"xyzz".match(/x(y(z))/)` return?
    => this will return xyz, also in group it will return yz and z

39. What does `"abab".match(/(ab)\1/)` return?
    => this will return the match abab. As it groups ab and then calls that
    group again.

40. What will `"abc123abc".match(/(abc)\d+\1/)` return?
    => this will take abc as a group an then take as many number of digits
    followed by the first group again.
