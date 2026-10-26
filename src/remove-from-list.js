/**
 * @param {ListNode} l
 * @param {Number} k
 * @return {ListNode}
 */
export default function removeFromList(l, k) {
  const dummy = { value: 0, next: l };
  let current = dummy;

  while (current.next !== null) {
    if (current.next.value === k) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return dummy.next;
}