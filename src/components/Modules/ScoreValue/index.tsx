"use client";

import { useState } from "react";

const ScoreValue = () => {
  const [score, setScore] = useState(0);
  return <div>{score}</div>;
};

export default ScoreValue;
