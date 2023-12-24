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
