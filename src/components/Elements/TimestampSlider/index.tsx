import { TDungeonKeys, TDungeonWeeks } from 'utils/dungeons';
import { useAppDispatch, useAppSelector } from 'redux/store';
import useTimestamp from 'hooks/useTimestamp';
import { setStarNumber } from 'redux/slices/starSlice';
import { setTimestampValue } from 'redux/slices/timestampSlice';
import { useCallback, useEffect } from 'react';

type TProps = {
  dungeon: TDungeonKeys;
  week: TDungeonWeeks;
  setTimestampSliderType: React.Dispatch<
    React.SetStateAction<undefined | TDungeonWeeks>
  >;
};

function TimestampSlider({ dungeon, week, setTimestampSliderType }: TProps) {
  const { currentValue, minValue, maxValue, step } = useTimestamp(
    dungeon,
    week,
  );
  const stars = useAppSelector((state) => state.stars[dungeon][week]);

  const dispatch = useAppDispatch();
  const dispatchStars = useCallback(
    function dispatchStars(number: number) {
      dispatch(
        setStarNumber({
          amount: number,
          dungeon,
          week,
        }),
      );
    },
    [dispatch, dungeon, week],
  );

  useEffect(() => {
    if (currentValue < 0 && stars !== 0) {
      dispatchStars(0);
    }
    if (currentValue >= 0 && currentValue < maxValue / 2 && stars !== 1) {
      dispatchStars(1);
    }
    if (
      currentValue >= maxValue / 2 &&
      currentValue < maxValue &&
      stars !== 2
    ) {
      dispatchStars(2);
    }
    if (currentValue === maxValue) {
      dispatchStars(3);
    }
  }, [currentValue, dispatchStars, maxValue, stars]);

  return (
    <input
      type="range"
      min={minValue}
      max={maxValue}
      step={step}
      value={currentValue}
      onBlur={() => {
        setTimestampSliderType(undefined);
      }}
      onChange={(e) => {
        const value = +e.target.value;
        dispatch(
          setTimestampValue({
            value,
            dungeon,
            week,
          }),
        );
      }}
    />
  );
}

export default TimestampSlider;
