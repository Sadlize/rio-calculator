import styles from "./Calculator.module.css";
import DungeonInput from "components/Elements/DungeonInput";

export type Dungeon = {
  id: number;
  name: string;
  img_frontal: DungeonImage;
  img_background: DungeonImage;
  icon?: string;
};

export type DungeonImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

const Calculator = () => {
  const dungeons: Array<Dungeon> = [
    {
      id: 0,
      name: "Algeth'ar Academy",
      img_frontal: {
        src: "/images/dungeons/frontals/algethar-academy.jpg",
        width: 1800,
        height: 692,
        alt: "",
      },
      img_background: {
        src: "/images/dungeons/backgrounds/algethar-academy.jpg",
        width: 1280,
        height: 720,
        alt: "",
      },
      icon: "",
    },
    // {
    //   id: 1,
    //   name: "Temple of the Jade Serpent",
    //   img_frontal:
    //     "https://cdnassets.raider.io/images/dungeons/expansion4/base/temple-of-the-jade-serpent.jpg",
    //   img_background:
    //     "https://wow.zamimg.com/uploads/guide/header/18760.jpg?1670808293&maxWidth=1630",
    // },
    // {
    //   id: 2,
    //   name: "Shadowmoon Burial Grounds",
    //   img_frontal:
    //     "https://cdnassets.raider.io/images/dungeons/expansion5/base/shadowmoon-burial-grounds.jpg",
    //   img_background:
    //     "https://cdnassets.raider.io/images/dungeons/expansion5/base/shadowmoon-burial-grounds.jpg",
    //   icon: "images/dungeons/icons/shadowmoon-burial-grounds.jpg",
    // },
    // {
    //   id: 3,
    //   name: "The Nokhud Offensive",
    //   img_frontal:
    //     "https://cdnassets.raider.io/images/dungeons/expansion9/base/the-nokhud-offensive.jpg",
    //   img_background:
    //     "https://wow.zamimg.com/uploads/guide/header/16467.jpg?1658149617&maxWidth=1630",
    //   icon: "images/dungeons/icons/shadowmoon-burial-grounds.jpg",
    // },
    // {
    //   id: 4,
    //   name: "Court of Stars",
    //   img_frontal:
    //     "https://cdnassets.raider.io/images/dungeons/expansion6/base/court-of-stars.jpg",
    //   img_background:
    //     "https://wow.zamimg.com/uploads/guide/header/18759.jpg?1670797583&maxWidth=1630",
    // },
    // {
    //   id: 5,
    //   name: "Ruby Life Pools",
    //   img_frontal:
    //     "https://cdnassets.raider.io/images/dungeons/expansion9/base/ruby-life-pools.jpg",
    //   img_background:
    //     "https://wow.zamimg.com/uploads/guide/header/17811.jpg?1669415775&maxWidth=1630",
    // },
    // {
    //   id: 6,
    //   name: "The Azure Vault",
    //   img_frontal:
    //     "https://cdnassets.raider.io/images/dungeons/expansion9/base/the-azure-vault.jpg",
    //   img_background:
    //     "https://wow.zamimg.com/uploads/guide/header/17808.jpg?1669416036&maxWidth=1630",
    // },
    // {
    //   id: 7,
    //   name: "Halls of Valor",
    //   img_frontal:
    //     "https://cdnassets.raider.io/images/dungeons/expansion6/base/halls-of-valor.jpg",
    //   img_background:
    //     "https://wow.zamimg.com/uploads/guide/header/18657.jpg?1670809010&maxWidth=1630",
    // },
  ];
  return (
    <div className={styles.base}>
      <div className={styles.dungeons_wrapper}>
        {dungeons.map(dungeon => (
          <DungeonInput
            key={dungeon.id}
            dungeonName={dungeon.name}
            img_frontal={dungeon.img_frontal}
            img_background={dungeon.img_background}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
