import { Icon, IconProps } from '../../part/Icon';

export interface DeleteModalProps {
  deleteDeepIcon: IconProps;
  title: string;
}

export const baseId = 'common-template-delete-modal';

export const DeleteModal: React.FC<DeleteModalProps> = ({ deleteDeepIcon, title }) => (
  <div className='absolute top-0 left-0 flex h-full w-full items-center justify-center bg-primary-50 opacity-90 '>
    <div className='w-80 bg-white p-4 font-bold text-primary-800 shadow-sm shadow-primary-200'>
      <div className='mb-4 text-right'>
        <Icon {...deleteDeepIcon} />
      </div>
      <div className='mx-auto px-8'>
        <div className='flex flex-col gap-y-4'>
          <div className='text-lg'>{title}</div>
          本当に削除しますか？
          <div className='mx-auto mb-4 flex flex-row gap-x-4'>
            <button className='btn green-gradient'>キャンセル</button>
            <button className='btn pink-gradient'>削除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);