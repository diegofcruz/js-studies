// ## Exercise 2 — Valid Anagram (frequency map)

// **Goal:** Use a frequency map to check if two strings are permutations of each other.

// **Problem:** Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`.

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false
  }

  const freq = new Map<string, number>()

  for (const ch of s) {
    freq.set(ch, (freq.get(ch) ?? 0) +1)
  }

  for (const ch of t) {
    const count = freq.get(ch)
    if (!count) return false
    freq.set(ch, count -1)
  }

  return true
}

console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('rat', 'car'));          // false
console.log(isAnagram('a', 'ab'));             // false

console.log(isAnagram('alalater', 'retalala'));             // true

// **What to observe:** The Map plays double duty: check presence AND track remaining budget. When a count hits 0, that character is "used up."
// **Key insight:** Frequency maps turn "are these two multisets equal?" into a counting problem. The pattern is: count up from one source, count down from the other.
