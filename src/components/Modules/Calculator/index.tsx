import DungeonInput from 'components/Modules/DungeonCard';
import { TLocale } from '@/projectSettings';
import { getDungeons } from 'utils/dungeons';
import styles from './Calculator.module.scss';

const Calculator = async ({ locale }: { locale: TLocale }) => {
  const dungeons = await getDungeons(locale);
  return (
    <div className={styles.base}>
      <div className={styles.dungeons_wrapper}>
        {dungeons.map((dungeon) => (
          <DungeonInput
            key={dungeon.id}
            abbreviation={dungeon.abbreviation}
            dungeonName={dungeon.name}
            imgBackground={dungeon.imgBackground}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
