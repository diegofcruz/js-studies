// ## Exercise 1 — Two Sum (complement lookup)

// **Goal:** Recognize that finding a pair that sums to a target is a complement-lookup problem, solvable in O(n).

// **Problem:** Given an array of integers `nums` and a target, return the indices of the two numbers that add up to `target`. Exactly one solution exists.

// **Why not O(n²):** The naive approach checks every pair. The insight: for each number `x`, the number you need is `target - x`. If you've already seen it, you're done. Store seen numbers in a Map as you go.

function twoSum(nums: number[], target: number): number[] {
  const seen = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]

    if (seen.has(complement)) {
      return [seen.get(complement)!, i]
    }

    seen.set(nums[i], i)
  }

  return []
}

console.log(twoSum([2, 7, 11, 15], 9));  // [0, 1]
console.log(twoSum([3, 2, 4], 6));       // [1, 2]
console.log(twoSum([3, 3], 6));          // [0, 1]

// **What to observe:** We never go back. One pass through the array, storing as we go — when the complement shows up, we already have its index.
// **Key insight:** Any "find a pair that satisfies X" problem can be turned into a "find ONE element I've already seen" problem by storing the other half of the pair. This converts O(n²) → O(n).
