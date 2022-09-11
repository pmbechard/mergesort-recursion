const sumTo = (num: number): number => {
  return num === 1 ? 1 : num + sumTo(num - 1);
};

console.log(sumTo(100)); // 5050

const pow = (base: number, exp: number): number => {
  return exp === 0 ? 1 : 2 * pow(base, exp - 1);
};

console.log(pow(2, 4));

const factorial = (num: number): number => {
  return num === 1 ? 1 : num * factorial(num - 1);
};

console.log(factorial(5)); // 120

const fib = (
  num: number,
  loc: number = 1,
  prev: number = 0,
  current: number = 1
): number => {
  return loc === num ? current : fib(num, loc + 1, current, prev + current);
};

console.log(fib(7)); // 13

interface ListInterface {
  value: number;
  next: ListInterface | null;
}

const printList = (node: ListInterface): string => {
  return !node.next
    ? `${node.value}`
    : `${node.value}, ` + printList(node.next);
};

let list: ListInterface = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

console.log(printList(list));

const printReversedList = (node: ListInterface): string => {
  return node.next
    ? printReversedList(node.next) + `, ${node.value}`
    : `${node.value}`;
};

console.log(printReversedList(list));

const collatzConjecture = (num: number, counter: number = 0): number => {
  if (num === 1) return counter;
  return num % 2 === 0
    ? collatzConjecture(num / 2, counter + 1)
    : collatzConjecture(num * 3 + 1, counter + 1);
};

console.log(collatzConjecture(6)); // 8
console.log(collatzConjecture(15)); // 17
console.log(collatzConjecture(50)); // 24

const allUnderSeven = (
  nums: number[],
  callback = (num: number) => num < 7
): boolean => {
  if (nums.length === 1) return callback(nums[0]);
  else {
    return (
      allUnderSeven(nums.slice(0, nums.length / 2), callback) &&
      allUnderSeven(nums.slice(nums.length / 2), callback)
    );
  }
};

console.log(allUnderSeven([1, 2, 9]));
console.log(allUnderSeven([1, 2, 4]));
console.log(allUnderSeven([7, 2, 4]));

const productOfArray = (nums: number[]): number => {
  if (nums.length === 1) return nums[0];
  return (
    productOfArray(nums.slice(0, nums.length / 2)) *
    productOfArray(nums.slice(nums.length / 2))
  );
};

console.log(productOfArray([1, 2, 3, 10]));

const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2',
          },
        },
      },
    },
  },
};

const contains = (obj: object, val: any): boolean => {
  for (let key in obj) {
    if (typeof obj[key] === 'object') return contains(obj[key], val);
    if (obj[key] === val) return true;
  }
  return false;
};

console.log(contains(nestedObject, 44));
console.log(contains(nestedObject, 'foo2'));
console.log(contains(nestedObject, 'foo'));

const totalIntegers = (arr: any[]): number => {
  let counter: number = 0;
  for (let i: number = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) counter += totalIntegers(arr[i]);
    if (typeof arr[i] === 'number') counter += 1;
  }
  return counter;
};

console.log(totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]));

const sumSquares = (arr: any[]): number => {
  let sum: number = 0;
  for (let i: number = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') sum += arr[i] * arr[i];
    if (Array.isArray(arr[i])) sum += sumSquares(arr[i]);
  }
  return sum;
};

console.log(sumSquares([[1, 2], 3]));
console.log(sumSquares([10, [[10], 10], [10]]));

const replicate = (num: number, val: number): number[] => {
  if (num <= 0) return [];
  else if (num === 1) return [val];
  else if (num > 1) return [val].concat(replicate(num - 1, val));
};

console.log(replicate(3, 5)); // [5, 5, 5]
console.log(replicate(1, 69)); // [69]
console.log(replicate(-2, 6)); // []
