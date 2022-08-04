import { PageMain as PageMainPresenter } from './PageMain';
import { propObj } from './PageMain.props';
import { PageMainDataProps, PageMainLogicProps, PageMainContainerProps } from './PageMain.type';
import { useModal } from '@/hook/useModal';
import { useSelectToDo } from '@/hook/useSelectToDo';
import { useTodos } from '@/hook/useTodos';

const PageMain: React.FC<PageMainContainerProps> = () => {
  const { modal, descriptionClick, clearModal, createClick, updateClick } = useModal();
  const { toDos, setToDos } = useTodos();
  const { selectToDo, setSelectToDo } = useSelectToDo();
  const logicProps: PageMainLogicProps = {
    modal: modal,
    toDos: toDos,
    descriptionClick: descriptionClick,
    clearModal: clearModal,
    createClick: createClick,
    updateClick: updateClick,
    setToDos: setToDos,
    selectToDo: selectToDo,
    setSelectToDo: setSelectToDo,
  };

  const defaultProps: PageMainDataProps = { ...propObj.default };
  return <PageMainPresenter {...defaultProps} {...logicProps} />;
};

export { PageMain };
