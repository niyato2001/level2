import { IconProps } from '../../part/Icon';

export interface DeleteModalDataProps {
  deleteDeepIcon: IconProps;
  title: string;
}

export interface DeleteModalPresenterProps extends DeleteModalDataProps {
  clearModal: () => void;
}

export interface DeleteModalContainerProps {
  clearModal: () => void;
}

export interface DeleteModalLogicProps {
  clearModal: () => void;
}
