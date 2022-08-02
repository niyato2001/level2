import { DeleteModal as DeleteModalPresenter, DeleteModalProps } from './DeleteModal';
import { propObj } from './DeleteModal.props';

/**
 * ロジックが存在しない（= Container が要らない）場合は 以下と置き換えてください。
 * 存在する場合はコメントアウト部分を全て削除して使ってください。
 */
/* 
export type { DeleteModalProps };
export { DeleteModalPresenter};
*/

const DeleteModal: React.FC = () => {
  const defaultProps: DeleteModalProps = { ...propObj.default };
  return <DeleteModalPresenter {...defaultProps} />;
};

export { DeleteModal };
