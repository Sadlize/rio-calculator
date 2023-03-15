import styles from "../Page.module.css";
import { TParams } from "./layout";
import Calculator from "components/Modules/Calculator";

const Home = ({ params }: TParams) => {
  const { locale } = params;
  return (
    <main className={styles.main}>
      {locale}
      <Calculator />
    </main>
  );
};

export default Home;
