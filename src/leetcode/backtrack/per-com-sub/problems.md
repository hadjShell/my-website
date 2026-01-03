---
title: Permutation & Combination & Subset Problems
author: David Zhang aka Hadjshell
order: 2
isOriginal: true
footer: false
editLink: false
---

## :bulb: First Viriation

### Q17. [Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)

- ```java
  class Solution {
      static final String[] PHONE_MAP = {"", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};


      public List<String> letterCombinations(String digits) {
          List<String> result = new ArrayList<>();
          StringBuilder path = new StringBuilder();

          backtrack(digits, 0, path, result);

          return result;
      }

      private void backtrack(String digits, int start, StringBuilder path, List<String> result) {
          if (path.length() == digits.length()) {
              result.add(path.toString());
              return;
          }

          char num = digits.charAt(start);
          String letters = PHONE_MAP[num - '1'];
          for (int i = 0; i < letters.length(); i++) {
              path.append(letters.charAt(i));
              backtrack(digits, start + 1, path, result);
              path.setLength(path.length() - 1);
          }
      }
  }
  ```

### Q46. [Permutations](https://leetcode.com/problems/permutations/)

- ```java
  class Solution {
      public List<List<Integer>> permute(int[] nums) {
          List<List<Integer>> result = new ArrayList<>();
          List<Integer> path = new ArrayList<>();
          boolean[] used = new boolean[21];

          backtrack(nums, used, path, result);

          return result;
      }

      private void backtrack(int[] nums, boolean[] used, List<Integer> path, List<List<Integer>> result) {
          if (path.size() == nums.length) {
              result.add(new ArrayList<>(path));
              return;
          }

          for (int num : nums) {
              if (used[num + 10] == true)     continue;

              path.add(num);
              used[num + 10] = true;
              backtrack(nums, used, path, result);
              path.removeLast();
              used[num + 10] = false;
          }
      }
  }
  ```

### Q77. [Combinations](https://leetcode.com/problems/combinations/)

- ```java
  class Solution {
      public List<List<Integer>> combine(int n, int k) {
          List<List<Integer>> result = new ArrayList<>();
          List<Integer> path = new ArrayList<>();

          backtrack(1, n, k, path, result);

          return result;
      }

      private void backtrack(int curNum, int n, int k, List<Integer> path, List<List<Integer>> result) {
          if (path.size() == k) {
              result.add(new ArrayList<>(path));
              return;
          }

          for (int i = curNum; i <= n; i++) {
              path.add(i);
              backtrack(i + 1, n, k, path, result);
              path.removeLast();
          }
      }
  }
  ```

### Q78. [Subsets](https://leetcode.com/problems/subsets/)

- 盒子视角

  ```java
  class Solution {
      public List<List<Integer>> subsets(int[] nums) {
          List<List<Integer>> result = new ArrayList<>();
          List<Integer> path = new ArrayList<>();

          backtrack(nums, 0, path, result);

          return result;
      }

      private void backtrack(int[] nums, int start, List<Integer> path, List<List<Integer>> result) {
          result.add(new ArrayList<>(path));

          for (int i = start; i < nums.length; i++) {
              path.add(nums[i]);
              backtrack(nums, i + 1, path, result);
              path.removeLast();
          }
      }
  }
  ```

- 球视角

  ```java
  class Solution {
      public List<List<Integer>> subsets(int[] nums) {
          List<List<Integer>> result = new ArrayList<>();
          List<Integer> path = new ArrayList<>();

          backtrack(nums, 0, path, result);

          return result;
      }

      private void backtrack(int[] nums, int start, List<Integer> path, List<List<Integer>> result) {
          if (start == nums.length) {
              result.add(new ArrayList<>(path));
              return;
          }

          backtrack(nums, start + 1, path, result);

          path.add(nums[start]);
          backtrack(nums, start + 1, path, result);
          path.removeLast();
      }
  }
  ```

### Q216. [Combination Sum III](https://leetcode.com/problems/combination-sum-iii/)

- ```java
  class Solution {
      public List<List<Integer>> combinationSum3(int k, int n) {
          List<List<Integer>> res = new ArrayList<>();
          List<Integer> track = new ArrayList<>();
          backtrack(res, track, k, n, 0, 1);
          return res;
      }

      private void backtrack(List<List<Integer>> res, List<Integer> track, int k, int n, int sum, int start) {
          if (track.size() > k || sum > n)
              return;
          if (track.size() == k && sum == n) {
              res.add(new ArrayList(track));
              return;
          }
          for (int i = start; i <= 9; i++) {
              track.add(i);
              backtrack(res, track, k, n, sum + i, i + 1);
              track.removeLast();
          }
      }
  }
  ```

## :bulb: Second Viriation

::: tip

Need to sort the array first

:::

### Q40. [Combination Sum II](https://leetcode.com/problems/combination-sum-ii/)

- ```java
  class Solution {
      public List<List<Integer>> combinationSum2(int[] nums, int target) {
          List<List<Integer>> result = new ArrayList<>();
          List<Integer> path = new ArrayList<>();

        	Arrays.sort(nums);
          backtrack(nums, 0, 0, target, path, result);

          return result;
      }

      private void backtrack(int[] nums, int start, int sum, int target, List<Integer> path, List<List<Integer>> result) {
          if (sum == target) {
              result.add(new ArrayList<>(path));
              return;
          }

          if (sum > target)
              return;

          for (int i = start; i < nums.length; i++) {
              if (i > start && nums[i] == nums[i - 1])
                  continue;

              sum += nums[i];
              path.add(nums[i]);
              backtrack(nums, i + 1, sum, target, path, result);
              path.removeLast();
              sum -= nums[i];
          }
      }
  }


  ```

### Q47. [Permutations II](https://leetcode.com/problems/permutations-ii/)

- ```java
  class Solution {
      public List<List<Integer>> permuteUnique(int[] nums) {
          List<List<Integer>> result = new ArrayList<>();
          List<Integer> path = new ArrayList<>();
          boolean[] used = new boolean[nums.length];

          Arrays.sort(nums);
          backtrack(nums, used, path, result);

          return result;
      }

      private void backtrack(int[] nums, boolean[] used, List<Integer> path, List<List<Integer>> result) {
          if (path.size() == nums.length) {
              result.add(new ArrayList<>(path));
              return;
          }

          int i = 0;
          while (i < nums.length) {
              if (used[i] == true) {
                  i++;
                  continue;
              }

              used[i] = true;
              path.add(nums[i]);
              backtrack(nums, used, path, result);
              path.removeLast();
              used[i] = false;

              do {
                  i++;
              } while (i < nums.length && nums[i] == nums[i - 1]);
          }
      }
  }
  ```

### Q90. [Subsets II](https://leetcode.com/problems/subsets-ii/)

- ```java
  class Solution {
      public List<List<Integer>> subsetsWithDup(int[] nums) {
          List<List<Integer>> result = new ArrayList<>();
          List<Integer> path = new ArrayList<>();

          Arrays.sort(nums);
          backtrack(nums, 0, path, result);

          return result;
      }

      private void backtrack(int[] nums, int start, List<Integer> path, List<List<Integer>> result) {
          result.add(new ArrayList<>(path));

          for (int i = start; i < nums.length; i++) {
              if (i > start && nums[i] == nums[i - 1])
                  continue;

              path.add(nums[i]);
              backtrack(nums, i + 1, path, result);
              path.removeLast();
          }
      }
  }
  ```

## :bulb: Third Viriation

### Q39. [Combination Sum](https://leetcode.com/problems/combination-sum/)

- ```java
  class Solution {
      public List<List<Integer>> combinationSum(int[] candidates, int target) {
          List<List<Integer>> result = new ArrayList<>();
          List<Integer> path = new ArrayList<>();

          Arrays.sort(candidates);
          backtrack(candidates, 0, 0, target, path, result);

          return result;
      }

      private void backtrack(int[] candidates, int start, int sum, int target, List<Integer> path, List<List<Integer>> result) {
          if (sum == target) {
              result.add(new ArrayList<>(path));
              return;
          }

          if (sum > target)
              return;

          for (int i = start; i < candidates.length; i++) {
              sum += candidates[i];
              path.add(candidates[i]);
              backtrack(candidates, i, sum, target, path, result);
              path.removeLast();
              sum -= candidates[i];
          }
      }
  }
  ```
