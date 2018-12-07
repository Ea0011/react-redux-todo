import * as types from '../constants/ActionTypes'

const todos = (state = [], action) => {
    switch(action.type) {
        case types.ADD_TODO:
            const { message, id, status } = action;
            return [...state, 
                {id, message, status}
            ];
        case types.REMOVE_TODO:
            return state.filter(todo => todo.id !== action.id);
        case types.TICK_TODO:
            return state.map(todo => {
                if (todo.id === action.id) {
                    return {...todo, status: action.status}
                } else {
                    return todo;
                }
            });
        case types.EDIT_TODO:
            return state.map(todo => {
                if (todo.id === action.id) {
                    return {...todo, message: action.message}
                } else {
                    return todo;
                }
            });        
        default:
            return state;
    }
}

export default todos