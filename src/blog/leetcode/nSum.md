---
title: Leetcode nSum Problem
date: 2026-03-16
category:
  - Leetcode
tag:
  - Two Pointer
  - Amazon
  - Meta
footer: false
editLink: false
---

## 2Sum

### Clarification

The inputs are an integer array `nums` and an integer `target`, return the indices of two numbers that add up to target.

Clarifying questions I would ask:

- Are numbers sorted? (Usually no)
- Can there be negative numbers? (Yes)
- Will there be an integer overflow?
- Can I use the same element twice?
- Exactly one solution guaranteed? (Usually yes)
- What should I return if there is no valid answer?

### Example

Example input:

```
nums = [2,7,11,15]
target = 9
```

Expected output:

```
[0,1]
```

### Brute Force Approach

My first idea is to try every pair of numbers. We can use two loops to check all two sums against the target value to find the answer. This works but is inefficient for large arrays because the time complexity will be $O(n²)$ due to nested loops checking every pair.

### Optimized Approach (Two Pointer)

At this point I’d ask: is there anything about the input that I can exploit? If the array were sorted, I might be able to do better. What I’ll do is place two pointers — one at the start of the array and one at the end. So something like:

- left starts at index 0
- right starts at the last index.

Then in each step I check the sum of those two numbers.

For example,

```
nums = [2,7,11,15]
target = 9
```

Initially:

```
left = 0 -> 2
right = 3 -> 15
```

I add them together: `2 + 15 = 17`. That’s bigger than 9. Since the array is sorted, moving the right pointer left will make the number smaller. So I decrement right.

Next:

```
left = 0 -> 2
right = 2 -> 11
```

Check the sum: `2 + 11 = 13`. Still too big. So again I move the right pointer left.

Next:

```
left = 0 -> 2
right = 1 -> 7
```

Now: `2 + 7 = 9`. That matches the target, so I’d return `[0,1]`.

The reason this works is because the array is sorted.

- if the sum is too big, I move the right pointer left to make the sum smaller
- if the sum is too small, I move the left pointer right to make it bigger.

That way I eliminate a lot of combinations without checking them.

::: tip

If there are duplicate elements, the pointers should skip them all to avoid duplicate answers.

:::

In terms of complexity:

- Time complexity is $O(n)$ because each pointer only moves across the array once. But we need to sort the array first therefore the time complexity is $O(nlogn)$ at the end.
- Space complexity is $O(1)$ since we’re not using any extra data structures.

### Optimized Approach (Hash Map)

Can we solve the problem without sorting? The key idea is this: if two numbers add up to the target, then for any number x, the other number we need is just: `target - x`. So instead of searching the whole array for that number, we can store the numbers we’ve already seen in a hash map.

So as I iterate through the array, I’ll do two things:

- Calculate the number I need to reach the target.
- Check if I’ve already seen that number.

If I have, then I’ve found the pair.

Example walk through.

In terms of complexity:

- Time complexity is $O(n)$ because we only loop once, and the hash map lookups are constant time on average.
- Space complexity is $O(n)$ since we create a hash map to store at most n elements.

### Code

```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> valToIndex = new HashMap<>();
        int[] result = new int[2];

        for (int i = 0; i < nums.length; i++) {
            int comp = target - nums[i];

            if (valToIndex.containsKey(comp)) {
                result[0] = valToIndex.get(comp);
                result[1] = i;
                break;
            }

            valToIndex.put(nums[i], i);
        }

        return result;
    }
}
```

## 3Sum

Three Sum can be reduced to Two Sum.

Steps:

- Sort the array
- Fix one number
- Solve Two Sum on remaining numbers

In terms of complexity:

- Time complexity is $O(n^2)$ because sorting: $O(nlogn)$, loop + two pointers: $O(n^2)$.
- Space complexity is $O(1)$.

### Code

```java
class Solution {
    public static int TARGET = 0;

    public List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();

        Arrays.sort(nums);

        int i = 0;
        while (i < nums.length) {
            int num = nums[i];
            List<List<Integer>> pairs = twoSum(nums, i + 1, TARGET - num);

            if (!pairs.isEmpty()) {
                for (List<Integer> pair : pairs) {
                    pair.add(num);
                    result.add(pair);
                }
            }

            while (i < nums.length && nums[i] == num)   i++;
        }

        return result;
    }

    private List<List<Integer>> twoSum(int[] nums, int start, int target) {
        int left = start, right = nums.length - 1;
        List<List<Integer>> result = new ArrayList<>();

        while (left < right) {
            int lv = nums[left], rv = nums[right];

            if (lv + rv > target)
                while (left < right && nums[right] == rv)   right--;
            else if (lv + rv < target)
                while (left < right && nums[left] == lv)    left++;
            else {
                List<Integer> pair = new ArrayList<>();
                pair.add(nums[left]);
                pair.add(nums[right]);
                result.add(pair);

                while (left < right && nums[right] == rv)   right--;
                while (left < right && nums[left] == lv)    left++;
            }
        }

        return result;
    }
}
```

## nSum

N Sum can be reduced to N-1 Sum.

### Code of 4Sum

```java
class Solution {
    public List<List<Integer>> fourSum(int[] nums, int target) {
        List<List<Integer>> result = new ArrayList<>();

        if (nums.length < 4)    return result;

        Arrays.sort(nums);

        int i = 0;
        while (i < nums.length) {
            int num = nums[i];
            List<List<Integer>> tuples = threeSum(nums, i + 1, (long) target - num);

            if (!tuples.isEmpty()) {
                for (List<Integer> tuple : tuples) {
                    tuple.add(num);
                    result.add(tuple);
                }
            }

            while (i < nums.length && nums[i] == num)   i++;
        }

        return result;
    }

    private List<List<Integer>> threeSum(int[] nums, int start, long target) {
        List<List<Integer>> result = new ArrayList<>();

        if (nums.length - start < 3)    return result;

        int i = start;
        while (i < nums.length) {
            int num = nums[i];
            List<List<Integer>> pairs = twoSum(nums, i + 1, target - num);

            if (!pairs.isEmpty()) {
                for (List<Integer> pair : pairs) {
                    pair.add(num);
                    result.add(pair);
                }
            }

            while (i < nums.length && nums[i] == num)   i++;
        }

        return result;
    }

    private List<List<Integer>> twoSum(int[] nums, int start, long target) {
        List<List<Integer>> result = new ArrayList<>();

        if (nums.length - start < 2)    return result;

        int left = start, right = nums.length - 1;
        while (left < right) {
            int lv = nums[left], rv = nums[right];

            if (lv + rv > target)
                while (left < right && nums[right] == rv)   right--;
            else if (lv + rv < target)
                while (left < right && nums[left] == lv)    left++;
            else {
                List<Integer> pair = new ArrayList<>();
                pair.add(nums[left]);
                pair.add(nums[right]);
                result.add(pair);

                while (left < right && nums[right] == rv)   right--;
                while (left < right && nums[left] == lv)    left++;
            }
        }

        return result;
    }
}
```
