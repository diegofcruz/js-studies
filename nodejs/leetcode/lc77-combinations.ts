
function combine(n: number, k: number): number[][] {
  const result: number[][] = []

  function backtrack(start: number, current: number[]) {
    if (current.length === k) {
      result.push([...current])
      return
    }

    for (let i = start; i <= n - (k - current.length) + 1; i++) {
      current.push(i)
      backtrack(i + 1, current)
      current.pop()
    }
  }

  backtrack(1, [])

  return result
}

console.log(combine(4, 2)) // [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
