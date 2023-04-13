'use client';

import cx from 'clsx';
import Button from 'components/Elements/Button';
import { setImportScore } from 'redux/slices/scoreSlice';
import { setImportKeyLevel } from 'redux/slices/keyLevelSlice';
import { setImportTimestamp } from 'redux/slices/timestampSlice';
import refactorRIODataHandler from '@/src/api/getCharacterData';
import { useAppDispatch, useAppSelector } from 'redux/store';
import { useRef } from 'react';
import { Transition } from 'react-transition-group';
import styles from './ImportForm.module.css';

function ImportForm() {
  const { isImportMenuOpen } = useAppSelector((state) => state.common);
  const $importMenuNode = useRef(null);
  const dispatch = useAppDispatch();
  const region = useRef('');
  const realm = useRef('');
  const name = useRef('');
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
              onChange={(e) => {
                region.current = e.target.value;
              }}
            />
            <input
              type="text"
              onChange={(e) => {
                realm.current = e.target.value;
              }}
            />
            <input
              type="text"
              onChange={(e) => {
                name.current = e.target.value;
              }}
            />
            <Button
              onClick={async () => {
                const data = await refactorRIODataHandler(
                  region.current,
                  realm.current,
                  name.current,
                );
                dispatch(setImportScore(data.scores));
                dispatch(setImportKeyLevel(data.keyLevels));
                dispatch(setImportTimestamp(data.timestamps));
              }}
            >
              Import
              {/* {translations.Buttons.import} */}
            </Button>
          </form>
        </div>
      )}
    </Transition>
  );
}

export default ImportForm;
