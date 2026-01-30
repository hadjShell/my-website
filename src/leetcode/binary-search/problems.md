---
title: Binary Search Problems
author: David Zhang aka Hadjshell
order: 2
isOriginal: true
footer: false
editLink: false
---

### :star:Q33. [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)

- ```java
  class Solution {
      public int search(int[] nums, int target) {
          int size = nums.length;
          int left = findPeakElement(nums) + 1, right = left + size - 1;

          while (left <= right) {
              int mid = left + (right - left) / 2;

              if (nums[mid % size] < target)
                  left = mid + 1;
              else if (nums[mid % size] > target)
                  right = mid - 1;
              else
                  return mid % size;
          }

          return -1;
      }

      public int findPeakElement(int[] nums) {
          int left = 0, right = nums.length - 1;

          while (left < right) {
              int mid = left + (right - left) / 2;

              if (nums[mid] > nums[mid + 1])
                  return mid;
              else {
                  if (nums[mid] < nums[0])
                      right = mid - 1;
                  else
                      left = mid + 1;
              }
          }

          return left;
      }
  }
  ```

### :star:Q34. [Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)

- ```java
  class Solution {
      public int[] searchRange(int[] nums, int target) {
          return new int[] {searchLeft(nums, target), searchRight(nums, target)};
      }

      public int searchLeft(int[] nums, int target) {
          int left = 0, right = nums.length - 1, pos = -1;

          while (left <= right) {
              int mid = left + (right - left) / 2;

              if (nums[mid] > target)
                  right = mid - 1;
              else if (nums[mid] < target)
                  left = mid + 1;
              else {
                  pos = mid;
                  right = mid - 1;
              }
          }

          return pos;
      }

      public int searchRight(int[] nums, int target) {
          int left = 0, right = nums.length - 1, pos = -1;

          while (left <= right) {
              int mid = left + (right - left) / 2;

              if (nums[mid] > target)
                  right = mid - 1;
              else if (nums[mid] < target)
                  left = mid + 1;
              else {
                  pos = mid;
                  left = mid + 1;
              }
          }

          return pos;
      }
  }
  ```

### Q35. [Search Insert Position](https://leetcode.com/problems/search-insert-position/)

- ```java
  class Solution {
      public int searchInsert(int[] nums, int target) {
          int left = 0, right = nums.length - 1;

          while (left <= right) {
              int mid = left + (right - left) / 2;

              if (nums[mid] > target)
                  right = mid - 1;
              else if (nums[mid] < target)
                  left = mid + 1;
              else
                  return mid;
          }

          return left;
      }
  }
  ```

### Q74. [Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/)

- ```java
  class Solution {
      public boolean searchMatrix(int[][] matrix, int target) {
          int m = matrix.length, n = matrix[0].length;
          int left = 0, right = m * n - 1;

          while (left <= right) {
              int mid = left + (right - left) / 2;
              int val = hashToValue(mid, matrix);

              if (val > target)
                  right = mid - 1;
              else if (val < target)
                  left = mid + 1;
              else
                  return true;
          }

          return false;
      }

      private int hashToValue(int hash, int[][] matrix) {
          int n = matrix[0].length;
          int i = hash / n, j = hash % n;
          return matrix[i][j];
      }
  }
  ```

### Q81. [Search in Rotated Sorted Array II](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/)

- Q33 + Q154

- ```java
  class Solution {
      public boolean search(int[] nums, int target) {
          return bsDuplicate(nums, target, 0, nums.length - 1);
      }

      private boolean bsDuplicate(int[] nums, int target, int left, int right) {
          if (left == right)  return nums[left] == target;
          else if (left + 1 == right)
              return nums[left] == target || nums[right] == target;

          // at least 3 elements
          int mid = left + (right - left) / 2;
          if (nums[mid] == target)    return true;
          if (nums[left] > nums[right]) {
              if (nums[mid] > nums[right]) {
                  if (target < nums[mid] && target >= nums[left])
                      return bsDuplicate(nums, target, left, mid - 1);
                  else
                      return bsDuplicate(nums, target, mid + 1, right);
              }
              else {
                  if (target > nums[mid] && target <= nums[right])
                      return bsDuplicate(nums, target, mid + 1, right);
                  else
                      return bsDuplicate(nums, target, left, mid - 1);
              }
          }
          else if (nums[left] < nums[right]) {
              if (target < nums[mid])
                  return bsDuplicate(nums, target, left, mid - 1);
              else
                  return bsDuplicate(nums, target, mid + 1, right);
          }
          else
              return bsDuplicate(nums, target, left, mid - 1) || bsDuplicate(nums, target, mid + 1, right);
      }
  }
  ```

### Q153. [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)

- ```java
  class Solution {
      public int findMin(int[] nums) {
          int left = 0, right = nums.length - 1;

          while (left < right) {
              int mid = left + (right - left) / 2;

              // big ascending
              if (nums[mid] > nums[right])
                  left = mid + 1;
              // small ascending
              else if (nums[mid] < nums[right])
                  right = mid;
          }

          return nums[left];
      }
  }
  ```

### Q154. [Find Minimum in Rotated Sorted Array II](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/)

- Two solutions: recursion or loop

- ```java
  class Solution {
      public int findMin(int[] nums) {
          return bsMinDuplicate(nums, 0, nums.length - 1);
      }

      private int bsMinDuplicate(int[] nums, int left, int right) {
          if (left == right)  return nums[left];
          else if (left + 1 == right)
              return nums[left] < nums[right] ? nums[left] : nums[right];

          // at least 3 elements
          int mid = left + (right - left) / 2;
          if (nums[left] > nums[right]) {
              if (nums[mid] > nums[right])
                  return bsMinDuplicate(nums, mid + 1, right);
              else
                  return nums[mid] < nums[mid - 1] ? nums[mid] : bsMinDuplicate(nums, left, mid - 1);
          }
          else if (nums[left] < nums[right])
              return nums[left];
          else {
              if (nums[mid] < nums[mid - 1] && nums[mid] < nums[mid + 1])
                  return nums[mid];
              else {
                  int leftMin = bsMinDuplicate(nums, left, mid - 1);
                  int rightMin = bsMinDuplicate(nums, mid + 1, right);
                  return leftMin < rightMin ? leftMin : rightMin;
              }
          }
      }
  }
  ```

- ```java
  class Solution {
      public int findMin(int[] nums) {
           int l = 0;
          int h = nums.length - 1;

          while (l < h) {
              int m = l + (h - l) / 2;

              // Handle duplicates
              if (nums[l] == nums[m] && nums[m] == nums[h]) {
                  l++;
                  h--;
              } else if (nums[m] <= nums[h]) {
                  // Right part is sorted or pivot element is to the left
                  h = m;
              } else {
                  // Left part is sorted and pivot element is to the right
                  l = m + 1;
              }
          }

          return nums[l];

      }
  }
  ```

### :star:Q162. [Find Peak Element](https://leetcode.com/problems/find-peak-element/)

- ```java
  class Solution {
      public int findPeakElement(int[] nums) {
        int left = 0, right = nums.length - 1;

        while (left < right) {
            int mid = left + (right - left) / 2;

            if (nums[mid] > nums[mid + 1]) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
      }
  }
  ```

### Q278. [First Bad Version](https://leetcode.com/problems/first-bad-version/)

- ```java
  /* The isBadVersion API is defined in the parent class VersionControl.
        boolean isBadVersion(int version); */

  public class Solution extends VersionControl {
      public int firstBadVersion(int n) {
          return bs(0, n - 1);
      }

      private int bs(int left, int right) {
          if (left > right)   return -1;
          int mid = left + (right - left) / 2;
          if (isBadVersion(mid + 1)) {
              if (isBadVersion(mid))
                  return bs(left, mid - 1);
              else
                  return mid + 1;
          }
          else
              return bs(mid + 1, right);
      }
  }
  ```

### :star:Q410. [Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/)

- Famous book allocation problem.

- Same question as [Q1011](#q1011-capacity-to-ship-packages-within-d-days).

- ```java
  class Solution {
      // O(nlogm)
      public int splitArray(int[] nums, int k) {
          int[] ps = prefixSum(nums);
          int left = 0, right = ps[ps.length - 1];

          while (left < right) {
              int mid = left + (right - left) / 2;
              int split = getSplitNumber(ps, mid);

              if (split <= k)
                  right = mid;
              else
                  left = mid + 1;
          }

          return right;
      }

      // O(n)
      private int getSplitNumber(int[] ps, int sum) {
          int count = 0, start = 0, end = 0;

          while (end < ps.length - 1) {
              if (getRangeSum(ps, start, end) <= sum)
                  end++;
              else {
                  if (start == end)   return Integer.MAX_VALUE;

                  count++;
                  start = end;
              }
          }

          return count + 1;
      }

      // [i...j] in nums
      // O(1)
      private int getRangeSum(int[] ps, int i, int j) {
          return ps[j + 1] - ps[i];
      }

      // O(n)
      private int[] prefixSum(int[] nums) {
          int[] ps = new int[nums.length + 1];
          for (int i = 1; i <= nums.length; i++)    ps[i] = ps[i - 1] + nums[i - 1];
          return ps;
      }
  }
  ```

### Q704. [Binary Search](https://leetcode.com/problems/binary-search/)

- ```java
  class Solution {
      public int search(int[] nums, int target) {
          int left = 0, right = nums.length - 1;

          while (left <= right) {
              int mid = left + (right - left) / 2;

              if (nums[mid] > target)
                  right = mid - 1;
              else if (nums[mid] < target)
                  left = mid + 1;
              else
                  return mid;
          }

          return -1;
      }
  }
  ```

### Q729. [My Calendar I](https://leetcode.com/problems/my-calendar-i/)

- ```java
  class MyCalendar {
      List<int[]> booked;

      public MyCalendar() {
          booked = new ArrayList();
      }

      public boolean book(int start, int end) {
          int[] time = {start, end};
          if (booked.isEmpty()) {
              booked.add(time);
              return true;
          }
          int index = Collections.binarySearch(booked, time, (a, b) -> a[0] - b[0]);
          if (index < 0) {
              index = -1 * index - 1;
              if (index == 0) {
                  if (end <= booked.get(index)[0]) {
                      booked.add(index, time);
                      return true;
                  }
                  else
                      return false;
              }
              else if (index == booked.size()) {
                  if (start >= booked.get(index - 1)[1]) {
                      booked.add(index, time);
                      return true;
                  }
                  else
                      return false;
              }
              else if (start >= booked.get(index - 1)[1] && end <= booked.get(index)[0]) {
                  booked.add(index, time);
                  return true;
              }
          }
          return false;
      }
  }
  ```

### :star:Q875. [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/)

- ```java
  class Solution {
      public int minEatingSpeed(int[] piles, int h) {
          int left = 1, right = 1000_000_000;

          while (left < right) {
              int mid = left + (right - left) / 2;
              int time = getFinishTime(piles, mid);

              // eat too fast
              if (time <= h)
                  right = mid;
              // eat too slow
              else
                  left = mid + 1;
          }

          return right;
      }

      private int getFinishTime(int[] piles, int speed) {
          int time = 0;
          for (int pile : piles) {
              time += pile / speed + (pile % speed == 0 ? 0 : 1);
          }
          return time;
      }
  }
  ```

### Q1011. [Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/)

- ```java
  class Solution {
      public int shipWithinDays(int[] weights, int days) {
          int left = 1, right = 50_000 * 500;

          while (left < right) {
              int mid = left + (right - left) / 2;
              int time = getFinishTime(weights, mid);

              if (time <= days)
                  right = mid;
              else
                  left = mid + 1;
          }

          return right;
      }

      private int getFinishTime(int[] weights, int capacity) {
          int time = 0, leftCapacity = capacity;
          for (int weight : weights) {
              if (weight <= leftCapacity)
                  leftCapacity -= weight;
              else {
                  time++;
                  leftCapacity = capacity - weight;
                  if (leftCapacity < 0)   return Integer.MAX_VALUE;
              }
          }
          return time + 1;
      }
  }
  ```
