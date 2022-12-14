import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const LOCAL_BASE_URL = "http://localhost:5000/api/v1/student"
const REMOTE_BASE_URL =  "https://studentsrecordserver-production.up.railway.app/api/v1/student"

export const getAllStudentAsync = createAsyncThunk (
    'records/getAllStudentAsync',
    async () => {
        const response = await fetch(REMOTE_BASE_URL)
        if(response.ok){
            const data = await response.json()
            return { data }
        }
    }
)

export const getAStudentAsync = createAsyncThunk(
    'records/getAStudentAsync',
    async(payload) => {
        const response = await fetch(`${REMOTE_BASE_URL}/${payload}`)
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
        const response = await fetch(`${REMOTE_BASE_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(payload)
        })
        const data = await response.json()
        console.log(data)
        return { data }
    }
)

export const deleteStudentAsync = createAsyncThunk (
    'records/deleteStudentAsync',
    async(payload) => {
        console.log(payload)
        const response = await fetch(`${REMOTE_BASE_URL}/${payload}`, {
            method: 'DELETE'
        })
        const data = await response.json()
        console.log(data)
        return { data }
    }
)

export const updateStudentAsync = createAsyncThunk (
    'records/updateStudentAsync',
    async (payload) => {
        const body = {
            fName: payload.fName,
            lName: payload.lName,
            phoneNum: payload.phoneNum,
            address: payload.address,
            email: payload.email,
        }
        const response = await fetch(`${REMOTE_BASE_URL}/${payload.studentId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(body)
        })
        const data = await response.json()
        console.log(payload)
        return { data }
    }
)

export const studentSlice = createSlice({
    name:'students',
    initialState: {
        allStudents: [],
        singleStudent: {},
        isLoading: false
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
        [getAllStudentAsync.pending]: (state, action) => {
            state.isLoading = true
        },
        [getAllStudentAsync.fulfilled]: (state, action) => {
            state.allStudents = action.payload.data
            state.isLoading = false
        },

        [getAStudentAsync.pending]: (state, action) => {
            // state.isLoading = true
        },
        [getAStudentAsync.fulfilled]: (state, action) => {
            // state.isLoading = false
            state.singleStudent = action.payload.data
        },

        [addStudentAsync.pending]: (state, action) => {
            state.isLoading = true
        },
        [addStudentAsync.fulfilled]: (state, action) => {
            state.allStudents.push(action.payload.data)
            state.isLoading = false
        },
        
        [deleteStudentAsync.pending]: (state, action) => {
            state.isLoading = true
        },
        [deleteStudentAsync.fulfilled]: (state, action) => {
            state.allStudents = state.allStudents.filter((student) => student._id !== action.payload.data.id)
            state.isLoading = false
        },

        [updateStudentAsync.pending]: (state, action) => {
            state.isLoading = true
        },
        [updateStudentAsync.fulfilled]: (state, action) => {
            const allStudents = state.allStudents.filter((student) => {
                student._id !== action.payload.data.id
                console.log(action.payload.data)
            })
            console.log(...allStudents)
            state.allStudents = [...allStudents, action.payload.data]
            state.isLoading = false
            // // console.log(action.payload.data._id)
            // const updatedIndex = state.allStudents.findIndex((student) => {
            //     if(student._id === action.payload.data._id){
            //         console.log("Equal")
            //     }else{
            //         console.log("Not equal")
            //     }
            //     // console.log(student._id)
            // })
        }
    }
})

export const { selectStudent } = studentSlice.actions;
export default studentSlice.reducer;