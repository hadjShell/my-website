---
title: nSum Problems
author: David Zhang aka Hadjshell
order: 4
isOriginal: true
footer: false
editLink: false
---

### Q1. [Two Sum](https://leetcode.com/problems/two-sum/)

- If array is ordered, we can use two pointers to save space

- ```java
  class Solution {
      public int[] twoSum(int[] nums, int target) {
          Map<Integer, Integer> indices = new HashMap<>();
          for (int i = 0; i < nums.length; i++) {
              if (indices.containsKey(target - nums[i]))
                  return new int[] {indices.get(target - nums[i]), i};
              else
                  indices.put(nums[i], i);
          }
          return null;
      }
  }
  ```

### Q15. [3Sum](https://leetcode.com/problems/3sum/)

- ```java
  class Solution {
      public static final int TARGET = 0;

      public List<List<Integer>> threeSum(int[] nums) {
          List<List<Integer>> result = new ArrayList<>();
          Arrays.sort(nums);
          int k = nums.length - 1, target = TARGET - nums[k];

          while (k > 1 && target < nums[0] + nums[1]) {
                  k--;
                  target = TARGET - nums[k];
          }

          while (k > 1) {
              target = TARGET - nums[k];
              result.addAll(twoSum(nums, 0, k - 1, target));
              k--;
              while (k > 1 && nums[k] == nums[k + 1])
                  k--;
          }

          return result;
      }

      private List<List<Integer>> twoSum(int[] numbers, int i, int j, int target) {
          List<List<Integer>> result = new ArrayList<>();
          while (i < j) {
              int sum = numbers[i] + numbers[j];
              if (sum > target)
                  j--;
              else if (sum < target)
                  i++;
              else {
                  result.add(resultFactory(numbers[i], numbers[j], TARGET - target));
                  i++;
                  while (i < j && numbers[i] == numbers[i - 1])
                      i++;
              }
          }
          return result;
      }

      private List<Integer> resultFactory(int i, int j, int k) {
          return new ArrayList<Integer>(Arrays.asList(i, j, k));
      }
  }
  ```

### Q167. [Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)

- ```java
  class Solution {
      public int[] twoSum(int[] numbers, int target) {
          int[] result = new int[2];
          int i = 0, j = numbers.length - 1;
          while (i < j) {
              int sum = numbers[i] + numbers[j];
              if (sum > target)
                  j--;
              else if (sum < target)
                  i++;
              else
                  break;
          }
          result[0] = i + 1;
          result[1] = j + 1;
          return result;
      }
  }
  ```
