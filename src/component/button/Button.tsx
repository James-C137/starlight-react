import { ReactNode } from 'react';
import './Button.css';

interface ButtonProps {
  [key: string]: any;
  children: ReactNode;
  onClick?: () => any;
}

export const Button = (props: ButtonProps) => {
  const {children, onClick} = {...props};

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  }

  return (
    <button
      {...props}
      className={props.className || 'slr-button'}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
