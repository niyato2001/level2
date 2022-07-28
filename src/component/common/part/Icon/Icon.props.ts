import { IconProps } from './';
import CreateDeepImage from '~/icon/create-deep.png';
import CreateLightImage from '~/icon/create-light.png';
import DeleteDeepImage from '~/icon/delete-deep.png';
import DeleteLightImage from '~/icon/delete-light.png';
import SymbolLogoImage from '~/icon/fwywd-symbol.svg';
import TextLogoImage from '~/icon/fwywd-text.svg';

export const createDeepProps: IconProps = {
  type: 'create-deep',
  src: CreateDeepImage,
  width: 30,
  height: 30,
};

export const createLightProps: IconProps = {
  type: 'create-light',
  src: CreateLightImage,
  width: 30,
  height: 30,
};

export const deleteDeepProps: IconProps = {
  type: 'delete-deep',
  src: DeleteDeepImage,
  width: 20,
  height: 20,
};

export const deleteLightProps: IconProps = {
  type: 'delete-light',
  src: DeleteLightImage,
  width: 30,
  height: 30,
};

export const symbolLogoProps: IconProps = {
  type: 'symbol-logo',
  src: SymbolLogoImage,
  width: 60,
  height: 60,
};
export const textLogoProps: IconProps = {
  type: 'text-logo',
  src: TextLogoImage,
  width: 80,
  height: 40,
};

export const propObj: { [key: string]: IconProps } = {
  createDeepIcon: createDeepProps,
  createLightIcon: createLightProps,
  deleteDeepIcon: deleteDeepProps,
  deleteLightIcon: deleteLightProps,
  symbolLogoIcon: symbolLogoProps,
  textLogoIcon: textLogoProps,
};
