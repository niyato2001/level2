import { Icon, IconProps } from '../../part/Icon';

export interface InputModalProps {
  type: 'create' | 'update';
  deleteDeepIcon: IconProps;
  title: string;
  description: string;
}

export const baseId = 'common-template-input-modal';

export const InputModal: React.FC<InputModalProps> = ({
  type,
  deleteDeepIcon,
  title,
  description,
}) => {
  switch (type) {
    case 'create':
      return (
        <div className='absolute top-0 left-0 flex h-full w-full items-center justify-center bg-primary-50 opacity-90 '>
          <div className='w-80 bg-white p-4 font-bold text-primary-800 shadow-sm shadow-primary-200'>
            <div className='mb-4 text-right'>
              <Icon {...deleteDeepIcon} />
            </div>
            <div className='mx-auto px-8'>
              <div className='flex flex-col gap-y-4'>
                <div className='text-lg'>{title}</div>
                {description}
                <div className='text-right'>
                  <button className='btn green-gradient'>新規追加</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    case 'update':
      return (
        <div className='absolute top-0 left-0 flex h-full w-full items-center justify-center bg-primary-50 opacity-90 '>
          <div className='w-80 bg-white p-4 font-bold text-primary-800 shadow-sm shadow-primary-200'>
            <div className='mb-4 text-right'>
              <Icon {...deleteDeepIcon} />
            </div>
            <div className='mx-auto px-8'>
              <div className='flex flex-col gap-y-4'>
                <div className='text-lg'>{title}</div>
                {description}
                <div className='text-right'>
                  <button className='btn green-gradient'>更新</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
};
