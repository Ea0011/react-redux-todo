import * as actions from '../actions/actions'
import * as types from "../constants/ActionTypes"

describe("testing actions", () => {
    describe("addTodo should generate correct payload", () => {
        test("generates correct payload", () => {
            const { addTodo } = actions;
            const { ADD_TODO } = types;
            expect(addTodo("Hey")).toEqual({
                type: ADD_TODO,
                message: "Hey",
                id: 0,
                status: 0
            })
        })
    })

    describe("removeTodo should generate correct payload", () => {
        test("generates correct payload", () => {
            const { removeTodo } = actions;
            const { REMOVE_TODO } = types;
            expect(removeTodo(0)).toEqual({
                type: REMOVE_TODO,
                id: 0
            })
        })
    })

    describe("updateTodo should generate correct payload", () => {
        test("generates correct payload", () => {
            const { updateTodo} = actions;
            const { EDIT_TODO } = types;
            expect(updateTodo(0, "Hey")).toEqual({
                type: EDIT_TODO,
                message: "Hey",
                id: 0,
            })
        })
    })

    describe("tickTodo should generate correct payload", () => {
        test("generates correct payload", () => {
            const { tickTodo } = actions;
            const { TICK_TODO } = types;
            expect(tickTodo(0, 1)).toEqual({
                type: TICK_TODO,
                id: 0,
                status: 1
            })
        })
    })
})