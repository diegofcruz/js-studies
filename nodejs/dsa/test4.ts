// ## Exercise 4 — Subarray Sum Equals K (prefix sum + Map)

// **Goal:** Understand how prefix sums combined with a Map solve "subarray summing to target" in O(n).

// **Concepts covered:** prefix sum, complement in prefix sums, running total

// **Problem:** Given an array `nums` and integer `k`, return the number of subarrays that sum to `k`.

// **Why prefix sums:** The sum of `nums[i..j]` = `prefixSum[j] - prefixSum[i-1]`. If this equals `k`, then `prefixSum[i-1] = prefixSum[j] - k`. So for each running total, ask: "how many times have I seen `runningTotal - k` before?"

// **Steps:**
// 1. Initialize `Map<number, number>` with `{0: 1}` (empty prefix has sum 0, seen once).
// 2. Track a running sum.
// 3. For each element, add to running sum, then look up `runningSum - k` in the map.
// 4. Add that count to result. Then record `runningSum` in the map.

function subarraySum(nums: number[], k: number): number {
  const prefixCounts = new Map<number, number>([[0,1]])

  let runningSum = 0
  let result = 0

  for (const num of nums) {
    runningSum += num

    result += prefixCounts.get(runningSum -k) ?? 0
    prefixCounts.set(runningSum, (prefixCounts.get(runningSum) ?? 0) +1)
  }

  return result
}

console.log(subarraySum([1, 1, 1], 2)); // 2
console.log(subarraySum([1, 2, 3], 3)); // 2  ([1,2] and [3])
console.log(subarraySum([1, -1, 1], 1)); // 3

// ```ts
// **What to observe:** The `{0: 1}` initialization is critical — it handles the case where the entire prefix from index 0 to i sums to `k`. The negative numbers case works correctly because we use the complement, not a two-pointer approach.

// **Key insight:** Prefix sums + Map is the canonical O(n) solution for "count subarrays summing to k." The invariant is: `sum(i..j) = prefixSum[j] - prefixSum[i-1]`, so finding a matching pair is again a complement-lookup problem.
