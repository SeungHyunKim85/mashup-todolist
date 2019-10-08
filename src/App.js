import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplete from './Components/TodoTemplete';
import TodoHead from './Components/TodoHead';
import TodoList from './Components/TodoList';
import TodoCreate from './Components/TodoCreate';
import { TodoProvider } from './TodoContext';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplete>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplete>
    </TodoProvider>
  );
}

export default App;
