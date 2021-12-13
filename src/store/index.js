import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

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
            });
            state.todoActive = active
            state.todoUnActive = inactive
            state.loading = false
            state.error = false
        },
        getTodoFailure: state => {
            state.loading = false
            state.error = true
        },
    },
})

export const { getTodo, getTodoFailure, getTodoSuccess } = todoSlice.actions

export default todoSlice.reducer

export function fetchTodo() {
    return async dispatch => {
        dispatch(getTodo())

        try {
            const response = await axios('https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list')
            const data = await response
            console.log(data, response)
            dispatch(getTodoSuccess(data))
        } catch (error) {
            dispatch(getTodoFailure())
        }
    }
}
