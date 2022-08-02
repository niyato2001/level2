import { Card, CardProps } from '../Card/Card';
import { DescriptionModal, DescriptionModalProps } from '../DescriptionModal/DescriptionModal';
import { InputModal, InputModalProps } from '../InputModal/InputModal';
import { useModal } from '@/hook/useModal';

export interface PageMainProps {
  toDoCard: CardProps;
  completedCard: CardProps;
  descriptionModal: DescriptionModalProps;
  createModal: InputModalProps;
  updateModal: InputModalProps;
}

export const baseId = 'common-template-page-main';

export const PageMain: React.FC<PageMainProps> = ({
  toDoCard,
  completedCard,
  descriptionModal,
  createModal,
  updateModal,
}) => {
  const { modal, descriptionClick, clearModal, createClick, updateClick } = useModal();
  return (
    <div className='relative flex w-[420px] flex-col gap-y-5 bg-primary-50 p-8'>
      <span className='text-lg font-bold text-primary-700'>For what you wanna do!!</span>
      <Card {...toDoCard} />
      <Card {...completedCard} />
      <button className='btn green-gradient' onClick={descriptionClick}>
        description
      </button>
      <button className='btn green-gradient' onClick={createClick}>
        create
      </button>
      <button className='btn green-gradient' onClick={updateClick}>
        update
      </button>
      {modal === 'description' && (
        <DescriptionModal {...descriptionModal} clearModal={clearModal} />
      )}
      {modal === 'create' && <InputModal {...createModal} clearModal={clearModal} />}
      {modal === 'update' && <InputModal {...updateModal} clearModal={clearModal} />}
    </div>
  );
};
