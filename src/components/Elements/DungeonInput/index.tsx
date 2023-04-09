'use client';

import { useEffect, useRef, useState } from 'react';
import Image, { TDungeonImage } from 'components/Elements/Image';
import checkClickOutsideRef from 'utils/checkClickOutsideRef';
import { isInputValueNumber } from 'utils/helpers';
import { RootState, useAppDispatch, useAppSelector } from 'redux/store';
import { setDungeonScore } from 'redux/slices';
import { TDungeonKeys, TDungeonWeeks } from 'utils/dungeons';
import TimestampSlider from 'components/Elements/TimestampSlider';
import cx from 'clsx';
import styles from './DungeonInput.module.css';

type TProps = {
  abbreviation: TDungeonKeys;
  dungeonName: string;
  imgBackground: TDungeonImage;
};

function DungeonInput({ abbreviation, dungeonName, imgBackground }: TProps) {
  const dispatch = useAppDispatch();
  const score = useAppSelector((state: RootState) => state.score[abbreviation]);

  const tyrannicalKeyLevel = score.Tyrannical.keyLevel;
  const fortifiedKeyLevel = score.Fortified.keyLevel;

  const [timestampSliderType, setTimestampSliderType] = useState<
    undefined | TDungeonWeeks
  >(undefined);

  const $dungeonCardNode = useRef(null);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (timestampSliderType) {
        if (checkClickOutsideRef(e, $dungeonCardNode)) {
          setTimestampSliderType(undefined);
        }
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [timestampSliderType]);

  return (
    <div ref={$dungeonCardNode} className={styles.base}>
      <h2>{dungeonName}</h2>
      <div className={styles.content}>
        <div className={styles.inputs}>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={tyrannicalKeyLevel || ''}
            placeholder="0"
            maxLength={2}
            onFocus={() => {
              setTimestampSliderType('Tyrannical');
            }}
            onKeyDown={(e) => {
              if (e.shiftKey && e.key === 'Tab') {
                setTimestampSliderType(undefined);
              }
            }}
            onChange={(e) => {
              if (isInputValueNumber(e.target.value)) {
                dispatch(
                  setDungeonScore({
                    amount: +e.target.value,
                    dungeon: abbreviation,
                    week: 'Tyrannical',
                  }),
                );
              }
            }}
          />
          <TimestampSlider
            type={timestampSliderType === 'Tyrannical'}
            dungeon={abbreviation}
            week="Tyrannical"
            setTimestampSliderType={setTimestampSliderType}
          />
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={fortifiedKeyLevel || ''}
            placeholder="0"
            maxLength={2}
            onFocus={() => {
              setTimestampSliderType('Fortified');
            }}
            onChange={(e) => {
              if (isInputValueNumber(e.target.value)) {
                dispatch(
                  setDungeonScore({
                    amount: +e.target.value,
                    dungeon: abbreviation,
                    week: 'Fortified',
                  }),
                );
              }
            }}
          />
          <TimestampSlider
            type={timestampSliderType === 'Fortified'}
            dungeon={abbreviation}
            week="Fortified"
            setTimestampSliderType={setTimestampSliderType}
          />
        </div>
        <div
          className={cx(styles.sliderPlaceholder, {
            [styles.sliderPlaceholder_open]: timestampSliderType,
          })}
        />
      </div>
      <div className={styles.background}>
        <Image
          priority
          alt={imgBackground.alt}
          src={imgBackground.src}
          blurDataUrl={imgBackground.blurDataUrl}
          layout="cover"
        />
      </div>
    </div>
  );
}

export default DungeonInput;
