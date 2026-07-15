// ## Exercise 3 — Group Anagrams (grouped by canonical key)

// **Goal:** Learn the pattern of grouping elements that share a computed property by using a Map keyed by that property.

function groupAnagrams(strs: string[]): string[][] {
  const groups = new Map<string, string[]>()

  for (const word of strs) {
    const key = word.split('').sort().join('')

    const group = groups.get(key) ?? []
    group.push(word)
    groups.set(key, group)
  }

  return [...groups.values()]
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
console.log(groupAnagrams(['eat', 'tea', 'nu', 'rrr', 'pla', 'un']));

// **What to observe:** All anagrams produce the same sorted key. The Map acts as a bucket system, automatically grouping by computed identity.
// **Key insight:** Whenever you need to group elements that "are equivalent under some transformation," compute the transformation and use the result as the Map key. The transformation is the fingerprint.
