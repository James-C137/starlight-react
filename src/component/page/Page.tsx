import { Navbar } from '../navbar/Navbar';
import { Sidenav } from '../sidenav/Sidenav';
import './Page.css';

interface PageProps {
  showSidenav?: boolean;
}

export const Page = ({showSidenav}: PageProps) => {
  return (
    <div className='slr-page'>
      <Sidenav open={showSidenav} />
      <main className={`slr-page-main ${showSidenav ? 'slr-page-main-sidenav-open' : 'slr-page-main-sidenav-closed'}`}>
        <div className={`slr-page-main-overlay ${showSidenav ? 'slr-page-main-overlay-visible' : 'slr-page-main-overlay-invisible'}`} />
        <Navbar />
      </main>
    </div>
  );
}
