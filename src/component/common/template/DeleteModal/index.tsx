import axios from 'axios';
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
  const newToDos: ToDoProps[] = [...toDos];
  const deleteToDo: ToDoProps = newToDos[Number(selectToDo)];
  const onDeleteClick = (): void => {
    setToDos(newToDos.filter((v) => v !== deleteToDo));
    clearModal();
  };
  const onDeleteFetch = (): void => {
    axios
      .delete<ToDoProps>('/api/update-delete-todo', { data: { id: deleteToDo.id } })
      .then(() => onDeleteClick())
      .catch((error) => {
        console.log('削除できませんでした！');
        console.log(error.message);
      });
  };
  const toDo: ToDoProps = toDos[Number(selectToDo)];
  const logicProps: DeleteModalLogicProps = {
    clearModal: clearModal,
    descriptionClick: descriptionClick,
    onDeleteFetch: onDeleteFetch,
    toDo: toDo,
  };
  const defaultProps: DeleteModalDataProps = { ...propObj.default };
  return <DeleteModalPresenter {...defaultProps} {...logicProps} />;
};

export { DeleteModal };
