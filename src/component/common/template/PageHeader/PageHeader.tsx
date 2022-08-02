import { Icon, IconProps } from '@/component/common/part/Icon';

export interface PageHeaderProps {
  symbolLogoIcon: IconProps;
  textLogoIcon: IconProps;
}

export const baseId = 'common-template-page-header';

export const PageHeader: React.FC<PageHeaderProps> = ({ symbolLogoIcon, textLogoIcon }) => (
  <header className='flex-start flex w-[420px] gap-x-3 bg-primary-700 p-7'>
    <Icon {...symbolLogoIcon} />
    <Icon {...textLogoIcon} />
  </header>
);
