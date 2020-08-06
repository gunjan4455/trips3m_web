const getRange = (min, max) => {
  const range = [];
  for (let n = min; n <= max; n += 1) {
    range.push(n);
  }
  return range;
};

export {
  getRange
};
