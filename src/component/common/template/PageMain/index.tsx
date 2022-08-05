import { PageMain as PageMainPresenter } from './PageMain';
import { propObj } from './PageMain.props';
import { PageMainDataProps, PageMainLogicProps } from './PageMain.type';
import { useFormState } from '@/hook/useFormState';
import { useModal } from '@/hook/useModal';
import { useSelectToDo } from '@/hook/useSelectToDo';
import { useTodos } from '@/hook/useTodos';

const PageMain: React.FC = () => {
  const { modal, descriptionClick, clearModal, createClick, updateClick } = useModal();
  const { toDos, setToDos } = useTodos();
  const { selectToDo, setSelectToDo } = useSelectToDo();
  const { formState, setFormState, initialForm, handleInput } = useFormState();
  const onCreateClick = (): void => {
    const newToDos = [...toDos];
    setToDos([...newToDos, { ...formState }]);
    setFormState(initialForm);
    clearModal();
  };
  const onUpdateClick = (): void => {
    const newToDos = [...toDos];
    newToDos[Number(selectToDo)] = { ...formState };
    setToDos([...newToDos]);
    setFormState(initialForm);
    clearModal();
  };
  // update時にselectToDoの初期化はしていない
  const updateSetClick = (): void => {
    setFormState(toDos[Number(selectToDo)]);
    updateClick();
  };
  const logicProps: PageMainLogicProps = {
    onCreateClick: onCreateClick,
    onUpdateClick: onUpdateClick,
    formState: formState,
    handleInput: handleInput,
    modal: modal,
    toDos: toDos,
    descriptionClick: descriptionClick,
    clearModal: clearModal,
    createClick: createClick,
    updateSetClick: updateSetClick,
    setToDos: setToDos,
    selectToDo: selectToDo,
    setSelectToDo: setSelectToDo,
  };

  const defaultProps: PageMainDataProps = { ...propObj.default };
  return <PageMainPresenter {...defaultProps} {...logicProps} />;
};

export { PageMain };
