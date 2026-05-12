// Two pointers exercise

function maxArea(height: number[]): number {
  let left = 0 // Set left to the first position
  let right = height.length -1 // Set right to the last position

  let bestArea = 0 // the answer starts empty

  while (left < right) { // while the left pointer is less then right pointer, keep running
    const h = Math.min(height[left], height[right]) // get the min value in the each position
    const w = right - left // subtract the indexes for get the diference

    const area = h * w // calculate the area, multiple the value for the size of the distance

    if (area > bestArea) { // if the result is better than the current value, update
      bestArea = area
    }

    if (height[left] < height[right]) { // check witch is the less value, and change the position, increase left and decrease right
      left++
    } else {
      right--
    }
  }

  return bestArea
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49

// Complexity:
// Time: O(n), because each pointer moves for all the array
// Space: O(1) because we always work with the same memory usage
