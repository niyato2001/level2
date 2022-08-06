import { useState, Dispatch, SetStateAction } from 'react';

export interface ToDoProps {
  title: string;
  isCompleted: boolean;
  description: string;
  id: number;
}

interface UseTodosReturnType {
  toDos: ToDoProps[];
  setToDos: Dispatch<SetStateAction<ToDoProps[]>>;
}

const toDoList: ToDoProps[] = [
  { title: 'テキスト1', isCompleted: false, description: 'テキスト1', id: -2 },
  { title: 'テキスト2', isCompleted: false, description: 'テキスト2', id: -1 },
];

export const useTodos = (): UseTodosReturnType => {
  const initialToDos = [...toDoList];
  const [toDos, setToDos] = useState<ToDoProps[]>(initialToDos);

  return { toDos, setToDos };
};
