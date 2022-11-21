import { ReactNode } from 'react';
import { Chip } from '../chip/Chip';
import './ChipList.css';

interface ChipListProps {
  values: string[];
}

export const ChipList = ({values}: ChipListProps) => {
  const renderChipList = (values: string[]): ReactNode => {
    const elements: ReactNode[] = [];

    values.forEach(value => {
      elements.push(<Chip onDelete={() => {}} value={value} />);
    });

    return elements;
  }

  return (
    <div className='slr-chip-list'>
      { renderChipList(values) }
    </div>
  );
}
