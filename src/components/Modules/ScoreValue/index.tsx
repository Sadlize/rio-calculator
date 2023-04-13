'use client';

import { useAppSelector } from 'redux/store';
import { TDungeonKeys } from 'utils/dungeons';
import styles from './ScoreValue.module.css';

function ScoreValue() {
  const scores = useAppSelector((state) => state.scores);
  const sumDungeonScoreValues = Object.keys(scores).reduce(
    (acc, dungeon) =>
      acc +
      [
        scores[dungeon as TDungeonKeys].Tyrannical || 0,
        scores[dungeon as TDungeonKeys].Fortified || 0,
      ]
        .sort((a, b) => b - a)
        .reduce((a, b) => a * 1.5 + b * 0.5),
    0,
  );

  return (
    <div className={styles.base}>
      {Number.isInteger(sumDungeonScoreValues)
        ? sumDungeonScoreValues
        : sumDungeonScoreValues.toFixed(2)}
    </div>
  );
}

export default ScoreValue;
