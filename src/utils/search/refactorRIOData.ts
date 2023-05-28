import { getInitialSliceObject } from 'redux/slices';
import {
  dungeonMaxTimestamp,
  TDungeonKeys,
  TDungeonWeeks,
  TRunStats,
} from 'utils/dungeons';

export type RIOData = {
  mythic_plus_best_runs: TRunStats;
  mythic_plus_alternate_runs: TRunStats;
};

function refactorRIOData(data: RIOData) {
  const bestRuns: TRunStats = [
    ...data.mythic_plus_best_runs,
    ...data.mythic_plus_alternate_runs,
  ];
  const bestScores = {
    scores: getInitialSliceObject(0),
    keyLevels: getInitialSliceObject(0),
    timestamps: getInitialSliceObject(dungeonMaxTimestamp),
  };

  bestRuns.forEach((i) => {
    const dungeon = i.short_name as TDungeonKeys;
    const weeklyAffix = i?.affixes[0].name as TDungeonWeeks;
    bestScores.scores[dungeon] = {
      ...bestScores.scores[dungeon],
      [weeklyAffix]: i.score,
    };
    bestScores.keyLevels[dungeon] = {
      ...bestScores.keyLevels[dungeon],
      [weeklyAffix]: i.mythic_level,
    };
    bestScores.timestamps[dungeon] = {
      ...bestScores.timestamps[dungeon],
      [weeklyAffix]: i.clear_time_ms,
    };
  });

  return bestScores;
}

export default refactorRIOData;
