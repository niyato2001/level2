import { deleteDeepProps } from '../../part/Icon/Icon.props';
import { InputModalDataProps } from '@/component/common/template/InputModal/InputModal.type';

const defaultProps: InputModalDataProps = {
  deleteDeepIcon: deleteDeepProps,
};

const updateProps: InputModalDataProps = {
  deleteDeepIcon: deleteDeepProps,
};

export const propObj: { [key: string]: InputModalDataProps } = {
  default: defaultProps,
  update: updateProps,
};
