import { Dispatch, SetStateAction } from 'react';
import { Icon, IconProps } from '../../part/Icon';
import { useFormState } from '@/hook/useFormState';
import { ToDoProps } from '@/hook/useTodos';

export interface InputModalProps {
  type: 'create' | 'update';
  deleteDeepIcon: IconProps;
}

export interface InputModalFcProps extends InputModalProps {
  clearModal: () => void;
  toDos: ToDoProps[];
  setToDos: Dispatch<SetStateAction<ToDoProps[]>>;
}

export const baseId = 'common-template-input-modal';

export const InputModal: React.FC<InputModalFcProps> = ({
  type,
  deleteDeepIcon,
  clearModal,
  toDos,
  setToDos,
}) => {
  // PageMainでformStateの管理をすると、InputModalを消したあとに再び開くとformStateが維持されているがInputModalで管理するとModalを消すと消える。
  // PageMainでformStateの管理をすると、InputModalにバケツリレーするが、その際にInputModalPropsでhandleInput?:とオプショナルを指定すると、undefinedとなりInputModal.propsの中身と齟齬が生じる
  // 結果としてInputModalで状態管理をすることとした。
  const { formState, handleInput } = useFormState();
  const onClearModal = (): void => clearModal();
  const onCreateClick = (): void => {
    const newToDos = [...toDos];
    setToDos([...newToDos, { ...formState }]);
    clearModal();
  };
  // 関数をpropsで親要素から子要素に受け継ぐ場合には子要素であらためて関数を定義する必要がある！
  switch (type) {
    case 'create':
      return (
        <div className='absolute top-0 left-0 flex h-full w-full items-center justify-center bg-primary-50/90 '>
          <div className='w-80 bg-white p-4 font-bold text-primary-800 shadow-sm shadow-primary-200'>
            <div className='mb-4 flex justify-end'>
              <button className='justify-self-end' onClick={onClearModal}>
                <Icon {...deleteDeepIcon} />
              </button>
            </div>
            <div className='mx-auto px-8'>
              <div className='flex flex-col gap-y-4'>
                <form className='flex flex-col gap-y-1'>
                  <label className='text-lg'>タイトル</label>
                  <input
                    className='form'
                    type='text'
                    onChange={(e) => handleInput('title', e.target.value)}
                    value={formState?.title}
                  />
                  <label>内容</label>
                  <input
                    className='form'
                    type='text'
                    onChange={(e) => handleInput('description', e.target.value)}
                    value={formState?.description}
                  />
                </form>
                <div className='text-right'>
                  <button className='btn green-gradient' onClick={onCreateClick}>
                    新規追加
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    case 'update':
      return (
        <div className='absolute top-0 left-0 flex h-full w-full items-center justify-center bg-primary-50/90'>
          <div className='w-80 bg-white p-4 font-bold text-primary-800 shadow-sm shadow-primary-200'>
            <div className='mb-4 flex justify-end'>
              <button className='justify-self-end' onClick={clearModal}>
                <Icon {...deleteDeepIcon} />
              </button>
            </div>
            <div className='mx-auto px-8'>
              <div className='flex flex-col gap-y-4'>
                <div className='text-lg'>タイトル</div>
                内容
                <div className='text-right'>
                  <button className='btn green-gradient' onClick={onCreateClick}>
                    更新
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
};
