import { useState } from 'react';

export interface ToDoProps {
  title: string;
  isCompleted: boolean;
  description: string;
}

interface UseTodosReturnType {
  toDos: ToDoProps[];
  handleClick: () => void;
}

const toDoList: ToDoProps[] = [
  { title: 'テキスト1', isCompleted: false, description: 'テキスト1' },
  { title: 'テキスト2', isCompleted: false, description: 'テキスト2' },
];

export const useTodos = (): UseTodosReturnType => {
  const initialToDos = [...toDoList];
  const [toDos, setToDos] = useState<ToDoProps[]>(initialToDos);
  const handleClick = () => {
    const newToDos = [...toDos];
    setToDos([...newToDos, { title: '新規', isCompleted: false, description: '新規' }]);
  };
  return { toDos, handleClick };
};
