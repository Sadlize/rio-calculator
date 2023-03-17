import styles from "../Page.module.css";
import { TParams } from "./layout";
import Calculator from "components/Modules/Calculator";
import LanguageSwitcher from "components/Modules/LanguageSwitcher";

const Home = ({ params }: TParams) => {
  const { locale } = params;

  return (
    <main className={styles.main}>
      <LanguageSwitcher locale={locale} />
      {locale}
      {/* @ts-expect-error Server Component */}
      <Calculator locale={locale} />
    </main>
  );
};

export default Home;
