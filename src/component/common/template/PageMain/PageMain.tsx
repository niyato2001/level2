import { Card, CardProps } from '../Card/Card';

export interface PageMainProps {
  toDoCard: CardProps;
  completedCard: CardProps;
}

export const baseId = 'common-template-page-main';

export const PageMain: React.FC<PageMainProps> = ({ toDoCard, completedCard }) => (
  <div className='flex w-[420px] flex-col gap-y-5 bg-primary-50 p-8'>
    <span className='text-lg font-bold text-primary-700'>For what you wanna do!!</span>
    <Card {...toDoCard} />
    <Card {...completedCard} />
  </div>
);
