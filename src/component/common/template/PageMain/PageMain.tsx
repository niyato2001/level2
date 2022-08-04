import { Card } from '../Card/index';
import { DescriptionModal } from '../DescriptionModal/DescriptionModal';
import { InputModal } from '../InputModal';
import { PageMainPresenterProps } from './PageMain.type';

export const baseId = 'common-template-page-main';

export const PageMain: React.FC<PageMainPresenterProps> = ({
  toDo,
  completed,
  toDoCard,
  completedCard,
  descriptionModal,
  createModal,
  updateModal,
  toDos,
  createClick,
  descriptionClick,
  updateClick,
  clearModal,
  setToDos,
  modal,
  selectToDo,
  setSelectToDo,
}) => (
  <div className='relative flex w-[420px] flex-col gap-y-5 bg-primary-50 p-8'>
    <span className='text-lg font-bold text-primary-700'>For what you wanna do!!</span>
    <Card
      type={toDo}
      {...toDoCard}
      toDos={toDos}
      handleClick={createClick}
      descriptionClick={descriptionClick}
      setSelectToDo={setSelectToDo}
      selectToDo={selectToDo}
    />
    <Card
      type={completed}
      {...completedCard}
      toDos={toDos}
      handleClick={createClick}
      descriptionClick={descriptionClick}
      setSelectToDo={setSelectToDo}
      selectToDo={selectToDo}
    />
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
      <DescriptionModal
        {...descriptionModal}
        clearModal={clearModal}
        toDo={toDos[Number(selectToDo)]}
      />
    )}
    {modal === 'create' && (
      <InputModal {...createModal} clearModal={clearModal} toDos={toDos} setToDos={setToDos} />
    )}
    {modal === 'update' && (
      <InputModal {...updateModal} clearModal={clearModal} toDos={toDos} setToDos={setToDos} />
    )}
  </div>
);
