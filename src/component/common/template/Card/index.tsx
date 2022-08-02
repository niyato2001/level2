import { Card as CardPresenter, CardProps } from './Card';
import { propObj } from './Card.props';

const Card: React.FC = () => {
  const defaultProps: CardProps = { ...propObj.toDo };
  return <CardPresenter {...defaultProps} />;
};

export { Card };
