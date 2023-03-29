import styles from "./Calculator.module.css";
import DungeonInput from "components/Elements/DungeonInput";
import { TLocale } from "@/projectSettings";
import { getDungeons } from "utils/dungeons";

const Calculator = async ({ locale }: { locale: TLocale }) => {
  const dungeons = await getDungeons(locale);
  return (
    <div className={styles.base}>
      <div className={styles.dungeons_wrapper}>
        {dungeons.map(dungeon => (
          <DungeonInput
            key={dungeon.id}
            abbreviation={dungeon.abbreviation}
            dungeonName={dungeon.name}
            img_background={dungeon.img_background}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
