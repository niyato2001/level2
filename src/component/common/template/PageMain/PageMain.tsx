import { Dispatch, SetStateAction } from 'react';
import { Card, CardProps } from '../Card/Card';
import { DescriptionModal, DescriptionModalProps } from '../DescriptionModal/DescriptionModal';
import { InputModal } from '../InputModal';
import { InputModalDataProps, InputModalLogic2Props } from '../InputModal/InputModal.type';
import { ToDoProps } from '@/hook/useTodos';

export interface PageMainProps {
  toDoCard: CardProps;
  completedCard: CardProps;
  descriptionModal: DescriptionModalProps;
  createModal: InputModalDataProps;
  updateModal: InputModalDataProps;
  logicProps: InputModalLogic2Props;
}

export interface PageMainFcProps extends PageMainProps {
  toDos: ToDoProps[];
  createClick: () => void;
  descriptionClick: () => void;
  updateClick: () => void;
  clearModal: () => void;
  setToDos: Dispatch<SetStateAction<ToDoProps[]>>;
  modal: string;
}

export const baseId = 'common-template-page-main';

export const PageMain: React.FC<PageMainFcProps> = ({
  toDoCard,
  completedCard,
  descriptionModal,
  createModal,
  updateModal,
  logicProps,
  toDos,
  createClick,
  descriptionClick,
  updateClick,
  clearModal,
  setToDos,
  modal,
}) => (
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
    {modal === 'description' && <DescriptionModal {...descriptionModal} clearModal={clearModal} />}
    {modal === 'create' && (
      <InputModal
        {...createModal}
        {...logicProps}
        clearModal={clearModal}
        toDos={toDos}
        setToDos={setToDos}
      />
    )}
    {modal === 'update' && (
      <InputModal
        {...updateModal}
        {...logicProps}
        clearModal={clearModal}
        toDos={toDos}
        setToDos={setToDos}
      />
    )}
  </div>
);
