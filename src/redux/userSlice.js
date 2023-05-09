import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    email: '',
    status: '',
    priority: '',
    status: 'no iniciado'
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducer: {
        addUser: (state, action) => {
            const { name, email, priority, status } = action.payload
            state.name = name
            state.email = email
            state.priority = priority
            state.status = status
        },
        changeStatus: (state, action) => {
            state.status = action.payload
        }
    }
})



export const { addUser, changeStatus } = userSlice.actions
export default userSlice.reducer