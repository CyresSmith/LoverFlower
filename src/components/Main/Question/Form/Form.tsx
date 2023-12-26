import Button from 'components/ui/Button';
import FormInput from 'components/ui/FormInput';
import { IFormField } from 'components/ui/FormInput/FormInput';
import { useForm } from 'react-hook-form';
import { ButtonBox, FormBox } from './Form.styled';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const fields: IFormField[] = [
  {
    type: 'text',
    placeholder: 'ваше имя',
    id: 'name',
    registerOptions: {
      required: 'Is required!',
      minLength: {
        value: 3,
        message: 'At least 3 characters',
      },
      maxLength: {
        value: 16,
        message: 'Not be longer than 16',
      },
    },
  },
  {
    type: 'tel',
    placeholder: '+380 (97) 777-77-77',
    id: 'phone',
    registerOptions: {
      pattern: phoneRegExp,
      required: 'Is required!',
    },
  },
  {
    type: 'text',
    placeholder: 'Ваш комментарий',
    id: 'message',
    textarea: true,
    inputHeight: 120,
    registerOptions: {
      minLength: {
        value: 20,
        message: 'At least 20 characters',
      },
      maxLength: {
        value: 100,
        message: 'Not be longer than 100',
      },
    },
  },
];

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    watch,
    reset,
  } = useForm({ mode: 'onChange' });

  const onSubmit = handleSubmit(data => {
    console.log(data);
    reset();
  });

  return (
    <FormBox onSubmit={onSubmit}>
      {fields.map((field, i) => (
        <FormInput
          key={i}
          {...field}
          register={register}
          inputError={Boolean(errors[field.id])}
          isCompleted={Boolean(!errors[field.id] && watch(field.id)?.length)}
        />
      ))}

      <ButtonBox>
        <Button type="submit" disabled={!isValid}>
          ok
        </Button>

        <p>
          Нажимая на кнопку «Отправить», я даю свое согласие на обработку
          персональных данных, в соответствии с
          <a href="/">Политикой конфиденциальности</a>
        </p>
      </ButtonBox>
    </FormBox>
  );
};

export default ContactForm;
