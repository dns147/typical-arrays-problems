
exports.min = function min (array) {
  if (!array || !array.length) return 0;

  const len = array.length;
  let min = array[0];

  for (i = 0; i < len; i++) {
    for (k = 0; k < len; k++) {
      if (array[i] < array[k] && array[i] < min) {
        min = array[i];
      }
    }
  }

  return min;
}

exports.max = function max (array) {
  if (!array || !array.length) return 0;

  const len = array.length;
  let max = array[0];

  for (i = 0; i < len; i++) {
    for (k = 0; k < len; k++) {
      if (array[i] > array[k] && array[i] > max) {
        max = array[i];
      }
    }
  }

  return max;
}

exports.avg = function avg (array) {
  if (!array || !array.length) return 0;

  const len = array.length;
  let avg = null;

  for (i = 0; i < len; i++) {
    avg = avg + array[i];
  }

  return avg / len;
}
