import { toDoProps, completedProps } from '../Card/Card.props';
import { PageMainProps } from './PageMain';

const defaultProps: PageMainProps = {
  toDoCard: toDoProps,
  completedCard: completedProps,
};

/**
 * const propObj への補足。
 * propObj の中身が3つ以上になる場合、以下のように書くと便利です。
 * 使わないときはこのコメントアウト部分は削除してください。
 */
/*interface PropObj {
  default: PageMainProps;
  pattern1(適宜名称を変えてください): PageMainProps;
  pattern2: PageMainProps;
  ...
}
export const propObj: PropObj = {
  default: defaultProps,
    pattern1(適宜名称を変えてください): pattern1Props;
  pattern2: pattern2Props;
  ...
}*/

export const propObj: { [key: string]: PageMainProps } = {
  default: defaultProps,
};
