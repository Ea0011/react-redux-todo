import React from 'react'
import PropTypes from 'prop-types'

const AddTodo = ({ addTodo }) => {
    let input;

    return (
        <div>
            <input type="text" ref={(node) => {input = node}}></input>
            <button onClick={(e) => {addTodo(input.value)}}>Save!</button>
        </div>
    );
}

AddTodo.PropTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo