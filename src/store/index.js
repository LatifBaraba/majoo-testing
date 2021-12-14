import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

const initialState = {
    loading: false,
    error: false,
    todoActive: [],
    todoUnActive: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        getTodo: state => {
            state.loading = true
        },
        getTodoSuccess: (state, { payload }) => {
            let active = []
            let inactive = []
            payload.data.forEach(value => {
                value.status === 0 ? active.push(value) : inactive.push(value)
            })
            state.todoActive = active
            state.todoUnActive = inactive
            state.loading = false
            state.error = false
        },
        getTodoFailure: state => {
            state.loading = false
            state.error = true
        },
        addTodo: (state, { payload }) => {
            const data = {
                createdAt: new Date(),
                description: 'lorem ipsum',
                id: uuidv4(),
                status: 0,
                title: payload,
            }
            state.todoActive.push(data)
        },
        deleteTodo: (state, { payload }) => {
            state.todoUnActive.push(payload)
            state.todoActive.pop()
        },
    },
})

export const { getTodo, getTodoFailure, getTodoSuccess, addTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer

export function fetchTodo() {
    return async dispatch => {
        dispatch(getTodo())

        try {
            const response = await axios('https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list')
            const data = await response
            dispatch(getTodoSuccess(data))
        } catch (error) {
            dispatch(getTodoFailure())
        }
    }
}
