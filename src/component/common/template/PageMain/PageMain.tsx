import { Card, CardProps } from '../Card/Card';
import { DescriptionModal, DescriptionModalProps } from '../DescriptionModal/DescriptionModal';
import { useModal } from '@/hook/useModal';

export interface PageMainProps {
  toDoCard: CardProps;
  completedCard: CardProps;
  descriptionModal: DescriptionModalProps;
}

export const baseId = 'common-template-page-main';

export const PageMain: React.FC<PageMainProps> = ({
  toDoCard,
  completedCard,
  descriptionModal,
}) => {
  const { modal, descriptionClick, clearModal } = useModal();
  return (
    <div className='relative flex w-[420px] flex-col gap-y-5 bg-primary-50 p-8'>
      <span className='text-lg font-bold text-primary-700'>For what you wanna do!!</span>
      <Card {...toDoCard} />
      <Card {...completedCard} />
      <button className='btn green-gradient' onClick={descriptionClick}>
        Green
      </button>
      {modal === 'description' && (
        <DescriptionModal {...descriptionModal} clearModal={clearModal} />
      )}
    </div>
  );
};
