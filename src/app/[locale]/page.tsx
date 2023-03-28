import styles from "../Page.module.css";
import { TParams } from "./layout";
import Calculator from "components/Modules/Calculator";
import LanguageSwitcher from "components/Modules/LanguageSwitcher";
import CharacterImport from "components/Modules/CharacterImport";
import ScoreValue from "components/Modules/ScoreValue";
import ReduxProvider from "redux/ReduxProvider";

const Home = ({ params }: TParams) => {
  const { locale } = params;
  return (
    <ReduxProvider>
      <header className={styles.header}>
        <div className={styles.header__items}>
          <LanguageSwitcher locale={locale} />
          <ScoreValue />
          {/* @ts-expect-error Server Component */}
          <CharacterImport locale={locale} />
        </div>
      </header>
      <main className={styles.main}>
        {/* @ts-expect-error Server Component */}
        <Calculator locale={locale} />
      </main>
    </ReduxProvider>
  );
};

export default Home;
