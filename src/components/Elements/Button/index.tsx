import styles from "./Button.module.css";

type TProps = {
  children: React.ReactNode;
};

const Button = ({ children }: TProps) => {
  return <button className={styles.base}>{children}</button>;
};

export default Button;
