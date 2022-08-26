import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const useTodos = () => {
  const [check, setCheck] = useState(false)
  const [content, setContent] = useState('')
  const {
    item: todos,
    saveItem: saveTodos,
    error,
    sincronizedItem: sincronizeTodos
  } = useLocalStorage('TODOS_V1', []);

  const totalTodos = todos.length;

  const addTodo = (content, input) => {
    
    const newTodos = [...todos];
    content !== '' &&
    newTodos.push({
      content,
    });
    saveTodos(newTodos)
    setCheck(true)
    input.current.value = '';
    setContent('')

    setTimeout(() => {
      setCheck(false)
    },1000)
  }

  const deleteTodo = (content) => {
    const todoIndex = todos.findIndex(todos => todos.content === content);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos)
  }

  return({
    error,
    totalTodos,
    todos,
    check,
    addTodo,
    deleteTodo,
    sincronizeTodos,
    content,
    setContent
  })
}

export default useTodos