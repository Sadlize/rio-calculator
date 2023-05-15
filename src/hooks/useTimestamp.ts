import {
  dungeonMaxTimestamp,
  getDungeonLimitTimestampValues,
  TDungeonKeys,
  TDungeonWeeks,
} from 'utils/dungeons';
import { useAppSelector } from 'redux/store';

function useTimestamp(
  dungeon: TDungeonKeys,
  week: TDungeonWeeks,
): {
  currentValue: number;
  minValue: number;
  maxValue: number;
  step: number;
} {
  const timestamp = useAppSelector((state) => state.timestamps[dungeon][week]);
  const currentValue = dungeonMaxTimestamp[dungeon] - timestamp;
  const { minValue, maxValue } = getDungeonLimitTimestampValues(dungeon);
  const step = maxValue * 0.02;

  return {
    currentValue,
    minValue,
    maxValue,
    step,
  };
}

export default useTimestamp;
