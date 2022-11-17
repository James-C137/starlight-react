import { ReactNode } from 'react';
import closeIcon from '../../assets/close.svg';
import { Icon } from '../icon/Icon';
import './Sidenav.css';

interface SidenavProps {
  children?: ReactNode;
  footer?: ReactNode;
  header?: ReactNode;
  onClose: () => any;
  open: boolean;
}

export const Sidenav = ({children, footer, header, onClose, open}: SidenavProps) => {
  return (
    <div className={`slr-sidenav-container ${open ? 'slr-sidenav-container-open' : 'slr-sidenav-container-closed'}`}>
      <div className='slr-sidenav'>
        <header>
          <div className='slr-sidenav-header-close'>
            <Icon alt='close' src={closeIcon} />
          </div>
          {header}
        </header>
        <nav>{children}</nav>
        <footer>
          {footer}
        </footer>
      </div>
    </div>
  );
}
