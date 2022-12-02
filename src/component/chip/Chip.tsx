import closeIcon from '../../asset/icon/close.svg';
import { Icon } from "../icon/Icon";
import './Chip.css';

interface ChipProps {
  [key: string]: any;
  onDelete?: (value: string) => any;
  value: string;
}

export const Chip = (props: ChipProps) => {
  const {onDelete, value, ...otherProps} = {...props};
  
  const handleDelete = () => {
    if (onDelete) {
      onDelete(value);
    }
  }

  return (
    <span {...otherProps} className='slr-chip'>
      <p>{value}</p>
      {
        onDelete ?
        <Icon alt='delete' onClick={handleDelete} src={closeIcon} width='16px' /> :
        null
      }
    </span>
  );
}
