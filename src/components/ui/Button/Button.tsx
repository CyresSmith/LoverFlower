import Progress from 'assets/svg/progress.svg?react';
import { SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import { StyledButton } from './Button.styled';

interface IButton {
  as?: 'button' | 'link';
  loading?: boolean;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit';
  children: string;
  onClick?: (e: SyntheticEvent) => void;
}

interface ILink {
  as?: 'button' | 'link';
  to?: string | null;
}

export interface IButtonProps extends IButton, ILink {}

const Button = ({
  children,
  onClick,
  loading = false,
  disabled = false,
  variant = 'primary',
  type = 'button',
  to,
  as = 'button',
}: IButtonProps) => {
  return (
    <StyledButton
      as={as === 'button' ? 'button' : Link}
      to={to ? to : null}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {loading && <Progress />}
      <span>{children}</span>
    </StyledButton>
  );
};

export default Button;
