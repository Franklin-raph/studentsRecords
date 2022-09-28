import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { StudentsData } from '../StudentData'

export const getAllStudentAsync = createAsyncThunk (
    'records/getAllStudentAsync',
    async () => {
        const response = await fetch('http://localhost:5000/api/v1/student')
        if(response.ok){
            const data = await response.json()
            // console.log(data)
            return { data }
        }
    }
)

export const getAStudentAsync = createAsyncThunk(
    'records/getAStudentAsync',
    async(payload) => {
        const response = await fetch(`http://localhost:5000/api/v1/student/${payload}`)
        if(response.ok){
            const data = await response.json()
            // console.log(data)
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
    initialState: {
        allStudents: [],
        singleStudent: {}
    },
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
        selectStudent: (state, action) => {
            const existingStudent = state.find((student) => (student.id === action.payload.id))
            if(existingStudent){
                console.log(existingStudent.email)
            }
        }
    },
    extraReducers: {
        [getAllStudentAsync.fulfilled]: (state, action) => {
            // console.log(action.payload.data)
            state.allStudents = action.payload.data
        },
        [getAStudentAsync.fulfilled]: (state, action) => {
            state.singleStudent = action.payload.data
            console.log(state.singleStudent)
        },
        [addStudentAsync.fulfilled]: (state, action) => {
            state.allStudents.push(action.payload.data)
        },
        [deleteStudentAsync.fulfilled]: (state, action) => {
            state.allStudents = state.allStudents.filter((student) => student._id !== action.payload.data.id)
        }
    }
})

export const { selectStudent } = studentSlice.actions;
export default studentSlice.reducer;