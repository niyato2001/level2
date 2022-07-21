export interface TagProps {
  children: React.ReactNode;
}

export const baseId = 'common-part-tag';

export const Tag: React.FC<TagProps> = ({ children }) => <>{children}</>;
