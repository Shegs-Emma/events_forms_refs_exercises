import React from 'react';
import classes from './Todo.module.css';

const Todo = (props) => {
    let style = props.complete ? classes.TodoCompleted : classes.TodoData;
    let text = props.complete ? 'Completed' : 'In-Progress';
    return (
        <tr className={classes.Todo}>
            <td className={style}>{props.title}</td>
            <td className={style}>{props.descr}</td>
            <td className={classes.TodoData}><button className={classes.TodoButtonCom} onClick={props.completedTodo}>{text}</button></td>
            <td className={classes.TodoData}><button className={classes.TodoButtonDel} onClick={props.deleteTodo}>Delete</button></td>
        </tr>
    )
}

export default Todo;