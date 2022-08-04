import { DescriptionModal as DescriptionModalPresenter } from './DescriptionModal';
import { propObj } from './DescriptionModal.props';
import { DescriptionModalDataProps } from './DescriptionModal.type';

/**
 * ロジックが存在しない（= Container が要らない）場合は 以下と置き換えてください。
 * 存在する場合はコメントアウト部分を全て削除して使ってください。
 */
/* 
export type { DescriptionModalDataProps };
export { DescriptionModalPresenter};
*/

const DescriptionModal: React.FC = () => {
  const defaultProps: DescriptionModalDataProps = { ...propObj.default };
  return <DescriptionModalPresenter {...defaultProps} />;
};

export { DescriptionModal };
