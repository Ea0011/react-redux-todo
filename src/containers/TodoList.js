import TodoListComponent from '../components/TodoList'
import { connect } from 'react-redux'
import { tickTodo, removeTodo } from '../actions/actions'

const mapStateToProps = state => ({
    todos: [...state]
})

const mapDispatchToProps = dispatch => ({
    remove: (id) => { dispatch(removeTodo(id)) },
    tick: (id, status) => { dispatch(tickTodo(id, status)) }
})

export const TodoList = connect(mapStateToProps, mapDispatchToProps)(TodoListComponent);