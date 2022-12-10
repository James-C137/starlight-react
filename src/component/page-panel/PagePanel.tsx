import { ReactNode } from 'react';
import arrowLeftIcon from '../../asset/icon/arrow-left.svg';
import { Button } from '../button/Button';
import { Icon } from '../icon/Icon';
import './PagePanel.css';

interface PagePanelProps {
  [key: string]: any;
  children?: ReactNode;
  onClose?: () => any;
  title?: ReactNode;
}

export const PagePanel = (props: PagePanelProps) => {
  const {children, onClose, title, ...otherProps} = {...props};

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  }

  return (
    <div
      {...otherProps}
      className={'slr-page-panel'}
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
        { title }
      </div>
      {children}
    </div>
  );
}
