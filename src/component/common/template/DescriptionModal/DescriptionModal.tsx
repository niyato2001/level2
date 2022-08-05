import { Icon } from '../../part/Icon';
import { DescriptionModalPresenterProps } from './DescriptionModal.type';

export const baseId = 'common-template-description-modal';

export const DescriptionModal: React.FC<DescriptionModalPresenterProps> = ({
  deleteDeepIcon,
  updateSetClick,
  clearModal,
  toDo,
}) => (
  <div className='absolute top-0 left-0 flex h-full w-full items-center justify-center bg-primary-50/90'>
    <div className='w-80 bg-white p-4 font-bold text-primary-800 shadow-sm shadow-primary-200'>
      <div className='mb-4 flex justify-end'>
        <button className='justify-self-end' onClick={clearModal}>
          <Icon {...deleteDeepIcon} />
        </button>
      </div>
      <div className='mx-auto px-8'>
        <div className='flex flex-col gap-y-4'>
          <div className='text-lg'>{toDo.title}</div>
          <div>{toDo.description}</div>
          <div className='text-right'>
            <button className='btn green-gradient' onClick={updateSetClick}>
              更新
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
