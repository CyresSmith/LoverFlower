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

export interface IScrollValue {
  scrollValue: number;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  discount: number;
  image: string;
  createdAt: string;
  tags: string[];
}

export interface ICheckbox {
  id: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}

export interface IFilterSection {
  title: string;
  sectionId: string;
  filters: ICategory[];
}

export interface ICategory {
  title: string;
  id: string;
}
