import { ReactNode } from 'react';
import arrowLeftIcon from '../../assets/arrow-left.svg';
import { Button } from '../button/Button';
import { Icon } from '../icon/Icon';
import './PagePanel.css';

interface PagePanelProps {
  [key: string]: any;
  children?: ReactNode;
  onClose?: () => any;
  open: boolean;
  title?: string;
}

export const PagePanel = (props: PagePanelProps) => {
  const {children, onClose, open, title} = {...props};

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  }

  return (
    <div
      {...props}
      className={`slr-page-panel ${open ? 'slr-page-panel-open' : 'slr-page-panel-closed'}`}
    >
      <div className='slr-page-panel-title-row'>
        {
          onClose ?
          <Button
            className='slr-page-panel-close'
            onClick={handleClose}
          >
            <Icon alt='close' src={arrowLeftIcon} width='32px' />
          </Button> :
          null
        }
        {
          title ?
          <h1>{title}</h1> :
          null
        }
      </div>
      {children}
    </div>
  );
}
