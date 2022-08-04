import { deleteDeepProps } from '../../part/Icon/Icon.props';
import { DescriptionModalDataProps } from './DescriptionModal.type';

const defaultProps: DescriptionModalDataProps = {
  deleteDeepIcon: deleteDeepProps,
  title: '経営の必読書を読む',
  description: ['イシューから始めよ', '起業のファイナンス', '起業の科学'],
};

export const propObj: { [key: string]: DescriptionModalDataProps } = {
  default: defaultProps,
};
