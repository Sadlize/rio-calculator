import cx from 'clsx';
import { useAppDispatch, useAppSelector } from 'redux/store';
import {
  getDungeonLimitTimestampValues,
  TDungeonKeys,
  TDungeonWeeks,
} from 'utils/dungeons';
import { jsxRepeatCode } from 'utils/helpers';
import { setStarNumber } from 'redux/slices/starSlice';
import { TStarNumber } from 'redux/slices';
import { setTimestampValue } from 'redux/slices/timestampSlice';
import { setScoreValue } from 'redux/slices/scoreSlice';
import styles from './TimestampStars.module.scss';

type TProps = {
  dungeon: TDungeonKeys;
  week: TDungeonWeeks;
};

function TimestampStars({ dungeon, week }: TProps) {
  const dispatch = useAppDispatch();
  const currentStar = useAppSelector((state) => state.stars[dungeon][week]);
  const keyLevel = useAppSelector((state) => state.keyLevels[dungeon][week]);
  const { minValue, maxValue } = getDungeonLimitTimestampValues(dungeon);
  const starTimestampValue = new Map([
    [0, minValue],
    [1, 0],
    [2, maxValue / 2],
    [3, maxValue],
  ]);

  return (
    <div className={styles.base}>
      {jsxRepeatCode(4).map((star) => (
        <div key={star} className={styles.container}>
          <input
            type="radio"
            name={`${star}`}
            onClick={() => {
              dispatch(
                setStarNumber({ number: star as TStarNumber, dungeon, week }),
              );
              const value = starTimestampValue.get(star) as number;
              dispatch(
                setTimestampValue({
                  value,
                  dungeon,
                  week,
                }),
              );
              dispatch(
                setScoreValue({
                  keyLevel,
                  timestamp: value,
                  dungeon,
                  week,
                }),
              );
            }}
          />
          <span
            className={cx(styles.checkmark, {
              [styles.checkmark_active]: currentStar >= star && star !== 0,
            })}
          />
        </div>
      ))}
    </div>
  );
}

export default TimestampStars;
