
function longestConsecutive(nums: number[]): number {

  if (nums.length === 0) return 0;
  if (nums.length === 1) return 1;

  const numSet = new Set(nums)
  let maxLength = 0;

  for (const num of numSet) {

    // only process the start number
    if (!numSet.has(num -1)) {
      let currNum = num
      let currLength = 1

      // check until this sequence can be
      while (numSet.has(currNum +1)) {
        currNum++
        currLength++
      }

      // always compare with the oldest bigger value
      maxLength = Math.max(maxLength, currLength)
    }
  }

  return maxLength
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))

console.log(longestConsecutive([1000, 10, 77, 1, 3, 2, 8, 11, 7, 16, 101, 102]))

console.log(longestConsecutive([1000, 10, 77, 1, 3, 2, 8, 11, 7, 16, 101, 102, 5, 7, 99, 45, 9, 10]))
