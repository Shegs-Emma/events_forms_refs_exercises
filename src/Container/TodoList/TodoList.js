import React, { Component } from 'react';
import Todo from '../../Component/Todo/Todo';
import classes from './TodoList.module.css';

export default class TodoList extends Component {
    constructor (props) {
        super (props);
        this.state = {
            todos: [
                { id: 1, title: "iMock", desc: "Work on the iMock solution.", completed: false},
                { id: 2, title: "React", desc: "Redifine my photography app", completed: false},
                { id: 3, title: "Africa Hacks", desc: "Hack africa everywhere", completed: false},
                { id: 4, title: "Backend", desc: "The backend of the projects.", completed: false}
            ]
        }
    }

    handleDelete (idx) {
        const { todos } = this.state;
        const myTodos = todos
            .slice(0, idx)
            .concat(todos.slice(idx + 1));

        this.setState({ todos: myTodos});
    }

    handleCompleted (idx) {
        const { todos } = this.state;
        const myTodos = todos;
        const selectedTodo = myTodos.filter(myTodo => myTodo.id === idx);
        let checker = selectedTodo[0].completed;
        selectedTodo[0].completed = checker ? false : true;

        this.setState({todos: myTodos});
    }

    render () {
        let myTodos = this.state.todos.map((todo, index) => (
            <Todo
                key={todo.id}
                title={todo.title}
                descr={todo.desc}
                complete={todo.completed}
                deleteTodo={this.handleDelete.bind(this, index)}
                completedTodo={this.handleCompleted.bind(this, todo.id)}
            />
        ));
        return (
            <div>
                <h1>Part 2</h1>
                <h3>Todo Task</h3>
                <table className={classes.TodoList}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Complete</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myTodos}
                    </tbody>
                </table>
            </div>
        )
    }
}