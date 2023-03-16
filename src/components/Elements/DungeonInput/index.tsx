"use client";

import styles from "./DungeonInput.module.css";
import { useState } from "react";
import Image from "next/image";
import { DungeonImage } from "components/Modules/Calculator";

type TProps = {
  dungeonName: string;
  img_frontal: DungeonImage;
  img_background: DungeonImage;
};

const DungeonInput = ({ dungeonName, img_frontal, img_background }: TProps) => {
  const [tyrannicalKeyLevel, setTyrannicalKeyLevel] = useState(0);
  const [fortifiedKeyLevel, setFortifiedKeyLevel] = useState(0);

  return (
    <div className={styles.base}>
      <div className={styles.content}>
        <div className={styles.affixes}>
          {/*<img alt="" src="images/affixes/tyrannical.jpg" />*/}
          {/*<img alt="" src="images/affixes/fortified.jpg" />*/}
        </div>
        <div className={styles.inputs}>
          {/*<img alt="" src="images/affixes/tyrannical.jpg" />*/}
          <input
            value={tyrannicalKeyLevel}
            onChange={e => {
              setTyrannicalKeyLevel(+e.target.value);
            }}
          />
          <input
            value={fortifiedKeyLevel}
            onChange={e => {
              setFortifiedKeyLevel(+e.target.value);
            }}
          />
          {/*<img alt="" src="images/affixes/fortified.jpg" />*/}
        </div>
        <div className={styles.image}>
          <Image alt="" src={img_frontal} width={2000} height={1000} />
        </div>
      </div>
      <h2>{dungeonName}</h2>
      <div className={styles.background}>
        <Image alt="" src={img_background} width={2000} height={1000} />
      </div>
    </div>
  );
};

export default DungeonInput;
