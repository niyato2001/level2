import { deleteDeepProps } from '../../part/Icon/Icon.props';
import { DeleteModalDataProps } from './DeleteModal.type';

const defaultProps: DeleteModalDataProps = {
  deleteDeepIcon: deleteDeepProps,
};

/**
 * const propObj への補足。
 * propObj の中身が3つ以上になる場合、以下のように書くと便利です。
 * 使わないときはこのコメントアウト部分は削除してください。
 */
/*interface PropObj {
  default: DeleteModalProps;
  pattern1(適宜名称を変えてください): DeleteModalProps;
  pattern2: DeleteModalProps;
  ...
}
export const propObj: PropObj = {
  default: defaultProps,
    pattern1(適宜名称を変えてください): pattern1Props;
  pattern2: pattern2Props;
  ...
}*/

export const propObj: { [key: string]: DeleteModalDataProps } = {
  default: defaultProps,
};
