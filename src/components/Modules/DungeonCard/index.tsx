'use client';

import { useEffect, useRef, useState } from 'react';
import Image, { TDungeonImage } from 'components/Elements/Image';
import checkClickOutsideRef from 'utils/checkClickOutsideRef';
import { isInputValueNumber } from 'utils/helpers';
import { useAppDispatch, useAppSelector } from 'redux/store';
import { setDungeonScore } from 'redux/slices';
import { TDungeonKeys, TDungeonWeeks } from 'utils/dungeons';
import Timestamp from 'components/Modules/Timestamp';
import cx from 'clsx';
import { setTimestampValue } from 'redux/slices/timestampSlice';
import styles from './DungeonCard.module.css';

type TProps = {
  abbreviation: TDungeonKeys;
  dungeonName: string;
  imgBackground: TDungeonImage;
};

function DungeonCard({ abbreviation, dungeonName, imgBackground }: TProps) {
  const score = useAppSelector((state) => state.score[abbreviation]);

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

  const dispatch = useAppDispatch();
  function onChangeInputHandler(value: number, week: TDungeonWeeks): void {
    if (isInputValueNumber(value)) {
      dispatch(
        setDungeonScore({
          value,
          dungeon: abbreviation,
          week,
        }),
      );
      dispatch(
        setTimestampValue({
          value: 0,
          dungeon: abbreviation,
          week,
        }),
      );
    }
  }

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
              onChangeInputHandler(+e.target.value, 'Tyrannical');
            }}
          />
          <Timestamp
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
              onChangeInputHandler(+e.target.value, 'Fortified');
            }}
          />
          <Timestamp
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

export default DungeonCard;
