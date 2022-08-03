import { Card, CardFcProps } from '../Card/Card';
import { DescriptionModal, DescriptionModalProps } from '../DescriptionModal/DescriptionModal';
import { InputModal, InputModalProps } from '../InputModal/InputModal';
import { useModal } from '@/hook/useModal';
import { useTodos } from '@/hook/useTodos';

export interface PageMainProps {
  toDoCard: CardFcProps;
  completedCard: CardFcProps;
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
  const { toDos, setToDos } = useTodos();
  return (
    <div className='relative flex w-[420px] flex-col gap-y-5 bg-primary-50 p-8'>
      <span className='text-lg font-bold text-primary-700'>For what you wanna do!!</span>
      <Card {...toDoCard} toDos={toDos} handleClick={createClick} />
      <Card {...completedCard} toDos={toDos} handleClick={createClick} />
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
      {modal === 'create' && (
        <InputModal {...createModal} clearModal={clearModal} toDos={toDos} setToDos={setToDos} />
      )}
      {modal === 'update' && (
        <InputModal {...updateModal} clearModal={clearModal} toDos={toDos} setToDos={setToDos} />
      )}
    </div>
  );
};
