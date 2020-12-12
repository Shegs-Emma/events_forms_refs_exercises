import React, { Component } from 'react';
import NewTodoForm from '../../Component/NewTodoForm/NewTodoForm';
import classes from './NewTodoFormList.module.css';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { sn: 1, title: "iMock", description: "Work on the iMock solution.", completed: false }
            ],
            sn: "",
            title: "",
            description: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleDelete(idx) {
        const { todos } = this.state;
        const myTodos = todos
            .slice(0, idx)
            .concat(todos.slice(idx + 1));

        this.setState({ todos: myTodos });
    }

    handleCompleted(idx) {
        const { todos } = this.state;
        const myTodos = todos;
        const selectedTodo = myTodos.filter(myTodo => myTodo.sn === idx);
        let checker = selectedTodo[0].completed;
        selectedTodo[0].completed = checker ? false : true;

        this.setState({ todos: myTodos });
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const myTodos = [...this.state.todos];
        myTodos.push({sn: this.state.sn, title: this.state.title, description: this.state.description, completed: false});

        this.setState({todos: myTodos})
    }

    render() {
        let myTodos = this.state.todos.map((todo, index) => (
            <NewTodoForm
                key={todo.sn}
                title={todo.title}
                descr={todo.description}
                complete={todo.completed}
                deleteTodo={this.handleDelete.bind(this, index)}
                completedTodo={this.handleCompleted.bind(this, todo.sn)}
            />
        ));
        return (
            <div>
                <h2>Part 2</h2>
                <h3>New Todo Form Task</h3>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <h3>Create a Todo</h3>
                        <div>
                            <label>
                                Serial No
                            <input
                                    placeholder="Serial"
                                    name="sn"
                                    onChange={this.handleChange}
                                    value={this.state.sn}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Title
                            <input
                                    placeholder="Todo Title"
                                    name="title"
                                    onChange={this.handleChange}
                                    value={this.state.title}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Description
                            <input
                                    placeholder="Todo Description"
                                    name="description"
                                    onChange={this.handleChange}
                                    value={this.state.description}
                                />
                            </label>
                        </div>

                        <input type="submit" value="Submit Todo" />
                    </form>
                </div>
                <div>
                    <table className={classes.NewTodoFormList}>
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
            </div>
        )
    }
}