import styled from '@emotion/styled';
import theme from 'theme';

export const HiddenElement = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const RangeBox = styled.div`
  width: 100%;
`;

export const Track = styled.div`
  position: relative;
  height: 10px;
  width: 100%;
  background-color: ${theme.colors.primary};
  border-radius: 5px;
`;

interface IThumb {
  id: string;
  position: number;
  isActive: boolean;
}

export const Thumb = styled.div<IThumb>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ position, isActive }) =>
    `left: ${position}%;
    cursor: ${isActive ? 'grabbing' : 'grab'};`}
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${theme.colors.white};
`;
