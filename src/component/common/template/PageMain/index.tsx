import { Dispatch, SetStateAction } from 'react';
import { PageMain as PageMainPresenter, PageMainProps } from './PageMain';
import { propObj } from './PageMain.props';
import { useModal } from '@/hook/useModal';
import { ToDoProps, useTodos } from '@/hook/useTodos';
/**
 * ロジックが存在しない（= Container が要らない）場合は 以下と置き換えてください。
 * 存在する場合はコメントアウト部分を全て削除して使ってください。
 */
/* 
export type { PageMainProps };
export { PageMainPresenter};
*/

type PageMainContainerProps = {
  modal: string;
  toDos: ToDoProps[];
  setToDos: Dispatch<SetStateAction<ToDoProps[]>>;
  clearModal: () => void;
  descriptionClick: () => void;
  createClick: () => void;
  updateClick: () => void;
};

const PageMain: React.FC = () => {
  const { modal, descriptionClick, clearModal, createClick, updateClick } = useModal();
  const { toDos, setToDos } = useTodos();
  const logicProps: PageMainContainerProps = {
    modal: modal,
    toDos: toDos,
    descriptionClick: descriptionClick,
    clearModal: clearModal,
    createClick: createClick,
    updateClick: updateClick,
    setToDos: setToDos,
  };

  const defaultProps: PageMainProps = { ...propObj.default };
  return <PageMainPresenter {...defaultProps} {...logicProps} />;
};

export { PageMain };
