import { deleteDeepProps } from '../../part/Icon/Icon.props';
import { DescriptionModalDataProps } from './DescriptionModal.type';

const defaultProps: DescriptionModalDataProps = {
  deleteDeepIcon: deleteDeepProps,
};

export const propObj: { [key: string]: DescriptionModalDataProps } = {
  default: defaultProps,
};
