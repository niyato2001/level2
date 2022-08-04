import { Card as CardPresenter } from './Card';
import { propObj } from './Card.props';
import { CardContainerProps, CardDataProps, LogicProps } from './Card.type';

const Card: React.FC<CardContainerProps> = ({
  type,
  toDos,
  handleClick,
  descriptionClick,
  setSelectToDo,
  selectToDo,
}) => {
  const selectClick = (i: number): void => {
    setSelectToDo(`${i}`);
    descriptionClick();
    console.log(selectToDo);
  };
  const logicProps: LogicProps = {
    type: type,
    toDos: toDos,
    handleClick: handleClick,
    selectClick: selectClick,
  };
  const defaultProps: CardDataProps = { ...propObj.toDo };
  return <CardPresenter {...defaultProps} {...logicProps} />;
};

export { Card };
