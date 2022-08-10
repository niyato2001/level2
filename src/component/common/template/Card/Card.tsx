import { CardPresenterProps } from './Card.type';
import { Icon } from '@/component/common/part/Icon';

export const baseId = 'common-template-card';

export const Card: React.FC<CardPresenterProps> = ({
  type,
  createLightIcon,
  toDos,
  handleClick,
  selectClick,
  handleCheckFetch,
}) => {
  switch (type) {
    case 'TO DO':
      return (
        <div>
          <span className='tag bg-primary-700'>{type}</span>
          <div className='-mt-2 flex w-[360px] flex-col gap-y-2 bg-white px-8 py-4 shadow-md shadow-primary-200'>
            <div className='flex justify-end'>
              <button className='justify-self-end' onClick={handleClick}>
                <Icon {...createLightIcon} />
              </button>
            </div>
            {toDos
              .filter((v) => v.isCompleted === false)
              .map((toDo) => (
                <div className='flex items-center gap-x-3' key={toDo.id}>
                  <input
                    type='checkbox'
                    className='rounded-sm border-primary-700 text-primary-700 focus:ring-transparent'
                    checked={toDo.isCompleted}
                    onChange={(e) => handleCheckFetch(e.target.checked, toDo.id)}
                  />
                  <button
                    className='font-bold text-primary-700'
                    onClick={() => selectClick(toDo.id)}
                  >
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
            {toDos
              .filter((v) => v.isCompleted === true)
              .map((toDo) => (
                <div className='flex items-center gap-x-3' key={toDo.id}>
                  <input
                    type='checkbox'
                    className='rounded-sm border-primary-700 text-primary-700 focus:ring-transparent'
                    checked={toDo.isCompleted}
                    onChange={(e) => handleCheckFetch(e.target.checked, toDo.id)}
                  />
                  <button
                    className='font-bold text-primary-700'
                    onClick={() => selectClick(toDo.id)}
                  >
                    {toDo.title}
                  </button>
                </div>
              ))}
          </div>
        </div>
      );
  }
};
