---
title: String
author: David Zhang aka Hadjshell
order: 2
isOriginal: true
footer: false
editLink: false
---

### Q884. [Uncommon Words from Two Sentences](https://leetcode.com/problems/uncommon-words-from-two-sentences/)

- ```java
  class Solution {
      public String[] uncommonFromSentences(String s1, String s2) {
          String[] words1 = s1.split(" "), words2 = s2.split(" ");
          Map<String, Integer> freq = new HashMap<>();
          for (String w : words1) {
              freq.put(w, freq.getOrDefault(w, 0) + 1);
          }
          for (String w : words2) {
              freq.put(w, freq.getOrDefault(w, 0) + 1);
          }
          List<String> uncommon = new ArrayList<>();
          freq.forEach((key, value) -> {
              if (value == 1)
                  uncommon.add(key);
          });
          return uncommon.toArray(new String[0]);
      }
  }
  ```

### :star:Q1071. [Greatest Common Divisor of Strings](https://leetcode.com/problems/greatest-common-divisor-of-strings/)

- ```java
  class Solution {
      public String gcdOfStrings(String str1, String str2) {
          if(!(str1 + str2).equals(str2+str1))
              return "";

          int len1 = str1.length(),len2 = str2.length();
          return str1.substring(0,gcd(len1,len2));
      }

      // private String dOfString(String str) {
      //     StringBuilder div = new StringBuilder();
      //     char[] c = str.toCharArray();
      //     for (int i = 0; i < c.length; i++) {
      //         div.append(c[i]);
      //         StringBuilder tmp = new StringBuilder(div);
      //         StringBuilder s = new StringBuilder(str);
      //         if (tmp.append(str).compareTo(s.append(div)) == 0)
      //             break;
      //     }
      //     return div.toString();
      // }

      private int gcd(int m, int n) {
          int t = 1;
          while (t != 0) {
              t = m % n;
              m = n;
              n = t;
          }
          return m;
      }
  }
  ```

### Q1684. [Count the Number of Consistent Strings](https://leetcode.com/problems/count-the-number-of-consistent-strings/)

- ```java
  class Solution {
      public int countConsistentStrings(String allowed, String[] words) {
          boolean[] appeared = new boolean[26];
          int count = 0;
          for (char c : allowed.toCharArray()) {
              appeared[c - 'a'] = true;
          }
          for (String w : words) {
              int i = 0;
              for (; i < w.length(); i++) {
                  if (appeared[w.charAt(i) - 'a'] == false)
                      break;
              }
              if (i == w.length())
                  count++;
          }
          return count;
      }
  }
  ```

### Q1768. [Merge Strings Alternately](https://leetcode.com/problems/merge-strings-alternately/)

- ```java
  class Solution {
      public String mergeAlternately(String word1, String word2) {
          int len1 = word1.length(), len2 = word2.length();
          StringBuilder word = new StringBuilder();
          char[] w1 = word1.toCharArray(), w2 = word2.toCharArray();
          int i = 0, j = 0;
          for (; i < len1 && j < len2; i++, j++) {
              word.append(w1[i]).append(w2[j]);
          }
          if (len2 > len1)
              while (j < len2)
                  word.append(w2[j++]);
          else
              while (i < len1)
                  word.append(w1[i++]);
          return word.toString();
      }
  }
  ```

### Q1945. [Sum of Digits of String After Convert](https://leetcode.com/problems/sum-of-digits-of-string-after-convert/)

- ```java
  class Solution {
      public int getLucky(String s, int k) {
          StringBuilder sb = new StringBuilder();
          for (int i = 0; i < s.length(); i++) {
              sb.append(s.charAt(i) - 'a' + 1);
          }
          for (int i = 0; i < k; i++) {
              int sum = 0;
              for (int j = 0; j < sb.length(); j++) {
                  sum += sb.charAt(j) - '0';
              }
              sb.setLength(0);
              sb.append(sum);
          }
          return Integer.parseInt(sb.toString());
      }
  ```
