import { DeleteModal as DeleteModalPresenter } from './DeleteModal';
import { propObj } from './DeleteModal.props';
import {
  DeleteModalContainerProps,
  DeleteModalDataProps,
  DeleteModalLogicProps,
} from './DeleteModal.type';
import { ToDoProps } from '@/hook/useTodos';

const DeleteModal: React.FC<DeleteModalContainerProps> = ({
  clearModal,
  descriptionClick,
  toDos,
  setToDos,
  selectToDo,
}) => {
  const onDeleteClick = (): void => {
    const newToDos: ToDoProps[] = [...toDos];
    setToDos(newToDos.filter((v) => v !== newToDos[Number(selectToDo)]));
    clearModal();
  };
  const logicProps: DeleteModalLogicProps = {
    clearModal: clearModal,
    descriptionClick: descriptionClick,
    onDeleteClick: onDeleteClick,
  };
  const defaultProps: DeleteModalDataProps = { ...propObj.default };
  return <DeleteModalPresenter {...defaultProps} {...logicProps} />;
};

export { DeleteModal };
