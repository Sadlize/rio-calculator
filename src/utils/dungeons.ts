import { TDungeonImage } from "components/Elements/Image";
import { Locale } from "@/projectSettings";
import { getDictionary } from "utils/dictionaries";

export type Dungeon = {
  id: number;
  name: string;
  img_background: TDungeonImage;
};

export const getDungeons = async (locale: Locale): Promise<Array<Dungeon>> => {
  const dict = await getDictionary(locale);
  return [
    {
      id: 0,
      name: dict.Dungeons.algethar_academy,
      img_background: {
        src: "/images/dungeons/backgrounds/algethar-academy.jpg",
        alt: dict.Dungeons.algethar_academy,
      },
    },
    {
      id: 1,
      name: dict.Dungeons.temple_of_the_jade_serpent,
      img_background: {
        src: "/images/dungeons/backgrounds/temple-of-the-jade-serpent.jpg",
        alt: dict.Dungeons.temple_of_the_jade_serpent,
      },
    },
    {
      id: 2,
      name: dict.Dungeons.shadowmoon_burial_grounds,
      img_background: {
        src: "/images/dungeons/backgrounds/shadowmoon-burial-grounds.jpg",
        alt: dict.Dungeons.shadowmoon_burial_grounds,
      },
    },
    {
      id: 3,
      name: dict.Dungeons.the_nokhud_offensive,
      img_background: {
        src: "/images/dungeons/backgrounds/the-nokhud-offensive.jpg",
        alt: dict.Dungeons.the_nokhud_offensive,
      },
    },
    {
      id: 4,
      name: dict.Dungeons.court_of_stars,
      img_background: {
        src: "/images/dungeons/backgrounds/court-of-stars.jpg",
        alt: dict.Dungeons.court_of_stars,
      },
    },
    {
      id: 5,
      name: dict.Dungeons.ruby_life_pools,
      img_background: {
        src: "/images/dungeons/backgrounds/ruby-life-pools.jpg",
        alt: dict.Dungeons.ruby_life_pools,
      },
    },
    {
      id: 6,
      name: dict.Dungeons.the_azure_vault,
      img_background: {
        src: "/images/dungeons/backgrounds/the-azure-vault.jpg",
        alt: dict.Dungeons.the_azure_vault,
      },
    },
    {
      id: 7,
      name: dict.Dungeons.halls_of_valor,
      img_background: {
        src: "/images/dungeons/backgrounds/halls-of-valor.jpg",
        alt: dict.Dungeons.halls_of_valor,
      },
    },
  ];
};
