import { ReactNode } from 'react';
import './PageContent.css';

interface PageContentProps {
  children?: ReactNode;
}

export const PageContent = ({children}: PageContentProps) => {
  return (
    <div className='slr-page-content'>
      {children}
    </div>
  );
}
