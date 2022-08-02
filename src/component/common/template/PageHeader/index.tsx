import { PageHeader as PageHeaderPresenter, PageHeaderProps } from './PageHeader';
import { propObj } from './PageHeader.props';

export type { PageHeaderProps };
export { PageHeaderPresenter };

const PageHeader: React.FC = () => {
  const defaultProps: PageHeaderProps = { ...propObj.default };
  return <PageHeaderPresenter {...defaultProps} />;
};

export { PageHeader };
