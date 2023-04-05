'use client';

// import { TLocale } from '@/projectSettings';
import Button from 'components/Elements/Button';
// import { getDictionary } from 'utils/dictionaries';
import { useAppDispatch } from 'redux/store';
import { TDungeonKeys, TDungeonObj, TDungeonWeeks } from 'utils/dungeons';
import { setCharacterImport } from 'redux/slices';

async function getRIOData(
  region = 'eu',
  realm = 'tarrenmill',
  name = 'kotyatkie',
) {
  const res = await fetch(
    `https://raider.io/api/v1/characters/profile?region=${region}&realm=${realm}&name=${name}&fields=mythic_plus_best_runs%2Cmythic_plus_alternate_runs`,
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

async function dataHandler() {
  const data = await getRIOData();
  const bestRuns = [
    ...data.mythic_plus_best_runs,
    ...data.mythic_plus_alternate_runs,
  ];
  const bestScores = {} as TDungeonObj;
  bestRuns.forEach((i) => {
    bestScores[i.short_name as TDungeonKeys] = {
      ...bestScores[i.short_name as TDungeonKeys],
      [i?.affixes[0].name as TDungeonWeeks]: {
        keyLevel: i.mythic_level,
        // num_keystone_upgrades: i.num_keystone_upgrades,
        score: i.score,
        clearTimeMS: i.clear_time_ms,
      },
    };
  });

  return bestScores;
}

function CharacterImport() {
  const dispatch = useAppDispatch();

  return (
    <Button
      onClick={async () => {
        const data = await dataHandler();
        dispatch(setCharacterImport(data));
      }}
    >
      Import
    </Button>
  );
}

export default CharacterImport;
