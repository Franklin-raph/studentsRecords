import { createSlice } from "@reduxjs/toolkit";
import { StudentsData } from '../StudentData'


export const studentSlice = createSlice({
    name:'students',
    initialState: {value: StudentsData},
    reducers:{
        addStudent: (state, action) => {
            state.value.push(action.payload)
        },
        deleteStudent: (state, action) => {
            console.log(state.StudentsData)
            state.value = state.value.filter((student) => student.id !== action.payload.id)
        },
        updateStudent: (state, action) => {
            state.value.map((student) => {
                if(student.id === action.payload.id){
                    student.name = action.payload.name;
                }
            })
        }
    }
})

export const { addStudent, deleteStudent, updateStudent } = studentSlice.actions;
export default studentSlice.reducer;