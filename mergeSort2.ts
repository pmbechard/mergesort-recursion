const mergeSort2 = (arr: number[]): number[] => {
  if (arr.length === 1) return arr;
  return merge2(
    mergeSort2(arr.slice(arr.length / 2)),
    mergeSort2(arr.slice(0, arr.length / 2))
  );
};

const merge2 = (
  left: number[],
  right: number[],
  lIndex: number = 0,
  rIndex: number = 0,
  result: number[] = []
): number[] => {
  if (lIndex === left.length) return result.concat(right.slice(rIndex));
  else if (rIndex === right.length) return result.concat(left.slice(lIndex));
  else if (left[lIndex] < right[rIndex])
    return result
      .concat(left[lIndex])
      .concat(merge2(left, right, lIndex + 1, rIndex, result));
  else
    return result
      .concat(right[rIndex])
      .concat(merge2(left, right, lIndex, rIndex + 1, result));
};

console.log(mergeSort2([5, 3, 2, 4, 1]));
