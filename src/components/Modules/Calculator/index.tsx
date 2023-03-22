import styles from "./Calculator.module.css";
import DungeonInput from "components/Elements/DungeonInput";
import { Locale } from "@/projectSettings";
import { getDungeons } from "utils/dungeons";

const Calculator = async ({ locale }: { locale: Locale }) => {
  const dungeons = await getDungeons(locale);
  return (
    <div className={styles.base}>
      <div className={styles.dungeons_wrapper}>
        {dungeons.map(dungeon => (
          <DungeonInput
            key={dungeon.id}
            dungeonName={dungeon.name}
            img_background={dungeon.img_background}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
