import { useState } from 'react';
import { Card, CardProps } from '../Card/Card';
import { DescriptionModal, DescriptionModalProps } from '../DescriptionModal/DescriptionModal';

export interface PageMainProps {
  toDoCard: CardProps;
  completedCard: CardProps;
  descriptionModal: DescriptionModalProps;
}

export const baseId = 'common-template-page-main';

const modals:string[]=['description',''];

export const PageMain: React.FC<PageMainProps> = ({
  toDoCard,
  completedCard,
  descriptionModal,
}) => {
  const [modal, setModal] = useState(modals[-1]);
  const handleClick = ():void => {
    setModal('description')
  };
  return (
    <div className='flex w-[420px] flex-col gap-y-5 bg-primary-50 p-8'>
      <span className='text-lg font-bold text-primary-700'>For what you wanna do!!</span>
      <Card {...toDoCard} />
      <Card {...completedCard} />
      <button className='btn green-gradient' onClick={handleClick}>Green</button>
      {modal === 'description' && <DescriptionModal {...descriptionModal} />}
    </div>
  );
};
