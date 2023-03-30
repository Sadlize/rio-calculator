"use client";

import { RootState, useAppSelector } from "redux/store";
import { calcPointsForKeyLevel } from "utils/calcScoreForKeyLevel";

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
        .reduce(
          (a, b) =>
            calcPointsForKeyLevel(a) * 1.5 + calcPointsForKeyLevel(b) * 0.5
        ))
  );

  return <div style={{ color: "white" }}>{sumDungeonScoreValues}</div>;
};

export default ScoreValue;
