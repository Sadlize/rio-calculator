"use client";

import { RootState, useAppSelector } from "redux/store";

const ScoreValue = () => {
  const score = useAppSelector((state: RootState) => state.score.value);
  return <div style={{ color: "white" }}>{score}</div>;
};

export default ScoreValue;
