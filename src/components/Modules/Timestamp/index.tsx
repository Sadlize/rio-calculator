import cx from 'clsx';
import { Transition } from 'react-transition-group';
import { useRef } from 'react';
import { TDungeonKeys, TDungeonWeeks } from 'utils/dungeons';
import TimestampStars from 'components/Elements/TimestampStars';
import TimestampSlider from 'components/Elements/TimestampSlider';
import styles from './Timestamp.module.css';

type TProps = {
  type: boolean;
  dungeon: TDungeonKeys;
  week: TDungeonWeeks;
  setTimestampSliderType: React.Dispatch<
    React.SetStateAction<undefined | TDungeonWeeks>
  >;
};

function Timestamp({ type, dungeon, week, setTimestampSliderType }: TProps) {
  const $timestampNode = useRef(null);

  return (
    <Transition
      mountOnEnter
      unmountOnExit
      nodeRef={$timestampNode}
      in={type}
      timeout={{
        appear: 0,
        exit: 300,
      }}
    >
      {(status) => (
        <div ref={$timestampNode} className={styles.base}>
          <div
            className={cx(styles.content, {
              [styles.content_show]: status === 'entered',
            })}
          >
            <TimestampStars dungeon={dungeon} week={week} />
            <TimestampSlider
              dungeon={dungeon}
              week={week}
              setTimestampSliderType={setTimestampSliderType}
            />
          </div>
        </div>
      )}
    </Transition>
  );
}

export default Timestamp;
