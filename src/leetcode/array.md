---
title: Array
author: David Zhang aka Hadjshell
order: 1
isOriginal: true
footer: false
editLink: false
---

## 🛠️ Tricks

- Partition - 同类项分组一起看，改变顺序可能便于处理
- Forward and backward - 正看反看 + 分段看
- In-place - 合理利用废空间（无用信息位或者已处理信息位）
- Bucket - suitable when elements' values are within a range
- Simulation for 2D arrays
- 2D array 对角线翻转，x 轴翻转，y 轴翻转的组合
- 方向数组

  - `int[][] dir = new int[][]{{1, 0}, {0, 1}, {0, -1}, {-1, 0}};`

- 2D array mapping to 1D array

  - `(i, j) -> i * arr[0].length + j`

- [Boyer–Moore majority vote algorithm](https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm)

> If a second pass is not performed and there is no majority, the algorithm will not detect that no majority exists.

- 环形数组

## :bulb:1D Array

### Q26. [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

- ```java
  class Solution {
      public int removeDuplicates(int[] nums) {
          int k = 1, prev = nums[0];
          for (int i = 1; i < nums.length; i++) {
              if (nums[i] != prev) {
                  nums[k++] = nums[i];
                  prev = nums[i];
              }
          }
          return k;
      }
  }
  ```

### Q27. [Remove Element](https://leetcode.com/problems/remove-element/)

- ```java
  class Solution {
      public int removeElement(int[] nums, int val) {
          if (nums.length == 0)
              return 0;

          int k = 0, size = nums.length, i = 0;
          while (i < size - k) {
              if (nums[i] == val) {
                  nums[i] = nums[size - 1 - k];
                  k++;
              }
              else
                  i++;
          }
          return size - k;
      }
  }
  ```

### Q80. [Remove Duplicates from Sorted Array II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/)

- ```java
  class Solution {
      public int removeDuplicates(int[] nums) {
          int k = 1, prev = nums[0], count = 1;
          for (int i = 1; i < nums.length; i++) {
              if (nums[i] == prev) {
                  if (count == 1) {
                      nums[k++] = nums[i];
                      count++;
                  }
              }
              else {
                  nums[k++] = nums[i];
                  prev = nums[i];
                  count = 1;
              }
          }
          return k;
      }
  }
  ```

### Q88. [Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)

- ```java
  class Solution {
      public void merge(int[] nums1, int m, int[] nums2, int n) {
          if (n == 0)
              return;

          if (m == 0) {
              for (int i = 0; i < n; i++)
                  nums1[i] = nums2[i];
              return;
          }

          // move all prefix 0 in nums1 to suffix 0
          for (int j = m + n - 1; j >= n; j--) {
              nums1[j] = nums1[j - n];
          }
          for (int j = 0; j < n; j++)
              nums1[j] = 0;

          int a1 = n, a2 = 0, a = 0;
          while (a1 < m + n && a2 < n) {
              if (nums1[a1] <= nums2[a2])
                  nums1[a++] = nums1[a1++];
              else
                  nums1[a++] = nums2[a2++];
          }
          while (a2 < n) {
              nums1[a++] = nums2[a2++];
          }

      }
  }
  ```

### Q121. [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

- ```java
  class Solution {
      public int maxProfit(int[] prices) {
          int profit = 0, min = prices[0];
          for (int i = 0; i < prices.length; i++) {
              int p = prices[i] - min;
              if (p < 0)
                  min = prices[i];
              else
                  profit = Math.max(profit, p);
          }
          return profit;
      }
  }
  ```

### Q122. [Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)

- ```java
  class Solution {
      public int maxProfit(int[] prices) {
          int profit = 0;
          for (int i = 1; i < prices.length; i++) {
              int p = prices[i] - prices[i - 1];
              if (p > 0)
                  profit += p;
          }
          return profit;
      }
  }
  ```

### :star:Q169. [Majority Element](https://leetcode.com/problems/majority-element/)

- ```java
  class Solution {
      public int majorityElement(int[] nums) {
          // brute-force: hashmap     time: O(n)  space: O(n)
          // sort and count           time: O(nlogn)  space: O(1)
          // aim: O(n), O(1)  				Boyer–Moore majority vote algorithm
          // start with thinking of two elements A and B, add and subtract 1 in the loop
          // then expand to majority A and others, add and subtract 1, same concept
          int majority = nums[0], count = 1;
          for (int i = 1; i < nums.length; i++) {
              if (nums[i] == majority)
                  count++;
              else {
                  if (count == 0) {
                      majority = nums[i];
                      count = 1;
                  }
                  else
                      count--;
              }
          }
          return majority;
      }
  }
  ```

- [Boyer–Moore majority vote algorithm](https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm)

> If a second pass is not performed and there is no majority, the algorithm will not detect that no majority exists.

### Q189. [Rotate Array](https://leetcode.com/problems/rotate-array/)

- ```java
  class Solution {
      public void rotate(int[] nums, int k) {
          int size = nums.length;
          k = k % size;

          reverse(nums, 0, size - 1);
          reverse(nums, 0, k - 1);
          reverse(nums, k, size - 1);
      }

      private void reverse(int[] nums, int start, int end) {
          while (start < end) {
              int tmp = nums[start];
              nums[start] = nums[end];
              nums[end] = tmp;
              start++;
              end--;
          }
      }
  }
  ```

### :star:Q274. [H-Index](https://leetcode.com/problems/h-index/)

- ```java
  class Solution {
      public int hIndex(int[] citations) {
          int[] buckets = new int[1001];
          for(int i: citations) {
              buckets[i]++;
          }

          int count = 0, i = 1000;
          while(i > 0) {
              count += buckets[i];
              if(count >= i) return i;

              i--;
          }

          return 0;
      }
  }
  ```

### :star:Q380. [Insert Delete GetRandom O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1/)

- ```java
  class RandomizedSet {
      public static final int SIZE = 200_001;

      private Map<Integer, Integer> valToIndexMap;
      private int[] vals;
      private int size;

      public RandomizedSet() {
          this.valToIndexMap = new HashMap<Integer,Integer>();
          this.vals = new int[SIZE];
          this.size = 0;
      }

      public boolean insert(int val) {
          if (valToIndexMap.containsKey(val))
              return false;
          else {
              valToIndexMap.put(val, size);
              vals[size++] = val;
              return true;
          }
      }

      public boolean remove(int val) {
          if (valToIndexMap.containsKey(val)) {
              int index = valToIndexMap.get(val);
              int lastElement = vals[size - 1];
              vals[index] = lastElement;
              valToIndexMap.put(lastElement, index);
              valToIndexMap.remove(val);
              size--;
              return true;
          }
          else
              return false;
      }

      public int getRandom() {
          int index = randomNumber(0, size);
          return vals[index];
      }

      private int randomNumber(int min, int max) {
          int randomNum = min + (int)(Math.random() * (max - min));
          return randomNum;
      }
  }

  /**
   * Your RandomizedSet object will be instantiated and called as such:
   * RandomizedSet obj = new RandomizedSet();
   * boolean param_1 = obj.insert(val);
   * boolean param_2 = obj.remove(val);
   * int param_3 = obj.getRandom();
   */
  ```

### Q539. [Minimum Time Difference](https://leetcode.com/problems/minimum-time-difference/)

- ```java
  class Solution {
      public int findMinDifference(List<String> timePoints) {
          if (timePoints.size() > 1440) return 0;

          boolean[] seen = new boolean[1440];
          for (String time : timePoints) {
              int minutes = convertToMinutes(time);
              if (seen[minutes]) return 0;
              seen[minutes] = true;
          }

          int first = -1, prev = -1;
          int minDiff = Integer.MAX_VALUE;
          for (int i = 0; i < 1440; i++) {
              if (seen[i]) {
                  if (first < 0) {
                      first = i;
                  }
                  else {
                      minDiff = Math.min(minDiff, i - prev);
                  }
                  prev = i;
              }
          }
          minDiff = Math.min(minDiff, 1440 - prev + first);

          return minDiff;
      }

      private int convertToMinutes(String time) {
          return ((time.charAt(0) - '0') * 10 + (time.charAt(1) - '0')) * 60
               + (time.charAt(3) - '0') * 10 + (time.charAt(4) - '0');
      }
  }
  ```

### Q605. [Can Place Flowers](https://leetcode.com/problems/can-place-flowers/)

- ```java
  class Solution {
      public boolean canPlaceFlowers(int[] flowerbed, int n) {
          int pointer = 0;
          while(pointer < flowerbed.length && n>=0){
              if(flowerbed[pointer] == 1){
                  pointer += 2;
              } else{
                  if(pointer + 1 > flowerbed.length - 1){
                      n--;
                      pointer += 1;
                  } else if(flowerbed[pointer + 1] == 0){
                      n--;
                      pointer += 2;
                  } else{
                      pointer += 3;
                  }
              }
          }
          return n <= 0;
      }
  }
  ```

### Q1431. [Kids With the Greatest Number of Candies](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/)

- ```java
  class Solution {
      public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
          int max = 0;
          for (int c : candies) {
              if (max < c)
                  max = c;
          }
          List<Boolean> l = new ArrayList<>();
          for (int c : candies) {
              if (c + extraCandies >= max)
                  l.add(true);
              else
                  l.add(false);
          }
          return l;
      }
  }
  ```

### Q1894. [Find the Student that Will Replace the Chalk](https://leetcode.com/problems/find-the-student-that-will-replace-the-chalk/)

- ```java
  class Solution {
      public int chalkReplacer(int[] chalk, int k) {
          long sum = 0;
          for (int i = 0; i < chalk.length; i++)
              sum += chalk[i];
          long left = (long) k % sum;
          for (int i = 0; i < chalk.length; i++) {
              if (left < chalk[i])
                  return i;
              left -= chalk[i];
          }
          return 0;
      }
  }
  ```

### Q2022. [Convert 1D Array Into 2D Array](https://leetcode.com/problems/convert-1d-array-into-2d-array/)

- ```java
  class Solution {
      public int[][] construct2DArray(int[] original, int m, int n) {
          if (original.length != m * n)
              return new int[0][0];

          int k = 0;
          int[][] res = new int[m][n];
          for (int i = 0; i < m; i++)
              for (int j = 0; j < n; j++) {
                  res[i][j] = original[k];
                  k++;
              }
          return res;
      }
  }
  ```

## :bulb:2D Array

### Q36. [Valid Sudoku](https://leetcode.com/problems/valid-sudoku/)

- ```java
  class Solution {
      public boolean isValidSudoku(char[][] board) {
          return isValidRows(board) && isValidColumns(board) && isValidCells(board);
      }

      private boolean isValidRows(char[][] board) {
          for (int i = 0; i < board.length; i++) {
              int[] seen = new int[9];
              for (int j = 0; j < board.length; j++) {
                  char c = board[i][j];
                  if (c == '.')
                      continue;
                  if (seen[c - '1'] == 0)
                      seen[c - '1'] = 1;
                  else
                      return false;
              }
          }

          return true;
      }

      private boolean isValidColumns(char[][] board) {
          for (int j = 0; j < board.length; j++) {
              int[] seen = new int[9];
              for (int i = 0; i < board.length; i++) {
                  char c = board[i][j];
                  if (c == '.')
                      continue;
                  if (seen[c - '1'] == 0)
                      seen[c - '1'] = 1;
                  else
                      return false;
              }
          }

          return true;
      }

      private boolean isValidCells(char[][] board) {
          for (int i = 0; i < board.length; i += 3)
              for (int j = 0; j < board.length; j+= 3) {
                  if (!isValidCell(board, i, j))
                      return false;
              }

          return true;
      }

      private boolean isValidCell(char[][] board, int a, int b) {
          int[] seen = new int[9];
          for (int i = a; i < a + 3; i++)
              for (int j = b; j < b + 3; j++) {
                  char c = board[i][j];
                  if (c == '.')
                      continue;
                  if (seen[c - '1'] == 0)
                      seen[c - '1'] = 1;
                  else
                      return false;
              }

          return true;
      }
  }
  ```

### Q48. [Rotate Image](https://leetcode.com/problems/rotate-image/)

- ```java
  class Solution {
      public void rotate(int[][] matrix) {
          int n = matrix.length;
          // swap matrix by diagonal
          for (int i = 0; i < n - 1; i++)
              for (int j = 0; j < n - i - 1; j++) {
                  int tmp = matrix[i][j];
                  matrix[i][j] = matrix[n - 1 - j][n - 1 - i];
                  matrix[n - 1 - j][n - 1 - i] = tmp;
              }
          // swap matrix by horizontal centerline
          for (int i = 0; i < n / 2; i++)
              for (int j = 0; j < n; j++) {
                  int tmp = matrix[i][j];
                  matrix[i][j] = matrix[n - 1 - i][j];
                  matrix[n - 1 - i][j] = tmp;
              }
      }
  }
  ```

### Q54. [Spiral Matrix](https://leetcode.com/problems/spiral-matrix/)

- ```java
  class Solution {
      public List<Integer> spiralOrder(int[][] matrix) {
          List<Integer> result = new ArrayList<>();
          int a1 = 0, b1 = 0, a2 = matrix.length - 1, b2 = matrix[0].length - 1;
          while (a1 <= a2 && b1 <= b2) {
              addCircle(matrix, a1, b1, a2, b2, result);
              a1++;
              b1++;
              a2--;
              b2--;
          }

          return result;
      }

      private void addCircle(int[][] matrix, int a1, int b1, int a2, int b2,
                              List<Integer> result) {
          int i = a1, j = b1;

          // a horizontal line
          if (a1 == a2) {
              while (j <= b2)
                  result.add(matrix[i][j++]);
              return;
          }

          // a vertical line
          if (b1 == b2) {
              while (i <= a2)
                  result.add(matrix[i++][j]);
              return;
          }

          // a circle
          while (j < b2)
              result.add(matrix[i][j++]);
          while (i < a2)
              result.add(matrix[i++][j]);
          while (j > b1)
              result.add(matrix[i][j--]);
          while (i > a1)
              result.add(matrix[i--][j]);
          return;
      }
  }
  ```

### Q59. [Spiral Matrix II](https://leetcode.com/problems/spiral-matrix-ii/)

- ```java
  class Solution {
      public int[][] generateMatrix(int n) {
          int[][] matrix = new int[n][n];
          spiral(matrix, 1, 0, n - 1);
          return matrix;
      }

      private void spiral(int[][] matrix, int n, int r1, int r2) {
          if (r1 > r2)
              ;
          else if (r1 == r2)
              matrix[r1][r1] = n;
          else {
              for (int i = r1; i <= r2; i++)
                  matrix[r1][i] = n++;
              for (int i = r1 + 1; i < r2; i++)
                  matrix[i][r2] = n++;
              for (int i = r2; i >= r1; i--)
                  matrix[r2][i] = n++;
              for (int i = r2 - 1; i > r1; i--)
                  matrix[i][r1] = n++;
              spiral(matrix, n, r1 + 1, r2 - 1);
          }
      }
  }
  ```

### Q73. [Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/)

- ```java
  class Solution {
      public void setZeroes(int[][] matrix) {
          Set<Integer> rows = new HashSet<>();
          Set<Integer> cols = new HashSet<>();

          for (int i = 0; i < matrix.length; i++)
              for (int j = 0;j < matrix[0].length; j++) {
                  if (matrix[i][j] == 0) {
                      rows.add(i);
                      cols.add(j);
                  }
              }

          for (Integer r : rows)
              zeroRow(matrix, r);
          for (Integer c : cols)
              zeroCol(matrix, c);
      }

      private void zeroRow(int[][] matrix, int a) {
          for (int j = 0; j < matrix[0].length; j++)
              matrix[a][j] = 0;
      }

      private void zeroCol(int[][] matrix, int b) {
          for (int i = 0; i < matrix.length; i++)
              matrix[i][b] = 0;
      }
  }
  ```

### Q289. [Game of Life](https://leetcode.com/problems/game-of-life/)

- ```java
  class Solution {
      public void gameOfLife(int[][] board) {
          for (int i = 0; i < board.length; i++)
              for (int j = 0; j < board[0].length; j++)
                  updateCell(board, i, j);

          updateBoard(board);
      }

      private void updateBoard(int[][] board) {
          for (int i = 0; i < board.length; i++)
              for (int j = 0; j < board[0].length; j++) {
                  int state = board[i][j];
                  if (state == 1 || state == 2)
                      board[i][j] = 1;
                  else
                      board[i][j] = 0;
              }
      }

      private void updateCell(int[][] board, int r, int c) {
          int live = 0, die = 0, state = board[r][c];

          int i = r - 1, j = c - 1;
          for (; j <= c; j++) {
              if (!isOutOfBound(board, i, j)) {
                  int s = board[i][j];
                  if (s == 1 || s == -2)
                      live++;
                  else
                      die++;
              }
          }
          for (; i <= r; i++) {
              if (!isOutOfBound(board, i, j)) {
                  int s = board[i][j];
                  if (s == 1 || s == -2)
                      live++;
                  else
                      die++;
              }
          }
          for (; j >= c; j--) {
              if (!isOutOfBound(board, i, j)) {
                  int s = board[i][j];
                  if (s == 1 || s == -2)
                      live++;
                  else
                      die++;
              }
          }
          for (; i >= r; i--) {
              if (!isOutOfBound(board, i, j)) {
                  int s = board[i][j];
                  if (s == 1 || s == -2)
                      live++;
                  else
                      die++;
              }
          }

          // -2 means 1 to 0, 2 means 0 to 1
          if (state == 1 && (live < 2 || live > 3))
              board[r][c] = -2;

          if (state == 0 && live == 3)
              board[r][c] = 2;
      }

      private boolean isOutOfBound(int[][] board, int i, int j) {
          return i < 0 || i >= board.length || j < 0 || j >= board[0].length;
      }
  }
  ```

### Q885. [Spiral Matrix III](https://leetcode.com/problems/spiral-matrix-iii/)

- ```java
  class Solution {
      private static int n = 0;

      public int[][] spiralMatrixIII(int rows, int cols, int rStart, int cStart) {
          int circles = Math.max(Math.max(Math.max(rStart + 1, cStart + 1), rows - rStart), cols - cStart);
          int[][] m = new int[rows * cols][2];
          for (int c = 0; c < circles; c++) {
              spiral(m, rStart - c, cStart - c, rStart + c, cStart + c, rows, cols);
          }
          return m;
      }

      private void spiral(int[][] m, int r1, int c1, int r2, int c2, int rows, int cols) {
          if (r1 == r2 && c1 == c2) {
              m[n++] = new int[] {r1, c1};
          }
          else {
              for (int i = r1 + 1; i <= r2; i++)
                  if (i >= 0 && i < rows && c2 >= 0 && c2 < cols)
                      m[n++] = new int[] {i, c2};
              for (int i = c2 - 1; i >= c1; i--)
                  if (r2 >= 0 && r2 < rows && i >= 0 && i < cols)
                      m[n++] = new int[] {r2, i};
              for (int i = r2 - 1; i >= r1; i--)
                  if (i >= 0 && i < rows && c1 >= 0 && c1 < cols)
                      m[n++] = new int[] {i, c1};
              for (int i = c1 + 1; i <= c2; i++)
                  if (r1 >= 0 && r1 < rows && i >= 0 && i < cols)
                      m[n++] = new int[] {r1, i};
          }
      }
  }
  ```

### Q2326. [Spiral Matrix IV](https://leetcode.com/problems/spiral-matrix-iv/)

- ```java
  class Solution {
      public int[][] spiralMatrix(int m, int n, ListNode head) {
          int[][] matrix = new int[m][];
          for (int i = 0; i < m; i++) {
              matrix[i] = new int [n];
              Arrays.fill(matrix[i], -1);
          }
          int a = 0, b = 0, p = m - 1, q = n - 1;
          while (head != null) {
              if (a == p) {
                  for (; head != null && b <= q; b++) {
                      matrix[a][b] = head.val;
                      head = head.next;
                  }
              }
              else if (b == q) {
                  for (; head != null && a <= p; a++) {
                      matrix[a][b] = head.val;
                      head = head.next;
                  }
              }
              else {
                  int i = a, j = b;
                  for (; head != null && b < q; b++) {
                      matrix[a][b] = head.val;
                      head = head.next;
                  }
                  for (; head != null && a < p; a++) {
                      matrix[a][b] = head.val;
                      head = head.next;
                  }
                  for (; head != null && b > j; b--) {
                      matrix[a][b] = head.val;
                      head = head.next;
                  }
                  for (; head != null && a > i; a--) {
                      matrix[a][b] = head.val;
                      head = head.next;
                  }
                  a++;
                  b++;
                  p--;
                  q--;
              }
          }
          return matrix;
      }
  }
  ```
