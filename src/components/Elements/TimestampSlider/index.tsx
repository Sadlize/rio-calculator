'use client';

import cx from 'clsx';
import { Transition } from 'react-transition-group';
import { useRef } from 'react';
import {
  dungeonMaxTimestamp,
  TDungeonKeys,
  TDungeonWeeks,
} from 'utils/dungeons';
import { RootState, useAppDispatch, useAppSelector } from 'redux/store';
import { setTimestampScore } from 'redux/slices';
import TimestampStars, { TStars } from 'components/Elements/TimestampStars';
import styles from './TimestampSlider.module.css';

type TProps = {
  type: boolean;
  dungeon: TDungeonKeys;
  week: TDungeonWeeks;
  setTimestampSliderType: React.Dispatch<
    React.SetStateAction<undefined | TDungeonWeeks>
  >;
};

function TimestampSlider({
  type,
  dungeon,
  week,
  setTimestampSliderType,
}: TProps) {
  const score = useAppSelector((state: RootState) => state.score[dungeon]);

  const $timestampNode = useRef(null);
  const timestampCurrentValue =
    dungeonMaxTimestamp[dungeon] - score[week].clearTimeMS;
  const timestampMaxValue = Math.round(dungeonMaxTimestamp[dungeon] * 0.4);
  const timestampMinValue = timestampMaxValue * -1;
  const timestampStep = timestampMaxValue * 0.02;
  const dispatch = useAppDispatch();

  const currentStar = ([
    timestampMinValue,
    0,
    timestampMaxValue / 2,
    timestampMaxValue,
  ].filter((i) => i <= timestampCurrentValue).length - 1) as TStars;

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
        <div ref={$timestampNode} className={styles.base}>
          <div
            className={cx(styles.content, {
              [styles.content_show]: status === 'entered',
            })}
          >
            <TimestampStars
              currentStar={currentStar}
              dungeon={dungeon}
              week={week}
              starTimers={[
                timestampMinValue,
                0,
                timestampMaxValue / 2,
                timestampMaxValue,
              ]}
              timestampStep={timestampStep}
            />
            <input
              type="range"
              min={timestampMinValue}
              max={timestampMaxValue}
              step={timestampStep}
              value={timestampCurrentValue}
              onBlur={() => {
                setTimestampSliderType(undefined);
              }}
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
        </div>
      )}
    </Transition>
  );
}

export default TimestampSlider;
