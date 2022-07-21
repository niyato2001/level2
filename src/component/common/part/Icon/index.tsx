import Image, { StaticImageData } from 'next/image';

export interface IconProps {
  type:
    | 'create-deep'
    | 'create-light'
    | 'delete-deep'
    | 'delete-light'
    | 'symbol-logo'
    | 'text-logo';
  src: StaticImageData;
  width?: number;
  height?: number;
}

export const baseId = 'common-part-icon';

export const Icon: React.FC<IconProps> = ({ type, src, width, height }) => (
  <Image src={src} alt={type} width={width} height={height} />
);
