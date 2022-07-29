import { deleteDeepProps } from '../../part/Icon/Icon.props';
import { InputModalProps } from './InputModal';

const defaultProps: InputModalProps = {
  type: 'create',
  deleteDeepIcon: deleteDeepProps,
  title: 'タイトル',
  description: '内容',
};

const updateProps: InputModalProps = {
  type: 'update',
  deleteDeepIcon: deleteDeepProps,
  title: 'タイトル',
  description: '内容',
};

export const propObj: { [key: string]: InputModalProps } = {
  default: defaultProps,
  update: updateProps,
};
