import Close from 'assets/svg/ei_close.svg?react';
import Icon from 'assets/svg/ph_magnifying-glass-thin.svg?react';
import { ChangeEvent, FormEvent, RefObject } from 'react';
import { Form, Input, InputBox } from './Search.styled';

type SearchProps = {
  value: string;
  isOpen: boolean;
  isFocused: boolean;
  searchRef: RefObject<HTMLFormElement>;
  handleSearchOpen: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onResetClick: () => void;
  onClick: () => void;
};

const Search = ({
  searchRef,
  value,
  isOpen,
  onChange,
  onSubmit,
  onResetClick,
  handleSearchOpen,
  onClick,
}: SearchProps) => {
  return (
    <Form
      ref={searchRef}
      onSubmit={onSubmit}
      isOpen={isOpen}
      onClick={onClick}
      onMouseEnter={handleSearchOpen}
      onMouseLeave={handleSearchOpen}
    >
      <InputBox>
        <Icon />

        <Input
          readOnly={!isOpen}
          onChange={onChange}
          value={isOpen ? value : 'Поиск'}
          placeholder="Введите свой запрос"
          isOpen={isOpen}
        />

        {isOpen && (
          <button onClick={onResetClick} type="button" disabled={value === ''}>
            <Close />
          </button>
        )}
      </InputBox>
    </Form>
  );
};

export default Search;
