---
title: Hashtable Problems
author: David Zhang aka Hadjshell
order: 2
isOriginal: true
footer: false
editLink: false
---

### Q13. [Roman to Integer](https://leetcode.com/problems/roman-to-integer/)

- ```java
  class Solution {
      public int romanToInt(String s) {
          Map<Character, Integer> map = Map.of(
              'I', 1, 'V', 5, 'X', 10,
              'L', 50, 'C', 100, 'D', 500, 'M', 1000
          );

          char[] cs = s.toCharArray();
          int result = map.get(cs[0]);
          for (int i = 1; i < cs.length; i++) {
              int val = map.get(cs[i]), prev = map.get(cs[i - 1]);
              if (val > prev)
                  result = result - prev * 2 + val;
              else
                  result += val;
          }

          return result;
      }
  }
  ```

### Q49. [Group Anagrams](https://leetcode.com/problems/group-anagrams/)

- ```java
  class Solution {
      public List<List<String>> groupAnagrams(String[] strs) {
          Map<String, List<String>> anagram = new HashMap<>();

          for (String s : strs) {
              char[] str = s.toCharArray();
              Arrays.sort(str);
              String key = new String(str);
              if(!anagram.containsKey(key)){
                  anagram.put(key, new ArrayList<>());
              }
              anagram.get(key).add(s);
          }

          return new ArrayList<>(anagram.values());
      }
  }
  ```

### :star:Q128. [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/)

- ```java
  // O(n)
  class Solution {
      public int longestConsecutive(int[] nums) {
          // for fast check whether have next +1 number
          Set<Integer> numbers = new HashSet<>();
          for (int n : nums)
              numbers.add(n);

          // stores the number mapping to
          // the length of the longest consecutive sequence starting from it
          Map<Integer, Integer> seen = new HashMap<>();
          int longest = 0;

          for (int i = 0; i < nums.length; i++) {
              int num = nums[i];

              // skips those seen elements
              // cuz the consecutive sequence starting from them couldn't be longer
              if (!seen.containsKey(num)) {
                  int len = 0, n = num;
                  // find longest consecutive sequence
                  while (numbers.contains(n)) {
                      if (seen.containsKey(n)) {
                          len += seen.get(n);
                          break;
                      }
                      else {
                          // add elements in the sequence into seen map
                          seen.put(n, 0);
                          len++;
                          n++;
                      }
                  }
                  seen.put(num, len);
                  longest = Math.max(longest, len);
              }
          }

          return longest;
      }
  }
  ```

- ```java
  // O(n)
  class Solution {
      public int longestConsecutive(int[] nums) {
          Set<Integer> numSet = new HashSet<>();
          for (int num : nums) {
              numSet.add(num);
          }

          int longest = 0;

          for (int num : numSet) {
            // find the start number of a consecutive sequence
              if (!numSet.contains(num - 1)) {
                  int length = 1;

                  while (numSet.contains(num + length)) {
                      length++;
                  }

                  longest = Math.max(longest, length);
              }
          }

          return longest;
      }
  }
  ```

### Q138. [Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/)

- ```java
  /*
  // Definition for a Node.
  class Node {
      int val;
      Node next;
      Node random;

      public Node(int val) {
          this.val = val;
          this.next = null;
          this.random = null;
      }
  }
  */

  class Solution {
      public Node copyRandomList(Node head) {
          if (head == null)
              return null;

          Node dummy = new Node(0);
          Node oldHead = head, newHead = dummy;
          Map<Node, Node> oldNodeToNewNodeMap = new HashMap<>();

          while (oldHead != null) {
              if (!oldNodeToNewNodeMap.containsKey(oldHead)) {
                  Node n = new Node(oldHead.val);
                  newHead.next = n;
                  oldNodeToNewNodeMap.put(oldHead, n);
              }
              else
                  newHead.next = oldNodeToNewNodeMap.get(oldHead);
              newHead = newHead.next;

              if (oldHead.random != null) {
                  if (!oldNodeToNewNodeMap.containsKey(oldHead.random)) {
                      Node n = new Node(oldHead.random.val);
                      newHead.random = n;
                      oldNodeToNewNodeMap.put(oldHead.random, n);
                  }
                  else
                      newHead.random = oldNodeToNewNodeMap.get(oldHead.random);
              }

              oldHead = oldHead.next;
          }

          return dummy.next;
      }
  }
  ```

### :star:Q146. [LRU Cache](https://leetcode.com/problems/lru-cache/)

- **Double linked list** and **Hashmap**

- ```java
  class LRUCache {

      private class Node {
          int key;
          int val;
          Node prev;
          Node next;
          Node() {}
          Node(int key, int val) { this.key = key; this.val = val; }
          Node(int key, int val, Node prev, Node next) {
              this.key = key;
              this.val = val;
              this.prev = prev;
              this.next = next;
          }
      }

      Map<Integer, Node> keyToNodeMap;
      Node head;
      Node tail;
      int capacity;

      public LRUCache(int capacity) {
          this.keyToNodeMap = new HashMap<>();
          this.head = null;
          this.tail = null;
          this.capacity = capacity;
      }

      public int get(int key) {
          if (keyToNodeMap.containsKey(key)) {
              prioritize(key);
              return keyToNodeMap.get(key).val;
          }
          else
              return -1;
      }

      public void put(int key, int value) {
          if (keyToNodeMap.containsKey(key)) {
              updateNode(key, value);
              prioritize(key);
          }
          else {
              Node node = new Node(key, value);

              if (size() == capacity)
                  removeLastNode();

              addNode(node);
          }
      }

      private void prioritize(int key) {
          Node node = keyToNodeMap.get(key);

          if (size() == 1 || node == head)
              return;

          if (node == tail) {
              tail = node.prev;
              tail.next = null;
          }
          else {
              node.prev.next = node.next;
              node.next.prev = node.prev;
          }
          node.next = head;
          head.prev = node;
          head = node;
          head.prev = null;
      }

      private void updateNode(int key, int value) {
          keyToNodeMap.get(key).val = value;
      }

      private void removeLastNode() {
          keyToNodeMap.remove(tail.key);
          tail = tail.prev;
          if (tail != null)
              tail.next = null;
          else
              head = null;
      }

      private void addNode(Node node) {
          keyToNodeMap.put(node.key, node);
          if (size() == 1) {
              head = node;
              tail = node;
          }
          else {
              head.prev = node;
              node.next = head;
              head = node;
          }
      }

      private int size() {
          return keyToNodeMap.size();
      }

  }

  /**
   * Your LRUCache object will be instantiated and called as such:
   * LRUCache obj = new LRUCache(capacity);
   * int param_1 = obj.get(key);
   * obj.put(key,value);
   */
  ```

### Q187. [Repeated DNA Sequences](https://leetcode.com/problems/repeated-dna-sequences/)

- ```java
  class Solution {
      public List<String> findRepeatedDnaSequences(String s) {
          HashSet<String> dnaSeq = new HashSet<String>();
          HashSet<String> visited = new HashSet<String>();
          List<String> res = new ArrayList<>();
          if (s.length() <= 10) {
              return res;
          }
          int i = 0;
          while (i < s.length() - 9) {
              String dna = s.substring(i, i + 10);
              if (!visited.add(dna)) {
                  dnaSeq.add(dna);
              }
              i++;
          }
          res.addAll(dnaSeq);
          return res;
      }
  }
  ```

### Q202. [Happy Number](https://leetcode.com/problems/happy-number/)

- ```java
  class Solution {
      public boolean isHappy(int n) {
          Set<Integer> numbers = new HashSet<>();
          boolean isCycle = false;

          while (!isCycle) {
              if (n == 1)
                  break;

              if (numbers.contains(n))
                  isCycle = true;
              else {
                  numbers.add(n);
                  n = squares(n);
              }
          }

          return !isCycle;
      }

      private int squares(int n) {
          int result = 0;
          while (n != 0) {
              int digit = n % 10;
              result += digit * digit;
              n /= 10;
          }

          return result;
      }
  }
  ```

### Q205. [Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings/)

- ```java
  class Solution {
      public boolean isIsomorphic(String s, String t) {
          Character[] s2t = new Character[128];
          Character[] t2s = new Character[128];

          for (int i = 0; i < s.length(); i++) {
              char sc = s.charAt(i), tc = t.charAt(i);

              if (s2t[sc] == null)
                  s2t[sc] = tc;
              if (t2s[tc] == null)
                  t2s[tc] = sc;

              if (s2t[sc] != tc || t2s[tc] != sc)
                  return false;
          }

          return true;
      }
  }
  ```

### Q219. [Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/)

- ```java
  class Solution {
      public boolean containsNearbyDuplicate(int[] nums, int k) {
          Map<Integer, Integer> lastSeen = new HashMap<>();

          for (int j = 0; j < nums.length; j++) {
              int n = nums[j];

              if (lastSeen.containsKey(n)) {
                  int i = lastSeen.get(n);
                  if (j - i <= k)
                      return true;
              }

              lastSeen.put(n, j);
          }

          return false;
      }
  }
  ```

### Q242. [Valid Anagram](https://leetcode.com/problems/valid-anagram/)

- ```java
  class Solution {
      public boolean isAnagram(String s, String t) {
          if (t.length() != s.length())
              return false;

          int[] frequency = new int[26];
          for (int i = 0; i < s.length(); i++) {
              char c = s.charAt(i);
              frequency[c - 'a']++;
          }

          for (int i = 0; i < t.length(); i++) {
              char c = t.charAt(i);
              int remain = frequency[c - 'a'];

              if (remain > 0)
                  frequency[c - 'a']--;
              else
                  return false;
          }

          return true;
      }
  }
  ```

### Q290. [Word Pattern](https://leetcode.com/problems/word-pattern/)

- ```java
  class Solution {
      public boolean wordPattern(String pattern, String s) {
          String[] words = s.split(" ");
          String[] p2w = new String[26];
          Map<String, Character> w2p = new HashMap<>();

          if (pattern.length() != words.length)
              return false;

          for (int i = 0; i < pattern.length(); i++) {
              char c = pattern.charAt(i);
              String word = words[i];

              if (p2w[c - 'a'] == null)
                  p2w[c - 'a'] = word;
              if (!w2p.containsKey(word))
                  w2p.put(word, c);

              if (!p2w[c - 'a'].equals(word) || w2p.get(word) != c)
                  return false;
          }

          return true;
      }
  }
  ```

### Q383. [Ransom Note](https://leetcode.com/problems/ransom-note/)

- ```java
  class Solution {
      public boolean canConstruct(String ransomNote, String magazine) {
          if (ransomNote.length() > magazine.length())
              return false;

          int[] letterFrequency = new int[26];

          for (int i = 0; i < magazine.length(); i++) {
              char letter = magazine.charAt(i);
              letterFrequency[letter - 'a']++;
          }

          for (int i = 0; i < ransomNote.length(); i++) {
              char letter = ransomNote.charAt(i);
              int remain = letterFrequency[letter - 'a'];
              if (remain > 0)
                  letterFrequency[letter - 'a']--;
              else
                  return false;
          }

          return true;

      }
  }
  ```

### :heart:Q460.

- ```java
  class LFUCache {

      private class LRUNode {
          LRUCache cache;
          int frequency;
          LRUNode prev;
          LRUNode next;

          public LRUNode() {}
          public LRUNode(LRUCache cache, int frequency) {
              this.cache = cache;
              this.frequency = frequency;
              this.prev = null;
              this.next = null;
          }
      }

      private Map<Integer, Integer> key2UseCount;
      private Map<Integer, LRUNode> freq2LRU;
      private LRUNode head;
      private int capacity;
      private int size;


      public LFUCache(int capacity) {
          this.key2UseCount = new HashMap<>();
          this.freq2LRU = new HashMap<>();
          this.head = null;
          this.capacity = capacity;
          this.size = 0;
      }

      public int get(int key) {
          if (key2UseCount.containsKey(key)) {
              int freq = key2UseCount.get(key);
              int val = freq2LRU.get(freq).cache.get(key);

              bubbleUp(key, val);

              return val;
          }
          else
              return -1;
      }

      public void put(int key, int value) {
          if (key2UseCount.containsKey(key)) {
              bubbleUp(key, value);
          }
          else {
              if (size < capacity) {
                  if (head == null || head.frequency != 1) {
                      LRUNode lru1 = new LRUNode(new LRUCache(), 1);
                      lru1.next = head;
                      head = lru1;
                  }
                  head.cache.put(key, value);
                  size++;
              }
              else {
                  head.cache.removeLastNode();
                  if (head.cache.isEmpty())
                      removeLRUNode(head);
                  if (head == null || head.frequency != 1) {
                      LRUNode lru1 = new LRUNode(new LRUCache(), 1);
                      lru1.next = head;
                      head = lru1;
                  }
                  head.cache.put(key, value);
              }
          }
      }

      private void bubbleUp(int key, int value) {
          int freq = key2UseCount.get(key);
          LRUNode lru = freq2LRU.get(freq);

          lru.cache.delete(key);
          freq++;
          if (!freq2LRU.containsKey(freq))    addLRUNode(freq);       // there must exists a lru of `freq - 1`
          if (lru.cache.isEmpty())  removeLRUNode(lru);
          freq2LRU.get(freq).cache.put(key, value);
          key2UseCount.put(key, freq);
      }

      private void addLRUNode(int freq) {
          LRUNode lru = new LRUNode(new LRUCache(), freq);
          // there must exists a lru of `freq - 1`
          LRUNode prev = freq2LRU.get(freq - 1);

          lru.next = prev.next;
          lru.prev = prev;
          prev.next.prev = lru;
          prev.next = lru;

          freq2LRU.put(freq, lru);
      }

      private void removeLRUNode(LRUNode lru) {
          if (freq2LRU.size() == 1) {
              head = null;
          }
          else {
              if (lru == head) {
                  head = lru.next;
                  head.prev = null;
              }
              else {
                  lru.prev.next = lru.next;
                  if (lru.next != null) lru.next.prev = lru.prev;
              }
          }

          freq2LRU.remove(lru.frequency);
      }
  }


  public class LRUCache {

      private class Node {
          int key;
          int val;
          Node prev;
          Node next;
          Node() {}
          Node(int key, int val) { this.key = key; this.val = val; }
          Node(int key, int val, Node prev, Node next) {
              this.key = key;
              this.val = val;
              this.prev = prev;
              this.next = next;
          }
      }

      Map<Integer, Node> keyToNodeMap;
      Node head;
      Node tail;

      public LRUCache() {
          this.keyToNodeMap = new HashMap<>();
          this.head = null;
          this.tail = null;
      }

      public int get(int key) {
          if (keyToNodeMap.containsKey(key)) {
              prioritize(key);
              return keyToNodeMap.get(key).val;
          }
          else
              return -1;
      }

      public void put(int key, int value) {
          if (keyToNodeMap.containsKey(key)) {
              updateNode(key, value);
              prioritize(key);
          }
          else {
              Node node = new Node(key, value);
              addNode(node);
          }
      }

      public void delete(int key) {
          Node deleted = keyToNodeMap.get(key);

          if (size() == 1) {
              head = null;
              tail = null;
          }
          else {
              if (deleted == head) {
                  head = deleted.next;
                  head.prev = null;
              }
              else if (deleted == tail) {
                  tail = deleted.prev;
                  tail.next = null;
              }
              else {
                  deleted.prev.next = deleted.next;
                  deleted.next.prev = deleted.prev;
              }
          }

          keyToNodeMap.remove(key);
          deleted = null;
      }

      public void removeLastNode() {
          keyToNodeMap.remove(tail.key);
          tail = tail.prev;
          if (tail != null)
              tail.next = null;
          else
              head = null;
      }

      private void prioritize(int key) {
          Node node = keyToNodeMap.get(key);

          if (size() == 1 || node == head)
              return;

          if (node == tail) {
              tail = node.prev;
              tail.next = null;
          }
          else {
              node.prev.next = node.next;
              node.next.prev = node.prev;
          }
          node.next = head;
          head.prev = node;
          head = node;
          head.prev = null;
      }

      private void updateNode(int key, int value) {
          keyToNodeMap.get(key).val = value;
      }

      private void addNode(Node node) {
          keyToNodeMap.put(node.key, node);
          if (size() == 1) {
              head = node;
              tail = node;
          }
          else {
              head.prev = node;
              node.next = head;
              head = node;
          }
      }

      public int size() {
          return keyToNodeMap.size();
      }

      public boolean isEmpty() {
          return size() == 0;
      }

  }

  /**
   * Your LRUCache object will be instantiated and called as such:
   * LRUCache obj = new LRUCache(capacity);
   * int param_1 = obj.get(key);
   * obj.put(key,value);
   */

  /**
   * Your LFUCache object will be instantiated and called as such:
   * LFUCache obj = new LFUCache(capacity);
   * int param_1 = obj.get(key);
   * obj.put(key,value);
   */
  ```

### :star:Q710. [Random Pick with Blacklist](https://leetcode.com/problems/random-pick-with-blacklist/)

- ```java
  class Solution {
      Map<Integer, Integer> blackToWhite;
      Random rand;
      int size;

      // n > blacklist.length
      public Solution(int n, int[] blacklist) {
          blackToWhite = new HashMap<>();
          rand = new Random();
          size = n - blacklist.length;

          for (int num : blacklist)
              blackToWhite.put(num, -1);

          n--;
          for (int blackNum : blacklist) {
              if (blackNum < size) {
                  while (blackToWhite.containsKey(n))
                      n--;
                  blackToWhite.put(blackNum, n);
                  n--;
              }
          }
      }

      public int pick() {
          int num = rand.nextInt(size);

          return blackToWhite.containsKey(num) ? blackToWhite.get(num) : num;
      }
  }
  ```

### :star:Q874. [Walking Robot Simulation](https://leetcode.com/problems/walking-robot-simulation/)

- How to hash a 2D coordinate: store two integers into one long number

- ```java
  class Solution {
      public int robotSim(int[] commands, int[][] obstacles) {
          Set<Long> obs = new HashSet<>();
          for (int[] o : obstacles) {
              obs.add(hashCoordinate(o));
          }
          // d[0] = 1 : north, d[0] = -1: south, d[1] = 1: east, d[1] = -1: west
          int[] direction = new int[2];
          direction[0] = 1;
          int[] coordinate = new int[2];
          int maxDis = 0;
          for (int c : commands) {
              if (c >= 1 && c <= 9) {
                  for (int i = 1; i <= c; i++) {
                      coordinate[0] += direction[1];
                      coordinate[1] += direction[0];
                      if (obs.contains(hashCoordinate(coordinate))) {
                          coordinate[0] -= direction[1];
                          coordinate[1] -= direction[0];
                          break;
                      }
                  }
                  maxDis = Math.max(distance(coordinate), maxDis);
              }
              else {
                  changeDirection(direction, c);
              }
          }
          return maxDis;
      }

      private void changeDirection(int[] direction, int signal) {
          if (signal == -2) {
              if (direction[1] == 0) {
                  direction[1] = -1 * direction[0];
                  direction[0] = 0;
              }
              else {
                  direction[0] = direction[1];
                  direction[1] = 0;
              }
          }
          else {
              if (direction[1] == 0) {
                  direction[1] = direction[0];
                  direction[0] = 0;
              }
              else {
                  direction[0] = -1 * direction[1];
                  direction[1] = 0;
              }
          }
      }

      private int distance(int[] coordinate) {
          return coordinate[0] * coordinate[0] + coordinate[1] * coordinate[1];
      }

      private long hashCoordinate(int[] c) {
          return ((long) c[1] << 32) ^ c[0];
      }
  }
  ```

### Q1207. [Unique Number of Occurrences](https://leetcode.com/problems/unique-number-of-occurrences/)

- ```java
  class Solution {
      public boolean uniqueOccurrences(int[] arr) {
          Map<Integer, Integer> o = new HashMap<>();
          for (int i : arr) {
              if (o.containsKey(i))
                  o.put(i, o.get(i) + 1);
              else
                  o.put(i, 1);
          }
          boolean[] ar= new boolean[1001];
          for(int i: o.values())
          {
              if(ar[i])
                  return false;
              ar[i]= true;
          }
          return true;
      }
  }
  ```

### Q1657. [Determine if Two Strings Are Close](https://leetcode.com/problems/determine-if-two-strings-are-close/)

- ```java
  class Solution {
      public boolean closeStrings(String word1, String word2) {
          int m = word1.length(), n = word2.length();
          if(m != n)  return false;

          int[] freq1 = new int[26];
          int[] freq2 = new int[26];
          for (char ch : word1.toCharArray()) {
              freq1[ch - 'a']++;
          }
          for (char ch : word2.toCharArray()) {
              freq2[ch - 'a']++;
          }

          for (int i = 0; i < 26; i++) {
              if ((freq1[i] == 0 && freq2[i] != 0) || (freq1[i] != 0 && freq2[i] == 0)) {
                  return false;
              }
          }
          Arrays.sort(freq1);
          Arrays.sort(freq2);
          for (int i = 0; i < 26; i++) {
              if (freq1[i] != freq2[i]) {
                  return false;
              }
          }
          return true;
      }
  }
  ```

### Q1679. [Max Number of K-Sum Pairs](https://leetcode.com/problems/max-number-of-k-sum-pairs/)

- ```java
  class Solution {
      public int maxOperations(int[] nums, int k) {
          Map<Integer, Integer> freq = new HashMap();
          for (int n : nums) {
              freq.put(n, freq.getOrDefault(n, 0) + 1);
          }
          int[] max = new int[1];
          freq.forEach((key, value) -> {
              if (freq.containsKey(k - key)) {
                  if (key == k - key) {
                      int a = freq.get(key);
                      int remove = a / 2;
                      max[0] += remove;
                      freq.put(key, a % 2);
                  }
                  else {
                      int a = freq.get(key), b = freq.get(k - key);
                      int remove = Math.min(a, b);
                      max[0] += remove;
                      freq.put(key, a - remove);
                      freq.put(k - key, b - remove);
                  }
              }
          });
          return max[0];
      }
  }
  ```

### Q2215. [Find the Difference of Two Arrays](https://leetcode.com/problems/find-the-difference-of-two-arrays/)

- ```java
  class Solution {
      public List<List<Integer>> findDifference(int[] nums1, int[] nums2) {
          Set<Integer> n1 = new HashSet<>();
          Set<Integer> n2 = new HashSet<>();
          List<List<Integer>> r = new ArrayList<>();

          for (int n : nums1)
              n1.add(n);
          for (int n : nums2)
              n2.add(n);

          Iterator<Integer> i = n1.iterator();
          while (i.hasNext()) {
              int n = i.next();
              if (n2.contains(n)) {
                  i.remove();
                  n2.remove(n);
              }
          }
          r.add(new ArrayList<Integer>(n1));
          r.add(new ArrayList<Integer>(n2));

          return r;
      }
  }
  ```

### Q2352. [Equal Row and Column Pairs](https://leetcode.com/problems/equal-row-and-column-pairs/)

- ```java
  class Solution {
      public int equalPairs(int[][] grid) {
          int len = grid.length;
          if (len == 1)   return 1;

          Map<String, Integer> row = new HashMap<>();
          StringBuilder sb = new StringBuilder();
          for (int i = 0; i < len; i++) {
              sb.setLength(0);
              for (int j = 0; j < len; j++) {
                  sb.append(grid[i][j]).append(',');
              }
              row.put(sb.toString(), row.getOrDefault(sb.toString(), 0) + 1);
          }
          int cnt = 0;
          sb.setLength(0);
          for (int j = 0; j < len; j++) {
              sb.setLength(0);
              for (int i = 0; i < len; i++) {
                  sb.append(grid[i][j]).append(',');
              }
              cnt += row.getOrDefault(sb.toString(), 0);
          }
          return cnt;
      }
  }
  ```
