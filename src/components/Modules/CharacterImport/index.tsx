'use client';

import Button from 'components/Elements/Button';
import { useAppDispatch, useAppSelector } from 'redux/store';
import { setImportMenuOpenStatus } from 'redux/slices/commonSlice';
import ImportForm, { TImportForm } from 'components/Modules/ImportForm';
import cx from 'clsx';
import styles from './CharacterImport.module.scss';

function CharacterImport({ translations }: TImportForm) {
  const dispatch = useAppDispatch();
  const { isImportMenuOpen } = useAppSelector((state) => state.common);

  return (
    <div className={styles.base}>
      <Button
        className={styles.importButton}
        onClick={() => {
          dispatch(setImportMenuOpenStatus(!isImportMenuOpen));
        }}
      >
        <div
          className={cx(styles.menu_icon, { [styles.open]: isImportMenuOpen })}
        >
          <div className={styles.menu_hamburgerTop} />
          <div className={styles.menu_hamburgerMiddle} />
          <div className={styles.menu_hamburgerBottom} />
          <div className={styles.menu_crossTop} />
          <div className={styles.menu_crossBottom} />
        </div>
      </Button>
      <ImportForm translations={translations} />
    </div>
  );
}

export default CharacterImport;
