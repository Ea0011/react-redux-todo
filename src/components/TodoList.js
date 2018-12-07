import React from "react"
import PropTypes from "prop-types"

const TodoList = ({todos, remove, tick}) => {
    return (
        <section id="todos">
            <ul>
                {todos.map(todo => (
                    <div>
                        <li key={todo.id}>
                            {todo.message}
                        </li>
                        <button onClick={(e) => {remove(todo.id)}}>Delete!</button>
                        <input type="checkbox"
                        defaultChecked={todos.status === 1}
                        onChange={(e) => {tick(todo.id, todo.status === 0 ? 1 : 0)}}
                        value={todo.status === 1 ? "Complete" : "Incomplete"} />
                    </div>
                ))}
            </ul>
        </section>
    );
}

TodoList.PropTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            status: PropTypes.number.isRequired
        }).isRequired
    ).isRequired
}

export default TodoList