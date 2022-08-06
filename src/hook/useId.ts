import { useState, Dispatch, SetStateAction } from 'react';

export interface UseIdReturntype {
  id: number;
  setId: Dispatch<SetStateAction<number>>;
  countId: () => void;
}

export const useId = (): UseIdReturntype => {
  const [id, setId] = useState<number>(0);
  const countId = (): void => {
    setId((id) => (id += 1));
  };
  return { id, setId, countId };
};
