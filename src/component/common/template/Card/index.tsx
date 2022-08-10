import axios from 'axios';
import { Card as CardPresenter } from './Card';
import { propObj } from './Card.props';
import { CardContainerProps, CardDataProps, LogicProps } from './Card.type';
import { ToDoProps } from '@/hook/useTodos';

const Card: React.FC<CardContainerProps> = ({
  type,
  toDos,
  handleClick,
  descriptionClick,
  setSelectToDo,
  selectToDo,
  setToDos,
}) => {
  const selectClick = (i: number): void => {
    const index: number = toDos.findIndex((v) => v.id === i);
    setSelectToDo(`${index}`);
    descriptionClick();
    console.log(selectToDo);
  };
  const newToDos: ToDoProps[] = [...toDos];
  const handleCheck = (response: ToDoProps, i: number): void => {
    newToDos[i] = { ...response };
    setToDos(newToDos);
  };
  const handleCheckFetch = async (checked: boolean, i: number): Promise<void> => {
    const index: number = newToDos.findIndex((v) => v.id === i);
    axios
      .patch<ToDoProps>('/api/update-delete-todo', { ...newToDos[index], isCompleted: checked })
      .then((response) => handleCheck(response.data, index))
      .catch((error) => {
        console.log('更新できませんでした！');
        console.log(error.message);
      });
  };

  const logicProps: LogicProps = {
    type: type,
    toDos: toDos,
    handleClick: handleClick,
    selectClick: selectClick,
    handleCheckFetch: handleCheckFetch,
  };
  const defaultProps: CardDataProps = { ...propObj.toDo };
  return <CardPresenter {...defaultProps} {...logicProps} />;
};

export { Card };
