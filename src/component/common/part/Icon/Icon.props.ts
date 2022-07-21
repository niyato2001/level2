import { IconProps } from './';
import CreateDeepImage from '~/icon/create-deep.png';
import CreateLightImage from '~/icon/create-light.png';
import DeleteDeepImage from '~/icon/delete-deep.png';
import DeleteLightImage from '~/icon/delete-light.png';
import SymbolLogoImage from '~/icon/fwywd-symbol.png';
import TextLogoImage from '~/icon/fwywd-text.png';

const createDeepProps: IconProps = {
  type: 'create-deep',
  src: CreateDeepImage,
  width: 30,
  height: 30,
};

const createLightProps: IconProps = {
  type: 'create-light',
  src: CreateLightImage,
  width: 30,
  height: 30,
};

const deleteDeepProps: IconProps = {
  type: 'delete-deep',
  src: DeleteDeepImage,
  width: 30,
  height: 30,
};

const deleteLightProps: IconProps = {
  type: 'delete-light',
  src: DeleteLightImage,
  width: 30,
  height: 30,
};

const symbolLogoProps: IconProps = {
  type: 'symbol-logo',
  src: SymbolLogoImage,
  width: 60,
  height: 60,
};
const textLogoProps: IconProps = {
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
