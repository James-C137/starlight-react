import { ReactNode } from 'react';
import './Banner.css';

export interface BannerProps {
  [key: string]: any;
  children?: ReactNode;
}

export const Banner = (props: BannerProps) => {
  const { children, ...otherProps } = { ...props };

  return (
    <div {...otherProps} className={`slr-banner ${otherProps.className ? otherProps.className : ''}`}>
      { children }
    </div>
  );
}
