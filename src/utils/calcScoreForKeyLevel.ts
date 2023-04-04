const baseValues: { [key: number]: number } = {
  0: 0,
  2: 30,
  4: 35,
  7: 40,
  10: 100,
};

function getApproximateValue(level: number) {
  let value = 0;

  Object.keys(baseValues).forEach((item) => {
    if (+item > level) {
      return;
    }
    value = +item;
  });

  return value;
}

function calcPointsForKeyLevel(keyLevel: number) {
  if (keyLevel < 2) {
    return 0;
  }

  const base = baseValues[getApproximateValue(keyLevel)];

  if (keyLevel >= 10) {
    return base + (keyLevel - 10) * 7;
  }

  return base + keyLevel * 5;
}

export default calcPointsForKeyLevel;
