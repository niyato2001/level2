import { Icon, IconProps } from '@/component/common/part/Icon';

export interface CardProps {
  type: 'TO DO' | 'COMPLETED';
  createLightIcon: IconProps;
  toDoList: string[];
}

export const baseId = 'common-template-card';

export const Card: React.FC<CardProps> = ({ type, createLightIcon, toDoList }) => {
  switch (type) {
    case 'TO DO':
      return (
        <>
          <span className='tag bg-primary-700'>{type}</span>
          <div className='-mt-2 flex w-[360px] flex-col gap-y-2 bg-white px-8 py-4 shadow-md shadow-primary-200'>
            <div className='text-right'>
              <Icon {...createLightIcon} />
            </div>
            {toDoList.map((toDo, i) => (
              <div className='flex items-center gap-x-3' key={i}>
                <span className='h-4 w-4 border-2 border-primary-700 bg-white'></span>
                <span className='font-bold text-primary-700'>{toDo}</span>
              </div>
            ))}
          </div>
        </>
      );
    case 'COMPLETED':
      return (
        <>
          <span className='tag bg-pink-700'>{type}</span>
          <div className='-mt-2 flex w-[360px] flex-col gap-y-2 bg-white px-8 py-4 shadow-md shadow-primary-200'>
            <div className='text-right'>
              <Icon {...createLightIcon} />
            </div>
            {toDoList.map((toDo, i) => (
              <div className='flex items-center gap-x-3' key={i}>
                <div className='flex h-4 w-4 items-center  bg-primary-700 text-white'>
                  <span>✓</span>
                </div>
                <span className='font-bold text-primary-700'>{toDo}</span>
              </div>
            ))}
          </div>
        </>
      );
  }
};
