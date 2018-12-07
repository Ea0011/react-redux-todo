import { connect  } from 'react-redux'
import AddTodoComponent from '../components/AddTodo'
import { addTodo } from '../actions/actions'

const mapDispatchToProps = dispatch => ({
    addTodo: (message) => {
        dispatch(addTodo(message))
    }
})

export const AddTodo = connect(() => {}, mapDispatchToProps)(AddTodoComponent)
