var sumTo = function (num) {
    return num === 1 ? 1 : num + sumTo(num - 1);
};
console.log(sumTo(100)); // 5050
var pow = function (base, exp) {
    return exp === 0 ? 1 : 2 * pow(base, exp - 1);
};
console.log(pow(2, 4));
var factorial = function (num) {
    return num === 1 ? 1 : num * factorial(num - 1);
};
console.log(factorial(5)); // 120
var fib = function (num, loc, prev, current) {
    if (loc === void 0) { loc = 1; }
    if (prev === void 0) { prev = 0; }
    if (current === void 0) { current = 1; }
    return loc === num ? current : fib(num, loc + 1, current, prev + current);
};
console.log(fib(7)); // 13
var printList = function (node) {
    return !node.next
        ? "".concat(node.value)
        : "".concat(node.value, ", ") + printList(node.next);
};
var list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
console.log(printList(list));
var printReversedList = function (node) {
    return node.next
        ? printReversedList(node.next) + ", ".concat(node.value)
        : "".concat(node.value);
};
console.log(printReversedList(list));
var collatzConjecture = function (num, counter) {
    if (counter === void 0) { counter = 0; }
    if (num === 1)
        return counter;
    return num % 2 === 0
        ? collatzConjecture(num / 2, counter + 1)
        : collatzConjecture(num * 3 + 1, counter + 1);
};
console.log(collatzConjecture(6)); // 8
console.log(collatzConjecture(15)); // 17
console.log(collatzConjecture(50)); // 24
var allUnderSeven = function (nums, callback) {
    if (callback === void 0) { callback = function (num) { return num < 7; }; }
    if (nums.length === 1)
        return callback(nums[0]);
    else {
        return (allUnderSeven(nums.slice(0, nums.length / 2), callback) &&
            allUnderSeven(nums.slice(nums.length / 2), callback));
    }
};
console.log(allUnderSeven([1, 2, 9]));
console.log(allUnderSeven([1, 2, 4]));
console.log(allUnderSeven([7, 2, 4]));
var productOfArray = function (nums) {
    if (nums.length === 1)
        return nums[0];
    return (productOfArray(nums.slice(0, nums.length / 2)) *
        productOfArray(nums.slice(nums.length / 2)));
};
console.log(productOfArray([1, 2, 3, 10]));
var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
};
var contains = function (obj, val) {
    for (var key in obj) {
        if (typeof obj[key] === 'object')
            return contains(obj[key], val);
        if (obj[key] === val)
            return true;
    }
    return false;
};
console.log(contains(nestedObject, 44));
console.log(contains(nestedObject, 'foo2'));
console.log(contains(nestedObject, 'foo'));
var totalIntegers = function (arr) {
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]))
            counter += totalIntegers(arr[i]);
        if (typeof arr[i] === 'number')
            counter += 1;
    }
    return counter;
};
console.log(totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]));
var sumSquares = function (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number')
            sum += arr[i] * arr[i];
        if (Array.isArray(arr[i]))
            sum += sumSquares(arr[i]);
    }
    return sum;
};
console.log(sumSquares([[1, 2], 3]));
console.log(sumSquares([10, [[10], 10], [10]]));
var replicate = function (num, val) {
    if (num <= 0)
        return [];
    else if (num === 1)
        return [val];
    else if (num > 1)
        return [val].concat(replicate(num - 1, val));
};
console.log(replicate(3, 5)); // [5, 5, 5]
console.log(replicate(1, 69)); // [69]
console.log(replicate(-2, 6)); // []
