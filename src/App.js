import React from 'react';
import { createGlobalStyle} from 'styled-components';
import TodoTemplete from './Components/TodoTemplete';
import TodoHead from './Components/TodoHead';
import TodoList from './Components/TodoList';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplete>
        <TodoHead />
        <TodoList />
      </TodoTemplete>
    </>
  );
}

export default App;
