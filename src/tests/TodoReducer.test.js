import todos from '../reducers/todos'
import { addTodo, removeTodo, tickTodo, updateTodo } from '../actions/actions'

describe("testing todos reducer", () => {
    describe("should have empty state at the begining", () => {
        test("has no todos", () => {
            expect(todos([], {})).toEqual([]);
        })
    })

    describe("should add new message", () => {
        test("adds message", () => {
            expect(todos([], addTodo("Hey"))).toEqual([{id: 0, message: "Hey", status: 0}]);
        })
    })

    describe("should flick todo state", () => {
        test("flicks todo state", () => {
            expect(todos([{id: 0, message: "Hey", status: 0}], tickTodo(0, 1))).toEqual([{id: 0, message: "Hey", status: 1}])
        })
    })

    describe("should delete todo", () => {
        test("deletes todo", () => {
            expect(todos([{id: 0, message: "Hey", status: 0}], removeTodo(0))).toEqual([])
        })
    })

    describe("should update todo", () => {
        test("updates todo", () => {
            expect(todos([{id: 0, message: "Hey", status: 0}], updateTodo(0, "Hoy"))).toEqual([{id: 0, message: "Hoy", status: 0}])
        })
    })
})
