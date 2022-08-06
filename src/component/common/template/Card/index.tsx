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
    setSelectToDo(`${i}`);
    descriptionClick();
    console.log(selectToDo);
  };
  const handleCheck = (checked: boolean, i: number): void => {
    const newToDos: ToDoProps[] = [...toDos];
    newToDos[i] = { ...newToDos[i], isCompleted: checked };
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
