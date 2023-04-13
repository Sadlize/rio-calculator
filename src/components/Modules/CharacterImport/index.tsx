'use client';

import Button from 'components/Elements/Button';
import { useAppDispatch, useAppSelector } from 'redux/store';
import { setImportMenuOpenStatus } from 'redux/slices/commonSlice';
import ImportForm from 'components/Modules/ImportForm';
import styles from './CharacterImport.module.css';

function CharacterImport() {
  const dispatch = useAppDispatch();
  const { isImportMenuOpen } = useAppSelector((state) => state.common);

  return (
    <div className={styles.base}>
      <Button
        onClick={() => {
          dispatch(setImportMenuOpenStatus(!isImportMenuOpen));
        }}
      >
        <div className={styles.menu_icon}>
          <div className={styles.menu_iconTop} />
          <div className={styles.menu_iconMiddle} />
          <div className={styles.menu_iconBottom} />
          {/* <div className="menu-icon-cross-top" /> */}
          {/* <div className="menu-icon-cross-bottom" /> */}
        </div>
      </Button>
      <ImportForm />
    </div>
  );
}

export default CharacterImport;
