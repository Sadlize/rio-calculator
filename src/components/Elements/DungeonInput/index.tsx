'use client';

import { FocusEvent, useEffect, useRef, useState } from 'react';
import Image, { TDungeonImage } from 'components/Elements/Image';
import checkClickOutsideRef from 'utils/checkClickOutsideRef';
import isInputValueNumber from 'utils/helpers';
import { RootState, useAppDispatch, useAppSelector } from 'redux/store';
import { setDungeonScore } from 'redux/slices';
import { TDungeonKeys, TDungeonWeeks } from 'utils/dungeons';
import isFocusInside from 'utils/focus';
import TimestampSlider from 'components/Elements/TimestampSlider';
import styles from './DungeonInput.module.css';

type TProps = {
  abbreviation: TDungeonKeys;
  dungeonName: string;
  imgBackground: TDungeonImage;
};

function DungeonInput({ abbreviation, dungeonName, imgBackground }: TProps) {
  const dispatch = useAppDispatch();
  const score = useAppSelector((state: RootState) => state.score[abbreviation]);

  const tyrannicalKeyLevel = score.Tyrannical.mythic_level;
  const fortifiedKeyLevel = score.Fortified.mythic_level;

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

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (!isFocusInside(e)) {
      setTimestampSliderType(undefined);
    }
  };

  return (
    <div ref={$dungeonCardNode} className={styles.base} onBlur={handleBlur}>
      <h2>{dungeonName}</h2>
      <div className={styles.content}>
        <div className={styles.inputs}>
          <input
            value={tyrannicalKeyLevel || ''}
            placeholder="0"
            maxLength={2}
            onFocus={() => {
              setTimestampSliderType('Tyrannical');
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
            minValue={-840400}
            maxValue={840400}
            step={16808}
          />
          <input
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
            minValue={-840400}
            maxValue={840400}
            step={16808}
          />
        </div>
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
