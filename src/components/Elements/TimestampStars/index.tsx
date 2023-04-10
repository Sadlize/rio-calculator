import cx from 'clsx';
import { useAppDispatch } from 'redux/store';
import { setTimestampScore } from 'redux/slices';
import { TDungeonKeys, TDungeonWeeks } from 'utils/dungeons';
import { jsxRepeatCode } from 'utils/helpers';
import { memo } from 'react';
import styles from './TimestampStars.module.css';

export type TStars = 0 | 1 | 2 | 3;

type TProps = {
  currentStar: TStars;
  dungeon: TDungeonKeys;
  week: TDungeonWeeks;
  starTimers: Array<number>;
  timestampStep: number;
};

const TimestampStars = memo(
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
        {jsxRepeatCode(4).map((item) => (
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
                [styles.checkmark_active]: currentStar >= item && item !== 0,
              })}
            />
          </div>
        ))}
      </div>
    );
  },
  (prevProps, nextProps) => prevProps.currentStar === nextProps.currentStar,
);
//
// // eslint-disable-next-line
// const TimestampStars2 = memo(function TimestampStars2({
//   currentStar,
//   dungeon,
//   week,
//   starTimers,
//   timestampStep,
// }: TProps) {
//   // const dispatch = useAppDispatch();
//   console.log('Greeting was rendered at', new Date().toLocaleTimeString());
//   return (
//     <div className={styles.base}>
//       {jsxRepeatCode(4).map((item) => (
//         <div key={item} className={styles.container}>
//           <input
//             type="radio"
//             name={`${item}`}
//             // onClick={() => {
//             //   dispatch(
//             //     setTimestampScore({
//             //       amount: starTimers[item],
//             //       step: timestampStep,
//             //       dungeon,
//             //       week,
//             //     }),
//             //   );
//             // }}
//           />
//           <span
//             className={cx(styles.checkmark, {
//               [styles.checkmark_active]: currentStar >= item && item !== 0,
//             })}
//           />
//         </div>
//       ))}
//     </div>
//   );
// });

export default TimestampStars;
