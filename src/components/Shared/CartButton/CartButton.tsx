import Icon from 'assets/svg/ph_handbag-thin.svg?react';
import { Badge, ButtonBox, StyledButton } from './CartButton.styled';

type Props = {
  cartItemsCount: number;
  onClick: () => void;
};

const CartButton = ({ cartItemsCount = 0, onClick }: Props) => {
  return (
    <ButtonBox>
      <StyledButton onClick={onClick}>
        <Icon />
      </StyledButton>
      {cartItemsCount > 0 && (
        <Badge>
          <span>{cartItemsCount}</span>
        </Badge>
      )}
    </ButtonBox>
  );
};

export default CartButton;
