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
  const handleCheck = (checked: boolean, i: number): void => {
    const newToDos: ToDoProps[] = [...toDos];
    const index: number = newToDos.findIndex((v) => v.id === i);
    newToDos[index] = { ...newToDos[index], isCompleted: checked };
    setToDos(newToDos);
  };
  const logicProps: LogicProps = {
    type: type,
    toDos: toDos,
    handleClick: handleClick,
    selectClick: selectClick,
    handleCheck: handleCheck,
  };
  const defaultProps: CardDataProps = { ...propObj.toDo };
  return <CardPresenter {...defaultProps} {...logicProps} />;
};

export { Card };
