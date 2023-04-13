import React from 'react';
import cx from 'clsx';
import styles from './Button.module.css';

export interface TProps extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
  className?: string;
}

function Button({ children, className, ...rest }: TProps) {
  return (
    <button type="button" className={cx(styles.base, className)} {...rest}>
      {children}
    </button>
  );
}

export default Button;
