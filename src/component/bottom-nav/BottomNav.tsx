import { ReactNode } from 'react';
import plusIcon from '../../assets/plus.svg';
import { Button } from '../button/Button';
import { Icon } from '../icon/Icon';
import './BottomNav.css';

interface BottomNavProps {
  [key: string]: any;
  slot1: ReactNode;
  slot2: ReactNode;
  slot3: ReactNode;
  slot4: ReactNode;
}

export const BottomNav = (props: BottomNavProps) => {
  const {} = {...props};

  return (
    <div className='slr-bottom-nav'>
      <Button className='slr-bottom-nav-add'>
        <Icon alt='add' src={plusIcon} width='32px' />
      </Button>
      <div className='slr-bottom-nav-slot'></div>
      <div className='slr-bottom-nav-slot'></div>
      <div className='slr-bottom-nav-slot'></div>
      <div className='slr-bottom-nav-slot'></div>
    </div>
  );
}
