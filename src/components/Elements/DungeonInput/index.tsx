"use client";

import styles from "./DungeonInput.module.css";
import { useEffect, useRef, useState } from "react";
import Image, { TDungeonImage } from "components/Elements/Image";
import { checkClickOutsideRef } from "utils/checkClickOutsideRef";
import { Transition } from "react-transition-group";
import cx from "clsx";

type TProps = {
  dungeonName: string;
  img_frontal: TDungeonImage;
  img_background: TDungeonImage;
};

const DungeonInput = ({ dungeonName, img_frontal, img_background }: TProps) => {
  const [tyrannicalKeyLevel, setTyrannicalKeyLevel] = useState(0);
  const [fortifiedKeyLevel, setFortifiedKeyLevel] = useState(0);

  const [focusTyrannicalInput, setFocusTyrannicalInput] = useState(false);
  const [focusFortifiedInput, setFocusFortifiedInput] = useState(false);

  const $dungeonCardNode = useRef(null);
  const $timestampNode = useRef(null);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (focusTyrannicalInput || focusFortifiedInput) {
        if (checkClickOutsideRef(e, $dungeonCardNode)) {
          focusTyrannicalInput && setFocusTyrannicalInput(false);
          focusFortifiedInput && setFocusFortifiedInput(false);
        }
      }
    };
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [focusFortifiedInput, focusTyrannicalInput]);

  return (
    <div ref={$dungeonCardNode} className={styles.base}>
      <h2>{dungeonName}</h2>
      <div className={styles.content}>
        <div className={styles.affixes}>
          {/*<img alt="" src="/images/affixes/tyrannical.jpg" />*/}
          {/*<img alt="" src="/images/affixes/fortified.jpg" />*/}
        </div>
        <div className={styles.inputs}>
          {/*<img alt="" src="/images/affixes/tyrannical.jpg" />*/}
          <input
            value={tyrannicalKeyLevel}
            onFocus={() => {
              setFocusTyrannicalInput(true);
              setFocusFortifiedInput(false);
            }}
            onChange={e => {
              setTyrannicalKeyLevel(+e.target.value);
            }}
          />
          {/*<div className={styles.timestamp}>123</div>*/}
          <input
            value={fortifiedKeyLevel}
            onFocus={() => {
              setFocusTyrannicalInput(false);
              setFocusFortifiedInput(true);
            }}
            onChange={e => {
              setFortifiedKeyLevel(+e.target.value);
            }}
          />

          {/*<img alt="" src="/images/affixes/fortified.jpg" />*/}
        </div>
        <div className={styles.image}>
          <Image alt={img_frontal.alt} src={img_frontal.src} layout={"cover"} />
        </div>
      </div>
      <Transition
        mountOnEnter
        unmountOnExit
        nodeRef={$timestampNode}
        in={focusTyrannicalInput || focusFortifiedInput}
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
            {/*{focusTyrannicalInput && 123}*/}
            {/*{focusFortifiedInput && 456}*/}
          </div>
        )}
      </Transition>

      <div className={styles.background}>
        <Image
          alt={img_background.alt}
          src={img_background.src}
          layout={"cover"}
        />
      </div>
    </div>
  );
};

export default DungeonInput;
