import {
  dungeonMaxTimestamp,
  TDungeonKeys,
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

export function getInitialSliceObject(value: number | object): TInitialObj {
  return Object.keys(dungeonMaxTimestamp).reduce(
    (acc, dungeon) => ({
      ...acc,
      [dungeon]: {
        Tyrannical:
          typeof value === 'object'
            ? dungeonMaxTimestamp[dungeon as TDungeonKeys]
            : value,
        Fortified:
          typeof value === 'object'
            ? dungeonMaxTimestamp[dungeon as TDungeonKeys]
            : value,
      },
    }),
    {} as TInitialObj,
  );
}
