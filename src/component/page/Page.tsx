import { ReactNode } from 'react';
import { BottomNav } from '../bottom-nav/BottomNav';
import { Navbar } from '../navbar/Navbar';
import { Sidenav } from '../sidenav/Sidenav';
import './Page.css';

interface PageProps {
  children?: ReactNode;
  navbarContent?: ReactNode;
  onCloseSidenav?: () => any;
  onToggleSidenav?: () => any;
  showSidenav?: boolean;
  sidenavContent?: ReactNode;
  sidenavFooter?: ReactNode;
  sidenavHeader?: ReactNode;
}

export const Page = ({children, navbarContent, onCloseSidenav, onToggleSidenav, showSidenav, sidenavContent, sidenavFooter, sidenavHeader}: PageProps) => {
  return (
    <div className='slr-page'>
      <Sidenav
        footer={sidenavFooter}
        header={sidenavHeader}
        onClose={onCloseSidenav}
        open={showSidenav}
      >
        {sidenavContent}
      </Sidenav>
      <main className={`slr-page-main ${showSidenav ? 'slr-page-main-sidenav-open' : 'slr-page-main-sidenav-closed'}`}>
        <div
          className={`slr-page-main-overlay ${showSidenav ? 'slr-page-main-overlay-visible' : 'slr-page-main-overlay-invisible'}`}
          onClick={onCloseSidenav}
        />
        <Navbar onToggleSidenav={onToggleSidenav}>
          { navbarContent }
        </Navbar>
        {children}
        <BottomNav slot1={'1'} slot2={'2'} slot3={'3'} slot4={'4'} />
      </main>
    </div>
  );
}
