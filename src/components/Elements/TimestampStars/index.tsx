import cx from 'clsx';
import { useAppDispatch } from 'redux/store';
import { setTimestampScore } from 'redux/slices';
import { TDungeonKeys, TDungeonWeeks } from 'utils/dungeons';
import styles from './TimestampStars.module.css';

export type TStars = 0 | 1 | 2 | 3;

type TProps = {
  currentStar: TStars;
  dungeon: TDungeonKeys;
  week: TDungeonWeeks;
  starTimers: Array<number>;
  timestampStep: number;
};

function TimestampStars({
  currentStar,
  dungeon,
  week,
  starTimers,
  timestampStep,
}: TProps) {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.base}>
      {[0, 1, 2, 3].map((item) => (
        <div key={item} className={styles.container}>
          <input
            type="radio"
            name={`${item}`}
            onClick={() => {
              dispatch(
                setTimestampScore({
                  amount: starTimers[item],
                  step: timestampStep,
                  dungeon,
                  week,
                }),
              );
            }}
          />
          <span
            className={cx(styles.checkmark, {
              [styles.checkmark_active]: currentStar >= item,
            })}
          />
        </div>
      ))}
    </div>
  );
}

export default TimestampStars;
