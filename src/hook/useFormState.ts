import { useState } from 'react';
import { ToDoProps } from '@/hook/useTodos';

interface UseFormStateReturnType {
  formState: ToDoProps;
  handleInput: (key: string, value: string) => void;
}

export const useFormState = (): UseFormStateReturnType => {
  const initialForm: ToDoProps = { title: '', description: '', isCompleted: false };
  const [formState, setFormState] = useState<ToDoProps>(initialForm);
  const handleInput = (key: string, value: string) => {
    const newFormState = { ...formState, [key]: value };
    setFormState(newFormState);
    console.log(newFormState);
  };
  return { formState, handleInput };
};
