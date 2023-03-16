"use client";

import styles from "./DungeonInput.module.css";
import { useState } from "react";
import Image, { TDungeonImage } from "components/Elements/Image";

type TProps = {
  dungeonName: string;
  img_frontal: TDungeonImage;
  img_background: TDungeonImage;
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
          <Image alt={img_frontal.alt} src={img_frontal.src} layout={"cover"} />
        </div>
      </div>
      <h2>{dungeonName}</h2>
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
