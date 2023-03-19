import styles from "../Page.module.css";
import { TParams } from "./layout";
import Calculator from "components/Modules/Calculator";
import LanguageSwitcher from "components/Modules/LanguageSwitcher";

const Home = ({ params }: TParams) => {
  const { locale } = params;

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__items}>
          <LanguageSwitcher locale={locale} />
        </div>
      </header>
      <main className={styles.main}>
        {/* @ts-expect-error Server Component */}
        <Calculator locale={locale} />
      </main>
    </>
  );
};

export default Home;
