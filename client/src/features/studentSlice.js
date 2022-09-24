import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { StudentsData } from '../StudentData'

export const getStudentAsync = createAsyncThunk (
    'records/getStudentAsync',
    async () => {
        const response = await fetch('http://localhost:5000/api/v1/student')
        if(response.ok){
            const data = await response.json()
            console.log(data)
            return { data }
        }
    }
)

export const addStudentAsync = createAsyncThunk (
    'records/addStudentAsync',
    async (payload) => {
        const response = await fetch('http://localhost:5000/api/v1/student/register', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(payload)
        })
        const data = await response.json()
        console.log(response)
        return { data }
    }
)

export const deleteStudentAsync = createAsyncThunk (
    'records/deleteStudentAsync',
    async(payload) => {
        console.log(payload)
        const response = await fetch(`http://localhost:5000/api/v1/student/${payload}`, {
            method: 'DELETE'
        })
        const data = await response.json()
        console.log(data)
        return { data }
    }
)

export const studentSlice = createSlice({
    name:'students',
    initialState: [],
    reducers:{
        // addStudent: (state, action) => {
        //     state.value.push(action.payload)
        // },
        // deleteStudent: (state, action) => {
        //     console.log(state.StudentsData)
        //     state.value = state.value.filter((student) => student.id !== action.payload.id)
        // },
        // updateStudent: (state, action) => {
        //     state.value.map((student) => {
        //         if(student.id === action.payload.id){
        //             student.name = action.payload.name;
        //         }
        //     })
        // }
    },
    extraReducers: {
        [getStudentAsync.fulfilled]: (state, action) => {
            console.log(action.payload.data)
            return action.payload.data
        },
        [addStudentAsync.fulfilled]: (state, action) => {
            state.push(action.payload.data)
        },
        [deleteStudentAsync.fulfilled]: (state, action) => {
            return state.filter((student) => student._id !== action.payload.data.id)
        }
    }
})

// export const { addStudent, deleteStudent, updateStudent } = studentSlice.actions;
export default studentSlice.reducer;