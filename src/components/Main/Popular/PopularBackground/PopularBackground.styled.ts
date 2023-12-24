import styled from '@emotion/styled';
import backgroundImage from 'assets/img/image115.jpg';

export const BackgroundBox = styled.div`
  width: 100%;
  min-height: 900px;
  position: absolute;
  top: 120px;
  left: 50%;
  transform: translateX(-50%);
`;

export const ImageBox = styled.div`
  position: absolute;
  top: 0px;
  right: 0;
  width: 974px;
  height: 748px;
  background: no-repeat url(${backgroundImage});
  background-size: cover;
  z-index: 0;
`;
