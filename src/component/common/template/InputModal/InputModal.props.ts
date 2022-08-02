import { deleteDeepProps } from '../../part/Icon/Icon.props';
import { InputModalProps } from './InputModal';

const defaultProps: InputModalProps = {
  type: 'create',
  deleteDeepIcon: deleteDeepProps,
};

const updateProps: InputModalProps = {
  type: 'update',
  deleteDeepIcon: deleteDeepProps,
};

export const propObj: { [key: string]: InputModalProps } = {
  default: defaultProps,
  update: updateProps,
};
