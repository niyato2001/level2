import { deleteDeepProps } from '../../part/Icon/Icon.props';
import { DescriptionModalProps } from './DescriptionModal';

const defaultProps: DescriptionModalProps = {
  deleteDeepIcon: deleteDeepProps,
  title: '経営の必読書を読む',
  description: ['イシューから始めよ', '起業のファイナンス', '起業の科学'],
};

export const propObj: { [key: string]: DescriptionModalProps } = {
  default: defaultProps,
};
