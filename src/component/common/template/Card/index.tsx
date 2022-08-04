import { Card as CardPresenter } from './Card';
import { propObj } from './Card.props';
import { CardContainerProps, CardDataProps, LogicProps } from './Card.type';

const Card: React.FC<CardContainerProps> = ({ toDos, handleClick }) => {
  const logicProps: LogicProps = {
    toDos: toDos,
    handleClick: handleClick,
  };
  const defaultProps: CardDataProps = { ...propObj.toDo };
  return <CardPresenter {...defaultProps} {...logicProps} />;
};

export { Card };
