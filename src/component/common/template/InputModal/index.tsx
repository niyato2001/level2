import { InputModal as InputModalPresenter } from './InputModal';
import { propObj } from './InputModal.props';
import {
  InputModalContainerProps,
  InputModalLogicProps,
  InputModalDataProps,
} from './InputModal.type';

const InputModal: React.FC<InputModalContainerProps> = ({
  type,
  clearModal,
  toDos,
  setToDos,
  formState,
  onCreateClick,
  handleInput,
}) => {
  // PageMainでformStateの管理をすると、InputModalを消したあとに再び開くとformStateが維持されているがInputModalで管理するとModalを消すと消える。
  // PageMainでformStateの管理をすると、InputModalにバケツリレーするが、その際にInputModalPropsでhandleInput?:とオプショナルを指定すると、undefinedとなりInputModal.propsの中身と齟齬が生じる
  // 結果としてInputModalで状態管理をすることとした。

  const onClearModal = (): void => clearModal();

  // 関数をpropsで親要素から子要素に受け継ぐ場合には子要素であらためて関数を定義する必要がある！
  const logicProps: InputModalLogicProps = {
    type: type,
    handleInput: handleInput,
    clearModal: clearModal,
    onClearModal: onClearModal,
    onCreateClick: onCreateClick,
    formState: formState,
    toDos: toDos,
    setToDos: setToDos,
  };
  const defaultProps: InputModalDataProps = { ...propObj.default };
  return <InputModalPresenter {...defaultProps} {...logicProps} />;
};

export { InputModal };
