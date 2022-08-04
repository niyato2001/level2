import { Card as CardPresenter } from './Card';
import { propObj } from './Card.props';
import { CardContainerProps, CardDataProps, LogicProps } from './Card.type';

const Card: React.FC<CardContainerProps> = ({ toDos, handleClick, descriptionClick }) => {
  const logicProps: LogicProps = {
    toDos: toDos,
    handleClick: handleClick,
    descriptionClick: descriptionClick,
  };
  const defaultProps: CardDataProps = { ...propObj.toDo };
  return <CardPresenter {...defaultProps} {...logicProps} />;
};

export { Card };
