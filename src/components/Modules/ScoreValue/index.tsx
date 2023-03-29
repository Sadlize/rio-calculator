"use client";

import { RootState, useAppSelector } from "redux/store";

const ScoreValue = () => {
  const score = useAppSelector((state: RootState) => state.score);

  let sumDungeonScoreValues = 0;
  Object.keys(score).forEach(
    dungeon =>
      (sumDungeonScoreValues += [
        score[dungeon].Tyrannical,
        score[dungeon].Fortified,
      ]
        .sort((a, b) => b - a)
        .reduce((a, b) => a * 1.5 + b * 0.5))
  );

  return <div style={{ color: "white" }}>{sumDungeonScoreValues}</div>;
};

export default ScoreValue;
