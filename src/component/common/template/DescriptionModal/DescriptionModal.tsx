import { Icon, IconProps } from '../../part/Icon';

export interface DescriptionModalProps {
  deleteDeepIcon: IconProps;
  title: string;
  description: string[];
}

export const baseId = 'common-template-description-modal';

export const DescriptionModal: React.FC<DescriptionModalProps> = ({
  deleteDeepIcon,
  title,
  description,
}) => (
  <div className='w-80 p-4 font-bold text-primary-800 shadow-sm shadow-primary-200'>
    <div className='mb-4 text-right'>
      <Icon {...deleteDeepIcon} />
    </div>
    <div className='mx-auto px-8'>
      <div className='flex flex-col gap-y-4'>
        <div className='text-lg'>{title}</div>
        <ul>
          {description.map((item, i) => (
            <li key={i}>・{item}</li>
          ))}
        </ul>
        <div className='text-right'>
          <button className='btn green-gradient'>更新</button>
        </div>
      </div>
    </div>
  </div>
);
