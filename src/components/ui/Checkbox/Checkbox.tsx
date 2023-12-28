import { ICheckbox } from 'components/Shared/types';
import { Indicator, Input, Label, Name } from './Checkbox.styled';

const Checkbox = ({ checked, onChange, id, label }: ICheckbox) => {
  return (
    <Label htmlFor={id}>
      <Input type="checkbox" id={id} checked={checked} onChange={onChange} />
      <Indicator />
      <Name>{label}</Name>
    </Label>
  );
};

export default Checkbox;
