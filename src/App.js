import React from 'react';
import CustomLink from './Container/CustomLink/CustomLink';
import TodoList from './Container/TodoList/TodoList';
import DivCreator from './Container/DivCreator/DivCreator';
import NewTodoFormList from './Container/NewTodoFormList/NewTodoFormList';
import classes from './App.module.css';

const App = () => {
  return (
    <div className={classes.App}>
      <h1>EVENT EXERCISES</h1>
      <CustomLink />
      <TodoList />

      <h1>FORM EXERCISES</h1>
      <DivCreator />
      <NewTodoFormList />
    </div>
  );
}

export default App;
