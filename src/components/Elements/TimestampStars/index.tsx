import styles from './TimestampStars.module.css';

function TimestampStars() {
  return (
    <div className={styles.base}>
      <div className={styles.container}>
        <input type="radio" name="radio" />
        <span className={styles.checkmark} />
      </div>
      <div className={styles.container}>
        <input type="radio" name="radio" />
        <span className={styles.checkmark} />
      </div>
      <div className={styles.container}>
        <input type="radio" name="radio" />
        <span className={styles.checkmark} />
      </div>
      <div className={styles.container}>
        <input type="radio" name="radio" />
        <span className={styles.checkmark} />
      </div>
    </div>
  );
}

export default TimestampStars;
