import { Card } from '../Card/index';
import { DeleteModal } from '../DeleteModal';
import { DescriptionModal } from '../DescriptionModal/';
import { InputModal } from '../InputModal';
import { PageMainPresenterProps } from './PageMain.type';

export const baseId = 'common-template-page-main';

export const PageMain: React.FC<PageMainPresenterProps> = ({
  toDoCard,
  completedCard,
  descriptionModal,
  createModal,
  updateModal,
  toDos,
  createClick,
  descriptionClick,
  updateSetClick,
  deleteSetClick,
  clearModal,
  setToDos,
  modal,
  selectToDo,
  setSelectToDo,
  onCreateClick,
  onUpdateClick,
  formState,
  handleInput,
}) => (
  <div className='relative flex w-[420px] flex-col gap-y-5 bg-primary-50 p-8'>
    <span className='text-lg font-bold text-primary-700'>For what you wanna do!!</span>
    <Card
      type='TO DO'
      {...toDoCard}
      toDos={toDos}
      handleClick={createClick}
      descriptionClick={descriptionClick}
      setSelectToDo={setSelectToDo}
      selectToDo={selectToDo}
    />
    <Card
      type='COMPLETED'
      {...completedCard}
      toDos={toDos}
      handleClick={createClick}
      descriptionClick={descriptionClick}
      setSelectToDo={setSelectToDo}
      selectToDo={selectToDo}
    />

    {modal === 'description' && (
      <DescriptionModal
        {...descriptionModal}
        updateSetClick={updateSetClick}
        deleteSetClick={deleteSetClick}
        clearModal={clearModal}
        toDo={toDos[Number(selectToDo)]}
      />
    )}
    {modal === 'create' && (
      <InputModal
        formState={formState}
        handleInput={handleInput}
        onCreateClick={onCreateClick}
        onUpdateClick={onUpdateClick}
        type='create'
        {...createModal}
        clearModal={clearModal}
        toDos={toDos}
        setToDos={setToDos}
      />
    )}
    {modal === 'update' && (
      <InputModal
        formState={formState}
        handleInput={handleInput}
        onCreateClick={onCreateClick}
        onUpdateClick={onUpdateClick}
        type='update'
        {...updateModal}
        clearModal={clearModal}
        toDos={toDos}
        setToDos={setToDos}
      />
    )}
    {modal === 'delete' && (
      <DeleteModal
        clearModal={clearModal}
        descriptionClick={descriptionClick}
        toDos={toDos}
        setToDos={setToDos}
        selectToDo={selectToDo}
      />
    )}
  </div>
);
