import {
  dungeonMaxTimestamp,
  TDungeonKeys,
  TDungeonObj,
  TDungeonWeeks,
} from 'utils/dungeons';

export type TStarNumber = 0 | 1 | 2 | 3;

type TPayloadBase = {
  dungeon: TDungeonKeys;
  week: TDungeonWeeks;
};

export type TPayloadValue = TPayloadBase & {
  value: number;
};

export type TPayloadStars = TPayloadBase & {
  number: TStarNumber;
};

export type TPayloadScore = TPayloadBase & {
  keyLevel: number;
  timestamp?: number;
};

export type TInitialObj = {
  [dungeon in TDungeonKeys]: { [week in TDungeonWeeks]: number };
};

export function getInitialSliceObject(
  value: number | TDungeonObj,
): TInitialObj {
  const type = typeof value === 'object';
  return Object.keys(type ? value : dungeonMaxTimestamp).reduce(
    (acc, dungeon) => ({
      ...acc,
      [dungeon]: {
        Tyrannical: type ? value[dungeon as TDungeonKeys] : value,
        Fortified: type ? value[dungeon as TDungeonKeys] : value,
      },
    }),
    {} as TInitialObj,
  );
}
