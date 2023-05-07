import Calculator from 'components/Modules/Calculator';
import LanguageSwitcher from 'components/Modules/LanguageSwitcher';
import CharacterImport from 'components/Modules/CharacterImport';
import ScoreValue from 'components/Modules/ScoreValue';
import ReduxProvider from 'redux/ReduxProvider';
import getDictionary from 'utils/dictionaries';
import styles from '../Page.module.scss';
import { TParams } from './layout';

async function Home({ params }: TParams) {
  const { locale } = params;
  const dict = await getDictionary(locale);

  return (
    <ReduxProvider>
      <header className={styles.header}>
        <div className={styles.header__container}>
          <div className={styles.header__items}>
            <LanguageSwitcher locale={locale} />
            <ScoreValue />
            <CharacterImport translations={dict.CharacterImport} />
          </div>
        </div>
      </header>
      <main className={styles.main}>
        {/* @ts-expect-error Server Component */}
        <Calculator locale={locale} />
      </main>
      <footer className={styles.footer}>
        <p>{dict.Footer.blizzardCopyright}</p>
      </footer>
    </ReduxProvider>
  );
}

export default Home;
