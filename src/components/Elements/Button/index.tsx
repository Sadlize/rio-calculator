import styles from "./Button.module.css";

export interface TProps extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
}

const Button = ({ children, ...rest }: TProps) => {
  return (
    <button className={styles.base} {...rest}>
      {children}
    </button>
  );
};

export default Button;
