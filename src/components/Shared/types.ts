import { ElementType, SVGProps } from 'react';

export interface IPosition {
  sideX: 'top' | 'bottom';
  sizeX: number;
  sideY: 'left' | 'right';
  sizeY: number;
}

export interface IAbsoluteText {
  position: IPosition;
  text: string;
}

export interface IInitialValues {
  [key: string]: string;
}

export interface IImageBox {
  width: number;
  height: number;
  imgSrc: string;
}

export interface ISocialLink {
  Icon: ElementType<SVGProps<SVGElement>>;
  link: string;
}
