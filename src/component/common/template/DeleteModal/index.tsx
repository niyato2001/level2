import { DeleteModal as DeleteModalPresenter } from './DeleteModal';
import { propObj } from './DeleteModal.props';
import {
  DeleteModalContainerProps,
  DeleteModalDataProps,
  DeleteModalLogicProps,
} from './DeleteModal.type';

const DeleteModal: React.FC<DeleteModalContainerProps> = ({ clearModal }) => {
  const logicProps: DeleteModalLogicProps = {
    clearModal: clearModal,
  };
  const defaultProps: DeleteModalDataProps = { ...propObj.default };
  return <DeleteModalPresenter {...defaultProps} {...logicProps} />;
};

export { DeleteModal };
