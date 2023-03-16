import styles from "./Calculator.module.css";
import DungeonInput from "components/Elements/DungeonInput";
import { TDungeonImage } from "components/Elements/Image";
import { getDictionary } from "utils/dictionaries";
import { Locale } from "@/projectSettings";

export type Dungeon = {
  id: number;
  name: string;
  img_frontal: TDungeonImage;
  img_background: TDungeonImage;
  icon?: string;
};

const Calculator = async ({ locale }: { locale: Locale }) => {
  const dict = await getDictionary(locale);

  const dungeons: Array<Dungeon> = [
    {
      id: 0,
      name: dict.Dungeons.algethar_academy,
      img_frontal: {
        src: "/images/dungeons/frontals/algethar-academy.jpg",
        // width: 1800,
        // height: 692,
        alt: dict.Dungeons.algethar_academy,
      },
      img_background: {
        src: "/images/dungeons/backgrounds/algethar-academy.jpg",
        // width: 1280,
        // height: 720,
        alt: dict.Dungeons.algethar_academy,
      },
      icon: "",
    },
    {
      id: 1,
      name: dict.Dungeons.temple_of_the_jade_serpent,
      img_frontal: {
        src: "/images/dungeons/frontals/temple-of-the-jade-serpent.jpg",
        // width: 1365,
        // height: 563,
        alt: dict.Dungeons.temple_of_the_jade_serpent,
      },
      img_background: {
        src: "/images/dungeons/backgrounds/temple-of-the-jade-serpent.jpg",
        // width: 1630,
        // height: 917,
        alt: dict.Dungeons.temple_of_the_jade_serpent,
      },
    },
    {
      id: 2,
      name: dict.Dungeons.shadowmoon_burial_grounds,
      img_frontal: {
        src: "/images/dungeons/backgrounds/shadowmoon-burial-grounds.jpg",
        // width: 1365,
        // height: 563,
        alt: dict.Dungeons.shadowmoon_burial_grounds,
      },
      img_background: {
        src: "/images/dungeons/backgrounds/shadowmoon-burial-grounds.jpg",
        // width: 1365,
        // height: 563,
        alt: dict.Dungeons.shadowmoon_burial_grounds,
      },
      icon: "images/dungeons/icons/shadowmoon-burial-grounds.jpg",
    },
    {
      id: 3,
      name: dict.Dungeons.the_nokhud_offensive,
      img_frontal: {
        src: "/images/dungeons/frontals/the-nokhud-offensive.jpg",
        // width: 1800,
        // height: 692,
        alt: dict.Dungeons.the_nokhud_offensive,
      },
      img_background: {
        src: "/images/dungeons/backgrounds/the-nokhud-offensive.jpg",
        // width: 1280,
        // height: 720,
        alt: dict.Dungeons.the_nokhud_offensive,
      },
      icon: "images/dungeons/icons/shadowmoon-burial-grounds.jpg",
    },
    {
      id: 4,
      name: dict.Dungeons.court_of_stars,
      img_frontal: {
        src: "/images/dungeons/frontals/court-of-stars.jpg",
        alt: dict.Dungeons.court_of_stars,
      },
      img_background: {
        src: "/images/dungeons/backgrounds/court-of-stars.jpg",
        alt: dict.Dungeons.court_of_stars,
      },
    },
    {
      id: 5,
      name: dict.Dungeons.ruby_life_pools,
      img_frontal: {
        src: "/images/dungeons/frontals/ruby-life-pools.jpg",
        alt: dict.Dungeons.ruby_life_pools,
      },
      img_background: {
        src: "/images/dungeons/backgrounds/ruby-life-pools.jpg",
        alt: dict.Dungeons.ruby_life_pools,
      },
    },
    {
      id: 6,
      name: dict.Dungeons.the_azure_vault,
      img_frontal: {
        src: "/images/dungeons/frontals/the-azure-vault.jpg",
        alt: dict.Dungeons.the_azure_vault,
      },
      img_background: {
        src: "/images/dungeons/backgrounds/the-azure-vault.jpg",
        alt: dict.Dungeons.the_azure_vault,
      },
    },
    {
      id: 7,
      name: dict.Dungeons.halls_of_valor,
      img_frontal: {
        src: "/images/dungeons/frontals/halls-of-valor.jpg",
        alt: dict.Dungeons.halls_of_valor,
      },
      img_background: {
        src: "/images/dungeons/backgrounds/halls-of-valor.jpg",
        alt: dict.Dungeons.halls_of_valor,
      },
    },
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
