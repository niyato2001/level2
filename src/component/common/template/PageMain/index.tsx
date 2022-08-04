import { PageMain as PageMainPresenter } from './PageMain';
import { propObj } from './PageMain.props';
import { PageMainDataProps, PageMainLogicProps } from './PageMain.type';
import { useModal } from '@/hook/useModal';
import { useSelectToDo } from '@/hook/useSelectToDo';
import { useTodos } from '@/hook/useTodos';
/**
 * ロジックが存在しない（= Container が要らない）場合は 以下と置き換えてください。
 * 存在する場合はコメントアウト部分を全て削除して使ってください。
 */
/* 
export type { PageMainProps };
export { PageMainPresenter};
*/

const PageMain: React.FC = () => {
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
