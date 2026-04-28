/**
 * LC 148 — Sort List
 * Sort a linked list in O(n log n) time using merge sort.
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}


function sortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head
  }

  function getMid(head: ListNode): ListNode {
    let slow: ListNode = head;
    let fast: ListNode | null = head.next; // offset by 1 so left half is shorter on odd lengths

    while (fast !== null && fast.next !== null) {
      slow = slow.next!;
      fast = fast.next.next;
    }

    return slow; // slow is the LAST node of the left half
  }

  const mid = getMid(head)
  const right = mid.next
  mid.next = null // now we have the two parts of the chain

  const sortedLeft = sortList(head)
  const sortedRight = sortList(right)

  function merge(l1, l2) {
    const dummy = new ListNode(0);
    let cur = dummy;

    while (l1 !== null && l2 !== null) {
      if (l1.val <= l2.val) {
        cur.next = l1;
        l1 = l1.next;
      } else {
        cur.next = l2;
        l2 = l2.next;
      }
      cur = cur.next;
    }

    cur.next = l1 ?? l2; // attach remaining nodes
    return dummy.next;
  }

  return merge(sortedLeft, sortedRight)
}

console.log(toArray(sortList(toList([4, 2, 1, 3])))); // [1, 2, 3, 4]

// Follow-up (constant extra space): iterative bottom-up merge sort.
function sortListConstantSpace(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }

  let length = 0;
  let node: ListNode | null = head;
  while (node !== null) {
    length++;
    node = node.next;
  }

  const dummy = new ListNode(0, head);

  for (let size = 1; size < length; size *= 2) {
    let prevTail: ListNode = dummy;
    let curr: ListNode | null = dummy.next;

    while (curr !== null) {
      const left = curr;
      const right = split(left, size);
      curr = split(right, size);

      const [mergedHead, mergedTail] = mergeRuns(left, right);
      prevTail.next = mergedHead;
      prevTail = mergedTail;
    }
  }

  return dummy.next;
}

function split(head: ListNode | null, size: number): ListNode | null {
  if (head === null) {
    return null;
  }

  let curr: ListNode = head;
  for (let i = 1; i < size && curr.next !== null; i++) {
    curr = curr.next;
  }

  const next: ListNode | null = curr.next;
  curr.next = null;
  return next;
}

function mergeRuns(
  l1: ListNode | null,
  l2: ListNode | null,
): [ListNode | null, ListNode] {
  const dummy = new ListNode(0);
  let tail: ListNode = dummy;

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }
    tail = tail.next;
  }

  tail.next = l1 ?? l2;

  while (tail.next !== null) {
    tail = tail.next;
  }

  return [dummy.next, tail];
}

console.log(toArray(sortListConstantSpace(toList([4, 2, 1, 3])))); // [1, 2, 3, 4]


// --- Helpers ---

function toList(arr: number[]): ListNode | null {
  let dummy = new ListNode(0);
  let cur = dummy;
  for (const n of arr) {
    cur.next = new ListNode(n);
    cur = cur.next;
  }
  return dummy.next;
}

function toArray(head: ListNode | null): number[] {
  const result: number[] = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}
