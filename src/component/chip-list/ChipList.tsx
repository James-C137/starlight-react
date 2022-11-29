import { ReactNode } from 'react';
import { Chip } from '../chip/Chip';
import './ChipList.css';

interface ChipListProps {
  [key: string]: any;
  onDelete?: (value: string) => any;
  values: string[];
}

export const ChipList = (props: ChipListProps) => {
  const {onDelete, values} = {...props};

  const renderChipList = (values: string[]): ReactNode => {
    const elements: ReactNode[] = [];

    values.forEach(value => {
      elements.push(<Chip onDelete={onDelete} value={value} />);
    });

    return elements;
  }

  return (
    <div {...props} className='slr-chip-list'>
      { renderChipList(values) }
    </div>
  );
}
