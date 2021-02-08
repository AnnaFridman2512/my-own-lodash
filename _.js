const _ = {
  clamp(number, lower, upper) {
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },

  inRange(number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }
    if (start > end) {
      let tempEndValue = end;
      end = start;
      start = tempEndValue;
    }
    let isInRange = start <= number && number < end;
    return isInRange;
  },

  words(string) {
    const words = string.split(" ");
    return words;
  },

  pad(string, length) {
    if (string.length >= length) {
      return string;
    }
    const startPaddingLength = Math.floor((length - string.length) / 2);
    const endPaddingLength = length - string.length - startPaddingLength;
    const paddedString =
      " ".repeat(startPaddingLength) + string + " ".repeat(endPaddingLength);
    return paddedString;
  },

  has(object, key) {
    const hasValue = object[key] !== undefined;
    return hasValue;
  },

  invert(object) {
    let invertedObject = {};
    for (let key in object) {
      const originalValue = object[key];
      invertedObject[originalValue] = key;
    }
    return invertedObject;
  },

  findKey(object, predicate) {
    for (let key in object) {
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue != false) {
        return key;
      }
      return undefined;
    }
  },

  drop(array, n) {
    if (n === undefined) {
      n = 1;
    }
    let droppedArray = array.slice(n, array.length);
    return droppedArray;
  },

  dropWhile(array, predicate) {
    const cb = (element, index) => {
      return !predicate(element, index, array);
    };

    let dropNumber = array.findIndex(cb);
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },

  chunk(array, size = 1) {
    let arrayChanks = [];
    for (let i = 0; i < array.length; i += size) {
      let arrayChank = array.slice(i, i + size);
      arrayChanks.push(arrayChank);
    }
    return arrayChanks;
  },
};

// Do not write or modify code below this line.
module.exports = _;

// Do not write or modify code below this line.
module.exports = _;
