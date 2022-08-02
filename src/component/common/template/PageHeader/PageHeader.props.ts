import { PageHeaderProps } from './PageHeader';
import { symbolLogoProps, textLogoProps } from '@/component/common/part/Icon/Icon.props';

const defaultProps: PageHeaderProps = {
  symbolLogoIcon: symbolLogoProps,
  textLogoIcon: textLogoProps,
};

export const propObj: { [key: string]: PageHeaderProps } = {
  default: defaultProps,
};
