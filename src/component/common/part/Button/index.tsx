export interface ButtonProps {
  children: React.ReactNode;
}

export const baseId = 'common-part-button';

export const Button: React.FC<ButtonProps> = ({ children }) => <>{children}</>;
