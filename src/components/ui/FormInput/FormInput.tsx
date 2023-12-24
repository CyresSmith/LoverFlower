import { FC } from 'react';
import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';
import { InputBox, StyledInput } from './FormInput.styled';

export interface IInputProps {
  id: string;
  type: 'text' | 'tel' | 'email' | 'number' | 'time';
  placeholder: string;
  label?: string;
  textarea?: boolean;
  inputError: boolean;
  isCompleted: boolean;
  isDisabled?: boolean;
  inputHeight?: number;
  register: UseFormRegister<FieldValues>;
  registerOptions: RegisterOptions;
}

export interface IFormField
  extends Pick<
    IInputProps,
    | 'type'
    | 'placeholder'
    | 'id'
    | 'textarea'
    | 'inputHeight'
    | 'registerOptions'
  > {}

export interface IStyledInput
  extends Pick<IInputProps, 'isCompleted' | 'inputError' | 'inputHeight'> {}

const FormInput: FC<IInputProps> = props => {
  const {
    id,
    label,
    textarea,
    register,
    registerOptions,
    isDisabled,
    ...inputProps
  } = props;

  return (
    <InputBox>
      {label && <label>{label}</label>}
      <StyledInput
        {...register(id, registerOptions)}
        {...inputProps}
        as={textarea ? 'textarea' : 'input'}
        disabled={isDisabled}
      />
      {props.inputError && <span>!</span>}
    </InputBox>
  );
};

export default FormInput;
