"use client";

import cx from "clsx";
import styles from "components/Elements/DungeonInput/DungeonInput.module.css";
import { Transition } from "react-transition-group";
import { useRef, useState } from "react";

type TProps = {
  type: boolean;
  minValue: number;
  maxValue: number;
  step: number;
};

const TimestampSlider = ({ type, minValue, maxValue, step }: TProps) => {
  const $timestampNode = useRef(null);
  const [timestampValue, setTimestampValue] = useState(0);

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
      {status => (
        <div
          ref={$timestampNode}
          className={cx(styles.timestamp, {
            [styles.timestamp_show]: status === "entered",
          })}
        >
          <input
            type="range"
            min={minValue}
            max={maxValue}
            step={step}
            value={timestampValue}
            onChange={e => {
              setTimestampValue(+e.target.value);
            }}
          />
        </div>
      )}
    </Transition>
  );
};

export default TimestampSlider;
