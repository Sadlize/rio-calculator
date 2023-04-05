'use client';

import cx from 'clsx';
import styles from 'components/Elements/DungeonInput/DungeonInput.module.css';
import { Transition } from 'react-transition-group';
import { useRef } from 'react';
import {
  dungeonMaxTimestamp,
  TDungeonKeys,
  TDungeonWeeks,
} from 'utils/dungeons';
import { RootState, useAppDispatch, useAppSelector } from 'redux/store';
import { setTimestampScore } from 'redux/slices';
import TimestampStars from 'components/Elements/TimestampStars';

type TProps = {
  type: boolean;
  dungeon: TDungeonKeys;
  week: TDungeonWeeks;
};

function TimestampSlider({ type, dungeon, week }: TProps) {
  const score = useAppSelector((state: RootState) => state.score[dungeon]);

  const $timestampNode = useRef(null);
  const timestampCurrentValue =
    dungeonMaxTimestamp[dungeon] - score[week].clearTimeMS;
  const timestampMaxValue = Math.round(dungeonMaxTimestamp[dungeon] * 0.4);
  const timestampMinValue = timestampMaxValue * -1;
  const timestampStep = timestampMaxValue * 0.02;

  const dispatch = useAppDispatch();

  return (
    <Transition
      mountOnEnter
      unmountOnExit
      nodeRef={$timestampNode}
      in={type}
      timeout={{
        appear: 0,
        exit: 300,
      }}
    >
      {(status) => (
        <div
          ref={$timestampNode}
          className={cx(styles.timestamp, {
            [styles.timestamp_show]: status === 'entered',
          })}
        >
          <TimestampStars />
          <input
            type="range"
            min={timestampMinValue}
            max={timestampMaxValue}
            step={timestampStep}
            value={timestampCurrentValue}
            onChange={(e) => {
              dispatch(
                setTimestampScore({
                  amount: +e.target.value,
                  step: timestampStep,
                  dungeon,
                  week,
                }),
              );
            }}
          />
        </div>
      )}
    </Transition>
  );
}

export default TimestampSlider;
