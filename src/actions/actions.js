import * as types from '../constants/ActionTypes'

let todoId = 0;

export const addTodo = (message) => ({
    type: types.ADD_TODO,
    id: todoId++,
    message,
    status: 0
});

export const removeTodo = (id) => ({
    type: types.REMOVE_TODO,
    id
});

export const updateTodo = (id, message) => ({
    type: types.EDIT_TODO,
    id,
    message
});

export const tickTodo = (id, status) => ({
    type: types.TICK_TODO,
    id,
    status
})