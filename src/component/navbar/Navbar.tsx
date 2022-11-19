import { ReactNode } from 'react';
import accountCircleIcon from '../../assets/account-circle.svg';
import menuIcon from '../../assets/menu.svg';
import { Icon } from '../icon/Icon';
import './Navbar.css';

interface NavbarProps {
  children?: ReactNode;
}

export const Navbar = ({children}: NavbarProps) => {
  return (
    <div className='slr-navbar'>
      <Icon alt='menu' src={menuIcon} />
      {children}
      <Icon alt='profile' src={accountCircleIcon} />
    </div>
  );
}
