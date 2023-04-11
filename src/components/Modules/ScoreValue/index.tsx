'use client';

import { useAppSelector } from 'redux/store';
import { TDungeonKeys } from 'utils/dungeons';

function ScoreValue() {
  const score = useAppSelector((state) => state.score);
  const sumDungeonScoreValues = Object.keys(score).reduce(
    (acc, dungeon) =>
      acc +
      [
        score[dungeon as TDungeonKeys].Tyrannical.score || 0,
        score[dungeon as TDungeonKeys].Fortified.score || 0,
      ]
        .sort((a, b) => b - a)
        .reduce((a, b) => a * 1.5 + b * 0.5),
    0,
  );

  return (
    <div style={{ color: 'white' }}>
      {Number.isInteger(sumDungeonScoreValues)
        ? sumDungeonScoreValues
        : sumDungeonScoreValues.toFixed(2)}
    </div>
  );
}

export default ScoreValue;
