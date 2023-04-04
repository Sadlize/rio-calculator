import React from 'react';
import styles from './Button.module.css';

export interface TProps extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
}

function Button({ children, ...rest }: TProps) {
  return (
    <button type="button" className={styles.base} {...rest}>
      {children}
    </button>
  );
}

export default Button;
