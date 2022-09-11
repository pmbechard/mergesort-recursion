const mergeSort = (arr: number[]): number[] => {
  if (arr.length === 1) return arr;
  return merge(
    mergeSort(arr.slice(arr.length / 2)),
    mergeSort(arr.slice(0, arr.length / 2))
  );
};

const merge = (left: number[], right: number[]): number[] => {
  let lI: number = 0;
  let rI: number = 0;
  let result: number[] = [];
  while (lI < left.length && rI < right.length) {
    left[lI] < right[rI] && lI < left.length
      ? result.push(left[lI++])
      : result.push(right[rI++]);
  }
  lI < left.length && result.push(...left.slice(lI));
  rI < right.length && result.push(...right.slice(rI));

  return result;
};

console.log(mergeSort([5, 3, 2, 4, 1]));
