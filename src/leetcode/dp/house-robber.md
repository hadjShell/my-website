---
title: House Robber
author: David Zhang aka Hadjshell
isOriginal: true
footer: false
editLink: false
---

- 1-dimentional array: [Q198](#q198-house-robber).
- Circular array: [Q213](#q213-house-robber-ii).
- Binary tree: [Q337](#starq337-house-robber-iii).

---

### Q198. [House Robber](https://leetcode.com/problems/house-robber/)

- ```java
  class Solution {
      public int rob(int[] nums) {
          Integer[] memo = new Integer[nums.length + 1];

          return dp(nums, 0, memo);
      }

      private int dp(int[] nums, int i, Integer[] memo) {
          if (i == nums.length)
              return 0;

          if (i == nums.length - 1)
              return nums[nums.length - 1];

          if (memo[i] != null)
              return memo[i];

          memo[i] = Math.max(nums[i] + dp(nums, i + 2, memo), dp(nums, i + 1, memo));

          return memo[i];
      }
  }
  ```

### Q213. [House Robber II](https://leetcode.com/problems/house-robber-ii/)

- ```java
  class Solution {
      public int rob(int[] nums) {
          Integer[][] memo = new Integer[nums.length][nums.length];

          return dp(nums, 0, nums.length - 1, memo);
      }

      private int dp(int[] nums, int start, int end, Integer[][] memo) {
          if (start > end)
              return 0;

          if (start == end)
              return nums[start];

          if (memo[start][end] != null)
              return memo[start][end];

          int sum = Integer.MIN_VALUE;
          // rob start
          sum = Math.max(nums[start] + (isAdajcent(start, end, nums.length) ?
                  dp(nums, start + 2, end - 1, memo) :
                  dp(nums, start + 2, end, memo)), sum);
          // not rob start
          sum = Math.max(dp(nums, start + 1, end, memo), sum);
          memo[start][end] = sum;

          return memo[start][end];
      }

      private boolean isAdajcent(int start, int end, int length) {
          return Math.abs(start - end) == 1 || Math.abs(start - end) == length - 1;
      }
  }
  ```

### :star:Q337. [House Robber III](https://leetcode.com/problems/house-robber-iii/)

- ```java
  /**
   * Definition for a binary tree node.
   * public class TreeNode {
   *     int val;
   *     TreeNode left;
   *     TreeNode right;
   *     TreeNode() {}
   *     TreeNode(int val) { this.val = val; }
   *     TreeNode(int val, TreeNode left, TreeNode right) {
   *         this.val = val;
   *         this.left = left;
   *         this.right = right;
   *     }
   * }
   */
  class Solution {
      public int rob(TreeNode root) {
          Map<TreeNode, Integer> memo = new HashMap<>();

          return dp(root, memo);
      }

      private int dp(TreeNode root, Map<TreeNode, Integer> memo) {
          if (root == null)
              return 0;

          if (memo.containsKey(root))
              return memo.get(root);

          int max = Integer.MIN_VALUE, sum = 0;
          // rob root
          sum = root.val;
          if (root.left != null)
              sum += dp(root.left.left, memo) + dp(root.left.right, memo);
          if (root.right != null)
              sum += dp(root.right.left, memo) + dp(root.right.right, memo);
          max = Math.max(max, sum);
          // not rob root
          sum = dp(root.left, memo) + dp(root.right, memo);
          max = Math.max(max, sum);

          memo.put(root, max);

          return max;
      }
  }
  ```

- ```java
  class Solution {
      int rob(TreeNode root) {
          int[] res = dp(root);
          return Math.max(res[0], res[1]);
      }

      // 返回一个大小为 2 的数组 arr
      // arr[0] 表示不抢 root 的话，得到的最大钱数
      // arr[1] 表示抢 root 的话，得到的最大钱数
      int[] dp(TreeNode root) {
          if (root == null)
              return new int[]{0, 0};
          int[] left = dp(root.left);
          int[] right = dp(root.right);
          // 抢，下家就不能抢了
          int rob = root.val + left[0] + right[0];
          // 不抢，下家可抢可不抢，取决于收益大小
          int not_rob = Math.max(left[0], left[1])
                      + Math.max(right[0], right[1]);

          return new int[]{not_rob, rob};
      }
  }
  ```

### :heart:Q740. [Delete and Earn](https://leetcode.com/problems/delete-and-earn/)

- ```java
  class Solution {
      public int deleteAndEarn(int[] nums) {
          // Step 1: Find the maximum number in the array
          int maxVal = 0;
          for (int num : nums) {
              maxVal = Math.max(maxVal, num);
          }

          // Step 2: Create a points array to hold the total points for each number
          int[] points = new int[maxVal + 1];
          for (int num : nums) {
              points[num] += num;  // Accumulate points for each number
          }

          // Step 3: Apply DP to decide pick or not pick
          int[] dp = new int[maxVal + 1];

          dp[0] = points[0];
          dp[1] = points[1]; // Base case

          for (int i = 2; i <= maxVal; i++) {
              // Either pick this number (points[i] + dp[i-2]) or don't pick it (dp[i-1])
              dp[i] = Math.max(dp[i - 1], points[i] + dp[i - 2]);
          }

          // Step 4: The last element in dp[] will contain the answer
          return dp[maxVal];
      }
  }
  ```
