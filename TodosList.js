import React from "react"

import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          //<li>{todo.title}</li>
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={this.props.handleChangeProps}
            deleteTodoProps={this.props.deleteTodoProps}
          />
        ))}
      </ul>
    )
  }
}


export default TodoList