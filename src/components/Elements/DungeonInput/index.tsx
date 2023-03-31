"use client";

import styles from "./DungeonInput.module.css";
import { useEffect, useRef, useState, FocusEvent } from "react";
import Image, { TDungeonImage } from "components/Elements/Image";
import { checkClickOutsideRef } from "utils/checkClickOutsideRef";
import { Transition } from "react-transition-group";
import cx from "clsx";
import { isInputValueNumber } from "utils/helpers";
import { RootState, useAppDispatch, useAppSelector } from "redux/store";
import { setDungeonScore } from "redux/slices";
import { TDungeonKeys, TDungeonWeeks } from "utils/dungeons";
import { isFocusInside } from "utils/focus";

type TProps = {
  abbreviation: TDungeonKeys;
  dungeonName: string;
  img_background: TDungeonImage;
};

const DungeonInput = ({
  abbreviation,
  dungeonName,
  img_background,
}: TProps) => {
  const dispatch = useAppDispatch();
  const score = useAppSelector((state: RootState) => state.score[abbreviation]);

  const tyrannicalKeyLevel = score.Tyrannical;
  const fortifiedKeyLevel = score.Fortified;

  const [rangeSliderType, setRangeSliderType] = useState<
    undefined | TDungeonWeeks
  >(undefined);

  const $dungeonCardNode = useRef(null);
  const $timestampNode = useRef(null);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (rangeSliderType) {
        if (checkClickOutsideRef(e, $dungeonCardNode)) {
          setRangeSliderType(undefined);
        }
      }
    };
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [rangeSliderType]);

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (!isFocusInside(e)) {
      setRangeSliderType(undefined);
    }
  };

  return (
    <div ref={$dungeonCardNode} className={styles.base} onBlur={handleBlur}>
      <h2>{dungeonName}</h2>
      <div className={styles.content}>
        <div className={styles.inputs}>
          <input
            value={tyrannicalKeyLevel || ""}
            placeholder={"0"}
            maxLength={2}
            onFocus={() => {
              setRangeSliderType("Tyrannical");
            }}
            onChange={e => {
              if (isInputValueNumber(e.target.value)) {
                dispatch(
                  setDungeonScore({
                    amount: +e.target.value,
                    dungeon: abbreviation,
                    week: "Tyrannical",
                  })
                );
              }
            }}
          />
          <input
            value={fortifiedKeyLevel || ""}
            placeholder={"0"}
            maxLength={2}
            onFocus={() => {
              setRangeSliderType("Fortified");
            }}
            onChange={e => {
              if (isInputValueNumber(e.target.value)) {
                dispatch(
                  setDungeonScore({
                    amount: +e.target.value,
                    dungeon: abbreviation,
                    week: "Fortified",
                  })
                );
              }
            }}
          />
        </div>
      </div>
      <Transition
        mountOnEnter
        unmountOnExit
        nodeRef={$timestampNode}
        in={!!rangeSliderType}
        timeout={{
          appear: 0,
          exit: 300,
        }}
      >
        {status => (
          <div
            ref={$timestampNode}
            className={cx(styles.timestamp, {
              [styles.timestamp_show]: status === "entered",
            })}
          >
            <input type="range" min="-840400" max="840400" step="16808" />
            {/*{currentInputType === "Tyrannical" && 123}*/}
            {/*{currentInputType === "Fortified" && 456}*/}
          </div>
        )}
      </Transition>
      <div className={styles.background}>
        <Image
          priority
          alt={img_background.alt}
          src={img_background.src}
          blurDataUrl={img_background.blurDataUrl}
          layout={"cover"}
        />
      </div>
    </div>
  );
};

export default DungeonInput;
