import { ReactNode } from 'react';
import { BottomNav } from '../bottom-nav/BottomNav';
import { Navbar } from '../navbar/Navbar';
import { Sidenav } from '../sidenav/Sidenav';
import './Page.css';

interface PageProps {
  children?: ReactNode;
  showSidenav?: boolean;
}

export const Page = ({children, showSidenav}: PageProps) => {
  return (
    <div className='slr-page'>
      <Sidenav open={showSidenav} />
      <main className={`slr-page-main ${showSidenav ? 'slr-page-main-sidenav-open' : 'slr-page-main-sidenav-closed'}`}>
        <div className={`slr-page-main-overlay ${showSidenav ? 'slr-page-main-overlay-visible' : 'slr-page-main-overlay-invisible'}`} />
        <Navbar />
        <BottomNav slot1={'1'} slot2={'2'} slot3={'3'} slot4={'4'} />
        {children}
      </main>
    </div>
  );
}
