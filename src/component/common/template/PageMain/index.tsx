import { useLayoutEffect } from 'react';
import { PageMain as PageMainPresenter } from './PageMain';
import { propObj } from './PageMain.props';
import { PageMainDataProps, PageMainLogicProps, PageMainContainerProps } from './PageMain.type';
import { useFormState } from '@/hook/useFormState';
import { useId } from '@/hook/useId';
import { useModal } from '@/hook/useModal';
import { useSelectToDo } from '@/hook/useSelectToDo';
import { ToDoProps, useTodos } from '@/hook/useTodos';

const PageMain: React.FC<PageMainContainerProps> = ({ todos }) => {
  const { id, countId } = useId();
  const { modal, descriptionClick, clearModal, createClick, updateClick, deleteClick } = useModal();
  const { toDos, setToDos } = useTodos();
  const { selectToDo, setSelectToDo } = useSelectToDo();
  const { formState, setFormState, initialForm, handleInput } = useFormState(id);
  useLayoutEffect(() => {
    setToDos(todos);
  }, [setToDos, todos]);
  const onCreateClick = (response: ToDoProps): void => {
    const newToDos = [...toDos, { ...response }];
    setToDos(newToDos);
    countId();
    clearModal();
    console.log(newToDos, id, initialForm);
  };
  const handleClick = (): void => {
    createClick();
    setFormState(initialForm);
  };
  const onUpdateClick = (response: ToDoProps): void => {
    const newToDos = [...toDos];
    newToDos[Number(selectToDo)] = { ...response };
    setToDos([...newToDos]);
    setFormState(initialForm);
    clearModal();
  };
  // update時にselectToDoの初期化はしていない
  const updateSetClick = (): void => {
    setFormState(toDos[Number(selectToDo)]);
    updateClick();
  };
  const deleteSetClick = (): void => {
    deleteClick();
  };
  const logicProps: PageMainLogicProps = {
    countId: countId,
    onCreateClick: onCreateClick,
    onUpdateClick: onUpdateClick,
    formState: formState,
    handleInput: handleInput,
    modal: modal,
    toDos: toDos,
    descriptionClick: descriptionClick,
    clearModal: clearModal,
    handleClick: handleClick,
    updateSetClick: updateSetClick,
    deleteSetClick: deleteSetClick,
    setToDos: setToDos,
    selectToDo: selectToDo,
    setSelectToDo: setSelectToDo,
  };

  const defaultProps: PageMainDataProps = { ...propObj.default };
  return <PageMainPresenter {...defaultProps} {...logicProps} />;
};

export { PageMain };
