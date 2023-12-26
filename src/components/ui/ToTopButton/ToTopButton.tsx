import Arrow from 'assets/svg/Arrow5.svg?react';
import { ButtonBox } from './ToTopButton.styled';

interface Props {
  scroll: number;
}

const ToTopButton = ({ scroll }: Props) => {
  const handleScrollUpBtn = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ButtonBox onClick={handleScrollUpBtn} scrollValue={scroll}>
      <Arrow />
    </ButtonBox>
  );
};

export default ToTopButton;
