import Arrow from 'assets/svg/downArrow.svg?react';
import { ISort } from 'components/Shared/types';
import { useState } from 'react';
import {
  ItemSpan,
  SelectBox,
  SelectIconBox,
  SelectItem,
  SelectList,
  Selected,
} from './Select.styled';

type Props = {
  items: ISort[];
  selected: ISort;
  onSelect: (item: ISort) => void;
};

const Select = ({ items, selected, onSelect }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectClick = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <SelectBox>
      <Selected onClick={handleSelectClick}>
        <ItemSpan>{selected.title}</ItemSpan>

        <SelectIconBox isOpen={isOpen}>
          <Arrow />
        </SelectIconBox>

        <SelectList isOpen={isOpen}>
          {items.map(item => (
            <SelectItem key={item.id} onClick={() => onSelect(item)}>
              <ItemSpan>{item.title}</ItemSpan>
            </SelectItem>
          ))}
        </SelectList>
      </Selected>
    </SelectBox>
  );
};

export default Select;
