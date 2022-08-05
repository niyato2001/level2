import { CardPresenterProps } from './Card.type';
import { Icon } from '@/component/common/part/Icon';

export const baseId = 'common-template-card';

export const Card: React.FC<CardPresenterProps> = ({
  type,
  createLightIcon,
  toDos,
  handleClick,
  selectClick,
}) => {
  switch (type) {
    case 'TO DO':
      return (
        <div>
          <span className='tag bg-primary-700'>{type}</span>
          <div className='-mt-2 flex w-[360px] flex-col gap-y-2 bg-white px-8 py-4 shadow-md shadow-primary-200'>
            <div className='flex justify-end'>
              <span className='justify-self-end' onClick={handleClick}>
                <Icon {...createLightIcon} />
              </span>
            </div>
            {toDos
              .filter((v) => v.isCompleted === false)
              .map((toDo, i) => (
                <div className='flex items-center gap-x-3' key={i}>
                  <input
                    type='checkbox'
                    className='rounded-sm border-primary-700 text-primary-700 focus:ring-transparent'
                    defaultChecked={toDo.isCompleted}
                  />

                  <button className='font-bold text-primary-700' onClick={() => selectClick(i)}>
                    {toDo.title}
                  </button>
                </div>
              ))}
          </div>
        </div>
      );
    case 'COMPLETED':
      return (
        <div>
          <span className='tag bg-pink-700'>{type}</span>
          <div className='-mt-2 flex w-[360px] flex-col gap-y-2 bg-white px-8 pt-10 pb-4 shadow-md shadow-primary-200'>
            <div className='flex justify-end'>
              {/* <span className='justify-self-end' onClick={handleClick}>
                <Icon {...createLightIcon} />
              </span> */}
              {/* completedに直接追加することは考えにくいので消去 */}
            </div>
            {toDos &&
              toDos
                .filter((v) => v.isCompleted === true)
                .map((toDo, i) => (
                  <div className='flex items-center gap-x-3' key={i}>
                    <input
                      type='checkbox'
                      className='rounded-sm border-primary-700 text-primary-700 focus:ring-transparent'
                      defaultChecked={toDo.isCompleted}
                    />
                    <span className='font-bold text-primary-700'>{toDo.title}</span>
                  </div>
                ))}
          </div>
        </div>
      );
  }
};
