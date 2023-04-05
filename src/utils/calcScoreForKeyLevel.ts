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

function calcPointsForKeyLevel(
  keyLevel: number,
  timestamp?: number,
  step?: number,
) {
  if (keyLevel < 2) {
    return 0;
  }

  const base = baseValues[getApproximateValue(keyLevel)];
  let timeStampMultiplier = 0;
  if (timestamp && step) {
    timeStampMultiplier = timestamp / step;
  }
  let bonusTimeStampPoints = 0.1 * timeStampMultiplier;
  if (timeStampMultiplier < 0) bonusTimeStampPoints -= 5;

  if (keyLevel >= 10) {
    if (keyLevel >= 20 && timeStampMultiplier < 0) {
      return 170 + bonusTimeStampPoints;
    }
    return base + (keyLevel - 10) * 7 + bonusTimeStampPoints;
  }

  return base + keyLevel * 5 + bonusTimeStampPoints;
}

export default calcPointsForKeyLevel;
