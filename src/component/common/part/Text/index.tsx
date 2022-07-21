export interface TextProps {
  children: React.ReactNode;
}

export const baseId = 'common-part-text';

export const Text: React.FC<TextProps> = ({ children }) => <>{children}</>;
