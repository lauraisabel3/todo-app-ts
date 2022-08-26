import { useRef, useState } from "react";
import { Container, SearcherContainer, Searcher, Marker, ContainerTodos } from './styled'
import  Todos  from "../Todos/index";
import useTodos from "../../hooks/useTodos";




export interface Todo {
  content: string;
  id: number | string;
  deleteTodo: (content:string) => unknown;
}


// const todos : Todo[] = [];

const Main = ({theme}: {theme:boolean | undefined}) => {
//   const localStorageTodos = localStorage.getItem('TODOS_V1');
//   let parsedTodos: [];
//   if (!localStorageTodos) {
//     localStorage.setItem('TODOS_V1', JSON.stringify([]));
//     parsedTodos = [];
//   } else {
//     parsedTodos = JSON.parse(localStorageTodos)
//   }

//  const [check, setCheck] = useState(false);
//  const [content, setContent] = useState('');
//   const [todos, setTodos] = useState<Todo[]>(parsedTodos);
//   const [close, setClose] = useState(false)


//   const saveTodos = (newTodo:Todo[]) => {
//     const stringifiedTodos = JSON.stringify(newTodo);
//     localStorage.setItem('TODOS_V1', stringifiedTodos)
//     setTodos(newTodo)
//   };

//  const addTodo = () => {
//     const newTodos : Todo[] = [...todos];
//     let index: number = newTodos.length + 1;
//     if(content !== '') {
//       newTodos.push({
//         content: content,
//         id: index,
//         deleteTodos: deleteTodos,
//         close: close,
//         // todos: todos,
//         // saveTodos: saveTodos,
//       });
//       saveTodos(newTodos)
//       setCheck(!check)
//     }
//  }

 
//  const deleteTodos = (content:string) => {
//   const todoIndex = todos.findIndex(todo => todo.content === content)
//   const newTodos = [...todos];
//   newTodos.splice(todoIndex, 1);
//   saveTodos(newTodos)
//   setClose(!close)

// }

const searchInput = useRef<HTMLInputElement>(null);

const {
  addTodo,
  check,
  todos,
  deleteTodo,
  content,
  setContent
} = useTodos()

// console.log(todos)

// const handleChange = (e:HTMLInputElement) => {
//   setContent(e.target.value)
//   searchInput.current.value = 0;
// }
// const handleAddTodo = (content:string) => {
//   addTodo(content)
// }

  return (
    <Container theme={theme}>
      <SearcherContainer>
        <Marker onClick={() => addTodo(content, searchInput)} check={check} theme={theme}/>
        <Searcher theme={theme}  placeholder="Create a new todo" onChange={(e) => setContent(e.target.value)} ref={searchInput}/>
      </SearcherContainer>
      <ContainerTodos theme={theme}>
        {todos.map((el:Todo) => (
          <>
            <Todos key={el.id} content={el.content} theme={theme} deleteTodo={deleteTodo}></Todos>
          </>
        ))}
      </ContainerTodos>
    </Container>
  )
}

export default Main