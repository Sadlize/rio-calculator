import styles from './TimestampStars.module.css';

function TimestampStars() {
  return (
    <div className={styles.base}>
      <div className={styles.container}>
        <input type="radio" name="radio1" />
        <span className={styles.checkmark} />
      </div>
      <div className={styles.container}>
        <input type="radio" name="radio2" />
        <span className={styles.checkmark} />
      </div>
      <div className={styles.container}>
        <input type="radio" name="radio3" />
        <span className={styles.checkmark} />
      </div>
      <div className={styles.container}>
        <input type="radio" name="radio4" />
        <span className={styles.checkmark} />
      </div>
    </div>
  );
}

export default TimestampStars;
