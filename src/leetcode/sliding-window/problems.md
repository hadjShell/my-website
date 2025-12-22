---
title: Sliding Window Problems
author: David Zhang aka Hadjshell
order: 2
isOriginal: true
footer: false
editLink: false
---

### :star:Q3. [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

- ```java
  class Solution {
      public int lengthOfLongestSubstring(String s) {
          int left = 0, right = 0, maxLen = 0;
          Map<Character, Integer> letters = new HashMap<>();
          while (right < s.length()) {
              char c = s.charAt(right);
              if (letters.containsKey(c)) {
                  int pos = letters.get(c);
                  left = pos < left ? left : pos + 1;
              }
              letters.put(c, right);
              right++;
              maxLen = Math.max(maxLen, right - left);
          }
          return maxLen;
      }
  }
  ```

### :heart:Q76. [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)

- ```java
  class Solution {
      public String minWindow(String s, String t) {
          if (t.length() > s.length())
              return "";

          int left = 0, right = 0;
          // window
          int len = 0;
          int[] required = new int[128];
          for (char c : t.toCharArray())
              required[c]++;
          // result
          int l = 0, r = Integer.MAX_VALUE;

          while (right < s.length()) {
              while (right < s.length() && !isValidSubstring(len, t)) {
                  char rc = s.charAt(right);
                  right++;
                  if (required[rc] > 0)
                      len++;
                  required[rc]--;
              }
              while (isValidSubstring(len, t)) {
                  if (right - left < r - l) {
                      l = left;
                      r = right;
                  }

                  char lc = s.charAt(left);
                  left++;
                  if (required[lc] == 0)
                      len--;
                  required[lc]++;
              }
          }

          return r == Integer.MAX_VALUE ? "" : s.substring(l, r);
      }

      private boolean isValidSubstring(int len, String t) {
          return len == t.length();
      }
  }
  ```

### Q151. [Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string/)

- ```java
  class Solution {
      public String reverseWords(String s) {
          char[] c = s.trim().toCharArray();
          int len = c.length;
          // reverse string
          swap(c, 0, len - 1);
          // reverse words
          int l = 0, r = 0;
          while (r < len) {
              while (r < len && c[r] != ' ')
                  r++;
              swap(c, l, r - 1);
              while (r < len && c[r] == ' ')
                  r++;
              l = r;
          }
          // remove multiple spaces between words
          l = 0; r = 0;
          while (r < len) {
              while (r < len && c[r] != ' ') {
                  c[l] = c[r];
                  l++;
                  r++;
              }
              if (l < len)
                  c[l++] = ' ';
              else
                  l++;
              while (r < len && c[r] == ' ')
                  r++;
          }
          return new String(c, 0, l - 1);
      }

      private void swap(char[] c, int l, int r) {
          for (; l < r; l++, r--) {
              char tmp = c[l];
              c[l] = c[r];
              c[r] = tmp;
          }
      }
  }
  ```

### :star:Q209. [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/)

- ```java
  class Solution {
      public int minSubArrayLen(int target, int[] nums) {
          int left = 0, right = 0, sum = 0, minLength = nums.length + 1;

          while (right < nums.length) {
              sum += nums[right];
              right++;

              while (sum >= target) {
                  minLength = Math.min(length(left, right), minLength);
                  sum -= nums[left];
                  left++;
              }
          }

          return minLength == (nums.length + 1) ? 0 : minLength;
      }

      private int length(int left, int right) {
          return right - left;
      }
  }
  ```

### :star:Q438. [Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/)

- ```java
  class Solution {
      public List<Integer> findAnagrams(String s, String p) {
          List<Integer> indices = new ArrayList<>();
          if (p.length() > s.length())
              return indices;

          Map<Character, Integer> freq = new HashMap<>();
          for (char c : p.toCharArray()) {
              freq.put(c, freq.getOrDefault(c, 0) + 1);
          }

          int l = 0, r = 0;
          char[] c = s.toCharArray();
          while (r < p.length()) {
              updateMap(freq, c[r], freq.getOrDefault(c[r], 0) - 1);
              r++;
          }
          while (r < c.length) {
              if (freq.isEmpty())
                  indices.add(l);
              updateMap(freq, c[l], freq.getOrDefault(c[l], 0) + 1);
              l++;
              updateMap(freq, c[r], freq.getOrDefault(c[r], 0) - 1);
              r++;
          }
          if (freq.isEmpty())
              indices.add(l);

          return indices;
      }

      private void updateMap(Map<Character, Integer> freq, char c, int f) {
          if (f == 0)
              freq.remove(c);
          else
              freq.put(c, f);
      }
  }
  ```

### Q567. [Permutation in String](https://leetcode.com/problems/permutation-in-string/)

- Variant of Q438

- ```java
  class Solution {
      public boolean checkInclusion(String p, String s) {
          if (p.length() > s.length())
              return false;

          int cnt = 0;
          Map<Character, Integer> freq = new HashMap<>();
          for (char c : p.toCharArray()) {
              freq.put(c, freq.getOrDefault(c, 0) + 1);
          }

          int l = 0, r = 0;
          char[] c = s.toCharArray();
          while (r < p.length()) {
              updateMap(freq, c[r], freq.getOrDefault(c[r], 0) - 1);
              r++;
          }
          while (r < c.length) {
              if (freq.isEmpty())
                  cnt++;
              updateMap(freq, c[l], freq.getOrDefault(c[l], 0) + 1);
              l++;
              updateMap(freq, c[r], freq.getOrDefault(c[r], 0) - 1);
              r++;
          }
          if (freq.isEmpty())
              cnt++;

          return cnt != 0;
      }

      private void updateMap(Map<Character, Integer> freq, char c, int f) {
          if (f == 0)
              freq.remove(c);
          else
              freq.put(c, f);
      }
  }
  ```

### Q643. [Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/)

- ```java
  class Solution {
      public double findMaxAverage(int[] nums, int k) {
          int i = 0, j = k - 1, maxSum = 0;
          while (i <= j) {
              maxSum += nums[i++];
          }
          i = 1;
          j++;
          int sum = maxSum;
          while (j < nums.length) {
              sum = sum - nums[i - 1] + nums[j];
              if (sum > maxSum)
                  maxSum = sum;
              i++;
              j++;
          }
          return maxSum * 1.0 / k;
      }
  }
  ```

### Q1004. [Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/)

- ```java
  class Solution {
      public int longestOnes(int[] nums, int k) {
          int l = 0, r = 0, cnt = k, len = 0;
          while (r < nums.length) {
              if (nums[r] == 0)
                  cnt--;
              if (cnt < 0) {
                  while (nums[l] != 0) {
                      l++;
                  }
                  l++;
                  cnt++;
              }
              r++;
              len = Math.max(len, r - l);
          }
          return len;
      }
  }
  ```

### Q1234. [Replace the Substring for Balanced String](https://leetcode.com/problems/replace-the-substring-for-balanced-string/)

- ```java
  // find a minimal window which contains enough character to be replaced
  class Solution {
      public int balancedString(String s) {
          int[] freq = new int[4];
          char[] c = s.toCharArray();
          for (char ch : c) {
              increaseFreq(freq, ch);
          }
          int n = c.length / 4;
          for (int i = 0; i < 4; i++) {
              freq[i] -= n;
          }

          int l = 0, r = 0, minLen = c.length;
          int[] f = new int[4];
          if (isReplaced(freq, f))
              return 0;
          while (r < c.length) {
              while (r < c.length && !isReplaced(freq, f)) {
                  increaseFreq(f, c[r]);
                  r++;
              }
              while (isReplaced(freq, f)) {
                  decreaseFreq(f, c[l]);
                  l++;
              }
              minLen = Math.min(minLen, r - l + 1);
          }
          return minLen;
      }

      private boolean isReplaced(int[] freq, int[] f) {
          for (int i = 0; i < freq.length; i++) {
              if (f[i] < freq[i])
                  return false;
          }
          return true;
      }

      private void increaseFreq(int[] freq, char c) {
          switch (c) {
              case 'Q' -> freq[0]++;
              case 'W' -> freq[1]++;
              case 'E' -> freq[2]++;
              case 'R' -> freq[3]++;
          }
      }

      private void decreaseFreq(int[] freq, char c) {
          switch (c) {
              case 'Q' -> freq[0]--;
              case 'W' -> freq[1]--;
              case 'E' -> freq[2]--;
              case 'R' -> freq[3]--;
          }
      }
  }
  ```

### Q1456. [Maximum Number of Vowels in a Substring of Given Length](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/)

- ```java
  class Solution {
      public int maxVowels(String s, int k) {
          int l = 0, r = -1, num = 0, maxNum = 0;
          while (r < k - 1) {
              if (isVowel(s.charAt(++r)))
                  num++;
          }
          maxNum = num;
          while (r < s.length() - 1) {
              if (isVowel(s.charAt(l++)))
                  num--;
              if (isVowel(s.charAt(++r)))
                  num++;
              if (num > maxNum)
                  maxNum = num;
          }
          return maxNum;
      }

      private boolean isVowel(char c) {
          return switch (c) {
              case 'a', 'e', 'i', 'o', 'u' -> true;
              default -> false;
          };
      }
  }
  ```

### Q1493. [Longest Subarray of 1's After Deleting One Element](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/)

- ```java
  class Solution {
      public int longestSubarray(int[] nums) {
          int l = 0, r = 0, zero = 0, len = 0;
          while (r < nums.length) {
              if (nums[r] == 0) {
                  if (zero == 0)
                      zero++;
                  else {
                      while (nums[l] != 0)
                          l++;
                      l++;
                  }
              }
              r++;
              len = Math.max(len, r - l - 1);
          }
          return len;
      }
  }
  ```

### :star:Q2134. [Minimum Swaps to Group All 1's Together II](https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii/)

- The number of swaps required is the number of 0’s in the subarray

- To eliminate the circular property of the array, we can append the original array to itself (imagination)

- ```java
  class Solution {
      public int minSwaps(int[] nums) {
          int n = nums.length;
          int totalOnes = 0;

          // Count total number of 1's
          for (int num : nums) {
              totalOnes += num;
          }

          // Edge cases
          if (totalOnes == 0 || totalOnes == n) return 0;

          int currentOnes = 0;

          // Count 1's in the first window of size totalOnes
          for (int i = 0; i < totalOnes; i++) {
              currentOnes += nums[i];
          }

          int maxOnes = currentOnes;

          // Use two pointers to slide the window
          for (int i = 0; i < n; i++) {
              currentOnes -= nums[i];
              currentOnes += nums[(i + totalOnes) % n];
              maxOnes = Math.max(maxOnes, currentOnes);
          }

          return totalOnes - maxOnes;
      }
  }
  ```
