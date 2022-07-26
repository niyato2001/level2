import { Icon } from '../../part/Icon';
import { InputModalPresenterProps } from '@/component/common/template/InputModal/InputModal.type';

export const baseId = 'common-template-input-modal';

export const InputModal: React.FC<InputModalPresenterProps> = ({
  onCreateFetch,
  type,
  deleteDeepIcon,
  clearModal,
  onClearModal,
  onUpdateFetch,
  handleInput,
  formState,
}) => {
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
                    value={formState.title}
                  />
                  <label>内容</label>
                  <textarea
                    className='textarea'
                    onChange={(e) => handleInput('description', e.target.value)}
                    value={formState.description}
                  />
                </form>
                <div className='text-right'>
                  <button className='btn green-gradient' onClick={onCreateFetch}>
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
                <form className='flex flex-col gap-y-1'>
                  <label className='text-lg'>タイトル</label>
                  <input
                    className='form'
                    type='text'
                    onChange={(e) => handleInput('title', e.target.value)}
                    value={formState.title}
                  />
                  <label>内容</label>
                  <textarea
                    className='textarea'
                    onChange={(e) => handleInput('description', e.target.value)}
                    value={formState.description}
                  />
                </form>
                <div className='text-right'>
                  <button className='btn green-gradient' onClick={onUpdateFetch}>
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
