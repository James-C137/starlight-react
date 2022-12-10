import { ReactNode } from 'react';
import { Navbar } from '../navbar/Navbar';
import './Page.css';

interface PageProps {
  bottomDrawerElement?: ReactNode;
  children?: ReactNode;
  navbarContent?: ReactNode;
  onCloseSidenav?: () => any;
  onToggleSidenav?: () => any;
  showBottomDrawer?: boolean;
  showSidenav?: boolean;
  sidenavElement?: ReactNode;
}

export const Page = ({bottomDrawerElement, children, navbarContent, onCloseSidenav, onToggleSidenav, showBottomDrawer, showSidenav, sidenavElement}: PageProps) => {
  return (
    <div className='slr-page-container'>
      <div className={`slr-page-sidenav-area ${showSidenav ? 'slr-page-sidenav-area-open' : 'slr-page-sidenav-area-closed'}`}>
        <div className='slr-page-sidenav-container'>
          { sidenavElement }
        </div>
      </div>
      <div className={`slr-page-main-area ${showSidenav ? 'slr-page-main-area-sidenav-open' : 'slr-page-main-area-sidenav-closed'}`}>
        <div className={`slr-page-main-overlay ${showSidenav ? 'slr-page-main-overlay-visible' : 'slr-page-main-overlay-invisible'}`} />
        <div className={`slr-page-main-bottom-drawer ${showBottomDrawer ? 'slr-page-main-bottom-drawer-open' : 'slr-page-main-bottom-drawer-closed'}`}>
          { bottomDrawerElement }
        </div>
        <main className='slr-page-main'>
          <Navbar onToggleSidenav={onToggleSidenav}>
            { navbarContent }
          </Navbar>
          {children}
        </main>
      </div>
    </div>
  );
}
