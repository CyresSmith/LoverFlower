import Progress from 'assets/svg/progress.svg?react';
import { Link } from 'react-router-dom';
import { StyledButton } from './Button.styled';

interface ButtonProps {
  as?: 'button' | 'link';
  loading?: boolean;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  children: string;
  onClick?: () => void;
}

interface LinkProps {
  as?: 'button' | 'link';
  to?: string;
}

interface Props extends ButtonProps, LinkProps {}

const Button = ({
  children,
  onClick,
  loading = false,
  disabled = false,
  variant = 'primary',
  to = '/',
  as = 'button',
}: Props) => {
  return (
    <StyledButton
      as={as === 'button' ? 'button' : Link}
      to={to}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
    >
      {loading && <Progress />}
      <span>{children}</span>
    </StyledButton>
  );
};

export default Button;
