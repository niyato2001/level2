export interface FormProps {
  children: React.ReactNode;
}

export const baseId = 'common-part-form';

export const Form: React.FC<FormProps> = ({ children }) => <>{children}</>;
