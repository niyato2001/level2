import { useState, Dispatch, SetStateAction } from 'react';

export interface UseSelectToDoReturnType {
  selectToDo: string;
  setSelectToDo: Dispatch<SetStateAction<string>>;
}

export const useSelectToDo = (): UseSelectToDoReturnType => {
  const [selectToDo, setSelectToDo] = useState<string>('');
  return { selectToDo, setSelectToDo };
};
