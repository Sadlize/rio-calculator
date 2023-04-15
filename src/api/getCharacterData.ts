import { TInitialObj } from 'redux/slices';
import { TDungeonKeys, TDungeonWeeks } from 'utils/dungeons';

async function getRIOData(region: string, realm: string, name: string) {
  const res = await fetch(
    `https://raider.io/api/v1/characters/profile?region=${region}&realm=${realm}&name=${name}&fields=mythic_plus_best_runs%2Cmythic_plus_alternate_runs`,
  );
  return res.json();
}

async function refactorRIODataHandler(
  region: string,
  realm: string,
  name: string,
) {
  const data = await getRIOData(region, realm, name);

  if (data.ok === false || data.statusCode === 400) {
    return data;
  }
  const bestRuns = [
    ...data.mythic_plus_best_runs,
    ...data.mythic_plus_alternate_runs,
  ];
  const bestScores = {
    scores: {} as TInitialObj,
    keyLevels: {} as TInitialObj,
    timestamps: {} as TInitialObj,
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

export default refactorRIODataHandler;
