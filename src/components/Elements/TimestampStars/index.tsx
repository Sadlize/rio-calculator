import cx from 'clsx';
import { useAppDispatch, useAppSelector } from 'redux/store';
import { TDungeonKeys, TDungeonWeeks } from 'utils/dungeons';
import { jsxRepeatCode } from 'utils/helpers';
import { memo } from 'react';
import { setStarNumber } from 'redux/slices/starSlice';
import { TStarNumber } from 'redux/slices';
import styles from './TimestampStars.module.css';

type TProps = {
  dungeon: TDungeonKeys;
  week: TDungeonWeeks;
};

const TimestampStars = memo(function TimestampStars({ dungeon, week }: TProps) {
  const dispatch = useAppDispatch();
  const currentStar = useAppSelector((state) => state.stars[dungeon][week]);

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
});

export default TimestampStars;
