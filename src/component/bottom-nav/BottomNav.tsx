import { Fragment, ReactNode } from 'react';
import plusIcon from '../../asset/icon/plus.svg';
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
  const {slot1, slot2, slot3, slot4} = {...props};

  return (
    <Fragment>
      <div className='slr-bottom-nav'>
        <Button className='slr-bottom-nav-add'>
          <Icon alt='add' src={plusIcon} width='32px' />
        </Button>
        <div className='slr-bottom-nav-slot'>
          { slot1 ? slot1 : '1' }
        </div>
        <div className='slr-bottom-nav-slot'>
          { slot2 ? slot2 : '2' }
        </div>
        <div className='slr-bottom-nav-slot'>
          { slot3 ? slot3 : '3' }
        </div>
        <div className='slr-bottom-nav-slot'>
          { slot4 ? slot4 : '4' }
        </div>
      </div>
      <span className='slr-bottom-nav-spacer'></span>
    </Fragment>
  );
}
