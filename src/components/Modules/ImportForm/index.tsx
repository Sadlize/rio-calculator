import cx from 'clsx';
import Button from 'components/Elements/Button';
import { setImportScore } from 'redux/slices/scoreSlice';
import { setImportKeyLevel } from 'redux/slices/keyLevelSlice';
import { setImportTimestamp } from 'redux/slices/timestampSlice';
import refactorRIODataHandler from '@/src/api/getCharacterData';
import { useAppDispatch } from 'redux/store';
import { TransitionStatus } from 'react-transition-group';
import { useRef } from 'react';
import styles from './ImportForm.module.css';

type TProps = {
  Ref: React.RefObject<HTMLFormElement>;
  status: TransitionStatus;
};

function ImportForm({ Ref, status }: TProps) {
  const dispatch = useAppDispatch();
  const region = useRef('');
  const realm = useRef('');
  const name = useRef('');
  return (
    <form
      ref={Ref}
      className={cx(styles.base, { [styles.open]: status === 'entered' })}
    >
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
        123
        {/* {translations.Buttons.import} */}
      </Button>
    </form>
  );
}

export default ImportForm;
