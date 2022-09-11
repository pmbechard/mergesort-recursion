const itFib = (n: number): number[] => {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];

  let result: number[] = [0, 1];
  let prev: number = 0;
  let current: number = 1;

  for (let i: number = 2; i < n; i++) {
    result.push(prev + current);
    let temp: number = current;
    current = prev + current;
    prev = temp;
  }
  return result;
};

console.log(itFib(8));

const recursiveFib = (
  n: number,
  i: number = 1,
  prev: number = 0,
  current: number = 1
): number[] => {
  if (i === n - 1) return [];
  if (i === 1)
    return [0, 1, 1].concat(recursiveFib(n, i + 1, current, current + prev));
  return [prev + current].concat(
    recursiveFib(n, i + 1, current, current + prev)
  );
};

console.log(recursiveFib(8));
