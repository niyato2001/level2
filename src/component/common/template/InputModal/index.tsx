import { InputModal as InputModalPresenter, InputModalProps } from './InputModal';
import { propObj } from './InputModal.props';
/**
 * ロジックが存在しない（= Container が要らない）場合は 以下と置き換えてください。
 * 存在する場合はコメントアウト部分を全て削除して使ってください。
 */
/* 
export type { InputModalProps };
export { InputModalPresenter};
*/

const InputModal: React.FC = () => {
  const defaultProps: InputModalProps = { ...propObj.default };
  return <InputModalPresenter {...defaultProps} />;
};

export { InputModal };
