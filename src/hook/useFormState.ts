import { useState, Dispatch, SetStateAction } from 'react';
import { ToDoProps } from '@/hook/useTodos';

interface UseFormStateReturnType {
  setFormState: Dispatch<SetStateAction<ToDoProps>>;
  formState: ToDoProps;
  initialForm: ToDoProps;
  handleInput: (key: string, value: string) => void;
}

export const useFormState = (id: number): UseFormStateReturnType => {
  const initialForm: ToDoProps = { title: '', description: '', isCompleted: false, id: id };
  const [formState, setFormState] = useState<ToDoProps>(initialForm);
  const handleInput = (key: string, value: string) => {
    const newFormState = { ...formState, [key]: value };
    setFormState(newFormState);
    console.log(newFormState);
  };
  return { formState, setFormState, initialForm, handleInput };
};
