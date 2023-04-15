import cx from 'clsx';
import Button from 'components/Elements/Button';
import { useAppDispatch, useAppSelector } from 'redux/store';
import { useRef } from 'react';
import { Transition } from 'react-transition-group';
import { regions } from '@/projectSettings';
import refactorRIODataHandler from '@/src/api/getCharacterData';
import { setImportScore } from 'redux/slices/scoreSlice';
import { setImportKeyLevel } from 'redux/slices/keyLevelSlice';
import { setImportTimestamp } from 'redux/slices/timestampSlice';
import { setImportMenuOpenStatus } from 'redux/slices/commonSlice';
import styles from './ImportForm.module.css';

export type TImportForm = {
  translations: {
    region: string;
    realm: string;
    character: string;
    buttonLabel: string;
  };
};

function ImportForm({ translations }: TImportForm) {
  const { isImportMenuOpen } = useAppSelector((state) => state.common);
  const $importMenuNode = useRef(null);
  const dispatch = useAppDispatch();
  const region = useRef('');
  const realm = useRef('');
  const name = useRef('');

  function isFormValidationOK() {
    let ok = true;

    if (
      !regions.find((regionKey) => regionKey === region.current) ||
      realm.current === '' ||
      name.current === ''
    ) {
      ok = false;
    }

    return ok;
  }

  return (
    <Transition
      mountOnEnter
      unmountOnExit
      nodeRef={$importMenuNode}
      in={isImportMenuOpen}
      timeout={{
        appear: 0,
        exit: 300,
      }}
    >
      {(status) => (
        <div
          className={cx(styles.base, { [styles.open]: status === 'entered' })}
        >
          <form ref={$importMenuNode}>
            <input
              type="text"
              placeholder={`${translations.region}`}
              className={styles.item}
              onChange={(e) => {
                region.current = e.target.value;
              }}
            />
            <input
              type="text"
              placeholder={`${translations.realm}`}
              className={styles.item}
              onChange={(e) => {
                realm.current = e.target.value;
              }}
            />
            <input
              type="text"
              placeholder={`${translations.character}`}
              className={styles.item}
              onChange={(e) => {
                name.current = e.target.value;
              }}
            />
            <Button
              className={styles.item}
              onClick={async () => {
                if (!isFormValidationOK()) {
                  return;
                }

                const data = await refactorRIODataHandler(
                  region.current,
                  realm.current,
                  name.current,
                );

                if (data.error) {
                  return;
                }

                dispatch(setImportScore(data.scores));
                dispatch(setImportKeyLevel(data.keyLevels));
                dispatch(setImportTimestamp(data.timestamps));
                dispatch(setImportMenuOpenStatus(false));
              }}
            >
              {translations.buttonLabel}
            </Button>
          </form>
        </div>
      )}
    </Transition>
  );
}

export default ImportForm;
