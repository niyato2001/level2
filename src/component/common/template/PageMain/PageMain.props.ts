import { toDoProps, completedProps } from '../Card/Card.props';
import { propObj as descriptionModalProps } from '../DescriptionModal/DescriptionModal.props';
import { PageMainDataProps } from './PageMain.type';
import { propObj as inputModalProps } from '@/component/common/template/InputModal/InputModal.props';

const defaultProps: PageMainDataProps = {
  toDoCard: toDoProps,
  completedCard: completedProps,
  descriptionModal: descriptionModalProps.default,
  createModal: inputModalProps.default,
  updateModal: inputModalProps.update,
};

export const propObj: { [key: string]: PageMainDataProps } = {
  default: defaultProps,
};
